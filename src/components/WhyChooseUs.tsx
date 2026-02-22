import { Eye, Clock, ShieldCheck, PiggyBank } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Transparent Process",
    desc: "Every auction and transaction is conducted with complete openness and accountability.",
  },
  {
    icon: Clock,
    title: "Timely Payouts",
    desc: "We ensure prompt disbursement of funds so our members can rely on their financial plans.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Management",
    desc: "Experienced team managing chit operations with the highest standards of governance.",
  },
  {
    icon: PiggyBank,
    title: "Money Saving",
    desc: "Structured savings discipline that helps families accumulate wealth over time.",
  },
];

const WhyChooseUs = () => (
  <section id="features" className="section-padding bg-muted">
    <div className="container-max">
      <div className="text-center mb-14">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Few Reasons Why People{" "}
          <span className="text-gold-gradient">Choosing Us!</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our commitment to transparency, timely service, and customer
          satisfaction sets us apart in the chit fund industry.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="bg-card rounded-xl p-6 shadow-sm card-hover group"
          >
            <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:gold-gradient transition-all duration-300">
              <Icon size={24} className="text-accent-foreground group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-2">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
