import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="navy-gradient text-primary-foreground">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="RK Rudra Logo" className="w-12 h-12 rounded-full object-cover" />
              <span className="font-heading text-lg font-bold">RK RUDRA</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              RK Rudra Chit Funds is committed to delivering dependable chit fund
              services with transparency, integrity, and customer-focused
              financial solutions.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-primary-foreground/60">
              <div className="flex gap-2">
                <MapPin size={16} className="shrink-0 mt-0.5" />
                <span>2-3-248 to 251, Plot No. 15, Main Road, Nagole, Hyderabad - 500068</span>
              </div>
              <div className="flex gap-2">
                <Phone size={16} className="shrink-0" />
                <a href="tel:+914029564345" className="hover:text-secondary transition-colors">+91 040-29564345</a>
              </div>
              <div className="flex gap-2">
                <Mail size={16} className="shrink-0" />
                <a href="mailto:rkrudrachitfundprivatelimited@gmail.com" className="hover:text-secondary transition-colors break-all">
                  rkrudrachitfundprivatelimited@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              {[
                { label: "About Us", href: "#about" },
                { label: "Contact Us", href: "#contact" },
                { label: "Our Services", href: "#services" },
                { label: "Terms & Condition", href: "#" },
                { label: "Support", href: "#contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="hover:text-secondary transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Newsletter</h4>
            <p className="text-primary-foreground/60 text-sm mb-4">
              Subscribe to receive updates on new chit plans, announcements, and
              important notices.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-3 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:ring-2 focus:ring-secondary transition"
              />
              <button type="submit" className="btn-gold px-4 py-2 text-xs">
                {subscribed ? "✓" : <Send size={14} />}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 py-5">
        <p className="text-center text-primary-foreground/50 text-sm">
          © RK RUDRA CHIT FUNDS, All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
