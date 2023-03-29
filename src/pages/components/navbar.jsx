import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);

  const handleMouseEnter = (index) => {
    setActiveLink(index);
  };

  const handleMouseLeave = () => {
    setActiveLink(null);
  };

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > previousScrollPosition) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setPreviousScrollPosition(currentScroll);
  };

  useEffect(() => {
    if (router.pathname === "/") {
      setActiveLink(0);
    }
  }, [router.pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [previousScrollPosition]);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Service", href: "/service" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className={`navbar-container ${isVisible ? "visible" : "hidden"}`}>
      <div className="navbar-content">
        <Link href="/" className="navbar-logo">
            <Image className="navbar-logo-img" src="/logo.svg" width={240} height={40} />
        </Link>
      </div>
      <div className="navbar-content">
        {links.map((link, index) => (
          <Link key={index} href={link.href}
              className={`navbar-link ${
                router.pathname === link.href ? "active" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;