import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import ReactParallaxTilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const challenges = [
  { icon: "M", title: "Manual Processes" },
  { icon: "D", title: "Scattered Data" },
  { icon: "W", title: "Inefficient Workflows" },
  { icon: "C", title: "Poor Customer Management" },
  { icon: "R", title: "Lack of Real-time Insights" },
  { icon: "S", title: "Scaling Your Business" },
];

const softwareServices = [
  {
    icon: "/images/icons/website.png",
    title: "Web Application Development",
    text: "Scalable, secure & high-performance web applications built for your business.",
  },
  {
    icon: "/images/icons/mobile-development.png",
    title: "Mobile App Development",
    text: "Native & cross-platform apps for Android & iOS that deliver great experiences.",
  },
  {
    icon: "/images/icons/customerp.png",
    title: "Custom ERP Solutions",
    text: "Streamline operations, finance, inventory, HR and more with custom ERP.",
  },
  {
    icon: "/images/icons/crm.png",
    title: "CRM Development",
    text: "Manage leads, customers and relationships effectively with powerful CRM systems.",
  },
  {
    icon: "/images/icons/saas.png",
    title: "SaaS Product Development",
    text: "Scalable SaaS platforms that drive recurring growth and customer retention.",
  },
  {
    icon: "/images/icons/cloud-api.png",
    title: "API & Integration Development",
    text: "Connect systems and tools seamlessly with robust APIs and integrations.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    text: "Understanding your business, goals and challenges.",
  },
  {
    number: "02",
    title: "Design",
    text: "Planning, wireframes and UI/UX design.",
  },
  {
    number: "03",
    title: "Develop",
    text: "Building robust and scalable solutions.",
  },
  {
    number: "04",
    title: "Test",
    text: "Quality assurance and performance testing.",
  },
  {
    number: "05",
    title: "Deploy",
    text: "Seamless deployment and launch.",
  },
  {
    number: "06",
    title: "Support",
    text: "Continuous support and improvements.",
  },
];

const techStack = [
  { label: "TypeScript", badge: "TS", icon: "/images/icons/typescript.png" },
  { label: "Python", badge: "Py", icon: "/images/icons/python.png" },
  { label: "Django", badge: "Dj", icon: "/images/icons/django.png" },
  { label: "JavaScript", badge: "JS", icon: "/images/icons/javascript.png" },
  { label: "Node.js", badge: "JS", icon: "/images/icons/nodejs.png" },
  { label: "MySQL", badge: "My", icon: "/images/icons/mysql.png" },
  { label: "MongoDB", badge: "MDB", icon: "/images/icons/mongodb.png" },
  { label: "Docker", badge: "DK", icon: "/images/icons/docker.png" },
  { label: "React", badge: "Re", icon: "/images/icons/react.png" },
  { label: "Next.js", badge: "Nx", icon: "/images/icons/nextjs.png" },
  { label: "Tailwind CSS", badge: "TW", icon: "/images/icons/tailwind.png" },
  { label: "Express.js", badge: "Ex", icon: "/images/icons/expressjs.png" },
  { label: "AWS", badge: "AW", icon: "/images/icons/aws.png" },
  { label: "Google Cloud", badge: "GC", icon: "/images/icons/googlecloud.png" },
  { label: "Firebase", badge: "FB", icon: "/images/icons/firebase.png" },
];

