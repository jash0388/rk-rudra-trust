import { useEffect, useRef, useState } from "react";
import { Shield, RefreshCw, Phone } from "lucide-react";

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 2000;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-heading text-7xl md:text-8xl font-bold text-gold-gradient">
      {count}+
    </div>
  );
};

const ExperienceSection = () => (
  <section className="section-padding">
    <div className="container-max">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left */}
        <div className="text-center lg:text-left">
          <AnimatedCounter target={20} />
          <p className="text-foreground text-xl font-semibold mt-2 mb-2">Years Experience</p>
          <p className="text-muted-foreground">
            Serving families with trust and integrity since our inception.
          </p>
        </div>

        {/* Right */}
        <div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            We're Here To Assist You With{" "}
            <span className="text-gold-gradient">Exploring Protection</span>
          </h2>

          <div className="space-y-4 mb-6">
            {[
              { icon: Shield, text: "Flexible Chitti Plans" },
              { icon: RefreshCw, text: "Money Back Guarantee" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <Icon size={18} className="text-accent-foreground" />
                </div>
                <span className="text-foreground font-medium">{text}</span>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            RK Rudra Chit Funds is committed to delivering dependable chit fund
            services with transparency, integrity, and customer-focused financial
            solutions.
          </p>

          <a
            href="tel:+914029564345"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-accent group transition-colors hover:bg-secondary"
          >
            <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
              <Phone size={18} className="text-primary-foreground" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground group-hover:text-secondary-foreground transition-colors">Call Us</p>
              <p className="text-foreground font-semibold group-hover:text-secondary-foreground transition-colors">+91 040-29564345</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
