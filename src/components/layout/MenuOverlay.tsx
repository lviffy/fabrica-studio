"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Studio", href: "/studio" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export function MenuOverlay({ onClose }: { onClose: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#f5f5f5] text-[#0a0a0a] flex flex-col pt-20 px-4 md:px-6 pb-6 overflow-y-auto"
        >
            <nav className="flex-1 flex flex-col items-center justify-center gap-4">
                {navLinks.map((link, i) => (
                    <motion.div
                        key={link.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + i * 0.1 }}
                    >
                        <Link
                            href={link.href}
                            onClick={onClose}
                            className="text-3xl md:text-5xl font-semibold tracking-tighter hover:opacity-50 transition-opacity"
                        >
                            {link.name}
                        </Link>
                    </motion.div>
                ))}
            </nav>

            <div className="w-full flex flex-col md:flex-row justify-between items-end md:items-center border-t border-black/10 pt-6 mt-6">
                <div className="flex flex-col gap-1">
                    <span className="text-lg font-medium">(312) 555-2468</span>
                    <a href="mailto:hello@fabrica.com" className="text-2xl font-semibold tracking-tight">hello@fabrica.com</a>
                </div>

                <div className="flex gap-4 mt-4 md:mt-0 text-sm font-medium">
                    <Link href="/legal/privacy-policy" onClick={onClose}>Privacy Policy</Link>
                    <Link href="/legal/terms-of-service" onClick={onClose}>Terms of Service</Link>
                </div>

                <div className="mt-4 md:mt-0 text-sm opacity-60">
                    © 2025 fabrica® Studio
                </div>
            </div>
        </motion.div>
    );
}
