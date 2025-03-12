import React, { useEffect, useState, useRef } from "react";
import "./counter.css";

const CounterItem = ({ target, text, startCount }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCount) return;

    let start = 0;
    const speed = 90;
    const increment = target / speed;

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setCount(Math.ceil(start));
    }, 20);

    return () => clearInterval(counter);
  }, [target, startCount]);

  return (
    <div className="count text-center">
      <h4 className="countnum">{count}+</h4>
      <span className="count-text">{text}</span>
    </div>
  );
};

const Counter = () => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="counter pt-30 pt-mob-0 pb-10 mt-minus-50" data-aos="zoom-y-out">
      <div className="container-fluid">
        <div className="row justify-content-center mt-sm-5">
          <div className="col-lg-10 border-mob">
            <div className="row g-2 g-sm-3 g-md-5">
              <div className="col-lg-3 col-sm-6 col-6">
                <CounterItem target={2000} text="Brands Buzzing with Success" startCount={startCount} />
              </div>
              <div className="col-lg-3 col-sm-6 col-6">
                <CounterItem target={12} text="Creative Bees Fueling Innovation" startCount={startCount} />
              </div>
              <div className="col-lg-3 col-sm-6 col-6">
                <CounterItem target={500} text="Projects Crafted to Perfection" startCount={startCount} />
              </div>
              <div className="col-lg-3 col-sm-6 col-6">
                <CounterItem target={25} text="Industries Impacted Worldwide" startCount={startCount} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
