export default function SectionHeading({ eyebrow, title, text, className = '' }) {
  return (
    <div className={`section-heading ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
