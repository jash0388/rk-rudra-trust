import { useState } from "react";
import { ChevronLeft, ChevronRight, Shield, Users, TrendingUp } from "lucide-react";

const slides = [
  {
    icon: Shield,
    title: "Secure & Registered",
    desc: "Fully registered chit fund company operating under regulatory compliance in Hyderabad.",
  },
  {
    icon: Users,
    title: "Family-Focused Savings",
    desc: "Helping thousands of families build a stronger financial future through disciplined savings.",
  },
  {
    icon: TrendingUp,
    title: "Consistent Growth",
    desc: "Our members enjoy reliable returns and timely payouts through transparent operations.",
  },
];

const TrustSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <section id="about" className="section-padding bg-muted">
      <div className="container-max text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Trusted & Transparent Chit Fund Services{" "}
          <span className="text-gold-gradient">in Hyderabad</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          Helping families grow their savings with secure, registered, and
          well-managed chit plans.
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              className="shrink-0 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex-1 overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {slides.map((slide, i) => (
                  <div key={i} className="w-full shrink-0 px-2">
                    <div className="bg-card rounded-xl shadow-lg p-8 md:p-12">
                      <div className="w-16 h-16 rounded-xl gold-gradient flex items-center justify-center mx-auto mb-6">
                        <slide.icon size={28} className="text-primary-foreground" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                        {slide.title}
                      </h3>
                      <p className="text-muted-foreground max-w-md mx-auto">
                        {slide.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={next}
              className="shrink-0 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-secondary w-8" : "bg-border"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
