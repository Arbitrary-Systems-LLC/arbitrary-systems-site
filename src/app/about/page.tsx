import { company, principles } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description:
    "Learn about Arbitrary Systems, a software company building focused products for collectors, studio operators, collaborative tasting hosts, private social coordination, and game communities.",
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
                The portfolio includes The Registry for wine, beer, spirits, and cigar collections; PranaLogic for studios and trainers; Group Pours for shared wine, beer, and spirits tastings; Group Draws for cigar tastings; I&apos;m open 2 for private social plans; and LW:S - Power Up for Last War: Survival alliance comparisons. Group Pours is the first of these apps on the Apple App Store.
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
