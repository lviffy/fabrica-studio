"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SiNike, SiSony, SiSamsung, SiLg, SiPanasonic, SiPuma } from "react-icons/si";

const CLIENTS = [
    { name: "Nike", icon: SiNike },
    { name: "Sony", icon: SiSony },
    { name: "Samsung", icon: SiSamsung },
    { name: "LG", icon: SiLg },
    { name: "Panasonic", icon: SiPanasonic },
    { name: "Puma", icon: SiPuma },
];

export function ClientsSection() {
    // Scroll-linked animation for "scrubbing" effect
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"]
    });

    // Animate Y from -150px (deeper tuck) to 0
    // Delay opacity: Keep it 0 until it moves down a bit (0.2 progress) to avoid showing through rounded corners
    const y = useTransform(scrollYProgress, [0, 1], [-150, 0]);
    const opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

    return (
        <section
            ref={containerRef}
            className="w-full pb-20 pt-32 md:pt-60 bg-background relative z-10 -mt-24 md:-mt-32" // Negative margin to tuck behind Hero; Padding to push content down to visible area
        >
            <motion.div
                style={{ y, opacity }}
                className="w-full max-w-[1312px] mx-auto px-4 mb-8 flex justify-between items-end"
            >
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center text-white text-[10px]">
                        <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 0V6M0 3H6" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                    </div>
                    <span className="font-medium text-sm text-black">Our clients</span>
                </div>
                <span className="text-sm text-muted-foreground">(2018-2026)</span>
            </motion.div>

            <div className="container mx-auto px-4">
                <motion.div
                    style={{ y, opacity }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 w-full max-w-[1312px] mx-auto"
                >
                    {CLIENTS.map((client, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center w-full aspect-[4/3] bg-white rounded-2xl transition-colors duration-300"
                        >
                            <client.icon className="w-12 h-12 text-foreground/80" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
