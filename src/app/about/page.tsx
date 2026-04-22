import { company, principles } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description:
    "Learn about Arbitrary Systems, a software company building composed products for luxury collections and wellness businesses.",
  path: "/about",
});

const differentiators = [
  "Product direction shaped by specific operating realities rather than generic software patterns.",
  "A preference for measured, polished interfaces over crowded administrative surfaces.",
  "Systems designed to earn trust through consistency, legibility, and careful defaults.",
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">About</div>
          <h1>Arbitrary Systems builds software with a quieter, more deliberate point of view.</h1>
          <p>
            {company.name} is a software company focused on products for businesses where experience, trust, and operational detail need to coexist without friction.
          </p>
        </div>
      </section>
      <section className="page-content">
        <div className="container page-stack">
          <div className="split-grid">
            <article className="panel">
              <h2 className="section-heading">The company</h2>
              <p>
                The work is guided by a preference for strong structure, restrained design, and practical utility. Rather than treating software as a vehicle for constant novelty, Arbitrary Systems approaches product development as an exercise in composition, reliability, and long-term usefulness.
              </p>
              <p>
                Current product work includes The Arbitrary Register for collection-centered operations and PranaLogic for yoga and wellness businesses.
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
