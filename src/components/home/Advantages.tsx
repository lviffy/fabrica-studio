"use client";

import Image from "next/image";
import Link from "next/link";

export function Advantages() {
    return (
        <section className="py-24 px-4 md:px-6 bg-white text-black">
            <div className="flex flex-col md:flex-row justify-between items-start mb-20">
                <div className="flex items-center gap-2 mb-4 md:mb-0">
                    <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
                        <div className="w-4 h-4 bg-black rounded-sm" />
                    </div>
                    <span className="font-medium">Why choose us</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-semibold max-w-2xl leading-tight tracking-tight">
                    Proven results for every project, <span className="opacity-60">with a focus on design and functionality.</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Call to Action Card */}
                <div className="md:col-span-4 bg-neutral-100 rounded-[30px] p-8 flex flex-col justify-between min-h-[400px]">
                    <p className="text-3xl font-semibold leading-tight tracking-tight max-w-[80%]">
                        Your digital journey begins with a conversation. Let's talk today.
                    </p>

                    <Link
                        href="/contact"
                        className="w-full bg-black text-white rounded-full h-14 flex items-center justify-between px-2 pl-6 group hover:bg-neutral-800 transition-colors"
                    >
                        <span className="font-semibold">Let's talk</span>
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:-rotate-45">
                                <path d="M1 1L11 1M11 1V11M11 1L1 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </Link>
                </div>

                {/* Image Card */}
                <div className="md:col-span-4 relative rounded-[30px] overflow-hidden min-h-[400px]">
                    <div className="absolute inset-0 bg-black/20 z-10" />
                    <Image
                        src="https://framerusercontent.com/images/KL17tuoYHz5TzXCqskqaMY5Iw0.jpg"
                        alt="Process"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute bottom-6 right-6 z-20 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
                        <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
                    </div>
                </div>

                {/* Stats Column */}
                <div className="md:col-span-4 flex flex-col gap-6">
                    <div className="bg-neutral-50 rounded-[30px] p-8 flex-1 flex flex-col justify-between">
                        <p className="text-xl md:text-2xl font-semibold leading-tight text-neutral-500">
                            <span className="text-black">No fluff, just results.</span> Thoughtful design and tools that make your work easier. We focus on smart design and useful features, project after project.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Stat 1 */}
                        <div className="bg-neutral-50 rounded-[30px] p-6 flex flex-col justify-between aspect-square">
                            <div className="flex justify-between items-start">
                                <span className="text-4xl font-semibold tracking-tighter">50+</span>
                                <span className="text-xs font-semibold opacity-40">01</span>
                            </div>
                            <p className="text-sm font-medium opacity-60 text-right mt-auto">Successful projects completed</p>
                        </div>

                        {/* Stat 2 */}
                        <div className="bg-neutral-50 rounded-[30px] p-6 flex flex-col justify-between aspect-square">
                            <div className="flex justify-between items-start">
                                <span className="text-4xl font-semibold tracking-tighter">99%</span>
                                <span className="text-xs font-semibold opacity-40">02</span>
                            </div>
                            <div>
                                <p className="text-sm font-medium opacity-60 text-right">Customer satisfaction rate</p>
                                <div className="flex justify-end gap-2 mt-4 opacity-40 grayscale">
                                    {/* Logos placeholder since I don't have SVGs handy, using circles */}
                                    <div className="w-8 h-4 bg-black rounded-full" />
                                    <div className="w-8 h-4 bg-black rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
