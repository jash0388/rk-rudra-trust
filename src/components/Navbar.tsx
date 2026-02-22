import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Features", href: "#features" },
  { label: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-max px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2" onClick={() => handleClick("#home")}>
          <img src={logo} alt="RK Rudra Chit Funds Logo" className="w-12 h-12 rounded-full object-cover" />
          <span className="font-heading text-xl font-bold text-primary-foreground tracking-wide">
            RK RUDRA
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleClick(item.href)}
              className="text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleClick("#contact")}
            className="btn-gold text-sm"
          >
            GET A QUOTE
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10 animate-fade-in-up">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleClick(item.href)}
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium py-2 text-left transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleClick("#contact")}
              className="btn-gold text-sm mt-2"
            >
              GET A QUOTE
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
