import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const useTextReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-text");

    elements.forEach((el) => {
      const words = el.textContent.split(" ").map((word) => {
        return `<span class="reveal-word"><span class="reveal-inner">${word}</span></span>`;
      });

      el.innerHTML = words.join(" ");

      gsap.fromTo(
        el.querySelectorAll(".reveal-inner"),
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    });
  }, []);
};

export default useTextReveal;
