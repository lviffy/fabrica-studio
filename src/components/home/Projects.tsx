"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        name: "Boltshift.",
        year: "2025",
        image: "https://framerusercontent.com/images/TQUaM9GTresksymLH16ncQaPo.jpg",
        logo: "https://framerusercontent.com/images/uesNBJIRG5fZ2tDJzkhxXbuauQw.svg",
        slug: "boltshift"
    },
    {
        name: "Ephemeral.",
        year: "2025",
        image: "https://framerusercontent.com/images/r3DvXiPExOamPrqqTNfWM1K9o4.jpg",
        logo: "https://framerusercontent.com/images/PyQzA1IF3BF1gkVO1xuZHClY0c.svg",
        slug: "ephemeral"
    },
    {
        name: "Powersurge.",
        year: "2024",
        image: "https://framerusercontent.com/images/UPqJOHQLdYtNuK2jee5437Lno.jpg",
        logo: "https://framerusercontent.com/images/j2k0BUaOnC0jNyx5dP4hieQnFL4.svg",
        slug: "powersurge"
    },
    {
        name: "Mastermail.",
        year: "2024",
        image: "https://framerusercontent.com/images/HlvuJF9yIQ3Q8fP86EjFIq5ExE.jpg",
        logo: "https://framerusercontent.com/images/kH7hh1Be4txgKwuTgZl3jpdZp8.svg",
        slug: "mastermail"
    },
    {
        name: "Warpspeed.",
        year: "2023",
        image: "https://framerusercontent.com/images/0KGHRsvK3go8kOWricmADe0VWs.jpg",
        logo: "https://framerusercontent.com/images/JLzkuHlsyLa7VHaiV3ZJ16kiHhg.svg",
        slug: "warpspeed"
    },
    {
        name: "CloudWatch.",
        year: "2020",
        image: "https://framerusercontent.com/images/qiCYd5j7XEmvyt9BpMldI3mNm8.jpg",
        logo: "https://framerusercontent.com/images/zCY9SAfJ5gqVMOvrM5dzywwbU.svg",
        slug: "cloudwatch"
    }
];

export function Projects() {
    return (
        <section className="py-24 bg-neutral-100 text-black rounded-t-[30px] md:rounded-t-[60px] translate-y-0 z-10 relative">
            <div className="max-w-6xl mx-auto px-4">
                {/* Projects Header Area */}
                <div className="flex flex-col items-center justify-center relative mb-16">
                    {/* (27) - Absolute Left */}
                    <div className="md:absolute left-0 top-0 text-sm font-medium text-neutral-400 mb-4 md:mb-0">
                        (27)
                    </div>

                    {/* Main Title Center */}
                    <div className="flex flex-col items-center">
                        <h2 className="text-6xl md:text-9xl font-bold tracking-tighter mb-4">Projects.</h2>
                    </div>

                    {/* Description - Absolute Right */}
                    <div className="md:absolute right-0 top-1/2 md:-translate-y-1/2 max-w-[200px] text-right mt-8 md:mt-0">
                        <p className="text-sm font-medium text-neutral-500 leading-relaxed">
                            We've helped businesses across industries achieve their goals. Here are some of our recent projects.
                        </p>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projects.map((project) => (
                        <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            className="group relative"
                        >
                            {/* Card Header - Separate white rounded box */}
                            <div className="flex justify-between items-center px-4 py-3 bg-white rounded-[10px] mb-1">
                                <div className="flex items-baseline gap-2">
                                    <span className="font-semibold text-base text-black">{project.name}</span>
                                    <span className="text-xs font-medium text-neutral-400">/ {project.year}</span>
                                </div>

                                {/* Dots - Colorful on hover */}
                                <div className="flex gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 transition-colors duration-300 group-hover:bg-red-500" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 transition-colors duration-300 group-hover:bg-yellow-500" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 transition-colors duration-300 group-hover:bg-green-500" />
                                </div>
                            </div>

                            {/* Card Image - With white padding container */}
                            <div className="bg-white rounded-[12px] p-1 overflow-hidden">
                                <div className="relative aspect-[4/3] w-full rounded-[10px] overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        fill
                                        className="object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:blur-[6px]"
                                    />
                                    {/* Logo Overlay - Centered on image */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="relative w-32 h-10 transition-transform duration-500 ease-out group-hover:scale-75">
                                            <Image
                                                src={project.logo}
                                                alt={`${project.name} logo`}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
