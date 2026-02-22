import heroImg from "@/assets/hero-family.jpg";
import { ArrowRight, Phone } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 navy-gradient" />
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-secondary/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary/5 blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-primary-foreground/5 blur-2xl animate-float-slow" />

      <div className="relative container-max px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-secondary text-xs font-medium tracking-wide uppercase">
                Registered Chit Fund Company
              </span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Secure Savings.{" "}
              <span className="text-gold-gradient">Smart Financial Growth.</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-lg leading-relaxed">
              Join RK Rudra Chit Funds for reliable monthly chit plans backed by
              transparency and trust.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollTo("#about")} className="btn-gold gap-2">
                More Details <ArrowRight size={16} />
              </button>
              <button onClick={() => scrollTo("#contact")} className="btn-outline-white gap-2">
                <Phone size={16} /> Contact Us
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="animate-slide-in-right hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-secondary/20 blur-2xl" />
              <img
                src={heroImg}
                alt="Family financial planning with RK Rudra Chit Funds"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[16/10]"
                loading="eager"
              />
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center">
                    <span className="text-primary-foreground text-lg font-bold">20+</span>
                  </div>
                  <div>
                    <p className="text-foreground font-semibold text-sm">Years</p>
                    <p className="text-muted-foreground text-xs">Trusted Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
