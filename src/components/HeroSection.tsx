import { ArrowRight, Play, Shield, TrendingUp, Users } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-navy px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      {/* Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent rounded-full blur-[120px]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/10 via-transparent to-transparent" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />

      <div className="container-max relative z-10 px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">
              <span className="flex h-2 w-2 rounded-full bg-primary" />
              Trusted by 10,000+ Members
            </div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Secure Your Future <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Smart Savings.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Join Hyderabad's most trusted registered chit fund. Achieve your financial goals with transparency, security, and consistent dividends.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 animate-fade-in-up delay-200">
              <button
                onClick={() => scrollTo("#plans")}
                className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wide transition-all shadow-lg hover:shadow-primary/25 flex items-center gap-2 group"
              >
                Explore Plans <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo("#about")}
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
              >
                <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-primary transition-colors">
                  <Play size={18} className="fill-gray-300 hover:fill-primary transition-colors" />
                </div>
                <span className="font-medium text-sm">How it Works</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
              {[
                { icon: Shield, label: "Registered", sub: "Govt. Compliant" },
                { icon: Users, label: "10k+", sub: "Happy Members" },
                { icon: TrendingUp, label: "20+", sub: "Years Experience" },
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center gap-2 text-primary">
                    <stat.icon size={16} />
                    <span className="font-bold text-white text-lg">{stat.label}</span>
                  </div>
                  <p className="text-gray-400 text-xs">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Immersive Visual */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative z-10 bg-white/5 p-1 rounded-[3rem] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
                alt="Fintech Wealth"
                className="rounded-[2.9rem]"
              />

              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-navy/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">12%</p>
                    <p className="text-gray-400 text-xs">Avg. Dividend</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-navy/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary">
                    <Shield size={20} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Secure</p>
                    <p className="text-gray-400 text-xs">Regulated Fund</p>
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
