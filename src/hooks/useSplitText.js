import { useEffect, useRef } from "react";
import gsap from "gsap";
import  SplitText from "gsap/SplitText";


gsap.registerPlugin(SplitText);

const useSplitText = ({ type = "chars", animateFrom = {}, animateTo = {}, deps = [] } = {}) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitText(textRef.current, { type });

    gsap.fromTo(
      split[type],
      { ...animateFrom },
      { ...animateTo }
    );

    return () => split.revert(); // Clean up on unmount
  }, deps); // Re-run if `deps` change

  return textRef;
};

export default useSplitText;
