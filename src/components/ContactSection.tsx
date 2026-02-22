import { useState } from "react";
import { MapPin, Phone, Mail, Send, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden px-6 lg:px-8">
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] translate-x-1/2" />

      <div className="container-max relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-4">
            Get In Touch
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-5xl font-bold text-navy leading-tight">
            Ready to Start Your <br />
            <span className="text-secondary">Savings Journey?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left: Info & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Headquarters",
                  desc: "Shop no: 405, 4th floor, Patel Towers, Nagole Main Road, Hyderabad - 500068",
                  sub: "Registered Office"
                },
                {
                  icon: Phone,
                  title: "Direct Connect",
                  desc: "+91 040-29564345",
                  sub: "Available 10am - 6pm"
                },
                {
                  icon: Mail,
                  title: "Official Email",
                  desc: "rkrudrachitfundprivatelimited@gmail.com",
                  sub: "24/7 Response Rate"
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-navy font-semibold mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                    <p className="text-primary text-xs font-medium mt-1">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative group rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.576572713835!2d78.564345!3d17.433762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb997f3b8b15d9%3A0x8e83b4b0b1a0e0e0!2sNagole%2C%20Hyderabad%2C%20Telangana%20500068!5e0!3m2!1sen!2sin!4v1711235000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="grayscale group-hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>

          {/* Right: Modern Form */}
          <div className="lg:col-span-7 bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-100">
            <h3 className="font-heading text-xl lg:text-2xl font-bold text-navy mb-6">
              Request a <span className="text-primary">Consultation.</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-500 ml-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white border border-gray-200 text-navy rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-500 ml-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white border border-gray-200 text-navy rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-gray-500 ml-1">Subject</label>
                <input
                  type="text"
                  placeholder="What are you interested in?"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full bg-white border border-gray-200 text-navy rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-primary transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-gray-500 ml-1">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your financial goals..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white border border-gray-200 text-navy rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-primary transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-secondary text-white py-4 rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
