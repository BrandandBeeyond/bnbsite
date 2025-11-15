import React from "react";
import HexCanvas from "../components/hexcanvas/HexCanvas";
import About from "../components/about/About";
import Counter from "../components/counter/Counter";
import Client from "../components/clients/Client";
import { Element } from "react-scroll";
import Services from "../components/services/Services";
import Process from "../components/process/Process";
import ProcessMob from "../components/process/ProcessMob";
import WorkSample from "../components/work/WorkSample";
import WorkSampleMob from "../components/work/WorkSampleMob";
import Faqs from "../components/faq/Faqs";
import Contact from "../components/contact/Contact";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Best Website Design Company in Nashik | Brandandbeeyond</title>
        <meta
          name="keywords"
          content="Website development company in Nashik, web designing company in Nashik,web designing services near nashik, Best web development services in Nashik ,  Social media marketing company , Logo designing services in Nashik ,Graphic designing, Graphic designing services in nashik"
        />
        <meta
          name="description"
          content="Brand and beeyond is an elite web design and development company in Nashik that crafts innovative and bespoke website solutions that propel your brand to the forefront."
        />
        <link rel="canonical" href="https://brandandbeeyond.com/" />

        <meta
          property="og:title"
          content="Best Web Development Company in Nashik - Brandandbeeyond"
        />
        <meta
          property="og:description"
          content="Brandandbeeyond is an elite web development company in Nashik that crafts innovative and bespoke website solutions that propel your brand to the forefront."
        />
        <meta
          property="og:image"
          content="https://brandandbeeyond.com/static/media/bnblogo.ff5df8975ae1637aa426.png"
        />
        <meta property="og:url" content="https://brandandbeeyond.com/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Web Development Company in Nashik - Brandandbeeyond"
        />
        <meta
          name="twitter:description"
          content="Brandandbeeyond is an elite web development company in Nashik that crafts innovative and bespoke website solutions that propel your brand to the forefront."
        />
        <meta
          name="twitter:image"
          content="https://brandandbeeyond.com/static/media/bnblogo.ff5df8975ae1637aa426.png"
        />

        {/* Additional Meta Tags */}

        <meta name="author" content="Brandandbeeyond" />
        <meta name="robots" content="index, follow" />

        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Brand and Beeyond",
  "url": "https://brandandbeeyond.com",
  "logo": "https://brandandbeeyond.com/static/media/bnblogo.ff5df8975ae1637aa426.png",
  "sameAs": [
    "https://www.facebook.com/brandandbeeyond",
    "https://www.instagram.com/brandandbeeyond/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-7030060904",
    "contactType": "Customer Support",
    "areaServed": "IN",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office No 12 Second Floor, Business Bay, Shree, Hari Kute Marg, near Hotel Sandeep, Mumbai Naka, Matoshree Nagar",
    "addressLocality": "Nashik",
    "addressRegion": "MH",
    "postalCode": "422001",
    "addressCountry": "IN"
  },
  "description": "Brand and Beeyond is a top-rated web design and development company in Nashik, offering digital marketing, logo design, and SEO services."
}
`}
        </script>
      </Helmet>

      <HexCanvas
        title={`Best <br>  <span class='highlight'>website design & development</span> company in Nashik`}
      />

      <Element name="about">
        <About />
      </Element>

      <Element>
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <h3 className=" fs-1 mt-60" style={{ color: "#f9b000" }}>
                  Brand & Beeyond – Your{" "}
                  <span className="me-3 text-white">Trusted 360 Marketing & Branding</span>
                  Partner in Nashik
                </h3>

                <div
                  className="para mt-4 text-white fs-4"
                  style={{ textAlign: "justify" }}
                >
                  <p>
                    Welcome to Brand & Beeyond — a leading 360 marketing and
                    branding company in Nashik committed to helping businesses
                    grow with creative strategies and powerful digital
                    solutions. From brand identity to impactful online presence,
                    we offer everything your business needs to stand out in
                    today’s competitive market.
                  </p>
                  <p>
                    As one of the best website designing and website development
                    companies in Nashik, we focus on creating high-performing,
                    visually appealing, and user-friendly websites that attract
                    your audience and boost conversions. Our expert team
                    understands modern business needs and crafts solutions that
                    are both creative and result-driven.
                  </p>
                  <p>
                    Along with web solutions, we also specialize in logo
                    designing, graphic designing, and digital marketing services
                    in Nashik, giving your brand a strong identity and helping
                    you reach the right audience through effective online
                    strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>

      <Element name="counter">
        <Counter />
      </Element>

      <Element name="client">
        <Client />
      </Element>

      <Element name="services">
        <Services />
      </Element>

      <Element name="process" className="d-none d-sm-none d-md-block">
        <Process />
      </Element>
      <Element name="processmob" className="d-block d-sm-block d-md-none">
        <ProcessMob />
      </Element>

      <Element name="work" className="d-none d-sm-block d-md-block">
        <WorkSample />
      </Element>
      <Element name="workmob" className="d-block d-sm-none d-md-none">
        <WorkSampleMob />
      </Element>

      <Element name="faqs">
        <Faqs />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
    </>
  );
};

export default Home;
