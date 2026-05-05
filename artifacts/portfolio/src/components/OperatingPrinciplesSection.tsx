export default function OperatingPrinciplesSection() {
    return (
      <section className="ops-wrap reveal" id="principles">
    <div className="container">
      <h2 className="section-title section-title--light">
        <span className="section-title__ico" aria-hidden="true">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="#0b2a4b" strokeWidth="1.6"/><circle cx="12" cy="12" r="5" fill="none" stroke="#0b2a4b" strokeWidth="1.6"/><circle cx="12" cy="12" r="1.6" fill="#f59331"/></svg>
        </span>
        Operating Principles
        <span className="section-title__line"></span>
      </h2>

      <div className="ops">
        <article className="op op--cyan">
          <div className="op__dot">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 3h4v4a1 1 0 0 0 2 0 2 2 0 1 1 0 4h1v4a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1 2 2 0 1 0-4 0 1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a1 1 0 0 0 1-1 2 2 0 1 1 0-4 1 1 0 0 0-1-1V6a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1 2 2 0 1 1 4 0 1 1 0 0 0 1 1z" fill="#fff"/></svg>
          </div>
          <h3>Builder in Ambiguity</h3>
          <p>Create structure through specs, prototypes, demos, and working systems.</p>
          <span className="op__rule op__rule--cyan"></span>
        </article>

        <article className="op op--violet">
          <div className="op__dot">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2" fill="none" stroke="#fff" strokeWidth="1.6"/><path d="M10 10h4v4h-4z" fill="#fff"/><path d="M9 3v3M12 3v3M15 3v3M9 18v3M12 18v3M15 18v3M3 9h3M3 12h3M3 15h3M18 9h3M18 12h3M18 15h3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </div>
          <h3>AI-Native Operator</h3>
          <p>Use agentic workflows, spec-driven development, and local AI systems to compress the path from idea to execution.</p>
          <span className="op__rule op__rule--violet"></span>
        </article>

        <article className="op op--navy">
          <div className="op__dot">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6l-4 4v-4H6a2 2 0 0 1-2-2z" fill="none" stroke="#fff" strokeWidth="1.6"/><circle cx="9" cy="9.5" r="1" fill="#fff"/><circle cx="12" cy="9.5" r="1" fill="#fff"/><circle cx="15" cy="9.5" r="1" fill="#fff"/></svg>
          </div>
          <h3>Domain + Product Translator</h3>
          <p>Translate product capabilities through domain knowledge, real workflows, and business context.</p>
          <span className="op__rule op__rule--navy"></span>
        </article>

        <article className="op op--orange">
          <div className="op__dot">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 20L9 10l4 5 2-3 6 8z" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round"/><line x1="16" y1="4" x2="16" y2="10" stroke="#fff" strokeWidth="1.6"/><polygon points="16,4 22,6 16,8.5" fill="#fff"/></svg>
          </div>
          <h3>Founder Mindset</h3>
          <p>Operate with ownership, customer realism, delivery discipline, and practical constraints.</p>
          <span className="op__rule op__rule--orange"></span>
        </article>
      </div>
    </div>
  </section>
    );
  }
  