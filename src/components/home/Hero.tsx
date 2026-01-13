"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-between pt-32 px-4 md:px-6 pb-6 text-white overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 -z-20">
                <video
                    src="https://framerusercontent.com/assets/G0NwzP4bivPvK55b3ubxNslUs.mp4"
                    poster="https://framerusercontent.com/images/ZJ6HLYoAxMXsbBJCnggXHSRug.jpg"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover filter grayscale opacity-70"
                />
            </div>
            {/* Noise Overlay */}
            <div
                className="absolute inset-0 -z-10 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: 'url("https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png")' }}
            ></div>

            {/* Main Content */}
            <div className="w-full flex-1 flex flex-col">
                {/* Title Area */}
                <div className="w-full flex flex-col md:flex-row items-end justify-between">
                    <div className="w-full">
                        <h1 className="text-[18vw] leading-[0.8] font-semibold tracking-tighter uppercase font-sans">
                            fabrica
                        </h1>
                        <div className="flex justify-end pr-4 md:pr-10 -mt-4 md:-mt-10">
                            <span className="text-3xl md:text-5xl font-semibold tracking-tight">Studio</span>
                        </div>
                    </div>
                </div>

                {/* Services List (Right Aligned) */}
                <div className="w-full flex justify-end mt-10 md:mt-0 md:absolute md:top-[40%] md:right-6">
                    <div className="flex flex-col gap-2 text-right text-sm md:text-base font-medium opacity-80">
                        <p>Branding and Identity</p>
                        <p>Social Media Marketing</p>
                        <p>Web Design and Development</p>
                        <p>SEO Optimization</p>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-end mt-10">
                <div className="max-w-2xl">
                    <h3 className="text-2xl md:text-4xl font-semibold leading-tight tracking-tight">
                        No generic websites. No empty marketing promises. <span className="opacity-70">Just tools and strategies that help your business grow and your brand shine.</span>
                    </h3>
                    <div className="mt-8 text-sm opacity-60">
                        © 2025 fabrica® Studio
                    </div>
                </div>

                <div className="w-full flex justify-end">
                    <div className="w-full max-w-sm bg-white rounded-2xl p-2 text-black flex items-center gap-4">
                        <div className="relative w-20 h-24 rounded-xl overflow-hidden shrink-0">
                            <Image
                                src="https://framerusercontent.com/images/XBirhPxPnqDiGkAtvDrRCiK4pS8.jpg"
                                alt="Team Lead"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-1 pr-2">
                            <div className="text-sm font-semibold">Team Lead</div>
                            <div className="text-xs text-neutral-500 font-semibold mb-2">at fabrica®</div>
                            <div className="text-lg font-bold leading-none">Lauren Thompson</div>
                        </div>
                        <div className="flex flex-col gap-2 pr-2">
                            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                                {/* Arrow Icon */}
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
