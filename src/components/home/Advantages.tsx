"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

function ScrollRevealText({ children, className }: { children: string; className?: string }) {
    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ["start 0.9", "start 0.6"],
    });

    const words = children.split(" ");

    return (
        <span ref={element} className={className}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                return (
                    <Word key={i} progress={scrollYProgress} range={[start, end]}>
                        {word}
                    </Word>
                );
            })}
        </span>
    );
}

const Word = ({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) => {
    const opacity = useTransform(progress, range, [0.1, 1]);
    return (
        <span className="relative inline-block mr-[0.3em] last:mr-0">
            <span className="absolute opacity-10">{children}</span>
            <motion.span style={{ opacity }}>{children}</motion.span>
        </span>
    );
};

export function Advantages() {
    return (
        <>
            <section className="sticky top-0 py-24 px-4 md:px-6 bg-[#f5f5f5] text-black z-10">
                <div className="max-w-[1288px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-20">
                        <div className="flex items-center gap-2 mb-4 md:mb-0">
                            <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center text-white text-[10px]">
                                <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 0V6M0 3H6" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                            </div>
                            <span className="font-medium text-sm">Why choose us</span>
                        </div>

                        <h2 className="text-2xl md:text-5xl font-semibold max-w-4xl leading-[1.1] tracking-tight">
                            <ScrollRevealText className="text-black">
                                Proven results for every project,
                            </ScrollRevealText>{" "}
                            <span className="text-black/40">with a focus on design and functionality.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {/* Image Card - Left Column */}
                        <div className="md:col-span-3 relative rounded-[30px] overflow-hidden min-h-[500px] md:min-h-[600px] group cursor-pointer">
                            <Image
                                src="https://framerusercontent.com/images/KL17tuoYHz5TzXCqskqaMY5Iw0.jpg"
                                alt="Process"
                                fill
                                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-sm"
                            />
                            {/* Plus icon */}
                            <div className="absolute top-6 right-6 z-20 w-8 h-8 bg-black rounded-full flex items-center justify-center text-white transition-transform duration-300 group-hover:rotate-90">
                                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                                    <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            {/* Hover text overlay */}
                            <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <p className="text-white text-xl font-semibold leading-snug mb-6">
                                    Your digital journey begins with a conversation. Let's talk today.
                                </p>
                                <button className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full py-3 px-5 flex items-center gap-3 w-fit hover:bg-white/30 transition-colors">
                                    <span>Let's talk</span>
                                    <div className="w-2 h-2 rounded-full bg-white" />
                                </button>
                            </div>
                        </div>

                        {/* Content & Stats - Right Column */}
                        <div className="md:col-span-7 md:col-start-6 flex flex-col gap-6">
                            <div className="rounded-[30px] flex flex-col justify-start items-end text-right mb-2">
                                <p className="text-lg md:text-xl font-medium leading-relaxed text-black/60 max-w-lg">
                                    <span className="text-black font-semibold">No fluff, just results.</span> Thoughtful design and tools that make your work easier. We focus on smart design and useful features, project after project.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-auto max-w-xl ml-auto">
                                {/* Stat 1 - Two components that connect on hover */}
                                <div className="group relative flex flex-col gap-1 rounded-[20px]">
                                    {/* Background fill on hover */}
                                    <div className="absolute inset-0 bg-white rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                    {/* Top Component - Number */}
                                    <div className="bg-white rounded-[20px] p-6 md:p-8 relative z-10 min-h-[100px]">
                                        <div className="flex justify-between items-start">
                                            <span className="text-4xl md:text-5xl font-semibold tracking-tighter">50+</span>
                                            <span className="text-xs font-medium text-black/30">01</span>
                                        </div>
                                    </div>
                                    {/* Bottom Component - Description */}
                                    <div className="bg-white rounded-[20px] p-6 md:p-8 relative z-10 min-h-[240px] flex flex-col justify-between">
                                        <p className="text-base font-medium text-black text-right leading-tight">Successful projects<br />completed</p>
                                        <p className="text-sm font-normal text-black/50 leading-relaxed mt-auto">We've delivered 50+ projects that help companies generate real results.</p>
                                    </div>
                                </div>

                                {/* Stat 2 - Two components that connect on hover */}
                                <div className="group relative flex flex-col gap-1 rounded-[20px]">
                                    {/* Background fill on hover */}
                                    <div className="absolute inset-0 bg-white rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                    {/* Top Component - Number */}
                                    <div className="bg-white rounded-[20px] p-6 md:p-8 relative z-10 min-h-[100px]">
                                        <div className="flex justify-between items-start">
                                            <span className="text-4xl md:text-5xl font-semibold tracking-tighter">95%</span>
                                            <span className="text-xs font-medium text-black/30">02</span>
                                        </div>
                                    </div>
                                    {/* Bottom Component - Description */}
                                    <div className="bg-white rounded-[20px] p-6 md:p-8 relative z-10 min-h-[240px] flex flex-col justify-between">
                                        <p className="text-base font-medium text-black text-right leading-tight">Customer<br />satisfaction rate</p>
                                        <p className="text-sm font-normal text-black/50 leading-relaxed mt-auto">Our clients consistently rate us highly for quality and communication.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