export default function SoftwareDevelopment() {
  const processSectionRef = useRef(null);
  const processCardRefs = useRef([]);
  const [activeProcessIndex, setActiveProcessIndex] = useState(0);

  useEffect(() => {
    const section = processSectionRef.current;
    const cards = processCardRefs.current.filter(Boolean);

    if (!section || !cards.length) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.set(cards, { opacity: 0.35, y: 28, scale: 0.96 });

      const intro = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      intro.to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.08,
        duration: 0.7,
        ease: "power3.out",
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${window.innerHeight * (cards.length * 0.75)}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const nextIndex = Math.min(
              cards.length - 1,
              Math.floor(self.progress * cards.length),
            );

            setActiveProcessIndex((current) =>
              current === nextIndex ? current : nextIndex,
            );
          },
        },
      });

      cards.forEach((card, index) => {
        timeline.to(
          card,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          index * 0.68,
        );
      });

      timeline.to({}, { duration: 0.35 });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Best Software Development Company in Nashik | Brand and Beeyond</title>
        <meta name="title" content="Best Software Development Company in Nashik" />
        <meta
          name="description"
          content="Brand and Beeyond builds custom software development solutions in Nashik including ERP systems, mobile apps, and web platforms that help businesses grow."
        />
        <meta
          name="keywords"
          content="best software development company in nashik, software development services in nashik, custom software development, ERP development nashik, mobile app development nashik, web application development"
        />
        <meta name="author" content="Brandandbeeyond" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://brandandbeeyond.com/best-software-development-company-in-nashik"
        />
        <meta
          property="og:title"
          content="Best Software Development Company in Nashik | Brand and Beeyond"
        />
        <meta
          property="og:description"
          content="Custom software development solutions, ERP systems, mobile apps, and web platforms built for growth."
        />
        <meta
          property="og:image"
          content="https://brandandbeeyond.com/images/software-development-herobg.png"
        />
        <meta
          property="og:url"
          content="https://brandandbeeyond.com/best-software-development-company-in-nashik"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main className="software-dev-page">
        <section className="software-hero">
          <div className="container-fluid">
            <div className="software-hero__panel">
              <div
                className="software-hero__panel-bg"
                style={{
                  backgroundImage: 'url("/images/software-development-herobg.png")',
                }}
                aria-hidden="true"
              />
              <div className="software-hero__content">
                <p className="software-hero__kicker">
                  SOFTWARE DEVELOPMENT COMPANY IN NASHIK
                </p>

                <h1 className="software-hero__title">
                  WE BUILD SOFTWARE
                  <br />
                  THAT <span>POWERS BUSINESS</span>
                  <br />
                  <span>GROWTH</span>
                </h1>

                <p className="software-hero__copy">
                  From custom software and ERP systems to mobile apps and web
                  platforms, we build solutions that simplify operations,
                  automate processes, and accelerate your business.
                </p>

                <div className="software-hero__actions">
                  <Link
                    className="software-hero__btn software-hero__btn--primary"
                    to="/contact"
                  >
                    GET A FREE CONSULTATION
                    <span className="software-hero__btn-icon" aria-hidden="true">
                      &rarr;
                    </span>
                  </Link>
                  <Link
                    className="software-hero__btn software-hero__btn--secondary"
                    to="/portfolio"
                  >
                    VIEW OUR WORK
                    <span className="software-hero__btn-icon" aria-hidden="true">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="software-challenges">
          <div className="container-fluid">
            <div className="software-challenges__grid">
              <div className="software-challenges__intro">
                <p className="software-challenges__eyebrow">CHALLENGES WE SOLVE</p>
                <h2 className="software-challenges__title">
                  Is Your Business
                  <br />
                  Facing These Challenges?
                </h2>
              </div>

              <div className="software-challenges__items">
                {challenges.map((item) => (
                  <div className="software-challenges__item" key={item.title}>
                    <span className="software-challenges__icon">
                      {item.icon}
                    </span>
                    <p>{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="services software-page-services d-none d-md-block">
          <div className="container-fluid">
            <div className="text-center">
              <h4 className="subhead">services</h4>
              <h2 className="work_head py-3">More than just web development</h2>
            </div>

            <div className="row gy-5 pt-20">
              {softwareServices.map((item) => (
                <div className="col-lg-4 d-flex justify-content-center" key={item.title}>
                  <ReactParallaxTilt
                    className="card servicecard rounded-5 overflow-hidden"
                    glareEnable={true}
                    glareMaxOpacity={0.35}
                    scale={1.07}
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={25}
                    perspective={1000}
                    data-aos="fade-up"
                    data-aos-delay="80"
                  >
                    <div className="card-body h-100">
                      <div className="d-flex flex-column justify-content-center h-100">
                          <div className="text-center">
                          <div className="software-page-services__icon" aria-hidden="true">
                            <img
                              src={item.icon}
                              alt=""
                              className="software-page-services__img"
                            />
                          </div>
                          <div className="service_head my-3">
                            <h5 className="pt-3">{item.title}</h5>
                          </div>
                          <div className="service_para pt-1">
                            <p className="pb-0">{item.text}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ReactParallaxTilt>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services software-page-services d-block d-md-none">
          <div className="container-fluid">
            <div className="text-center">
              <h4 className="subhead">services</h4>
              <h2 className="work_head py-3">More than just web development</h2>
            </div>

            <div className="row gy-4 pt-20 align-items-center">
              {softwareServices.map((item) => (
                <div
                  className="col-6 d-flex justify-content-center"
                  key={item.title}
                >
                  <div className="d-flex justify-content-center flex-column align-items-center text-center">
                    <div className="card servicecard rounded-5 overflow-hidden">
                      <div className="card-body d-flex justify-content-center">
                        <div className="d-flex flex-column justify-content-center h-100">
                          <div className="text-center">
                            <div className="software-page-services__icon" aria-hidden="true">
                              <img
                                src={item.icon}
                                alt=""
                                className="software-page-services__img"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service_head my-0 my-sm-3 mt-3 mb-1 mt-sm-0 mb-sm-0">
                      <h5>{item.title}</h5>
                    </div>
                    <div className="service_para">
                      <p className="pb-0">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="software-process" ref={processSectionRef}>
          <div className="container-fluid">
            <div className="software-process__scene">
              <div className="text-center">
                <p className="software-section-label">OUR DEVELOPMENT PROCESS</p>
                <h2 className="software-section-title">A Clear Process. Proven Results.</h2>
              </div>

              <div className="software-process__track">
                <div className="software-process__line" aria-hidden="true" />
                {processSteps.map((step, index) => (
                  <article
                    ref={(el) => {
                      processCardRefs.current[index] = el;
                    }}
                    className={`software-process__card ${
                      activeProcessIndex === index ? "is-active" : ""
                    } ${index === processSteps.length - 1 ? "is-final" : ""}`}
                    key={step.number}
                  >
                    <div className="software-process__hex" aria-hidden="true">
                      <span>{step.number}</span>
                    </div>
                    <div className="software-process__card-content">
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="software-tech">
          <div className="container-fluid">
            <div className="text-center">
              <p className="software-section-label">OUR TECHNOLOGY STACK</p>
              <h2 className="software-section-title">
                Powering Innovation with a Modern Tech Stack
              </h2>
              <p className="software-tech__copy">
                We leverage cutting-edge technologies to build solutions that are not just
                powerful and scalable, but also future-proof.
              </p>
            </div>

            <div className="software-tech__marquee" aria-label="Technology stack">
              <div className="software-tech__track">
                {[...techStack, ...techStack].map((item, index) => (
                  <div className="software-tech__item" key={`${item.label}-${index}`}>
                    <div className="software-tech__mark">
                      <div className="software-tech__backdrop" aria-hidden="true" />
                      <div className="software-tech__hex">
                        {item.icon ? (
                          <img
                            src={item.icon}
                            alt=""
                            aria-hidden="true"
                            className="software-tech__icon"
                          />
                        ) : (
                          <span>{item.badge}</span>
                        )}
                      </div>
                    </div>
                    <p>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
