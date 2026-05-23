export default function PageIntro({ eyebrow, title, text, align = 'left' }) {
  return (
    <section className={`page-intro page-intro-${align}`}>
      <div className="container page-intro-inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {text && <p className="intro-copy">{text}</p>}
      </div>
    </section>
  );
}
