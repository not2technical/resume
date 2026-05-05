export default function HowIThinkSection() {
    return (
      <section className="think-wrap reveal" id="think">
    <div className="container">
      <div className="think">
        <div className="think__compass" aria-hidden="true">
          <svg viewBox="0 0 220 220">
            <defs>
              <radialGradient id="cmpFace" cx="50%" cy="50%" r="50%">
                <stop offset="0" stopColor="#0a1e3a"/>
                <stop offset="1" stopColor="#041128"/>
              </radialGradient>
              <linearGradient id="cmpRim" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#f5c871"/>
                <stop offset=".5" stopColor="#c98a1f"/>
                <stop offset="1" stopColor="#6e4a12"/>
              </linearGradient>
              <linearGradient id="cmpNeedleN" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#ffb347"/>
                <stop offset="1" stopColor="#e07b00"/>
              </linearGradient>
            </defs>
            
            <circle cx="110" cy="110" r="104" fill="url(#cmpRim)"/>
            <circle cx="110" cy="110" r="96" fill="url(#cmpFace)" stroke="#7ad3ff" strokeOpacity=".4" strokeWidth="1"/>
            
            <g stroke="#7ad3ff" strokeWidth="1" opacity=".55">
              <line x1="110" y1="18" x2="110" y2="28"/>
              <line x1="110" y1="192" x2="110" y2="202"/>
              <line x1="18" y1="110" x2="28" y2="110"/>
              <line x1="192" y1="110" x2="202" y2="110"/>
              <line x1="45" y1="45" x2="52" y2="52"/>
              <line x1="175" y1="45" x2="168" y2="52"/>
              <line x1="45" y1="175" x2="52" y2="168"/>
              <line x1="175" y1="175" x2="168" y2="168"/>
            </g>
            
            <circle cx="110" cy="110" r="72" fill="none" stroke="#7ad3ff" strokeWidth=".8" strokeDasharray="2 4" opacity=".45"/>
            
            <text x="110" y="38" textAnchor="middle" fill="#e7f4ff" fontFamily="Inter" fontSize="12" fontWeight="700">N</text>
            <text x="110" y="188" textAnchor="middle" fill="#7ad3ff" fontFamily="Inter" fontSize="10">S</text>
            <text x="28"  y="114" fill="#7ad3ff" fontFamily="Inter" fontSize="10">W</text>
            <text x="184" y="114" fill="#7ad3ff" fontFamily="Inter" fontSize="10">E</text>
            
            <polygon points="110,32 120,110 110,118 100,110" fill="url(#cmpNeedleN)"/>
            <polygon points="110,188 100,110 110,102 120,110" fill="#d6cdb2"/>
            
            <circle cx="110" cy="110" r="8" fill="#0b0d14" stroke="#f5c871" strokeWidth="1.5"/>
            <circle cx="110" cy="110" r="2.5" fill="#f5c871"/>
          </svg>
        </div>

        <div className="think__body">
          <h2 className="think__title">
            <span className="title-badge" aria-hidden="true">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="#f59331" strokeWidth="1.6"/><path d="M12 6l1.9 3.9 4.3.6-3.1 3 .7 4.3L12 15.8 8.2 17.8l.7-4.3L5.8 10.5l4.3-.6z" fill="#f59331"/></svg>
            </span>
            How I Think
          </h2>
          <ul className="think__list">
            <li>
              <span className="think__ico" aria-hidden="true">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6"/><circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="1.6"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/><line x1="12" y1="1" x2="12" y2="4" stroke="currentColor" strokeWidth="1.4"/><line x1="12" y1="20" x2="12" y2="23" stroke="currentColor" strokeWidth="1.4"/><line x1="1" y1="12" x2="4" y2="12" stroke="currentColor" strokeWidth="1.4"/><line x1="20" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="1.4"/></svg>
              </span>
              <span>I care about <em>practical systems</em> over slideware.</span>
            </li>
            <li>
              <span className="think__ico" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M9 4.5A3 3 0 0 0 6 7.5 3 3 0 0 0 4 10v2a3 3 0 0 0 2 2.8V17a3 3 0 0 0 3 3h.5M15 4.5A3 3 0 0 1 18 7.5 3 3 0 0 1 20 10v2a3 3 0 0 1-2 2.8V17a3 3 0 0 1-3 3h-.5M9 4.5v15M15 4.5v15M4 8h2M18 8h2M4 12h2M18 12h2M4 16h2M18 16h2" fill="none" stroke="currentColor" strokeWidth="1.4"/><circle cx="12" cy="10" r="1.4" fill="currentColor"/><circle cx="12" cy="14" r="1.4" fill="currentColor"/></svg>
              </span>
              <span>I use AI to <em>compress the distance</em> between idea, specification, and execution.</span>
            </li>
            <li>
              <span className="think__ico" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M12 3l9 5-9 5-9-5 9-5z" fill="none" stroke="currentColor" strokeWidth="1.4"/><path d="M3 13l9 5 9-5" fill="none" stroke="currentColor" strokeWidth="1.4"/><path d="M3 17l9 5 9-5" fill="none" stroke="currentColor" strokeWidth="1.4"/></svg>
              </span>
              <span>I think in <em>reusable patterns</em>, not one-off artifacts.</span>
            </li>
            <li>
              <span className="think__ico" aria-hidden="true">
                <svg viewBox="0 0 24 24"><circle cx="8" cy="9" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.4"/><circle cx="16" cy="9" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.4"/><path d="M3 18c0-2.7 2.2-4.5 5-4.5s5 1.8 5 4.5M11 18c0-2.7 2.2-4.5 5-4.5s5 1.8 5 4.5" fill="none" stroke="currentColor" strokeWidth="1.4"/></svg>
              </span>
              <span>I translate product capabilities through real <em>domain knowledge and operating context</em>.</span>
            </li>
            <li>
              <span className="think__ico" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M13 2 4 14h6l-1 8 10-12h-6l1-8z" fill="currentColor"/></svg>
              </span>
              <span>I value <em>speed, clarity</em>, and <em>technical leverage</em>.</span>
            </li>
            <li>
              <span className="think__ico" aria-hidden="true">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" fill="currentColor"/><circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.4"/><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.2" opacity=".6"/><line x1="12" y1="1" x2="12" y2="4" stroke="currentColor" strokeWidth="1.4"/><line x1="12" y1="20" x2="12" y2="23" stroke="currentColor" strokeWidth="1.4"/></svg>
              </span>
              <span>I apply <em>first-principles thinking</em> to re-align legacy ideas with today's technology models.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
    );
  }
  