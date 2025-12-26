import React from "react";
import HexCanvas from "../components/hexcanvas/HexCanvas";
import { Link } from "react-router-dom";

const Blogs = () => {
  const blogs = [
    {
      name: "From Visibility to Conversions: 360-Degree Digital Marketing | Brand and Beeyond",
      thumbnail: "/images/360marketing.png",
      slug: "best-360-degree-marketing-agency-nashik",
      blogpara:
        " In today’s competitive digital landscape, visibility alone is not enough. Many businesses appear online but still struggle to generate quality leads.",
      altseo: "360 degree marketing agency in nashik",
    },
    {
      name: "How a Well-Developed Website Improves Your SEO and Google Ranking",
      thumbnail: "/images/seo.jpg",
      slug: "best-seo-marketing-agency-in-nashik",
      blogpara:
        " At Brand and Beeyond, we have seen firsthand how businesses start  ranking better simply by fixing their website structure, speed, and design.",
      altseo: "seo marketing agency in nashik",
    },
    {
      name: "Custom Website vs Ready-Made Templates: What’s Best for Your Business?",
      thumbnail: "/images/stratacarebg.png",
      slug: "custom-website-design-company-in-nashik",
      blogpara:
        " Choosing the right website development company is more than a technical decision it’s an emotional investment in the future of your brand. Backed by two years of immersive experience and a portfolio that spans across real estate, hospitality, MSMEs, clinics, startups, and more, we help businesses brand smart, grow fast, and lead with meaning.",
      altseo: "strategic branding in nashik",
    },
    {
      name: "How to Choose the Right Website Development Agency in Nashik & Mumbai",
      thumbnail: "/images/fairytale.png",
      slug: "best-website-development-agencies-mumbai",
      blogpara:
        " Choosing the right website development company is more than a technical decision it’s an emotional investment in the future of your brand. Backed by two years of immersive experience and a portfolio that spans across real estate, hospitality, MSMEs, clinics, startups, and more, we help businesses brand smart, grow fast, and lead with meaning.",
      altseo: "strategic branding in nashik",
    },
    {
      name: "Why Your Business Needs Strategic Branding in 2025",
      thumbnail: "/images/strategic_branding.png",
      slug: "why_your_business_needs_strategic_branding",
      blogpara:
        "  We are not just another branding agency in India. We are a strategic growth partner that builds brands from the inside out—brands that resonate, convert, and sustain. Backed by two years of immersive experience and a portfolio that spans across real estate, hospitality, MSMEs, clinics, startups, and more, we help businesses brand smart, grow fast, and lead with meaning.",
      altseo: "strategic branding in nashik",
    },
    {
      name: "Why Your Business Needs a Strategic Website in 2025",
      thumbnail: "/images/website-design.jpg",
      slug: "why-your-business-needs-strategic-website",
      blogpara:
        " Step into 2025, and you’ll notice one undeniable truth: your website is no longer a “good-to-have,” it’s your digital heartbeat. In a world where attention spans are shrinking and customer choices are multiplying, a website is not just a showcase of your business—it’s the soul of your brand online.",
      altseo: "website design company in nashik",
    },
    {
      name: "The Evolution of Logo Design: Trends to Know in 2025",
      thumbnail: "/images/logodesign.jpg",
      slug: "best-logo-design-trends",
      blogpara:
        " A logo is not just a visual. It is the spirit of a brand, the mark that leaves a memory long after someone has seen it. ",
      altseo: "logo design company in nashik",
    },
  ];

  return (
    <>
      <HexCanvas title={"Blogs"} />

      <section className="printmediapage">
        <div className="container">
          {blogs.map((blg, i) => (
            <div className="row mt-5">
              <div className="col-lg-6">
                <img
                  src={blg.thumbnail}
                  className="img-fluid object-fit-cover w-100"
                  style={{ maxHeight: "350px" }}
                  alt={blg.altseo}
                />
              </div>
              <div className="col-lg-6">
                <Link className="nav-link" to={`/${blg.slug}`}>
                  <h2 className="foliohead-sm" style={{ color: "#fff" }}>
                    {blg.name}
                  </h2>
                  <div className="blog-para text-white">
                    <p>{blg.blogpara}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blogs;
