import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin, Send, ChevronRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-navy pt-16 pb-8 overflow-hidden px-6 lg:px-8">
      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <img src={logo} alt="Logo" className="w-14 h-14 rounded-full object-cover shadow-lg" />
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold text-white leading-tight">RK RUDRA</span>
                <span className="text-xs text-primary font-semibold">Chit Fund Private Limited</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Empowering families in Hyderabad with secure, systematic,
              and transparent savings solutions since 2004. Registered and
              regulated by the Government.
            </p>
            <div className="flex justify-center md:justify-start gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold text-sm mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Chit Plans", "Auction Process", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold text-sm mb-6">Get In Touch</h4>
            <div className="space-y-4">
              {[
                { icon: Phone, text: "+91 040-29564345", sub: "Mon-Sat, 10am-6pm" },
                { icon: Mail, text: "rkrudrachitfundprivatelimited@gmail.com", sub: "Support 24/7" },
                { icon: MapPin, text: "Nagole, Hyderabad", sub: "Registered Office" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row items-center md:items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <item.icon size={16} />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">{item.text}</p>
                    <p className="text-gray-500 text-xs mt-1">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-white/5 rounded-2xl p-6">
            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold mb-2">Elevate Your Savings</h4>
              <p className="text-gray-400 text-xs mb-4">Get the latest chit plan updates and financial insights direct to your inbox.</p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="w-full bg-navy/50 border border-gray-700 text-white rounded-lg px-4 py-2.5 text-xs focus:outline-none focus:border-primary transition-colors text-center"
                />
                <button className="w-full bg-primary hover:bg-secondary text-white font-medium text-xs py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2">
                  Subscribe Now <Send size={12} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © 2024 RK Rudra Chit Fund Pvt Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-gray-500 text-xs">
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="#" className="hover:text-white transition-colors">Licensing</a>
            <a href="#" className="hover:text-white transition-colors">Complaints</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
