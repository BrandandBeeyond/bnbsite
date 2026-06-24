import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { createPortal } from "react-dom";
import ReactParallaxTilt from "react-parallax-tilt";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const challenges = [
  {
    letter: "M",
    title: "Manual Processes",
    icon: "/images/icons/challenges/manual-processes.svg",
  },
  {
    letter: "D",
    title: "Scattered Data",
    icon: "/images/icons/challenges/scattered-data.svg",
  },
  {
    letter: "W",
    title: "Inefficient Workflows",
    icon: "/images/icons/challenges/inefficient-workflows.svg",
  },
  {
    letter: "C",
    title: "Poor Customer Management",
    icon: "/images/icons/challenges/customer-management.svg",
  },
  {
    letter: "R",
    title: "Lack of Real-time Insights",
    icon: "/images/icons/challenges/real-time-insights.svg",
  },
  {
    letter: "S",
    title: "Scaling Your Business",
    icon: "/images/icons/challenges/scaling-business.svg",
  },
];

const helpSteps = [
  {
    number: "01",
    icon: "/images/icons/help/search.svg",
    title: "UNDERSTAND",
    text: "We analyze your business and identify key challenges holding you back.",
  },
  {
    number: "02",
    icon: "/images/icons/help/target.svg",
    title: "STRATEGIZE",
    text: "We create a tailored strategy aligned with your goals and vision.",
  },
  {
    number: "03",
    icon: "/images/icons/help/code.svg",
    title: "BUILD",
    text: "We develop scalable, secure and high-performance solutions.",
  },
  {
    number: "04",
    icon: "/images/icons/help/gear.svg",
    title: "AUTOMATE",
    text: "We streamline processes to save time and reduce manual work.",
  },
  {
    number: "05",
    icon: "/images/icons/help/chart.svg",
    title: "OPTIMIZE",
    text: "We optimize performance and improve efficiency across your business.",
  },
  {
    number: "06",
    icon: "/images/icons/help/rocket.svg",
    title: "SCALE",
    text: "We help you scale seamlessly and stay ahead of the competition.",
  },
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
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isMobileHero, setIsMobileHero] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= 560 : false,
  );
  const [quoteForm, setQuoteForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    businessName: "",
    service: "",
    message: "",
  });
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

  useEffect(() => {
    if (!isQuoteModalOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsQuoteModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isQuoteModalOpen]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileHero(window.innerWidth <= 560);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleQuoteChange = (event) => {
    const { name, value } = event.target;
    setQuoteForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleQuoteSubmit = (event) => {
    event.preventDefault();

    const requiredFields = [
      quoteForm.fullName,
      quoteForm.email,
      quoteForm.mobile,
      quoteForm.businessName,
      quoteForm.service,
      quoteForm.message,
    ];

    if (requiredFields.some((field) => !field.trim())) {
      alert("Please fill all the fields.");
      return;
    }

    const whatsappNumber = "917030081814";
    const whatsappMessage = [
      "New software development quote request",
      `Full Name: ${quoteForm.fullName}`,
      `Email: ${quoteForm.email}`,
      `Mobile: ${quoteForm.mobile}`,
      `Business Name: ${quoteForm.businessName}`,
      `Service Looking For: ${quoteForm.service}`,
      `Message: ${quoteForm.message}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setIsQuoteModalOpen(false);
    setQuoteForm({
      fullName: "",
      email: "",
      mobile: "",
      businessName: "",
      service: "",
      message: "",
    });
  };

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
          href="https://brandandbeeyond.com/best-software-development-services-in-nashik"
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
          content="https://brandandbeeyond.com/best-software-development-services-in-nashik"
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
                  backgroundImage: `url("${
                    isMobileHero
                      ? "/images/software-dev-herobgmob.png"
                      : "/images/software-development-herobg.png"
                  }")`,
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
                  <button
                    type="button"
                    className="software-hero__btn software-hero__btn--primary"
                    onClick={() => setIsQuoteModalOpen(true)}
                  >
                    GET A QUOTE
                    <span className="software-hero__btn-icon" aria-hidden="true">
                      &rarr;
                    </span>
                  </button>
                </div>
              </div>

              <div className="software-hero__mobile-visual" aria-hidden="true">
                <img
                  src="/images/software-dev-herobgmob.png"
                  alt=""
                  className="software-hero__mobile-image"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="software-challenges">
          <div className="container-fluid">
            <div className="software-challenges__layout">
              <div className="software-challenges__intro">
                <p className="software-challenges__eyebrow">CHALLENGES WE SOLVE</p>
                <h2 className="software-challenges__title">
                  Is Your
                  <br />
                  Business
                  <br />
                  Facing These
                  <br />
                  <span>Challenges?</span>
                </h2>
                <div className="software-challenges__dots" aria-hidden="true" />
              </div>

              <div className="software-challenges__cards">
                {challenges.map((item) => (
                  <article className="software-challenges__card" key={item.title}>
                    <span className="software-challenges__badge">{item.letter}</span>
                    <span className="software-challenges__rule" aria-hidden="true" />
                    <h3 className="software-challenges__card-title">{item.title}</h3>
                    <div className="software-challenges__card-art" aria-hidden="true">
                      <img
                        src={item.icon}
                        alt=""
                        className="software-challenges__card-icon"
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="software-help">
          <div className="container-fluid">
            <div className="software-help__layout">
              <div className="software-help__visual">
                <div className="software-help__image-shell">
                  <img
                    src="/images/bnbsolutionbg.png"
                    alt="Software development strategy visual"
                    className="software-help__image"
                  />
                  <div className="software-help__visual-overlay" aria-hidden="true" />
                  <div className="software-help__visual-caption">
                    <span>We turn your challenges into</span>
                    <strong>REAL BUSINESS <em>GROWTH</em></strong>
                  </div>
                </div>
              </div>

              <div className="software-help__content">
                <p className="software-help__eyebrow">HOW WE HELP</p>
                <h2 className="software-help__title">
                  A PROVEN PROCESS TO DRIVE
                  <br />
                  MEASURABLE <span>RESULTS</span>
                </h2>
                <p className="software-help__copy">
                  We follow a structured approach to understand your business,
                  build the right solution, and help you scale with confidence.
                </p>

                <div className="software-help__steps">
                  {helpSteps.map((step) => (
                    <article className="software-help__step" key={step.number}>
                      <div className="software-help__number">{step.number}</div>
                      <div className="software-help__step-icon" aria-hidden="true">
                        <img
                          src={step.icon}
                          alt=""
                          className="software-help__step-icon-img"
                        />
                      </div>
                      <div className="software-help__step-body">
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="software-help__cta">
                  <div className="software-help__cta-icon" aria-hidden="true">
                    <img
                      src="/images/icons/help/star.svg"
                      alt=""
                      className="software-help__cta-icon-img"
                    />
                  </div>
                  <p>
                    We don&apos;t just build solutions, we build{" "}
                    <span>long-term growth partnerships.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {isQuoteModalOpen && typeof document !== "undefined"
          ? createPortal(
              <div
                className="software-quote-modal"
                role="presentation"
                onMouseDown={() => setIsQuoteModalOpen(false)}
              >
                <div
                  className="software-quote-modal__dialog"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="software-quote-modal-title"
                  onMouseDown={(event) => event.stopPropagation()}
                >
                  <button
                    type="button"
                    className="software-quote-modal__close"
                    onClick={() => setIsQuoteModalOpen(false)}
                    aria-label="Close quote form"
                  >
                    ×
                  </button>

                  <div className="software-quote-modal__header">
                    <p className="software-quote-modal__eyebrow">GET A QUOTE</p>
                    <h3 id="software-quote-modal-title">Tell us about your project</h3>
                    <p>
                      Fill in the details below and we&apos;ll open WhatsApp with your
                      message ready to send.
                    </p>
                  </div>

                  <form
                    className="software-quote-modal__form"
                    onSubmit={handleQuoteSubmit}
                  >
                    <div className="software-quote-modal__grid">
                      <div className="software-quote-modal__field">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          value={quoteForm.fullName}
                          onChange={handleQuoteChange}
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div className="software-quote-modal__field">
                        <label htmlFor="email">Email</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={quoteForm.email}
                          onChange={handleQuoteChange}
                          placeholder="Enter your email"
                        />
                      </div>

                      <div className="software-quote-modal__field">
                        <label htmlFor="mobile">Mobile</label>
                        <input
                          id="mobile"
                          name="mobile"
                          type="tel"
                          value={quoteForm.mobile}
                          onChange={handleQuoteChange}
                          placeholder="Enter your mobile number"
                        />
                      </div>

                      <div className="software-quote-modal__field">
                        <label htmlFor="businessName">Business Name</label>
                        <input
                          id="businessName"
                          name="businessName"
                          type="text"
                          value={quoteForm.businessName}
                          onChange={handleQuoteChange}
                          placeholder="Enter your business name"
                        />
                      </div>

                      <div className="software-quote-modal__field software-quote-modal__field--full">
                        <label htmlFor="service">Service You Looking For</label>
                        <select
                          id="service"
                          name="service"
                          value={quoteForm.service}
                          onChange={handleQuoteChange}
                        >
                          <option value="">Select a service</option>
                          {softwareServices.map((item) => (
                            <option key={item.title} value={item.title}>
                              {item.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="software-quote-modal__field software-quote-modal__field--full">
                        <label htmlFor="message">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={quoteForm.message}
                          onChange={handleQuoteChange}
                          placeholder="Tell us about your goals, timeline, and requirements"
                        />
                      </div>
                    </div>

                    <div className="software-quote-modal__actions">
                      <button type="button" onClick={() => setIsQuoteModalOpen(false)}>
                        Cancel
                      </button>
                      <button type="submit">Send on WhatsApp</button>
                    </div>
                  </form>
                </div>
              </div>,
              document.body,
            )
          : null}

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
