export default function FooterSection() {
    return (
      <footer className="quote-wrap reveal">
    <div className="container quote-grid">
      <div className="quote__body">
        <span className="quote__mark" aria-hidden="true">&ldquo;</span>
        <p className="quote__text">
          I build at the intersection of product, AI, and execution &mdash;
          turning ideas into working systems, creating leverage through
          technology, and leading with <em>clarity, speed, and ownership</em>.
        </p>
      </div>
      <div className="quote__art" aria-hidden="true">
        <svg viewBox="0 0 320 160">
          <path d="M10,140 L60,100 L100,120 L150,60 L200,90 L250,30 L310,110 L310,150 L10,150 Z"
                fill="none" stroke="#7ad3ff" strokeWidth="1.2" opacity=".6"/>
          <path d="M10,145 Q80,125 150,100 T310,40"
                fill="none" stroke="#7ad3ff" strokeWidth="1.4" strokeDasharray="3 5" opacity=".9"/>
          <line x1="250" y1="30" x2="250" y2="10" stroke="#fe9339" strokeWidth="1.4"/>
          <polygon points="250,10 265,16 250,22" fill="#fe9339"/>
          <circle cx="80" cy="132" r="2.5" fill="#7ad3ff"/>
          <circle cx="150" cy="100" r="2.5" fill="#7ad3ff"/>
          <circle cx="250" cy="30"  r="3" fill="#fe9339"/>
        </svg>
      </div>
    </div>
  </footer>
    );
  }
  