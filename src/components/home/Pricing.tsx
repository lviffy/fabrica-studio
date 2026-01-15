"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

const pricingPlans = [
    {
        name: "Basic",
        price: "$1,500",
        description: "Perfect for small businesses and startups looking to establish their digital presence.",
        features: [
            "Brand identity design",
            "Single page website",
            "Basic SEO setup",
            "Social media templates",
            "2 revision rounds"
        ],
        popular: false
    },
    {
        name: "Standard",
        price: "$3,500",
        description: "Ideal for growing businesses that need a comprehensive digital strategy.",
        features: [
            "Complete brand system",
            "Multi-page website",
            "Advanced SEO optimization",
            "Social media strategy",
            "Content marketing plan",
            "4 revision rounds"
        ],
        popular: true
    },
    {
        name: "Premium",
        price: "$7,500",
        description: "For established businesses seeking end-to-end digital transformation.",
        features: [
            "Full brand overhaul",
            "Custom web application",
            "Complete digital marketing",
            "Ongoing SEO management",
            "Analytics & reporting",
            "Priority support",
            "Unlimited revisions"
        ],
        popular: false
    }
];

export function Pricing() {
    return (
        <section className="py-24 px-4 md:px-6 bg-background text-black rounded-t-[30px] md:rounded-t-[60px] -mt-10 z-30 relative">
            <div className="max-w-[1312px] mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-16">
                    <div className="flex flex-col gap-2 mb-6 md:mb-0">
                        <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
                            <div className="w-4 h-4 bg-black rounded-sm" />
                        </div>
                        <span className="font-medium">Investment</span>
                    </div>

                    <div className="flex flex-col items-end">
                        <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter">Pricing.</h2>
                        <span className="text-xl md:text-2xl font-semibold opacity-40">(3)</span>
                    </div>
                </div>

                {/* Description */}
                <div className="max-w-3xl mb-16">
                    <h3 className="text-2xl md:text-4xl font-semibold leading-tight tracking-tight">
                        Transparent pricing,{" "}
                        <span className="opacity-50">
                            tailored to your business needs. Choose a package or let's create something custom.
                        </span>
                    </h3>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {pricingPlans.map((plan) => (
                        <div
                            key={plan.name}
                            className={cn(
                                "rounded-[30px] p-8 flex flex-col",
                                plan.popular
                                    ? "bg-[#0a0a0a] text-white"
                                    : "bg-neutral-50"
                            )}
                        >
                            {/* Plan Header */}
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h4 className="text-xl font-semibold mb-1">{plan.name}</h4>
                                    {plan.popular && (
                                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/10">
                                            Most Popular
                                        </span>
                                    )}
                                </div>
                                <span className="text-3xl font-semibold tracking-tight">{plan.price}</span>
                            </div>

                            {/* Description */}
                            <p className={cn(
                                "text-sm mb-8",
                                plan.popular ? "text-neutral-400" : "text-neutral-500"
                            )}>
                                {plan.description}
                            </p>

                            {/* Features */}
                            <ul className="flex-1 space-y-3 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-sm">
                                        <div className={cn(
                                            "w-5 h-5 rounded-full flex items-center justify-center",
                                            plan.popular ? "bg-white/10" : "bg-neutral-200"
                                        )}>
                                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <Link
                                href="/contact"
                                className={cn(
                                    "w-full rounded-full h-14 flex items-center justify-between px-2 pl-6 transition-colors",
                                    plan.popular
                                        ? "bg-white text-black hover:bg-neutral-200"
                                        : "bg-black text-white hover:bg-neutral-800"
                                )}
                            >
                                <span className="font-semibold">Get started</span>
                                <div className={cn(
                                    "w-10 h-10 rounded-full flex items-center justify-center",
                                    plan.popular ? "bg-black text-white" : "bg-white text-black"
                                )}>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M1 1L11 1M11 1V11M11 1L1 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Custom Project Note */}
                <div className="mt-12 text-center">
                    <p className="text-neutral-500">
                        Need something different?{" "}
                        <Link href="/contact" className="text-black font-semibold underline underline-offset-4">
                            Let's discuss your project
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
