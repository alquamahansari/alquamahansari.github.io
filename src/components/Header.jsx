// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const nav = [
    { id: "home",       label: "Home",       type: "scroll" },
    { id: "about",      label: "About",      type: "scroll" },
    { id: "projects",   label: "Projects",   type: "both",  to: "/projects" },
    { id: "experience", label: "Experience", type: "scroll" },
    { id: "contact",    label: "Contact",    type: "scroll" },
  ];

  // ── Single unified scroll effect ───────────
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (location.pathname !== "/") return;

      const sectionIds = ["home", "about", "projects", "experience", "contact"];
      const scrollY = window.scrollY + window.innerHeight * 0.4;

      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && scrollY >= el.offsetTop) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // ── Click handler ──────────────────────────
  const handleNavClick = (item) => {
    setMenuOpen(false);

    if (item.type === "both") {
      navigate(item.to);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ── Active state ───────────────────────────
  const isActive = (item) => {
    if (item.type === "both") {
      return location.pathname === item.to ||
        (location.pathname === "/" && activeSection === item.id);
    }
    return location.pathname === "/" && activeSection === item.id;
  };

  return (
    <header
      className={
        "fixed top-0 w-full z-50 transition-all duration-300 " +
        (scrolled
          ? "bg-[#080E1E] backdrop-blur-md border-b border-[#5A9ABF]/20 shadow-lg"
          : "bg-[#080E1E]/80 backdrop-blur-sm border-b border-transparent")
      }
    >
      <nav className="max-w-7xl mx-auto px-8 flex items-center justify-between py-4">

        {/* Logo */}
        <button
          onClick={() => handleNavClick({ id: "home", type: "scroll" })}
          className="text-lg font-bold tracking-tighter text-[#00C9A7] uppercase hover:text-white transition-colors duration-200 font-['Space_Grotesk']"
        >
          Alquamah Ansari
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 items-center">
          {nav.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={
                "text-xs uppercase font-bold tracking-widest pb-1 border-b-2 transition-all duration-200 font-['Space_Grotesk'] " +
                (isActive(item)
                  ? "text-[#00C9A7] border-[#00C9A7]"
                  : "text-slate-400 border-transparent hover:text-white hover:border-white/30")
              }
            >
              {item.label}
            </button>
          ))}
          <a
            href="/Mohammad-Alquamah-Ansari-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="bg-[#00C9A7] text-[#00382d] px-5 py-2 text-xs uppercase font-bold tracking-widest hover:brightness-110 transition-all duration-200 font-['Space_Grotesk']"
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={"block w-6 h-0.5 bg-[#00C9A7] transition-all duration-300 " + (menuOpen ? "rotate-45 translate-y-2" : "")} />
          <span className={"block w-6 h-0.5 bg-[#00C9A7] transition-all duration-300 " + (menuOpen ? "opacity-0" : "")} />
          <span className={"block w-6 h-0.5 bg-[#00C9A7] transition-all duration-300 " + (menuOpen ? "-rotate-45 -translate-y-2" : "")} />
        </button>

      </nav>

      {/* Mobile menu */}
      <div
        className={
          "md:hidden overflow-hidden transition-all duration-300 bg-[#080E1E] border-t border-[#5A9ABF]/20 " +
          (menuOpen ? "max-h-96 py-4" : "max-h-0")
        }
      >
        <div className="flex flex-col px-8 gap-1">
          {nav.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={
                "text-left text-xs uppercase font-bold tracking-widest py-3 border-b border-[#5A9ABF]/10 transition-colors duration-200 font-['Space_Grotesk'] " +
                (isActive(item)
                  ? "text-[#00C9A7]"
                  : "text-slate-400 hover:text-white")
              }
            >
              {item.label}
            </button>
          ))}
          <a
            href="/Mohammad-Alquamah-Ansari-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-4 bg-[#00C9A7] text-[#00382d] px-5 py-3 text-xs uppercase font-bold tracking-widest text-center hover:brightness-110 transition-all duration-200 font-['Space_Grotesk']"
          >
            Resume
          </a>
        </div>
      </div>

    </header>
  );
}