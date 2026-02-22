import { ArrowRight } from "lucide-react";
import servicesPlans from "@/assets/services-plans.jpg";
import servicesSavings from "@/assets/services-savings.jpg";
import servicesAuction from "@/assets/services-auction.jpg";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Chit Plan Savings",
    desc: "Systematic monthly savings frameworks engineered for consistent capital accumulation.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop",
  },
  {
    title: "Business Growth",
    desc: "Capital injection strategies for entrepreneurs through low-interest collaborative funding.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    title: "Home Auctions",
    desc: "Transparent auction mechanisms designed to maximize returns for our valued members.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
  },
  {
    title: "Wealth Management",
    desc: "Expert guidance on leveraging chit fund dividends for long-term family wealth building.",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden px-6 lg:px-8">
      <div className="container-max relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-4">
              Our Expertise
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-5xl font-bold text-navy leading-tight">
              Sophisticated Solutions for <br />
              <span className="text-secondary">Financial Growth.</span>
            </h2>
          </div>
          <button className="hidden lg:flex items-center gap-2 text-navy font-medium text-sm hover:text-primary transition-colors">
            See All Services <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-[420px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="font-heading text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.desc}
                </p>
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
