"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const services = [
    {
        id: "001",
        title: "Web design and development",
        description: "Modern, responsive, and user-friendly websites designed to engage visitors and drive conversions.",
        tags: ["Packaging design", "Logo design", "Rebranding", "Typography", "Guidelines", "Visual identity"],
        images: ["https://framerusercontent.com/images/vGSJoy0fkCYvuK5CETUzS64NNo.jpg", "https://framerusercontent.com/images/6xxZ3D6rnu26P86nUVvj2eanCY.jpg", "https://framerusercontent.com/images/6girwIRKdg1doDEWAHr4oDIbroU.jpg"]
    },
    {
        id: "002",
        title: "Social media marketing",
        description: "Strategic, data-driven social media campaigns designed to build brand awareness and connect with your target audience.",
        tags: ["Content strategy", "Community management", "Paid advertising", "Analytics & reporting", "Platform optimization"],
        images: ["https://framerusercontent.com/images/DsMKi7qE5JNWO5UQxmeqZGDSOI.jpg", "https://framerusercontent.com/images/PTZo29JDyFUqhP5lmoOwf726M.jpg", "https://framerusercontent.com/images/2BxeG0o2qWf8AOHmXP5mvB7fXo.jpg"]
    },
    {
        id: "003",
        title: "SEO and content marketing",
        description: "Comprehensive search optimization and engaging content that increases visibility, drives organic traffic, and establishes thought leadership.",
        tags: ["Keyword research", "On-page optimization", "Content creation", "Link building"],
        images: ["https://framerusercontent.com/images/qQlR5lTiRYzT2lPzSWLLVkcgH6Y.jpg", "https://framerusercontent.com/images/PzUf5VcgXOfitprgtvScN6spik.jpg", "https://framerusercontent.com/images/7HAgaIAjq6jlYJoi8ME87oXs6w.jpg"]
    },
    {
        id: "004",
        title: "Branding and identity",
        description: "Distinctive, memorable brand experiences that communicate your values and create emotional connections with your customers.",
        tags: ["Brand strategy", "Logo design", "Brand voice", "Color systems"],
        images: ["https://framerusercontent.com/images/9hTP0obDSaEcVCyC5kaHbx7FfI.jpg", "https://framerusercontent.com/images/zhgLgjCtsbVWTYRQuFeBf3XoW6c.jpg", "https://framerusercontent.com/images/OvxlgM3dgsl1n9Hl1FAnutk3YQ.jpg"]
    }
];

export function Services() {
    const [openId, setOpenId] = useState<string | null>("001");

    return (
        <section className="py-24 px-4 md:px-6 bg-[#0a0a0a] text-white rounded-t-[30px] md:rounded-t-[60px] -mt-10 z-20 relative">
            <div className="flex justify-between items-start mb-20">
                <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-sm rotate-90" />
                    </div>
                    <span className="font-medium">What we do</span>
                </div>

                <div className="flex flex-col items-end">
                    <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter">Services.</h2>
                    <span className="text-xl md:text-2xl font-semibold opacity-40">(4)</span>
                </div>
            </div>

            <div className="flex flex-col">
                {services.map((service) => (
                    <div key={service.id} className="border-t border-white/10 last:border-b">
                        <button
                            onClick={() => setOpenId(openId === service.id ? null : service.id)}
                            className="w-full py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left group"
                        >
                            <div className="flex items-baseline gap-4">
                                <span className="opacity-40 font-mono text-sm">({service.id})</span>
                                <h3 className="text-2xl md:text-4xl font-semibold tracking-tight group-hover:opacity-70 transition-opacity">
                                    {service.title}
                                </h3>
                            </div>
                            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center relative">
                                <div className={cn("absolute w-3 h-[1px] bg-white transition-transform duration-300", openId === service.id ? "rotate-180" : "rotate-0")} />
                                <div className={cn("absolute w-3 h-[1px] bg-white transition-transform duration-300", openId === service.id ? "rotate-180" : "rotate-90")} />
                            </div>
                        </button>
                        <AnimatePresence>
                            {openId === service.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="pb-12 pt-4 pl-0 md:pl-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
                                        <div className="lg:col-span-5 flex flex-col gap-8 text-neutral-400">
                                            <p className="text-lg leading-relaxed">{service.description}</p>

                                            <div>
                                                <p className="text-sm font-medium text-white mb-4 opacity-60">Categories</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {service.tags.map(tag => (
                                                        <span key={tag} className="px-4 py-2 rounded-full border border-white/10 text-sm hover:bg-white hover:text-black transition-colors cursor-default">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                    <span className="w-8 h-8 rounded-full bg-neutral-800 text-xs flex items-center justify-center">{Math.floor(Math.random() * 5) + 3}+</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="lg:col-span-7 flex gap-4">
                                            {service.images.map((img, idx) => (
                                                <div key={idx} className={cn("relative rounded-xl overflow-hidden aspect-square h-[200px] w-[200px] shrink-0 border border-white/10", idx === 1 ? "mt-12 shadow-2xl" : "")}>
                                                    <Image src={img} alt="" fill className="object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}
