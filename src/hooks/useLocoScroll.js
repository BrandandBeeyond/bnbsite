// useLocoScroll.js
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useLocoScroll = (start = true) => {
  const locoScrollRef = useRef(null);

  useEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector("[data-scroll-container]");
    if (!scrollEl || locoScrollRef.current) return;

    // Create locomotive scroll instance
    locoScrollRef.current = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      lerp: 0.08,
      multiplier: 1,
      getDirection: true,
    });

    // ScrollTrigger proxy setup
    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        return arguments.length
          ? locoScrollRef.current.scrollTo(value, 0, 0)
          : locoScrollRef.current.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollEl.style.transform ? "transform" : "fixed",
    });

    // Update ScrollTrigger on scroll
    locoScrollRef.current.on("scroll", ScrollTrigger.update);

    // Refresh on updates
    ScrollTrigger.addEventListener("refresh", () => {
      locoScrollRef.current?.update();
    });

    // Initial refresh
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    // Clean up
    return () => {
      ScrollTrigger.removeEventListener("refresh", () =>
        locoScrollRef.current?.update()
      );
      locoScrollRef.current?.destroy();
      locoScrollRef.current = null;
    };
  }, [start]);
};
