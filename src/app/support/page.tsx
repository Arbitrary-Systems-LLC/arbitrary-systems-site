import Link from "next/link";
import { company } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Support",
  description: "Support information for Arbitrary Systems products, including The Arbitrary Register, PranaLogic, and I'm open 2.",
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
            This page serves as the company-level contact point for product support, service questions, and other operational issues related to The Arbitrary Register, PranaLogic, and I&apos;m open 2.
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
                and include the product name, the workflow you were in, a short description of the issue, and any useful environment details.
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
              <li>Indicate whether the message concerns The Arbitrary Register, PranaLogic, I&apos;m open 2, or a general company matter.</li>
              <li>Describe the exact issue, question, or request as directly as possible.</li>
              <li>Include screenshots, reproduction steps, and any relevant account, collection, circle, or studio context.</li>
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
