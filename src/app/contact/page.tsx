import { company } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description: "Contact Arbitrary Systems for company inquiries, product questions, or early conversations.",
  path: "/contact",
});

const inquiryTopics = [
  "Which product or company topic your note relates to",
  "Whether you are a collector, studio operator, collaborator, or something else",
  "The workflow, problem, or opportunity you want to discuss",
  "Any current tools or constraints that matter",
  "Your timeline or stage, if relevant",
];

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Contact</div>
          <h1>Start a conversation.</h1>
          <p>
            For product questions, early customer conversations, collaboration ideas, or general company inquiries, please get in touch by email.
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
                If your note relates to The Arbitrary Register, PranaLogic, or I&apos;m Open To, mention the product in the subject line so the conversation starts in the right place.
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
