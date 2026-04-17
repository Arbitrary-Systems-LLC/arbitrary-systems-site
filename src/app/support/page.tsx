import Link from "next/link";

export default function SupportPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Support</div>
          <h1>Support</h1>
          <p>
            This page serves as a company-level point of contact for support and service-related inquiries.
          </p>
        </div>
      </section>
      <section className="page-content">
        <div className="container page-stack">
          <div className="panel">
            <h2 className="section-heading">General support</h2>
            <p>For general support inquiries, please use the contact path below.</p>
          </div>
          <div className="panel">
            <h2 className="section-heading">Product-related issues</h2>
            <p>If your message relates to a specific product, please indicate whether it concerns The Arbitrary Register or PranaLogic.</p>
          </div>
          <div className="panel">
            <h2 className="section-heading">Service disruptions</h2>
            <p>If a product is significantly degraded or unavailable, updated information may be provided here as needed.</p>
            <div className="button-row">
              <Link href="/contact" className="button primary">Contact Support</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
