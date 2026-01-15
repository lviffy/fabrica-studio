"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instrument_Serif, Inter } from "next/font/google";

const instrumentSerif = Instrument_Serif({
    weight: ["400"],
    style: ["italic"],
    subsets: ["latin"],
});

const inter = Inter({
    subsets: ["latin"],
});

export function Hero() {
    return (
        <section className="relative px-1.5 pt-[48px] pb-1.5 z-20">
            {/* Main Container with rounded corners */}
            <div className="relative w-full min-h-[calc(100vh-56px)] rounded-[20px] md:rounded-[24px] overflow-hidden flex flex-col justify-between p-6 md:p-10 text-white shadow-2xl">

                {/* Background Video inside the container */}
                <div className="absolute inset-0 -z-20">
                    <video
                        src="/fabrica.mp4"
                        poster="https://framerusercontent.com/images/ZJ6HLYoAxMXsbBJCnggXHSRug.jpg"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Noise Overlay */}
                <div className="absolute inset-0 -z-10 opacity-[0.05] pointer-events-none overflow-hidden">
                    <div
                        className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%]"
                        style={{
                            backgroundImage: 'url("https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png")',
                            animation: 'grain 8s steps(10) infinite'
                        }}
                    />
                </div>
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes grain {
                        0%, 100% { transform: translate(0, 0); }
                        10% { transform: translate(-5%, -10%); }
                        20% { transform: translate(-15%, 5%); }
                        30% { transform: translate(7%, -25%); }
                        40% { transform: translate(-5%, 25%); }
                        50% { transform: translate(-15%, 10%); }
                        60% { transform: translate(15%, 0%); }
                        70% { transform: translate(0%, 15%); }
                        80% { transform: translate(3%, 35%); }
                        90% { transform: translate(-10%, 10%); }
                    }
                `}} />

                {/* Main Content */}
                <div className="w-full flex-1 flex flex-col relative">
                    {/* Title Area - fabrica® with inline circled R */}
                    <div className="w-full mt-4 md:mt-8 relative z-10">
                        <div className="flex items-start">
                            <h1 className={`text-[20vw] md:text-[17vw] leading-[0.85] font-bold tracking-[-0.04em] lowercase text-white ${inter.className}`}>
                                fabrica
                            </h1>
                            {/* Circled R - smaller and positioned at top right of text */}
                            <div className="relative flex items-center justify-center w-[5vw] md:w-[4vw] h-[5vw] md:h-[4vw] border-[0.25vw] border-white rounded-full mt-[2.5vw] ml-[0.5vw]">
                                <span className="text-[2.5vw] md:text-[2vw] font-bold leading-none">R</span>
                            </div>
                        </div>
                    </div>

                    {/* Studio Text - positioned center-right, no overlap */}
                    <div className="w-full flex justify-center md:justify-center md:pl-[15vw] mt-[1vw] md:mt-[0.5vw]">
                        <span
                            className={`text-[12vw] md:text-[8vw] font-normal tracking-[-0.02em] leading-none ${instrumentSerif.className}`}
                        >
                            Studio
                        </span>
                    </div>

                    {/* Services List - positioned on the right */}
                    <div className="absolute top-[5%] md:top-[15%] right-0 md:right-4 text-right flex flex-col gap-1 text-sm md:text-base font-medium leading-relaxed mt-[80px]">
                        <p className="text-white/90">Branding and Identity</p>
                        <p className="text-white/90">Social Media Marketing</p>
                        <p className="text-white/90">Web Design and Development</p>
                        <p className="text-white/90">SEO Optimization</p>
                    </div>

                    {/* Grid Markers / Plus Signs - Row 1 */}
                    <div className="absolute bottom-[25%] left-0 right-0 flex justify-between px-4 md:px-8 text-white/30 text-lg md:text-xl font-light pointer-events-none">
                        <span>+</span>
                        <span>+</span>
                        <span>+</span>
                        <span>+</span>
                    </div>
                </div>

                {/* Bottom Content Grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-end mt-auto">
                    {/* Left Text - Tagline */}
                    <div className="col-span-12 md:col-span-4">
                        <p className="text-sm md:text-[15px] leading-relaxed tracking-tight max-w-[280px]">
                            <span className="text-white font-bold">No generic websites. No empty marketing promises.</span>{" "}
                            <span className="text-white/60 font-normal">Just tools and strategies that help your business grow and your brand shine.</span>
                        </p>
                    </div>

                    {/* Center - Copyright */}
                    <div className="col-span-12 md:col-span-4 flex justify-center">
                        <div className="text-xs text-white/40 font-medium">
                            © 2025 fabrica® Studio
                        </div>
                    </div>

                    {/* Right Side: Team Card */}
                    <div className="col-span-12 md:col-span-4 flex justify-end">
                        <div className="group flex items-stretch gap-0 transition-all duration-300 hover:bg-white rounded-[16px]">
                            {/* Left Card - Image */}
                            <div className="bg-white rounded-[16px] p-1.5 flex items-center transition-all duration-300">
                                <div className="relative w-32 h-[160px] rounded-[12px] overflow-hidden shrink-0 bg-neutral-200">
                                    <Image
                                        src="https://framerusercontent.com/images/XBirhPxPnqDiGkAtvDrRCiK4pS8.jpg"
                                        alt="Team Lead"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Right Card - Content */}
                            <div className="bg-white rounded-[16px] p-5 pr-10 flex flex-col justify-center transition-all duration-300 grow">
                                <div className="text-sm font-bold text-neutral-700 uppercase tracking-wider">Team Lead</div>
                                <div className="text-sm text-neutral-400 font-medium">at fabrica®</div>
                                <div className="text-2xl font-bold text-black tracking-tight leading-tight mt-1 mb-4">Lauren Thompson</div>

                                <button className="bg-black text-white text-sm font-semibold rounded-full py-3 px-6 flex items-center gap-2 group/btn hover:bg-neutral-800 transition-colors w-fit">
                                    <span>Let's talk</span>
                                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
