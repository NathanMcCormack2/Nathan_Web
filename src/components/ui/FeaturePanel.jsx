export default function FeaturePanel({ feature, index }) {
  const Icon = feature.icon;

  return (
    <article className="feature-panel">
      <span className="feature-index">{String(index + 1).padStart(2, '0')}</span>
      <div className="feature-icon"><Icon size={22} /></div>
      <h3>{feature.title}</h3>
      <p>{feature.text}</p>
    </article>
  );
}
