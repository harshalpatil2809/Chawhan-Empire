import React from "react";

const offers = [
    {
        title: "FREE AC",
        subtitle: "On Selected Apartments",
        icon: "❄️",
        description:
            "Get a premium air conditioner absolutely free with selected residential units.",
    },
    {
        title: "FREE WASHING MACHINE",
        subtitle: "Move-In Ready Offer",
        icon: "🫧",
        description:
            "Enjoy a complimentary washing machine with selected bookings for a limited time.",
    },
    {
        title: "MODULAR KITCHEN",
        subtitle: "Included With Your Home",
        icon: "🍳",
        description:
            "Upgrade your lifestyle with a thoughtfully designed modular kitchen at no extra cost.",
    },
    {
        title: "PREMIUM FURNISHING",
        subtitle: "Exclusive Booking Benefit",
        icon: "🛋️",
        description:
            "Selected homes come with premium furnishing benefits designed for modern living.",
    },
];

const Offer = () => {
    return (
        <section className="w-full bg-[var(--primary)] dark:bg-[#0C1422] py-20 px-5 md:px-10 lg:px-16">
            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <div className="mb-14 max-w-2xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-white/50">
                        Exclusive Benefits
                    </p>

                    <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
                        More Than Just
                        <span className="block text-white/50">A Home.</span>
                    </h2>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-white/50 md:text-base">
                        Book your dream home and unlock exclusive lifestyle benefits
                        designed to make your new beginning even better.
                    </p>
                </div>

                {/* Offers */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {offers.map((offer, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06]"
                        >
                            {/* Number */}
                            <div className="absolute right-5 top-5 text-xs text-white/20">
                                0{index + 1}
                            </div>

                            {/* Icon */}
                            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xl">
                                {offer.icon}
                            </div>

                            {/* Content */}
                            <div>
                                <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
                                    {offer.subtitle}
                                </p>

                                <h3 className="text-xl font-semibold tracking-tight text-white">
                                    {offer.title}
                                </h3>

                                <p className="mt-4 text-sm leading-6 text-white/45">
                                    {offer.description}
                                </p>
                            </div>

                            {/* Bottom line */}
                            <div className="mt-8 h-px w-full bg-white/10">
                                <div className="h-px w-0 bg-white transition-all duration-500 group-hover:w-full" />
                            </div>

                            {/* Learn more */}
                            <div className="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/50 transition-colors group-hover:text-white">
                                Explore Offer
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
                    <p className="text-sm text-white/40">
                        *Offers are subject to availability and selected properties.
                    </p>

                    <button className="group flex items-center gap-3 text-sm font-medium text-white">
                        View All Offers
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-white/40 group-hover:bg-white group-hover:text-black">
                            →
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Offer;