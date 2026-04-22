import Link from "next/link";
import { company } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Support",
  description: "Company-level support information for Arbitrary Systems products and inquiries.",
  path: "/support",
});

export default function SupportPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Support</div>
          <h1>Support and service inquiries.</h1>
          <p>
            This page serves as a company-level contact point for product support, service questions, and other operational issues related to Arbitrary Systems work.
          </p>
        </div>
      </section>
      <section className="page-content">
        <div className="container page-stack">
          <div className="split-grid">
            <div className="panel">
              <h2 className="section-heading">Where to write</h2>
              <p>
                Please contact
                {" "}
                <a href={`mailto:${company.email}`} className="inline-link">
                  {company.email}
                </a>
                {" "}
                and include the product name, a short description of the issue, and any useful environment details.
              </p>
            </div>
            <div className="panel">
              <h2 className="section-heading">Current status</h2>
              <p>
                No public service disruption notices are active at this time. If a product experiences a meaningful outage or degradation, status information can be posted here.
              </p>
            </div>
          </div>
          <div className="panel">
            <h2 className="section-heading">Before you send a note</h2>
            <ul className="detail-list">
              <li>Indicate whether the message concerns The Arbitrary Register, PranaLogic, or a general company matter.</li>
              <li>Summarize the issue, question, or request as directly as possible.</li>
              <li>Include screenshots or reproduction details when relevant.</li>
            </ul>
            <div className="button-row">
              <Link href="/contact" className="button primary">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
