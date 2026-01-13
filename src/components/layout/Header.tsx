"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { MenuOverlay } from "./MenuOverlay";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle scrolling
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 p-4 md:p-6 flex items-center justify-between pointer-events-none mix-blend-difference text-white"
                )}
            >
                <Link href="/" className="pointer-events-auto">
                    <span className="font-sans font-semibold text-xl tracking-tighter">
                        fabrica®
                    </span>
                </Link>

                {/* Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="pointer-events-auto flex items-center justify-center w-[30px] h-[30px] rounded-[15px] bg-neutral-900/80 backdrop-blur-md border border-white/10 text-white group"
                >
                    <div className="flex flex-col gap-[4px] items-center justify-center">
                        {/* Hamburger Icon */}
                        <div className={cn("w-3 h-[1px] bg-current transition-all", isOpen && "rotate-45 translate-y-[2.5px]")} />
                        <div className={cn("w-3 h-[1px] bg-current transition-all", isOpen && "-rotate-45 -translate-y-[2.5px]")} />
                    </div>
                </button>
            </header>

            <AnimatePresence>
                {isOpen && <MenuOverlay onClose={() => setIsOpen(false)} />}
            </AnimatePresence>
        </>
    );
}
