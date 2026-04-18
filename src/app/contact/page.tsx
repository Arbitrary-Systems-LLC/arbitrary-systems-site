export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Contact</div>
          <h1>Contact</h1>
          <p>
            For company inquiries, product questions, or support-related communication, please get in touch.
          </p>
        </div>
      </section>
      <section className="page-content">
        <div className="container page-stack">
          <div className="panel">
            <h2 className="section-heading">Get in touch</h2>
            <p>
              For company inquiries, product questions, or support-related communication, please reach out using the channel below while a fuller form workflow is prepared.
            </p>
            <p>
              <a href="mailto:hello@arbitrarysystems.io" className="inline-link">hello@arbitrarysystems.io</a>
            </p>
            <ul className="detail-list">
              <li>General company inquiry</li>
              <li>The Arbitrary Register</li>
              <li>PranaLogic</li>
              <li>Support</li>
              <li>Other</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
