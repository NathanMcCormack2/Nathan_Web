import { ArrowUpRight } from 'lucide-react';

export default function CaseStudyCard({ example, index }) {
  return (
    <article className={`case-study-card card-${index + 1}`}>
      <div className="case-image-slot">
        <div className="browser-dots"><span /><span /><span /></div>
        <div className="image-placeholder-text">{example.imageNote}</div>
      </div>
      <div className="case-content">
        <p className="eyebrow">{example.type}</p>
        <h3>{example.title}</h3>
        <p>{example.description}</p>
        <div className="tag-cloud">
          {example.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <button className="text-link">View concept details <ArrowUpRight size={17} /></button>
      </div>
    </article>
  );
}
