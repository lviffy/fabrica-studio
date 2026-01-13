"use client";

import { motion } from "framer-motion";
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
        <section className="py-24 px-4 md:px-6 bg-white text-black rounded-t-[30px] md:rounded-t-[60px] translate-y-0 z-10 relative">
            <div className="flex flex-col md:flex-row justify-between items-start mb-16">
                <div className="flex items-baseline gap-2">
                    <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter">Projects.</h2>
                    <span className="text-xl md:text-2xl font-semibold opacity-40">(27)</span>
                </div>

                <div className="flex flex-col items-end gap-4 mt-6 md:mt-0">
                    <div className="text-xl font-semibold">©2025</div>
                    <p className="max-w-xs text-right text-lg font-medium opacity-60">
                        We’ve helped businesses across industries achieve their goals. Here are some of our recent projects.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="group relative bg-white rounded-2xl p-2 border border-black/5 hover:border-black/10 transition-colors"
                    >
                        {/* Project Header */}
                        <div className="flex justify-between items-center px-4 py-3">
                            <div className="font-semibold text-lg">{project.name}</div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1 opacity-40 text-sm font-medium">
                                    <span>/</span>
                                    <span>{project.year}</span>
                                </div>
                                <div className="flex gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-200" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-200" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-200" />
                                </div>
                            </div>
                        </div>

                        {/* Card Content */}
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white border border-black/5">
                            {/* Logo Overlay */}
                            <div className="absolute top-4 left-4 z-10 w-32 h-10">
                                <Image src={project.logo} alt={`${project.name} logo`} fill className="object-contain object-left" />
                            </div>

                            {/* Main Image */}
                            <div className="relative w-full h-full">
                                <div className="absolute inset-0 bg-black/15 z-[1]" />
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
