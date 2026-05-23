import { CheckCircle2 } from 'lucide-react';

export default function PackageCard({ plan, goToPage }) {
  return (
    <article className={`pricing-card ${plan.highlight ? 'is-featured' : ''}`}>
      <div className="pricing-topline">
        <span>{plan.highlight ? 'Recommended' : 'Package'}</span>
        <span>{plan.monthly}</span>
      </div>
      <h3>{plan.name}</h3>
      <p className="price">{plan.price}</p>
      <p className="best-for">{plan.bestFor}</p>
      <ul>
        {plan.features.map((feature) => (
          <li key={feature}><CheckCircle2 size={18} /> {feature}</li>
        ))}
      </ul>
      <button className={plan.highlight ? 'btn btn-primary' : 'btn btn-outline'} onClick={() => goToPage('contact')}>
        Ask about this package
      </button>
    </article>
  );
}
