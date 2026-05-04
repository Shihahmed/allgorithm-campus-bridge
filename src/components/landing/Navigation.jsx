import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "The Session", href: "#agenda" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Who We Are", href: "#who-we-are" },
  { label: "Vision 2040", href: "#vision-2040" },
  { label: "FAQ", href: "#faq" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-offwhite/95 backdrop-blur-sm border-b border-hairline"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1200px] px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex flex-col">
            <span className="font-fraunces font-semibold text-[22px] text-navy leading-tight">
              Allgorithm.ai
            </span>
            <span className="hidden md:block font-inter text-[12px] text-text-muted leading-tight">
              AI for education. In Muscat.
            </span>
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-inter font-medium text-[15px] text-text-primary hover:text-copper transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#reserve"
              className="inline-flex items-center justify-center bg-copper text-white font-inter font-semibold text-sm px-6 py-3 rounded-lg hover:bg-copper-hover transition-colors duration-200"
            >
              Reserve session
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-offwhite border-t border-hairline">
            <div className="px-5 py-6 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-inter font-medium text-[16px] text-text-primary py-2"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Mobile sticky bottom CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-offwhite/95 backdrop-blur-sm border-t border-hairline px-5 py-3">
        <a
          href="#reserve"
          className="block w-full text-center bg-copper text-white font-inter font-semibold text-[15px] px-6 py-3 rounded-lg hover:bg-copper-hover transition-colors"
        >
          Reserve session
        </a>
      </div>
    </>
  );
}