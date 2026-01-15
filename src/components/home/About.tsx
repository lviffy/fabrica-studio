"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IoAdd } from "react-icons/io5";

const features = [
    {
        number: "01",
        title: "The team that communicates every step",
        image: "https://framerusercontent.com/images/8qCqC2OsD0HTVtpCDKLzJGcjwUo.jpg?width=77&height=77"
    },
    {
        number: "02",
        title: "Customized solutions for your unique needs",
        image: "https://framerusercontent.com/images/je5LkQxtlpMk3QwDVyGCYFiOugM.jpg?width=77&height=77"
    },
    {
        number: "03",
        title: "Transparent pricing with no hidden fees",
        image: "https://framerusercontent.com/images/lEZwltTi9mwoiWVW7KioGvSAOLk.jpg?width=77&height=77"
    },
    {
        number: "04",
        title: "Proven track record with measurable results",
        image: "https://framerusercontent.com/images/xcjrZRfVBa6b3ruwbNh8aIRdak.jpg?width=77&height=77"
    }
];

export function About() {
    return (
        <section className="px-1.5 mb-2 z-10 relative">
            <div className="bg-[#f5f5f5] py-24 md:py-32 text-black rounded-[20px] md:rounded-[40px] overflow-hidden">
                <div className="max-w-[1312px] mx-auto px-4 md:px-6">
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row gap-4 md:gap-24 items-start mb-24 md:mb-32">
                        {/* Left Column - Tags */}
                        <div className="flex flex-col gap-8 mb-10 md:mb-0 shrink-0">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center text-white text-[10px]">
                                    <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 0V6M0 3H6" stroke="currentColor" strokeWidth="1.5" />
                                    </svg>
                                </div>
                                <span className="font-medium text-sm">About us</span>
                            </div>
                        </div>

                        {/* Right Column - Content */}
                        <div className="max-w-4xl w-full">
                            <div className="mb-6 font-semibold text-xl tracking-tight">fabrica®</div>
                            <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-8 leading-[0.95] -ml-1">
                                How we launch <span className="text-black/40">websites and marketing campaigns.</span>
                            </h2>
                            <p className="text-lg text-black max-w-xl leading-relaxed font-medium">
                                See how our team combines creativity, technology, and strategy to build powerful digital solutions.
                            </p>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1.5">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-5 rounded-xl h-full flex flex-col justify-between min-h-[140px]"
                            >
                                {/* Top Row */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex gap-[3px]">
                                        {[0, 1, 2, 3].map((dotIdx) => (
                                            <div
                                                key={dotIdx}
                                                className={`w-[7px] h-[7px] rounded-full ${dotIdx <= idx ? 'bg-black' : 'bg-neutral-200'}`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-[10px] font-bold text-black/40 pt-1">0{idx + 1}</span>
                                </div>

                                {/* Content */}
                                <div className="flex items-end gap-4">
                                    <div className="relative w-[50px] h-[50px] rounded-lg overflow-hidden shrink-0 bg-neutral-100">
                                        <Image
                                            src={feature.image}
                                            alt=""
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="text-[15px] font-medium leading-tight max-w-[140px] pb-1">
                                        {feature.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
