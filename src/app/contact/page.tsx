import { company } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description: "Contact Arbitrary Systems for company inquiries, product questions, or early conversations.",
  path: "/contact",
});

const inquiryTopics = [
  "General company inquiry",
  "The Arbitrary Register",
  "PranaLogic",
  "Partnership or collaboration",
  "Support-related question",
];

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Contact</div>
          <h1>Start a conversation.</h1>
          <p>
            For company inquiries, product questions, collaboration ideas, or early customer conversations, please get in touch by email.
          </p>
        </div>
      </section>
      <section className="page-content">
        <div className="container page-stack">
          <div className="split-grid">
            <div className="panel">
              <h2 className="section-heading">Email</h2>
              <p>
                The simplest way to reach {company.name} is through
                {" "}
                <a href={`mailto:${company.email}`} className="inline-link">
                  {company.email}
                </a>
                .
              </p>
              <p>
                If your note relates to a specific product, mention it in the subject line so the conversation starts in the right place.
              </p>
            </div>
            <div className="panel">
              <h2 className="section-heading">Useful context to include</h2>
              <ul className="detail-list">
                {inquiryTopics.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
