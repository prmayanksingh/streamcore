import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    
  }, [pathname, lenis]);

  return null;
};

export default ScrollToTop;
