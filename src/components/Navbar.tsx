import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, ChevronRight } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Plans", href: "#plans" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 pointer-events-none px-4">
      <nav
        className={`transition-all duration-300 pointer-events-auto rounded-full ${scrolled
          ? "bg-white/90 backdrop-blur-sm shadow-lg py-2 px-6 w-[95%]"
          : "bg-transparent py-4 px-6 w-full"
          }`}
      >
        <div className="container-max flex items-center justify-between">
          <button onClick={() => handleClick("#home")} className="flex items-center gap-3 group">
            <img src={logo} alt="Logo" className="w-12 h-12 lg:w-14 lg:h-14 rounded-full object-cover shadow-lg" />
            <div className="flex flex-col text-left">
              <span className={`font-heading text-xl lg:text-2xl font-bold leading-tight tracking-wide ${scrolled ? "text-navy" : "text-white"}`}>
                RK RUDRA
              </span>
              <span className={`text-[10px] uppercase font-semibold tracking-wider ${scrolled ? "text-primary" : "text-primary"}`}>
                Chit Fund Private Limited
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleClick(item.href)}
                className={`text-sm font-medium transition-colors ${scrolled ? "text-gray-600 hover:text-primary" : "text-gray-600 hover:text-primary"
                  }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleClick("#contact")}
              className="bg-primary hover:bg-secondary text-white px-6 py-2.5 rounded-full font-medium text-xs transition-colors flex items-center gap-2"
            >
              Get a Quote <ChevronRight size={12} />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-navy" : "text-navy"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 mt-2 px-4 transition-all duration-300 transform ${mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"}`}>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleClick(item.href)}
                className="text-gray-700 hover:text-primary text-sm font-medium py-3 text-left px-4 border-b border-gray-100 last:border-0"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleClick("#contact")}
              className="bg-primary text-white py-3 rounded-none font-medium text-sm w-full"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
