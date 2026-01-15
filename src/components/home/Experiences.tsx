"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";
import { IoAdd } from "react-icons/io5";
import { motion, useScroll, useTransform, useInView, animate } from "framer-motion";

const TestimonialRating = () => (
    <div className="flex gap-1 text-[#FFB02E] text-[10px]">
        {[...Array(5)].map((_, i) => (
            <BsStarFill key={i} />
        ))}
    </div>
);

const ScrollRevealSpan = ({ children }: { children: string }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.95", "end 0.5"]
    });

    const words = children.split(" ");

    return (
        <span ref={container}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);
                const color = useTransform(scrollYProgress, [start, end], ["#a3a3a3", "#000000"]);
                return (
                    <motion.span key={i} style={{ color }} className="inline-block mr-[0.25em]">
                        {word}
                    </motion.span>
                );
            })}
        </span>
    );
};

const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, value, {
                duration: 2,
                ease: "easeOut",
                onUpdate: (v) => setDisplayValue(v)
            });
            return () => controls.stop();
        }
    }, [isInView, value]);

    return (
        <span ref={ref}>
            {Math.floor(displayValue)}{suffix}
        </span>
    );
};

export function Experiences() {
    return (
        <section className="py-24 px-4 md:px-8 bg-[#F5F5F5] text-black overflow-hidden">
            <div className="max-w-[1312px] mx-auto">
                {/* Header Area */}
                <div className="flex flex-col items-center justify-center mb-24 relative">
                    <div className="absolute left-0 top-0 flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center text-white text-[10px]">
                            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 0V6M0 3H6" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                        </div>
                        <span className="font-medium text-sm">Testimonials</span>
                    </div>

                    <div className="text-center">
                        <h2 className="text-[5rem] md:text-[8rem] font-medium tracking-tight leading-[0.9]">
                            Experiences.
                        </h2>
                    </div>
                </div>

                {/* Grid Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-2">
                        <div className="bg-white rounded-xl p-8 h-full flex flex-col justify-between">
                            <div className="mb-12">
                                <div className="flex items-end gap-1 mb-2">
                                    <span className="text-6xl font-medium tracking-tighter">4.9</span>
                                    <span className="text-xl text-neutral-400 mb-2">/5</span>
                                </div>
                                <p className="text-neutral-500 leading-tight text-[15px] font-medium max-w-[200px]">
                                    We've delivered <span className="text-black">56+ projects</span> that help
                                    companies generate real results.
                                </p>
                            </div>

                            <div>
                                <div className="mb-6">
                                    <h3 className="font-bold text-lg mb-3">fabrica®</h3>
                                    <div className="flex items-center gap-2 mb-2">
                                        {/* Simulated Avatars */}
                                        <div className="flex -space-x-3">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className="w-8 h-8 rounded-full bg-neutral-200 border-2 border-white overflow-hidden relative">
                                                    <Image
                                                        src={`https://framerusercontent.com/images/XBirhPxPnqDiGkAtvDrRCiK4pS8.jpg`}
                                                        alt="User"
                                                        fill
                                                        className="object-cover opacity-80"
                                                    />
                                                </div>
                                            ))}
                                            <div className="w-8 h-8 rounded-full bg-black border-2 border-white flex items-center justify-center text-white text-[10px] z-10">
                                                56+
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-xs text-neutral-500 font-medium">Trusted by clients worldwide</p>
                                </div>
                                <button className="w-full bg-[#0a0a0a] text-white rounded-full py-4 px-6 font-medium hover:bg-neutral-800 transition-colors">
                                    Leave a review
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-2 transition-all duration-300 hover:gap-0 group cursor-pointer">
                        <div className="bg-white rounded-xl p-5 flex items-center gap-4 transition-all duration-300 group-hover:rounded-b-none">
                            <div className="w-12 h-12 rounded-xl overflow-hidden relative shrink-0">
                                <Image
                                    src="https://framerusercontent.com/images/XBirhPxPnqDiGkAtvDrRCiK4pS8.jpg"
                                    alt="James Carter"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">James Carter</h4>
                                <p className="text-xs text-neutral-400 font-medium">Wilson & Co</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-8 grow flex flex-col justify-between relative transition-all duration-300 group-hover:rounded-t-none">
                            <div className="absolute top-6 right-6 text-black transition-transform duration-300 group-hover:rotate-90">
                                <IoAdd className="text-xl" />
                            </div>
                            <div className="mb-8">
                                <TestimonialRating />
                            </div>
                            <p className="text-2xl font-medium tracking-tight leading-tight">
                                Incredible team! They delivered exactly what we needed, on time and beyond expectations.
                            </p>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-2 transition-all duration-300 hover:gap-0 group cursor-pointer">
                        <div className="bg-white rounded-xl p-8 grow flex flex-col justify-between relative transition-all duration-300 group-hover:rounded-b-none">
                            <p className="text-2xl font-medium tracking-tight leading-tight mb-8">
                                A smooth process from start to finish. Highly professional team!
                            </p>
                            <div>
                                <TestimonialRating />
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-5 flex items-center gap-4 transition-all duration-300 group-hover:rounded-t-none">
                            <div className="w-12 h-12 rounded-xl overflow-hidden relative shrink-0">
                                <Image
                                    src="https://framerusercontent.com/images/XBirhPxPnqDiGkAtvDrRCiK4pS8.jpg"
                                    alt="Emily Davis"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Emily Davis</h4>
                                <p className="text-xs text-neutral-400 font-medium">StartUp Hub</p>
                            </div>
                            <div className="ml-auto text-black transition-transform duration-300 group-hover:rotate-90">
                                <IoAdd className="text-xl" />
                            </div>
                        </div>
                    </div>

                    {/* Column 4 */}
                    <div className="flex flex-col gap-2 transition-all duration-300 hover:gap-0 group cursor-pointer">
                        <div className="bg-white rounded-xl p-5 flex items-center gap-4 transition-all duration-300 group-hover:rounded-b-none">
                            <div className="w-12 h-12 rounded-xl overflow-hidden relative shrink-0">
                                <Image
                                    src="https://framerusercontent.com/images/XBirhPxPnqDiGkAtvDrRCiK4pS8.jpg"
                                    alt="Anna Martinez"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Anna Martinez</h4>
                                <p className="text-xs text-neutral-400 font-medium">Marketing Director</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-8 grow flex flex-col justify-between relative transition-all duration-300 group-hover:rounded-t-none">
                            <div className="absolute top-6 right-6 text-black transition-transform duration-300 group-hover:rotate-90">
                                <IoAdd className="text-xl" />
                            </div>
                            <div className="mb-8">
                                <TestimonialRating />
                            </div>
                            <p className="text-2xl font-medium tracking-tight leading-tight">
                                Our new branding is exactly what we envisioned—clean, modern, and unique. #1 in our industry.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats & Approach Section */}
                <div className="mt-32">
                    {/* Stats Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
                        <div>
                            <h3 className="text-6xl font-medium tracking-tighter mb-4">
                                <AnimatedCounter value={3} suffix="m+" />
                            </h3>
                            <p className="text-sm text-neutral-500 font-medium max-w-[150px] leading-tight">Ad impressions managed</p>
                        </div>
                        <div>
                            <h3 className="text-6xl font-medium tracking-tighter mb-4">
                                <AnimatedCounter value={27} suffix="+" />
                            </h3>
                            <p className="text-sm text-neutral-500 font-medium max-w-[150px] leading-tight">Successful projects launched</p>
                        </div>
                        <div>
                            <h3 className="text-6xl font-medium tracking-tighter mb-4">
                                <AnimatedCounter value={98} suffix="%" />
                            </h3>
                            <p className="text-sm text-neutral-500 font-medium max-w-[150px] leading-tight">Client satisfaction rate</p>
                        </div>
                        <div>
                            <h3 className="text-6xl font-medium tracking-tighter mb-4">
                                <AnimatedCounter value={50} suffix="k+" />
                            </h3>
                            <p className="text-sm text-neutral-500 font-medium max-w-[150px] leading-tight">Monthly visitors driven through SEO</p>
                        </div>
                    </div>

                    {/* Divider */}
                    <motion.div
                        className="w-full h-px bg-neutral-200 mb-24 origin-left"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    ></motion.div>

                    {/* Approach Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12">
                        {/* Left: Brand */}
                        <div>
                            <h4 className="font-bold text-lg mb-4">fabrica®</h4>
                            <p className="text-xs text-neutral-500 font-medium max-w-[200px] leading-relaxed">
                                Every project we take on is designed for long-term success.
                            </p>
                        </div>

                        {/* Right: Text */}
                        <div>
                            <h3 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight mb-8 max-w-4xl">
                                <span className="text-neutral-400">Our approach is simple: </span>
                                <ScrollRevealSpan>
                                    we focus on functionality, speed, and clarity, ensuring that every project serves a clear purpose without unnecessary complexity.
                                </ScrollRevealSpan>
                            </h3>
                            <p className="text-neutral-500 text-lg leading-relaxed max-w-2xl">
                                We don't overpromise or use flashy marketing language. We simply build well-designed, functional websites and strategies that help businesses succeed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
