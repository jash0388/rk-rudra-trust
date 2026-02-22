import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
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
    <section id="contact" className="section-padding bg-muted">
      <div className="container-max">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            If You Have Any Query,{" "}
            <span className="text-gold-gradient">Please Contact Us</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 bg-card rounded-xl shadow-sm p-6 md:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition"
            />
            <textarea
              rows={5}
              placeholder="Message"
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition resize-none"
            />
            <button type="submit" className="btn-gold gap-2">
              <Send size={16} /> Send Message
            </button>
          </form>

          {/* Info */}
          <div className="lg:col-span-2 navy-gradient rounded-xl p-6 md:p-8 text-primary-foreground space-y-6">
            <h3 className="font-heading text-xl font-bold">Contact Details</h3>
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">Address</p>
                  <p className="text-primary-foreground/70 text-sm">
                    2-3-248 to 251, Plot No. 15, Main Road, Nagole, Hyderabad - 500068
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">Phone</p>
                  <a href="tel:+914029564345" className="text-primary-foreground/70 text-sm hover:text-secondary transition-colors">
                    +91 040-29564345
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">Email</p>
                  <a href="mailto:rkrudrachitfundprivatelimited@gmail.com" className="text-primary-foreground/70 text-sm hover:text-secondary transition-colors break-all">
                    rkrudrachitfundprivatelimited@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
