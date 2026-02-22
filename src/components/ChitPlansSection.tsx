import { ArrowRight, Clock, PiggyBank } from "lucide-react";

const chitPlans = [
    {
        value: "₹25,00,000",
        duration: "50 Months",
        installment: "₹50,000",
        dividend: "₹12,500 (Avg)",
        popular: true,
    },
    {
        value: "₹10,00,000",
        duration: "40 Months",
        installment: "₹25,000",
        dividend: "₹6,250 (Avg)",
    },
    {
        value: "₹5,00,000",
        duration: "25 Months",
        installment: "₹20,000",
        dividend: "₹5,000 (Avg)",
    },
    {
        value: "₹2,50,000",
        duration: "25 Months",
        installment: "₹10,000",
        dividend: "₹2,500 (Avg)",
    },
];

const ChitPlansSection = () => {
    return (
        <section id="plans" className="section-padding bg-gray-50/50 relative overflow-hidden px-6 lg:px-8">
            <div className="container-max relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-4">
                        Investment Opportunities
                    </div>
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-5xl font-bold text-navy mb-4">
                        Strategic <span className="text-primary">Chit Portfolios.</span>
                    </h2>
                    <p className="text-gray-500 text-base leading-relaxed">
                        Select from our range of government-registered chit plans tailored
                        for your financial milestones.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {chitPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all ${plan.popular ? "ring-2 ring-primary/20" : "border border-gray-100"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-medium px-4 py-1 rounded-full">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <p className="text-gray-400 text-xs font-medium mb-2">Chit Value</p>
                                <h3 className="text-3xl font-bold text-navy">
                                    {plan.value}
                                </h3>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    { label: "Payable", value: plan.installment, icon: PiggyBank },
                                    { label: "Duration", value: plan.duration, icon: Clock },
                                    { label: "Dividend", value: plan.dividend, icon: PiggyBank },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded bg-gray-50 flex items-center justify-center text-gray-400">
                                                <item.icon size={14} />
                                            </div>
                                            <span className="text-gray-500 text-xs">{item.label}</span>
                                        </div>
                                        <span className="text-navy font-semibold text-sm">{item.value}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-3 rounded-xl font-medium text-sm transition-colors flex items-center justify-center gap-2 ${plan.popular
                                ? "bg-primary text-white hover:bg-secondary"
                                : "bg-gray-100 text-navy hover:bg-navy hover:text-white"
                                }`}>
                                Join Now <ArrowRight size={14} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChitPlansSection;
