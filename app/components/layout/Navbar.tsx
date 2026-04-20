"use client";

import { useEffect, useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";
import { cn } from "../../lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 140) {
        setActiveLink("Home");
        return;
      }

      const currentSection = navLinks
        .map((link) => ({
          name: link.name,
          element: document.querySelector(link.href),
        }))
        .find(({ element }) => {
          if (!element) return false;
          const rect = element.getBoundingClientRect();
          return rect.top <= 180 && rect.bottom >= 180;
        });

      if (currentSection) {
        setActiveLink(currentSection.name);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#1a2344]">
      <div className="section-spacing">
        <div className="flex min-h-[92px] items-center justify-between gap-6">
          <a href="#home" className="text-[1.85rem] font-bold tracking-[-0.04em]">
            <span className="blue-red-text">FULL Stack Developer</span>
          </a>

          <nav className="hidden items-center gap-14 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[1rem] font-medium transition-colors duration-200 hover:text-[#66b6ff]",
                  activeLink === link.name ? "text-[#3393ff]" : "text-white"
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <div className="gradient-border interactive-border rounded-full shadow-[0_0_24px_rgba(255,75,95,0.18)]">
              <a
                href="#contact"
                className="gradient-panel interactive-button inline-flex items-center gap-2 rounded-full px-10 py-4 text-[1rem] font-semibold text-white"
              >
                <Sparkles className="h-4 w-4" />
                Hire Me
              </a>
            </div>
          </div>

          <button
            type="button"
            className="rounded-full border border-white/10 p-3 text-white md:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-[#ff5864] via-[#736cf6] to-[#2d90ff]" />

      {mobileMenuOpen ? (
        <div className="section-spacing border-t border-white/10 bg-[#1a2344] py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-lg font-medium transition-colors duration-200 hover:text-[#66b6ff]",
                  activeLink === link.name ? "text-[#3393ff]" : "text-white"
                )}
              >
                {link.name}
              </a>
            ))}
            <div className="gradient-border interactive-border mt-2 rounded-full">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="gradient-panel interactive-button flex items-center justify-center gap-2 rounded-full px-6 py-4 font-semibold text-white"
              >
                <Sparkles className="h-4 w-4" />
                Hire Me
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
