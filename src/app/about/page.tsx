import { company, principles } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description:
    "Learn about Arbitrary Systems, a software company building focused products for collectors, studio operators, and private social coordination.",
  path: "/about",
});

const differentiators = [
  "Products shaped by concrete roles, records, and workflows instead of abstract SaaS conventions.",
  "A preference for calm, legible interfaces that still preserve operational depth.",
  "Careful treatment of private, high-trust data in collector, operational, and social contexts.",
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">About</div>
          <h1>Arbitrary Systems builds focused software with a calm, deliberate point of view.</h1>
          <p>
            {company.name} is a software company building products for domains where operational detail matters and the software should feel clearer than the work it is helping organize.
          </p>
        </div>
      </section>
      <section className="page-content">
        <div className="container page-stack">
          <div className="split-grid">
            <article className="panel">
              <h2 className="section-heading">The company</h2>
              <p>
                The work is guided by a preference for strong operational models, restrained design, and practical utility. Rather than chasing novelty for its own sake, Arbitrary Systems approaches product development as a long-term exercise in clarity, reliability, and fit.
              </p>
              <p>
                Current product work includes The Arbitrary Register, a collector-first system for wine, spirits, beer, and cigars, PranaLogic, a studio operating system for yoga and boutique fitness businesses, and I&apos;m Open To, a private social planning app for small real-world plans.
              </p>
            </article>
            <article className="panel">
              <h2 className="section-heading">What feels different</h2>
              <ul className="detail-list">
                {differentiators.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
          <div className="principles-grid">
            {principles.map((principle) => (
              <div key={principle.title} className="principle">
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
