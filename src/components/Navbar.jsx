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
    { label: "Twitter", link: "https://twitter.com" },
    { label: "GitHub", link: "https://github.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
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
      onMenuOpen={() => console.log("Menu opened")}
      onMenuClose={() => console.log("Menu closed")}
    />
  );
};

export default Navbar;
