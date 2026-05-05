export default function ExperienceModal() {
    return (
      <div className="modal" id="experience-modal" role="dialog" aria-modal="true" aria-labelledby="experience-modal-title" hidden>
    <div className="modal__backdrop" data-close-modal></div>
    <div className="modal__panel" role="document">
      <button type="button" className="modal__close" data-close-modal aria-label="Close">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
      </button>

      <h2 className="modal__title" id="experience-modal-title">Professional Experience</h2>

      <section className="role">
        <header className="role__head">
          <h3>Salesforce</h3>
          <span className="role__when">Apr 2019 – Present · Remote / Detroit, Michigan</span>
        </header>
        <p className="role__arc"><strong>Product, Industries, AI, and Solution Architecture Leadership</strong></p>

        <h4 className="role__subhead">Selected Roles</h4>
        <ul className="role__roles">
          <li><strong>Director, Industry Solutions Architect</strong> · Apr 2024 – Present</li>
          <li><strong>Gen AI Leader, Automotive &amp; Manufacturing Cloud</strong> · Apr 2023 – Present</li>
          <li><strong>Director of Industry Solutions and Strategy</strong> · Aug 2023 – Apr 2024</li>
          <li><strong>Senior Product Manager, Manufacturing Cloud</strong> · Feb 2022 – Dec 2023</li>
          <li><strong>Product Manager, Manufacturing Cloud</strong> · May 2021 – Feb 2022</li>
          <li><strong>Lead Solution Engineer</strong> · Apr 2019 – May 2021</li>
        </ul>

        <h4 className="role__subhead">Impact Highlights</h4>
        <ul>
          <li>Led product, GenAI, solution architecture, demo, workshop, and ecosystem enablement efforts across Manufacturing Cloud and Automotive Cloud.</li>
          <li>Built product demonstrations, technical narratives, and advanced workshops used to educate product teams, field teams, partners, and customer-facing technical audiences.</li>
          <li>Trained ecosystem technical teams on advanced Salesforce Industries product capabilities, helping teams understand how to position, configure, and extend industry solutions.</li>
          <li>Translated complex manufacturing, automotive, supply chain, service, sales, and customer engagement workflows into Salesforce-native product narratives and solution patterns.</li>
          <li>Created frameworks for turning customer problems into AI use cases, agent behaviors, data needs, actions, guardrails, and measurable outcomes.</li>
          <li>Applied GenAI, Agentforce, and AI-assisted research practices to accelerate discovery, workflow modeling, use case design, narrative development, and prototype planning.</li>
          <li>Partnered across product, engineering, field, customer, and ecosystem teams to move product capabilities from concept to adoption.</li>
          <li>Built reusable enablement assets and workshop models that scaled product understanding beyond the core team.</li>
          <li>Supported strategic sales and product motions by translating customer requirements into practical Salesforce solution designs and customer-facing stories.</li>
        </ul>
      </section>

      <section className="role">
        <header className="role__head">
          <h3>Krys IT Solutions LLC</h3>
          <span className="role__when">8 years · Michigan</span>
        </header>
        <p className="role__arc"><strong>Founder / Owner</strong></p>
        <ul>
          <li>Founded and operated a small business technology services company providing managed IT, web, and custom application solutions for small and mid-sized businesses.</li>
          <li>Delivered managed IT service packages including 24/7 monitoring, preventative maintenance, helpdesk support, web maintenance, and scalable technology planning.</li>
          <li>Built custom applications and web solutions to help clients modernize operations, improve visibility, and reduce manual effort.</li>
          <li>Managed client relationships, service delivery, technical support, solution design, and business operations across the full customer lifecycle.</li>
          <li>Helped customers align technology investments to budget, growth goals, operational needs, and long-term scalability.</li>
          <li>Developed a hands-on operating mindset grounded in customer outcomes, responsiveness, pragmatic execution, and real-world business constraints.</li>
        </ul>
      </section>

      <section className="role">
        <header className="role__head">
          <h3>Toshiba Business</h3>
          <span className="role__when">Oct 2006 – Apr 2019 · Michigan</span>
        </header>
        <p className="role__arc"><strong>Software Solutions Senior Manager / Software Engineer / Various Roles</strong></p>
        <ul>
          <li>Led software solutions and technology services for business customers, supporting application delivery, technical consulting, and operational improvement across the Americas.</li>
          <li>Designed and supported customer technology solutions across software, document workflows, business process automation, and managed services.</li>
          <li>Partnered with clients to identify technology gaps, design practical solutions, and support adoption across business users and technical teams.</li>
          <li>Managed solution delivery, client support, technical troubleshooting, and long-term customer relationships.</li>
        </ul>
      </section>
    </div>
  </div>
    );
  }
  