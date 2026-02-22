import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Suresh Kumar",
    role: "Business Owner",
    text: "RK Rudra has transformed my approach to capital. Their transparency in auctions and prompt payments have been instrumental in my business expansion.",
    rating: 5,
  },
  {
    name: "Anjali Rao",
    role: "Education Professional",
    text: "I've been a member for 5 years. The systematic savings discipline combined with great dividends makes it the best financial decision for my family.",
    rating: 5,
  },
  {
    name: "Prakash Reddy",
    role: "Software Engineer",
    text: "Modern, professional, and reliable. Their registration with the government gives me peace of mind. Highly recommend for goal-based savings.",
    rating: 5,
  },
];

const TrustSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="trust" className="section-padding bg-white relative overflow-hidden px-6 lg:px-8">
      {/* Visual Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-full blur-[120px] translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-secondary/5 rounded-full blur-[100px] -translate-x-1/2" />

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">
              Success Stories
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-5xl font-bold text-navy leading-tight">
              Why Our Members <br />
              <span className="text-primary">Trust Us.</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-md">
              Real voices from our growing community of 10,000+ satisfied members
              achieving their financial dreams.
            </p>

            <div className="flex gap-4">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-navy hover:text-white transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-md hover:shadow-primary/30 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="relative z-10 h-[400px]">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-all duration-500 flex flex-col justify-center ${i === current ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-95 translate-x-10 pointer-events-none"
                    }`}
                >
                  <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 shadow-lg relative">
                    <div className="absolute top-4 right-4 text-primary/10">
                      <Quote size={80} strokeWidth={0.5} />
                    </div>

                    <div className="flex gap-1 mb-4">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-secondary text-secondary" />
                      ))}
                    </div>

                    <p className="text-navy text-base leading-relaxed mb-6">
                      "{t.text}"
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {t.name[0]}
                      </div>
                      <div>
                        <h4 className="text-navy font-semibold">{t.name}</h4>
                        <p className="text-gray-400 text-xs">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
