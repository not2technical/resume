export default function HarnessSection() {
    return (
      <section className="harness-wrap reveal" id="harness">
    <div className="container harness-grid">
      <div className="harness__icon" aria-hidden="true">
        <svg viewBox="0 0 130 130">
          <circle cx="65" cy="65" r="62" fill="none" stroke="#7ad3ff" strokeWidth="1.2" opacity=".5"/>
          
          <path d="M45 30 L85 30 L95 65 L85 100 L45 100 L35 65 Z" fill="none" stroke="#f59331" strokeWidth="2"/>
          <line x1="35" y1="65" x2="95" y2="65" stroke="#f59331" strokeWidth="2"/>
          <line x1="65" y1="30" x2="65" y2="100" stroke="#f59331" strokeWidth="2"/>
          <circle cx="65" cy="65" r="6" fill="none" stroke="#7ad3ff" strokeWidth="2"/>
          <circle cx="45" cy="30" r="3" fill="#7ad3ff"/>
          <circle cx="85" cy="30" r="3" fill="#7ad3ff"/>
          <circle cx="45" cy="100" r="3" fill="#7ad3ff"/>
          <circle cx="85" cy="100" r="3" fill="#7ad3ff"/>
        </svg>
      </div>
      <div className="harness__body">
        <h2 className="harness__title">
          What's in Your Harness?
          <span className="harness__line"></span>
        </h2>
        <p className="harness__sub">AI-assisted building, terminal-native workflows, and agentic development environments.</p>

        <ul className="harness__tools">
          <li>
            <a className="tool-pill" href="https://openai.com/index/introducing-codex/" target="_blank" rel="noopener">
              <span className="tool-pill__mark">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#7ad3ff" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-.2 4.2l.2-.1 2.1 1.2v4.5l-3.9-2.2V5.4zm-5 2.9l2.1-1.3v4.5L5 14.6v-4.3zm.2 8.7V11.3l3.9 2.2v4.5zm5 2.9l-2.1-1.2v-4.5l3.9 2.2v4.3zm5-2.9l-2.1 1.2v-4.5l3.9-2.2v4.4zm-.2-8.7l-2.1 1.3V5.9L18.8 4v4.5z"/></svg>
              </span>
              Codex
            </a>
          </li>
          <li>
            <a className="tool-pill" href="https://www.anthropic.com/claude-code" target="_blank" rel="noopener">
              <span className="tool-pill__mark">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path stroke="#f59331" strokeWidth="2" strokeLinecap="round" d="M12 2v8M12 14v8M2 12h8M14 12h8M5 5l5.5 5.5M13.5 13.5 19 19M19 5l-5.5 5.5M10.5 13.5 5 19"/></svg>
              </span>
              Claude Code
            </a>
          </li>
          <li>
            <a className="tool-pill" href="https://cursor.com" target="_blank" rel="noopener">
              <span className="tool-pill__mark">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 4 7v10l8 4 8-4V7z" fill="none" stroke="#cfd8e3" strokeWidth="1.6"/><path d="M4 7l8 4 8-4M12 11v10" stroke="#cfd8e3" strokeWidth="1.6"/></svg>
              </span>
              Cursor
            </a>
          </li>
          <li>
            <a className="tool-pill" href="https://ghostty.org" target="_blank" rel="noopener">
              <span className="tool-pill__mark">
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="#b08cff" strokeWidth="1.6"/><path d="M7 10l3 2-3 2M12 14h5" stroke="#b08cff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
              </span>
              Ghostty
            </a>
          </li>
          <li>
            <a className="tool-pill" href="https://neovim.io" target="_blank" rel="noopener">
              <span className="tool-pill__mark">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5h3l8 10V5h3v14h-3L8 9v10H5z" fill="#57a64a"/></svg>
              </span>
              Neovim
            </a>
          </li>
          <li>
            <a className="tool-pill" href="https://github.com/tmux/tmux" target="_blank" rel="noopener">
              <span className="tool-pill__mark">
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="#7ad3ff" strokeWidth="1.6"/><path d="M7 10l3 2-3 2M12 14h5" stroke="#7ad3ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
              </span>
              tmux
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
    );
  }
  