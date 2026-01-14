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
        images: ["https://framerusercontent.com/images/vGSJoy0fkCYvuK5CETUzS64NNo.jpg", "https://framerusercontent.com/images/6xxZ3D6rnu26P86nUVvj2eanCY.jpg"]
    },
    {
        id: "002",
        title: "Social media marketing",
        description: "Strategic, data-driven social media campaigns designed to build brand awareness and connect with your target audience.",
        tags: ["Content strategy", "Community management", "Paid advertising", "Analytics & reporting", "Platform optimization"],
        images: ["https://framerusercontent.com/images/DsMKi7qE5JNWO5UQxmeqZGDSOI.jpg", "https://framerusercontent.com/images/PTZo29JDyFUqhP5lmoOwf726M.jpg"]
    },
    {
        id: "003",
        title: "SEO and content marketing",
        description: "Comprehensive search optimization and engaging content that increases visibility, drives organic traffic, and establishes thought leadership.",
        tags: ["Keyword research", "On-page optimization", "Content creation", "Link building"],
        images: ["https://framerusercontent.com/images/qQlR5lTiRYzT2lPzSWLLVkcgH6Y.jpg", "https://framerusercontent.com/images/PzUf5VcgXOfitprgtvScN6spik.jpg"]
    },
    {
        id: "004",
        title: "Branding and identity",
        description: "Distinctive, memorable brand experiences that communicate your values and create emotional connections with your customers.",
        tags: ["Brand strategy", "Logo design", "Brand voice", "Color systems"],
        images: ["https://framerusercontent.com/images/9hTP0obDSaEcVCyC5kaHbx7FfI.jpg", "https://framerusercontent.com/images/zhgLgjCtsbVWTYRQuFeBf3XoW6c.jpg"]
    }
];

export function Services() {
    const [openIds, setOpenIds] = useState<Set<string>>(new Set(["001"]));
    const [rotations, setRotations] = useState<Record<string, number>>({ "001": 180 });

    const toggleService = (id: string) => {
        setOpenIds(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
        // Always increment rotation by 180 for clockwise spin
        setRotations(prev => ({
            ...prev,
            [id]: (prev[id] || 0) + 180
        }));
    };

    return (
        <section className="px-1.5 -mt-10 z-20 relative">
            <div className="py-24 px-6 md:px-10 bg-[#0a0a0a] text-white rounded-[20px] md:rounded-[24px]">
                <div className="max-w-[1400px] mx-auto">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-16">
                        {/* Left - What we do label */}
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                                    <path d="M4 0V8M0 4H8" stroke="white" strokeWidth="1.5" />
                                </svg>
                            </div>
                            <span className="text-sm font-medium text-white/80">What we do</span>
                        </div>

                        {/* Center - Services title */}
                        <div className="flex items-start justify-center flex-1">
                            <h2 className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight">
                                Services.
                            </h2>
                            <span className="text-lg md:text-xl font-medium text-white/50 ml-1 -mt-1">(4)</span>
                        </div>

                        {/* Empty right spacer for balance */}
                        <div className="w-24"></div>
                    </div>

                    {/* Services Accordion */}
                    <div className="flex flex-col">
                        {services.map((service) => (
                            <div key={service.id} className="border-t border-white/10 last:border-b">
                                <button
                                    onClick={() => toggleService(service.id)}
                                    className="w-full py-6 flex items-center justify-between gap-4 text-left group"
                                >
                                    {/* Left side - Number and Title (when collapsed) */}
                                    <div className="flex items-center gap-6">
                                        <span className="text-white/40 text-sm font-mono">({service.id})</span>
                                        {!openIds.has(service.id) && (
                                            <h3 className="text-xl md:text-2xl font-semibold tracking-tight group-hover:opacity-70 transition-opacity">
                                                {service.title}
                                            </h3>
                                        )}
                                    </div>

                                    {/* Right side - Expand/Collapse button */}
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 shrink-0">
                                        <div
                                            className="relative w-3 h-3 transition-transform duration-500"
                                            style={{ transform: `rotate(${rotations[service.id] || 0}deg)` }}
                                        >
                                            {/* Horizontal line (always visible - the minus) */}
                                            <span className="absolute top-1/2 left-0 w-full h-[2px] bg-white -translate-y-1/2" />
                                            {/* Vertical line (fades out when open to form minus) */}
                                            <span className={cn(
                                                "absolute top-0 left-1/2 w-[2px] h-full bg-white -translate-x-1/2 transition-all duration-300",
                                                openIds.has(service.id) ? "opacity-0 scale-0" : "opacity-100 scale-100"
                                            )} />
                                        </div>
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {openIds.has(service.id) && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pb-8 pt-2 grid grid-cols-12 gap-6 items-start">
                                                {/* Left - Number placeholder */}
                                                <div className="col-span-1">
                                                    {/* Empty for alignment with collapsed number */}
                                                </div>

                                                {/* Images */}
                                                <div className="col-span-2 flex gap-2">
                                                    {service.images.slice(0, 2).map((img, idx) => (
                                                        <div
                                                            key={idx}
                                                            className={cn(
                                                                "relative rounded-xl overflow-hidden w-14 h-14 shrink-0 bg-neutral-800",
                                                                idx === 1 && "mt-4"
                                                            )}
                                                        >
                                                            <Image src={img} alt="" fill className="object-cover" />
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Title and Description */}
                                                <div className="col-span-4 flex flex-col gap-3">
                                                    <h3 className="text-xl font-semibold tracking-tight">
                                                        {service.title}
                                                    </h3>
                                                    <p className="text-sm text-white/50 leading-relaxed max-w-md">
                                                        {service.description}
                                                    </p>
                                                </div>

                                                {/* Categories */}
                                                <div className="col-span-4 flex flex-col gap-3">
                                                    <span className="text-xs text-white/40 font-medium">Categories</span>
                                                    <div className="flex flex-wrap gap-2">
                                                        {service.tags.slice(0, 6).map(tag => (
                                                            <span
                                                                key={tag}
                                                                className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 hover:bg-white/10 transition-colors cursor-default"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                        {service.tags.length > 0 && (
                                                            <span className="w-7 h-7 rounded-full bg-white/10 text-xs flex items-center justify-center text-white/60">
                                                                {service.tags.length}+
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Right - Expand button placeholder */}
                                                <div className="col-span-1">
                                                    {/* Empty for alignment */}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div >
            </div >
        </section >
    );
}
