import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Arbitrary Systems</div>
            <h1>Refined systems, thoughtfully built.</h1>
            <p>
              Arbitrary Systems is a software company developing products for detail-driven domains, with a focus on luxury collections and wellness businesses.
            </p>
            <div className="button-row">
              <Link href="/contact" className="button primary">
                Contact
              </Link>
              <Link href="/products" className="button">
                View Products
              </Link>
            </div>
          </div>
          <div className="hero-aside panel">
            <div className="eyebrow">Current focus</div>
            <p>
              The company is currently developing two prototype products, The Arbitrary Register and PranaLogic, each guided by the same preference for clarity, restraint, and dependable execution.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-heading">A deliberate approach to software.</h2>
          <p className="section-intro">
            Arbitrary Systems builds software with an emphasis on clarity, restraint, and practical usefulness. The company is focused on creating systems that feel composed, trustworthy, and easier to live with over time.
          </p>
          <p className="section-intro">
            Rather than pursuing unnecessary complexity, the aim is to design tools that bring structure and calm to domains where detail matters.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-heading">Current product work</h2>
          <p className="section-intro narrow-copy">
            Two prototype products currently define the company&apos;s public direction, one focused on collections, the other on wellness operations.
          </p>
          <div className="card-grid">
            <article className="card">
              <h3>The Arbitrary Register</h3>
              <p>
                A prototype product focused on software for luxury collections and collection-centered operations.
              </p>
              <Link href="/products/the-arbitrary-register" className="button">
                Learn More
              </Link>
            </article>
            <article className="card">
              <h3>PranaLogic</h3>
              <p>
                A prototype product focused on software for yoga and wellness businesses.
              </p>
              <Link href="/products/pranalogic" className="button">
                Learn More
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-heading">How the company works</h2>
          <div className="principles-grid">
            <div className="principle">
              <h3>Clarity</h3>
              <p>Systems should make important things easier to see, understand, and manage.</p>
            </div>
            <div className="principle">
              <h3>Restraint</h3>
              <p>A useful product does not need to be loud, crowded, or overbuilt.</p>
            </div>
            <div className="principle">
              <h3>Reliability</h3>
              <p>Trust is earned through consistency, especially in categories where operational detail matters.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container panel">
          <h2 className="section-heading">Company information, product direction, and support</h2>
          <p className="section-intro">
            Arbitrary Systems maintains this site as a company presence and a point of contact for those seeking more information about its work, products, or support channels.
          </p>
          <div className="button-row">
            <Link href="/contact" className="button primary">
              Contact
            </Link>
            <Link href="/support" className="button">
              Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
