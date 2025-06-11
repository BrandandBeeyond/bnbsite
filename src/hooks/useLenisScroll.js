import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const useLenisScroll = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,             // Smoother feel
      easing: (t) => t,          // Linear easing (constant speed)
      direction: "vertical",
      gestureOrientation: "vertical",
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 1.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Keep ScrollTrigger in sync
    lenis.on("scroll", ScrollTrigger.update);

    // Optional: scroll to top on mount (avoid scroll jumps)
    window.scrollTo({ top: 0 });

    return () => {
      lenis.destroy();
    };
  }, []);
};
