"use client";

import Image from "next/image";
import Link from "next/link";

export function Contact() {
    return (
        <section className="py-24 px-4 md:px-6 bg-[#0a0a0a] text-white rounded-t-[30px] md:rounded-t-[60px] -mt-10 z-40 relative overflow-hidden">
            {/* Background Texture/Image Overlay */}
            <div className="absolute inset-0 z-0 opacity-20">
                <Image
                    src="https://framerusercontent.com/images/XBirhPxPnqDiGkAtvDrRCiK4pS8.jpg"
                    alt="Background"
                    fill
                    className="object-cover grayscale"
                />
            </div>

            <div className="max-w-[1312px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Form Card */}
                <div className="bg-white text-black p-8 rounded-[30px] shadow-2xl">
                    <div className="flex justify-between items-start mb-8">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                    </div>

                    <h3 className="text-2xl font-semibold mb-6">Start a project</h3>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1 opacity-60">Name</label>
                            <input
                                type="text"
                                className="w-full bg-neutral-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1 opacity-60">Email</label>
                            <input
                                type="email"
                                className="w-full bg-neutral-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1 opacity-60">Message</label>
                            <textarea
                                rows={4}
                                className="w-full bg-neutral-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 resize-none"
                                placeholder="Tell us about your project..."
                            />
                        </div>

                        <button className="w-full bg-black text-white rounded-full py-4 font-semibold mt-2 hover:bg-neutral-800 transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Right Side - Content */}
                <div className="flex flex-col justify-center lg:items-end lg:text-right">
                    <h2 className="text-[12vw] lg:text-[150px] leading-[0.8] font-semibold tracking-tighter mb-8">
                        Let's<br />talk.
                    </h2>

                    <div className="flex flex-col lg:items-end gap-6">
                        <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-2 pr-6 rounded-full border border-white/10">
                            <div className="w-12 h-12 rounded-full overflow-hidden relative">
                                <Image
                                    src="https://framerusercontent.com/images/XBirhPxPnqDiGkAtvDrRCiK4pS8.jpg"
                                    alt="Contact person"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="text-left">
                                <div className="text-sm font-medium">Hello!</div>
                                <div className="text-xs opacity-60">Book a call</div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Link href="mailto:hello@fabrica.studio" className="px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors text-sm font-medium">
                                hello@fabrica.studio
                            </Link>
                            <Link href="/book" className="px-6 py-3 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors text-sm font-medium">
                                Schedule Call
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
