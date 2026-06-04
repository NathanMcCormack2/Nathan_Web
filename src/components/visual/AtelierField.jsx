import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * AtelierField — a full-bleed WebGL background.
 * A single fullscreen quad runs a fractal-noise fragment shader that
 * produces a slow, molten, depth-layered flow in the brand palette.
 * It reacts to pointer movement and gently to scroll.
 *
 * Designed to sit behind the hero with text layered on top.
 */
export default function AtelierField() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const uniforms = {
      u_time: { value: 0 },
      u_res: { value: new THREE.Vector2(mount.clientWidth, mount.clientHeight) },
      u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
      u_mouseTarget: { value: new THREE.Vector2(0.5, 0.5) },
      u_scroll: { value: 0 },
      // palette — warm daylight: oatmeal base, sage + soft clay flow
      u_ink: { value: new THREE.Color('#f4efe4') },
      u_deep: { value: new THREE.Color('#e7ddc8') },
      u_amber: { value: new THREE.Color('#9fb389') },
      u_glow: { value: new THREE.Color('#d8a98a') },
    };

    const vertex = /* glsl */ `
      varying vec2 v_uv;
      void main() {
        v_uv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragment = /* glsl */ `
      precision highp float;
      varying vec2 v_uv;
      uniform float u_time;
      uniform vec2 u_res;
      uniform vec2 u_mouse;
      uniform float u_scroll;
      uniform vec3 u_ink;
      uniform vec3 u_deep;
      uniform vec3 u_amber;
      uniform vec3 u_glow;

      // hash + value noise
      vec2 hash22(vec2 p){
        p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
        return fract(sin(p) * 43758.5453);
      }
      float noise(vec2 p){
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f*f*(3.0-2.0*f);
        float a = dot(hash22(i + vec2(0.0,0.0)) - 0.5, f - vec2(0.0,0.0));
        float b = dot(hash22(i + vec2(1.0,0.0)) - 0.5, f - vec2(1.0,0.0));
        float c = dot(hash22(i + vec2(0.0,1.0)) - 0.5, f - vec2(0.0,1.0));
        float d = dot(hash22(i + vec2(1.0,1.0)) - 0.5, f - vec2(1.0,1.0));
        return mix(mix(a,b,u.x), mix(c,d,u.x), u.y) + 0.5;
      }
      float fbm(vec2 p){
        float v = 0.0;
        float amp = 0.55;
        mat2 rot = mat2(0.8, -0.6, 0.6, 0.8);
        for(int i=0;i<6;i++){
          v += amp * noise(p);
          p = rot * p * 1.9 + 0.12;
          amp *= 0.52;
        }
        return v;
      }

      void main(){
        vec2 uv = v_uv;
        float aspect = u_res.x / u_res.y;
        vec2 p = uv;
        p.x *= aspect;

        float t = u_time * 0.045;

        // domain-warped fbm — molten flow
        vec2 q = vec2(fbm(p*1.6 + vec2(0.0, t)), fbm(p*1.6 + vec2(5.2, t*1.3)));
        vec2 r = vec2(fbm(p*1.6 + 3.0*q + vec2(1.7, 9.2) - t),
                      fbm(p*1.6 + 3.0*q + vec2(8.3, 2.8) + t));
        float f = fbm(p*1.6 + 3.4*r);

        // pointer-driven warm pool
        vec2 m = u_mouse;
        m.x *= aspect;
        float d = distance(p, m);
        float pool = smoothstep(0.85, 0.0, d) * 0.55;

        f = clamp(f + pool*0.4, 0.0, 1.0);

        // colour ramp: ink -> deep -> amber -> glow
        vec3 col = mix(u_ink, u_deep, smoothstep(0.15, 0.5, f));
        col = mix(col, u_amber, smoothstep(0.55, 0.82, f) * 0.9);
        col = mix(col, u_glow, smoothstep(0.82, 1.0, f + pool) * 0.85);

        // filament highlights (soft on light bg)
        float fil = smoothstep(0.78, 0.8, f) - smoothstep(0.8, 0.83, f);
        col = mix(col, u_glow, fil * 0.35);

        // gentle vignette toward the paper tone + slight scroll fade
        float vig = smoothstep(1.35, 0.35, distance(uv, vec2(0.5)));
        col = mix(u_ink, col, mix(0.82, 1.0, vig));
        col = mix(col, u_ink, clamp(u_scroll, 0.0, 1.0) * 0.5);

        // subtle grain
        float g = fract(sin(dot(uv*u_res, vec2(12.9898,78.233))) * 43758.5453);
        col += (g - 0.5) * 0.018;

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const material = new THREE.ShaderMaterial({ uniforms, vertexShader: vertex, fragmentShader: fragment });
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(quad);

    const clock = new THREE.Clock();
    let raf;
    const render = () => {
      uniforms.u_time.value = clock.getElapsedTime();
      // ease mouse
      const cur = uniforms.u_mouse.value;
      const tgt = uniforms.u_mouseTarget.value;
      cur.x += (tgt.x - cur.x) * 0.05;
      cur.y += (tgt.y - cur.y) * 0.05;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    const onMove = (e) => {
      const rect = mount.getBoundingClientRect();
      uniforms.u_mouseTarget.value.set(
        (e.clientX - rect.left) / rect.width,
        1.0 - (e.clientY - rect.top) / rect.height
      );
    };
    window.addEventListener('mousemove', onMove);

    const onScroll = () => {
      const s = Math.min(window.scrollY / (window.innerHeight || 1), 1);
      uniforms.u_scroll.value = s;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h);
      uniforms.u_res.value.set(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      quad.geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="nx-field" ref={mountRef} aria-hidden="true" />;
}
