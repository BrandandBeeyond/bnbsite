import React, { useState } from "react";
import "./faq.css";

const Faqs = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What Makes Brand and Beeyond Different?",
      answer: (
        <div>
          <strong>360° Smart Marketing Approach</strong> – We don’t just market; we strategize, create, and execute with a data-driven and emotionally compelling approach.
          <ul className="py-3">
            <li><strong>Smart Strategies, Limitless Growth</strong> – We craft scalable brand roadmaps that elevate your business.</li>
            <li><strong>Data-Driven Decisions, Creative Execution</strong> – A perfect blend of analytics and storytelling to help your brand thrive.</li>
            <li><strong>Multi-Platform Expansion</strong> – From social media dominance to SEO-rich websites, we amplify your reach.</li>
            <li><strong>Sustainable & Scalable Success</strong> – We create future-ready brands that stay relevant.</li>
            <li><strong>From Local to Global</strong> – Turning visions into victories, whether you're starting fresh or expanding.</li>
          </ul>
          <strong>Scale Beyond Limits. Scale with Brand and Beeyond.</strong>
        </div>
      ),
      open: true,
    },
    {
      question: "What Industries Do you Specialize In?",
      answer: (
        <div>
          At Brand and Beeyond, we specialize in diverse industries, including:
          <ul className="py-3">
            <li><strong>Real Estate & Infrastructure</strong> – Builders, developers, and property ventures.</li>
            <li><strong>Hospitality & Tourism</strong> – Resorts, hotels, and travel brands.</li>
            <li><strong>Healthcare & Wellness</strong> – Hospitals, clinics, and wellness startups.</li>
            <li><strong>Retail & E-commerce</strong> – Online stores and consumer-driven brands.</li>
            <li><strong>Technology & Startups</strong> – Tech firms and innovators.</li>
            <li><strong>Manufacturing & Industrial</strong> – B2B, steel, cement, and construction.</li>
            <li><strong>Education & Coaching</strong> – Ed-tech platforms and personal coaches.</li>
            <li><strong>Luxury & Lifestyle</strong> – Fashion, jewelry, and high-end brands.</li>
            <li><strong>Automobile & Logistics</strong> – Dealerships and mobility solutions.</li>
            <li><strong>Corporate & MSMEs</strong> – Scaling mid-sized businesses.</li>
          </ul>
          <strong>No matter the industry, we create brands that stand out, connect, and scale.</strong><br />
          Let’s take your brand Beeyond!
        </div>
      ),
      open: false,
    },
    {
      question: "What is the Branding Process like?",
      answer: (
        <div>
          Our branding process is seamless and strategic, ensuring maximum impact:
          <ul className="py-3">
            <li><strong>1. Discovery & Strategy</strong> – Understanding your vision, audience, and competition.</li>
            <li><strong>2. Brand Identity Development</strong> – Crafting logos, color palettes, typography, and brand voice.</li>
            <li><strong>3. Messaging & Positioning</strong> – Developing a compelling brand story and key messaging.</li>
            <li><strong>4. Digital & Visual Branding</strong> – Designing websites, social media, packaging, and marketing collaterals.</li>
            <li><strong>5. Marketing & Activation</strong> – Launching campaigns, content marketing, and advertising.</li>
            <li><strong>6. Growth & Optimization</strong> – Ensuring continuous brand growth and relevance.</li>
          </ul>
          <strong>Branding is a journey, and we make it Beeyond expectations!</strong>
        </div>
      ),
      open: false,
    },
    {
      question: "How Can I Get Started with Brand and Beeyond?",
      answer: (
        <div>
          Getting started with us is super easy:
          <ul className="py-3">
            <li><strong>Step 1:</strong> Book a FREE consultation to understand your vision and goals.</li>
            <li><strong>Step 2:</strong> We create a customized brand strategy tailored to your needs.</li>
            <li><strong>Step 3:</strong> Watch your brand transform with our 360° smart marketing approach.</li>
          </ul>
          <strong>Your brand’s journey starts here. Let’s take it Beeyond!</strong>
        </div>
      ),
      open: false,
    },
  ]);
  
  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  return (
    <section className="bg-faq d-flex justify-content-center">
      <div className="container-fluid h-100">
        <div className="faq-content">
          <h3 className="faq_head" data-aos="flip-up" data-aos-delay="80">
            Frequently <br /> asked questions
          </h3>
          <div className="faqs">
            {faqs.map((faq, index) => (
              <div
                className={"faq " + (faq.open ? "open" : "")}
                key={index}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">{faq.question}</div>
                <div className="faq-answer">
                  <p>{faq.answer}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
