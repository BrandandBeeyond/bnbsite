import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import HexCanvas from "../../components/hexcanvas/HexCanvas";

const SITE = "https://brandandbeeyond.com";
const Y = "#f9b000";

const P = ({ children }) => (
  <div className="blog-para">
    {[].concat(children).map((t, i) => (
      <p key={i}>{t}</p>
    ))}
  </div>
);
const H2 = ({ children }) => (
  <h2 className="fs-2 mt-5 pt-4" style={{ color: Y }}>
    {children}
  </h2>
);

const Block = ({ b }) => {
  switch (b.type) {
    case "text":
      return (
        <div className="text-white interr">
          {b.h && <H2>{b.h}</H2>}
          <P>{b.p}</P>
        </div>
      );
    case "split":
      return (
        <div className={`row my-5 pt-4 align-items-center ${b.reverse ? "flex-lg-row-reverse" : ""}`}>
          <div className="col-lg-6">
            <img src={b.img} alt={b.alt} className="img-fluid w-100" loading="lazy" style={{ borderRadius: 12 }} />
          </div>
          <div className="col-lg-6 text-white">
            <h2 className="fs-3 pt-4" style={{ color: Y }}>{b.h}</h2>
            <P>{b.p}</P>
          </div>
        </div>
      );
    case "image":
      return (
        <figure className="my-5">
          <img src={b.img} alt={b.alt} className="img-fluid w-100" loading="lazy" style={{ borderRadius: 12 }} />
          <figcaption className="text-white-50 mt-2 small">{b.caption}</figcaption>
        </figure>
      );
    case "cards":
      return (
        <div className="text-white">
          <H2>{b.h}</H2>
          <div className="row g-4 mt-2">
            {b.items.map(([t, d], i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="h-100 p-4" style={{ border: `1px solid ${Y}55`, borderRadius: 12, background: "#ffffff08" }}>
                  <span style={{ color: Y, fontSize: 32, fontWeight: 700 }}>0{i + 1}</span>
                  <h3 className="fs-5 mt-2">{t}</h3>
                  <P>{d}</P>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case "steps":
      return (
        <div className="text-white">
          <H2>{b.h}</H2>
          {b.items.map(([t, d], i) => (
            <div className="d-flex gap-4 mt-4" key={i}>
              <div style={{ minWidth: 56, height: 56, borderRadius: "50%", background: Y, color: "#000", fontWeight: 700, fontSize: 22, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {i + 1}
              </div>
              <div>
                <h3 className="fs-5">{t}</h3>
                <P>{d}</P>
              </div>
            </div>
          ))}
        </div>
      );
    case "quote":
      return (
        <blockquote className="my-5 py-4 px-4 text-white fs-3" style={{ borderLeft: `6px solid ${Y}`, background: "#ffffff08" }}>
          “{b.q}”
        </blockquote>
      );
    case "checklist":
      return (
        <div className="text-white my-5 p-4" style={{ border: `2px dashed ${Y}`, borderRadius: 12 }}>
          <h2 className="fs-3" style={{ color: Y }}>{b.h}</h2>
          <ul className="blog-para mt-3" style={{ listStyle: "none", paddingLeft: 0 }}>
            {b.items.map((t, i) => (
              <li key={i} className="mb-2"><span style={{ color: Y }}>✔</span> {t}</li>
            ))}
          </ul>
        </div>
      );
    case "compare":
      return (
        <div className="text-white">
          <H2>{b.h}</H2>
          <div className="table-responsive mt-3">
            <table className="table table-dark table-bordered align-middle">
              <thead>
                <tr>{b.cols.map((c) => <th key={c} style={{ color: Y }}>{c}</th>)}</tr>
              </thead>
              <tbody>
                {b.rows.map((r, i) => (
                  <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    default:
      return null;
  }
};

const BrandSeriesBlog = ({ post }) => {
  const url = `${SITE}/${post.slug}`;
  const image = `${SITE}${post.hero}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      image,
      datePublished: post.date,
      dateModified: post.date,
      keywords: post.keywords,
      author: { "@type": "Organization", name: "Brand and Beeyond" },
      publisher: { "@type": "Organization", name: "Brand and Beeyond", url: SITE },
      mainEntityOfPage: url,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faqs.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ];

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{post.metaTitle}</title>
        <meta name="title" content={post.metaTitle} />
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords} />
        <meta name="author" content="Brand and Beeyond" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="Brand and Beeyond" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={image} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <HexCanvas title={post.title} />

      <article className="container pb-5">
        <img src={post.hero} alt={post.heroAlt} className="img-fluid w-100 my-4" style={{ borderRadius: 12 }} />
        <P>{post.intro}</P>
        {post.blocks.map((b, i) => <Block b={b} key={i} />)}

        <div className="text-white">
          <H2>Frequently Asked Questions</H2>
          {post.faqs.map(([q, a]) => (
            <div key={q} className="mt-3">
              <h3 className="fs-5">{q}</h3>
              <P>{a}</P>
            </div>
          ))}
        </div>

        <div className="text-white text-center mt-5 p-5" style={{ background: "#ffffff0d", borderRadius: 12 }}>
          <h2 className="fs-2" style={{ color: Y }}>{post.ctaHead}</h2>
          <P>
            Brand and Beeyond is a branding and digital marketing agency in Nashik that helps businesses build brands people remember, trust and choose.
          </P>
          <Link to="/contact" className="btn btn-warning mt-3 px-4 py-2 fw-bold">Talk to Our Branding Team</Link>
          <div className="mt-4 blog-para">
            <p>
              Read more: <Link to="/blogs" style={{ color: Y }}>All Blogs</Link> ·{" "}
              <Link to="/why_your_business_needs_strategic_branding" style={{ color: Y }}>Strategic Branding</Link> ·{" "}
              <Link to="/best-logo-design-trends" style={{ color: Y }}>Logo Design Trends</Link>
            </p>
          </div>
        </div>
      </article>
    </>
  );
};
export default BrandSeriesBlog;
