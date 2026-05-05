export default function DetailSection() {
    return (
      <section className="threecol-wrap reveal" id="detail">
    <div className="container threecol">

      <article className="col">
        <h3 className="col__title">
          <span className="col__ico" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z" fill="none" stroke="#00b4d8" strokeWidth="1.6"/><path d="M9 4v14M15 6v14" stroke="#00b4d8" strokeWidth="1.4"/></svg>
          </span>
          Experience Snapshot
        </h3>
        <ul className="timeline">
          <li className="timeline__item">
            <span className="timeline__dot" style={{background:"#0aa27a"}}></span>
            <div>
              <h4>Salesforce (2019–Present)</h4>
              <p>Lead Solution Engineer → Product Manager → Senior Product Manager → Director / GenAI / Industry Solutions Architect</p>
            </div>
          </li>
          <li className="timeline__item">
            <span className="timeline__dot" style={{background:"#1b79d6"}}></span>
            <div>
              <h4>Krys IT Solutions LLC (8 years)</h4>
              <p>Founder / Owner</p>
            </div>
          </li>
          <li className="timeline__item">
            <span className="timeline__dot" style={{background:"#f59331"}}></span>
            <div>
              <h4>Toshiba Business (2006–2019)</h4>
              <p>Software Solutions Senior Manager / Software Engineer</p>
            </div>
          </li>
        </ul>
        <button type="button" className="expander" data-open-modal="experience-modal">
          <span>Expand full experience</span>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </article>

      <article className="col">
        <h3 className="col__title">
          <span className="col__ico" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M4 20l1-5 11-11 4 4-11 11z" fill="none" stroke="#00b4d8" strokeWidth="1.6" strokeLinejoin="round"/><path d="M14 6l4 4" stroke="#00b4d8" strokeWidth="1.6"/></svg>
          </span>
          Publishing &amp;<br/>Thought Leadership
        </h3>
        <ul className="bullets">
          <li>
            <a href="https://medium.com/@akrys/everyone-is-talking-about-spec-driven-development-almost-no-one-is-ready-for-it-1b984c7a18bf" target="_blank" rel="noopener">
              "Everyone Is Talking About Spec-Driven Development. Almost No One Is Ready For It"
            </a>
          </li>
          <li>
            <a href="https://www.salesforce.com/manufacturing/data/" target="_blank" rel="noopener">
              Published Salesforce manufacturing data thought leadership
            </a>
          </li>
          <li>
            <a href="https://aws.amazon.com/blogs/industries/introducing-connected-vehicle-and-connected-assets-integration-with-salesforce-and-aws/" target="_blank" rel="noopener">
              Contributed to Salesforce + AWS connected vehicle / connected asset thought leadership
            </a>
          </li>
        </ul>
      </article>

      <article className="col">
        <h3 className="col__title">
          <span className="col__ico" aria-hidden="true">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="9" r="6" fill="none" stroke="#00b4d8" strokeWidth="1.6"/><circle cx="12" cy="9" r="3" fill="#00b4d8" opacity=".25"/><path d="M9 14l-2 7 5-3 5 3-2-7" fill="none" stroke="#00b4d8" strokeWidth="1.6" strokeLinejoin="round"/></svg>
          </span>
          Certifications (15+) &amp; Education
        </h3>
        <ul className="bullets">
          <li>Agentforce Agentblazer Legend &amp; AI Specialist</li>
          <li>Salesforce &amp; Industry Allstar Awards</li>
          <li>Various development &amp; product / networking certs</li>
          <li>Associate's Degree, Computer Science — ITT Technical Institute, Troy</li>
          <li>Web Development — Washtenaw Community College</li>
          <li>Galloup School — Premiere Lutherie School</li>
        </ul>
      </article>

    </div>
  </section>
    );
  }
  