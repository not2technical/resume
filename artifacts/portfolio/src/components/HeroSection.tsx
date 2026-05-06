export default function HeroSection() {
    return (
      <header className="hero reveal" id="hero">
    <div className="container hero__grid">
      <div className="hero__text">
        <h1 className="hero__name">August Krys</h1>
        <p className="hero__role">
          Salesforce Industries Product Leader |<br />
          AI-Native Builder | Founder / Operator
        </p>

        <ul className="hero__meta" aria-label="Contact links">
          <li>
            <span className="hero__ico hero__ico--pin" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" fill="currentColor"/></svg>
            </span>
            Detroit, Michigan
          </li>
          <li className="hero__sep" aria-hidden="true">•</li>
          <li>
            <span className="hero__ico hero__ico--in" aria-hidden="true">
              <svg viewBox="0 0 24 24"><rect width="24" height="24" rx="3" fill="#0a66c2"/><path fill="#fff" d="M7 9h2.5v8.5H7zM8.25 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM11 9h2.4v1.2h.03c.33-.6 1.15-1.25 2.37-1.25 2.54 0 3 1.67 3 3.85v4.7H16.3v-4.16c0-.99-.02-2.27-1.38-2.27-1.38 0-1.6 1.08-1.6 2.2v4.23H11z"/></svg>
            </span>
            <a href="https://linkedin.com/in/augustkrys" target="_blank" rel="noopener">linkedin.com/in/augustkrys</a>
          </li>
          <li className="hero__sep" aria-hidden="true">•</li>
          <li>
            <span className="hero__ico" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.35-1.34-3.35-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.9-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>
            </span>
            <a href="https://github.com/not2technical" target="_blank" rel="noopener">github.com/not2technical</a>
          </li>
          <li className="hero__sep" aria-hidden="true">•</li>
          <li>
            <span className="hero__ico hero__ico--medium" aria-hidden="true">
              <svg viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#000"/><text x="12" y="17" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="700" fontSize="14" fontStyle="italic" fill="#fff">M</text></svg>
            </span>
            <a href="https://medium.com/@akrys" target="_blank" rel="noopener">medium.com/@akrys</a>
          </li>
        </ul>

        <a
          href="/resume.pdf"
          download="August_Krys_Resume.pdf"
          className="hero__resume-btn"
          aria-label="Download resume as PDF"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 16l-5-5 1.41-1.41L11 13.17V4h2v9.17l2.59-2.58L17 12l-5 5z" fill="currentColor"/>
            <path d="M5 18h14v2H5z" fill="currentColor"/>
          </svg>
          Download Résumé
        </a>
      </div>

      <div className="hero__art" aria-hidden="true">
        <svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="mtnGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#7ad3ff" stopOpacity=".18"/>
              <stop offset="1" stopColor="#7ad3ff" stopOpacity="0"/>
            </linearGradient>
          </defs>

          
          <path d="M20,300 L120,220 L200,260 L300,140 L380,210 L450,120 L500,60 L540,180 L540,310 L20,310 Z"
                fill="url(#mtnGrad)" stroke="#7ad3ff" strokeWidth="1" strokeOpacity=".55"/>
          <path d="M20,300 L120,220 L200,260 L300,140 L380,210 L450,120 L500,60"
                fill="none" stroke="#7ad3ff" strokeWidth="1.2" strokeOpacity=".7"/>

          
          <path d="M30,305 Q140,285 210,250 T330,170 T500,70"
                fill="none" stroke="#7ad3ff" strokeWidth="1.5" strokeDasharray="3 5" opacity=".9"/>
          <circle cx="60"  cy="298" r="3" fill="#7ad3ff"/>
          <circle cx="210" cy="250" r="3" fill="#7ad3ff"/>
          <circle cx="330" cy="170" r="3" fill="#7ad3ff"/>
          <circle cx="450" cy="95"  r="3" fill="#fe9339"/>

          
          <line x1="500" y1="60" x2="500" y2="25" stroke="#7ad3ff" strokeWidth="1.6"/>
          <polygon points="500,25 518,33 500,42" fill="#7ad3ff"/>

          
          <g opacity=".85" transform="translate(170,60)">
            <rect width="86" height="74" rx="6" fill="none" stroke="#7ad3ff" strokeWidth="1.2"/>
            <circle cx="14" cy="18" r="5" fill="none" stroke="#7ad3ff" strokeWidth="1.2"/>
            <path d="M11 18 l2.5 2.5 L18 15" stroke="#fe9339" strokeWidth="1.4" fill="none"/>
            <line x1="26" y1="18" x2="76" y2="18" stroke="#7ad3ff" strokeWidth="1" opacity=".6"/>
            <circle cx="14" cy="36" r="5" fill="none" stroke="#7ad3ff" strokeWidth="1.2"/>
            <path d="M11 36 l2.5 2.5 L18 33" stroke="#fe9339" strokeWidth="1.4" fill="none"/>
            <line x1="26" y1="36" x2="70" y2="36" stroke="#7ad3ff" strokeWidth="1" opacity=".6"/>
            <circle cx="14" cy="54" r="5" fill="none" stroke="#7ad3ff" strokeWidth="1.2"/>
            <line x1="26" y1="54" x2="66" y2="54" stroke="#7ad3ff" strokeWidth="1" opacity=".6"/>
          </g>

          
          <g opacity=".85" transform="translate(270,110)">
            <rect width="76" height="56" rx="6" fill="none" stroke="#7ad3ff" strokeWidth="1.2"/>
            <line x1="10" y1="16" x2="66" y2="16" stroke="#7ad3ff" strokeWidth="1" opacity=".7"/>
            <line x1="10" y1="28" x2="56" y2="28" stroke="#7ad3ff" strokeWidth="1" opacity=".7"/>
            <line x1="10" y1="40" x2="60" y2="40" stroke="#7ad3ff" strokeWidth="1" opacity=".7"/>
          </g>

          
          <g opacity=".85" transform="translate(370,60)">
            <circle cx="20" cy="20" r="6" fill="none" stroke="#7ad3ff" strokeWidth="1.2"/>
            <circle cx="60" cy="12" r="6" fill="none" stroke="#7ad3ff" strokeWidth="1.2"/>
            <circle cx="56" cy="52" r="6" fill="none" stroke="#7ad3ff" strokeWidth="1.2"/>
            <circle cx="14" cy="56" r="6" fill="none" stroke="#7ad3ff" strokeWidth="1.2"/>
            <line x1="24" y1="22" x2="56" y2="14" stroke="#7ad3ff" strokeWidth="1"/>
            <line x1="24" y1="24" x2="52" y2="50" stroke="#7ad3ff" strokeWidth="1"/>
            <line x1="18" y1="50" x2="50" y2="52" stroke="#7ad3ff" strokeWidth="1"/>
            <line x1="16" y1="48" x2="18" y2="28" stroke="#7ad3ff" strokeWidth="1"/>
          </g>

          
          <g opacity=".55" fill="#7ad3ff">
            <polygon points="510,250 520,230 530,250"/>
            <polygon points="508,265 520,240 532,265"/>
            <polygon points="506,282 520,252 534,282"/>
            <rect x="518" y="282" width="4" height="10"/>
          </g>
          <g opacity=".4" fill="#7ad3ff">
            <polygon points="485,265 493,250 501,265"/>
            <polygon points="483,277 493,258 503,277"/>
            <rect x="491" y="277" width="4" height="8"/>
          </g>
        </svg>
      </div>
    </div>
  </header>
    );
  }
  