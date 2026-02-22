import { Shield, Users, TrendingUp } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="about" className="section-padding bg-navy relative overflow-hidden px-6 lg:px-8">
      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
                alt="Years of Experience"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-50" />
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary to-secondary p-1 rounded-2xl shadow-xl">
              <div className="bg-navy rounded-xl p-6 text-center">
                <span className="block text-5xl font-bold text-white">20+</span>
                <span className="text-xs text-gray-400">Years of Trust</span>
              </div>
            </div>

            {/* Trusted Member Card */}
            <div className="absolute top-8 -left-6 bg-navy/90 border border-gray-700 p-6 rounded-2xl shadow-xl hidden xl:block">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-navy bg-gray-200" />
                  ))}
                </div>
                <div>
                  <p className="text-white font-semibold">10,000+ Members</p>
                  <p className="text-gray-400 text-xs">Active Community</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Our Legacy
              </div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Two Decades of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Financial Reliability.</span>
              </h2>
              <p className="text-gray-400 text-base leading-relaxed max-w-lg">
                Founded with a vision to revolutionize collaborative savings, RK Rudra has stood
                as a pillar of financial security for thousands of families in
                Hyderabad since 2004.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Successful Auctions", value: "25k+", icon: TrendingUp },
                { label: "Community Rating", value: "4.9/5", icon: Users },
              ].map((stat, i) => (
                <div key={i} className="group p-6 rounded-xl bg-white/5 border border-gray-700 hover:border-primary/30 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <stat.icon size={20} />
                  </div>
                  <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-gray-400 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>

            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-gray-600 rounded-full font-medium text-sm transition-all flex items-center gap-2">
              <span>Read Our Story</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
