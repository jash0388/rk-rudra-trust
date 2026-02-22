import { ArrowRight } from "lucide-react";
import servicesPlans from "@/assets/services-plans.jpg";
import servicesSavings from "@/assets/services-savings.jpg";
import servicesAuction from "@/assets/services-auction.jpg";
import servicesDisbursement from "@/assets/services-disbursement.jpg";

const services = [
  {
    img: servicesPlans,
    title: "Monthly Chit Plans",
    desc: "Structured chit schemes with fixed installments and durations to help members build disciplined savings.",
  },
  {
    img: servicesSavings,
    title: "Flexible Chit Values",
    desc: "Multiple chit amounts available to suit different financial capacities and goals.",
  },
  {
    img: servicesAuction,
    title: "Transparent Auction Process",
    desc: "Fair and well-managed bidding system ensuring clarity and equal opportunity.",
  },
  {
    img: servicesDisbursement,
    title: "Timely Fund Disbursement",
    desc: "Quick and reliable payouts to members when they win or complete the chit cycle.",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="container-max">
      <div className="text-center mb-14">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          We Provide Professional{" "}
          <span className="text-gold-gradient">Chit Fund Services</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(({ img, title, desc }) => (
          <div
            key={title}
            className="bg-card rounded-xl overflow-hidden shadow-sm card-hover group"
          >
            <div className="overflow-hidden h-48">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {desc}
              </p>
              <button className="inline-flex items-center gap-1 text-secondary text-sm font-semibold hover:gap-2 transition-all duration-200">
                Read More <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
