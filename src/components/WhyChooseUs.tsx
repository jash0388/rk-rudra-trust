import { Eye, Clock, ShieldCheck, PiggyBank, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Complete Transparency",
    desc: "Every auction and transaction is conducted with cryptographic openness and real-time accountability.",
  },
  {
    icon: Clock,
    title: "Instant Liquidity",
    desc: "We prioritize prompt disbursement, ensuring you have access to your funds exactly when planned.",
  },
  {
    icon: ShieldCheck,
    title: "Elite Governance",
    desc: "Managed by industry veterans following the highest standards of financial integrity and compliance.",
  },
  {
    icon: PiggyBank,
    title: "Smart Accumulation",
    desc: "A disciplined, goal-oriented savings framework engineered for long-term family wealth creation.",
  },
];

const WhyChooseUs = () => (
  <section id="features" className="section-padding bg-white relative overflow-hidden px-6 lg:px-8">
    <div className="container-max relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-4">
          Why Choose Us
        </div>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-5xl font-bold text-navy mb-4">
          Engineered for <br />
          <span className="text-primary">Financial Excellence.</span>
        </h2>
        <p className="text-gray-500 text-base leading-relaxed">
          RK Rudra combines decades of trust with modern financial efficiency
          to deliver a superior chit fund experience.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <Icon size={24} />
            </div>

            <h3 className="font-heading text-lg font-semibold text-navy mb-2">
              {title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
