"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const faqs = [
    {
        id: "01",
        question: "What services does fabrica® offer?",
        answer: "We specialize in web design and development, branding and identity, social media marketing, and SEO optimization. Our comprehensive approach ensures all aspects of your digital presence work together seamlessly."
    },
    {
        id: "02",
        question: "How long does a typical project take?",
        answer: "Project timelines vary based on scope and complexity. A basic website typically takes 2-4 weeks, while comprehensive branding and development projects can take 6-12 weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
        id: "03",
        question: "What is your design process?",
        answer: "Our process includes discovery, strategy, design, development, and launch phases. We start by understanding your goals and audience, then create strategic solutions through iterative design with regular client feedback."
    },
    {
        id: "04",
        question: "Do you offer ongoing support?",
        answer: "Yes, we offer various maintenance and support packages to keep your digital presence running smoothly. This includes regular updates, security monitoring, content updates, and performance optimization."
    },
    {
        id: "05",
        question: "How do you handle revisions?",
        answer: "Each package includes a set number of revision rounds. We work closely with you throughout the process to ensure the final result matches your vision. Additional revisions can be arranged if needed."
    }
];

export function FAQ() {
    const [openId, setOpenId] = useState<string | null>("01");

    return (
        <section className="py-24 px-4 md:px-6 bg-background text-black">
            <div className="max-w-[1312px] mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-16">
                    <div className="flex flex-col gap-2 mb-6 md:mb-0">
                        <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
                            <div className="w-4 h-4 bg-black rounded-sm" />
                        </div>
                        <span className="font-medium">Questions</span>
                    </div>

                    <div className="flex flex-col items-end">
                        <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter">FAQ.</h2>
                        <span className="text-xl md:text-2xl font-semibold opacity-40">({faqs.length})</span>
                    </div>
                </div>

                {/* FAQ Accordion */}
                <div className="flex flex-col">
                    {faqs.map((faq) => (
                        <div key={faq.id} className="border-t border-black/10 last:border-b">
                            <button
                                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                                className="w-full py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left group"
                            >
                                <div className="flex items-baseline gap-4">
                                    <span className="opacity-40 font-mono text-sm">({faq.id})</span>
                                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight group-hover:opacity-70 transition-opacity">
                                        {faq.question}
                                    </h3>
                                </div>
                                <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center relative shrink-0">
                                    <div className={cn("absolute w-3 h-[1px] bg-black transition-transform duration-300", openId === faq.id ? "rotate-180" : "rotate-0")} />
                                    <div className={cn("absolute w-3 h-[1px] bg-black transition-transform duration-300", openId === faq.id ? "rotate-180" : "rotate-90")} />
                                </div>
                            </button>
                            <AnimatePresence>
                                {openId === faq.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-8 pl-0 md:pl-16">
                                            <p className="text-lg text-neutral-500 leading-relaxed max-w-3xl">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
