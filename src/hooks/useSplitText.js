import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const useSplitText = ({
  type = "chars",
  animateFrom = {},
  animateTo = {},
  triggerHook = 0.8, // offset behavior
  once = true, // animate only once
  deps = [], // additional dependencies (optional)
} = {}) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitText(textRef.current, { type });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: `top ${triggerHook * 100}%`,
        toggleActions: once
          ? "play none none none"
          : "play reverse play reverse",
        once: once,
      },
    });

    tl.fromTo(
      split[type],
      { ...animateFrom },
      {
        ...animateTo,
        stagger: 0.04,
        duration: 1,
        ease: "power3.out",
      }
    );

    return () => {
      tl.kill();
      split.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, animateFrom, animateTo, triggerHook, once, JSON.stringify(deps)]); // ✅ safe & warning-free

  return textRef;
};

export default useSplitText;
