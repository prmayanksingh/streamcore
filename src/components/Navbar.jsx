import "../style/font.css";
import { useEffect, useRef } from "react";
import StaggeredMenu from "./ui/StaggeredMenu";
import gsap from "gsap";
import StreamCoreLogo from '../assets/images/StreamCoreLogo.png'

const Navbar = () => {
  const fadeinRef = useRef();

  useEffect(() => {
    gsap.from(fadeinRef.current, {
      opacity: 0,
      duration: 1.7,
      delay: .8,
      ease: "power3.out",
    });
  }, []);

  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "Learn about us", link: "/aboutus" },
    { label: "Works", ariaLabel: "Learn about us", link: "/work" },
    { label: "Services", ariaLabel: "View our services", link: "/services" },
    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  ];

  const socialItems = [
    { label: "Instagram", link: "https://www.instagram.com/streamcore_web_technologies/?hl=en" },
    { label: "LinkedIn", link: "https://www.linkedin.com/company/stream-core-web-technologies/posts/?feedView=all" },
  ];

  return (
    <StaggeredMenu
      ref={fadeinRef}
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials
      displayItemNumbering={true}
      menuButtonColor="#ffffff"
      openMenuButtonColor="#000"
      changeMenuColorOnOpen={true}
      colors={["#B19EEF", "#5227FF"]}
      logoUrl={StreamCoreLogo}
      accentColor="#5227FF"
    />
  );
};

export default Navbar;
