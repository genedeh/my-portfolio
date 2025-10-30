"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
    { name: "Home", jp: "ホーム", link: "#home" },
    { name: "About Me", jp: "私について", link: "#about" },
    { name: "Skills", jp: "スキル", link: "#skills" },
    { name: "Projects", jp: "プロジェクト", link: "#projects" },
    { name: "Philosophy", jp: "哲学", link: "#philosophy" },
    { name: "Contact", jp: "連絡先", link: "#contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hovered, setHovered] = useState<number | null>(null);
    const [hash, setHash] = useState<string>("#home");

    useEffect(() => {
        if (typeof window === "undefined") return;
        const handleHashChange = () => {
            setHash(window.location.hash || "#home");
        };
        handleHashChange();
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 12 }}
            className="fixed top-0 left-0 w-full z-50 scroll-smooth"
        >
            <div className="w-full mx-auto px-6 sm:px-8 flex justify-between items-center h-16 rounded-ful backdrop-blur-sm">
                <motion.h1
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl font-semibold text-(--foreground) cursor-pointer"
                >
                    <div className="flex items-center space-x-3 cursor-pointer select-none">
                        <div className="w-14 h-10 bg-(--accent) text-(--background) rounded-lg flex items-center justify-center font-bold text-lg shadow-md">
                            KID
                        </div>
                        <h1 className="text-xl font-bold text-(--foreground)">
                            Chaos <span className="text-(--accent-strong)">Portfolio</span>
                        </h1>
                    </div>
                </motion.h1>

                <ul className="hidden md:flex space-x-10 text-(--foreground-light) relative">
                    {navItems.map((item, index) => (
                        <motion.li
                            key={item.name}
                            onHoverStart={() => setHovered(index)}
                            onHoverEnd={() => setHovered(null)}
                            whileHover={{ y: -2, scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 250, damping: 15 }}
                            className={`relative cursor-pointer transition-colors duration-200 ${hovered === index && "text-(--accent-soft)"
                                } ${item.link === hash
                                    ? "text-(--accent) font-semibold"
                                    : "hover:text-(--accent-strong)"
                                }`}
                        >
                            <a href={item.link} className="flex flex-col items-center">
                                <span>{hovered === index ? item.jp : item.name}</span>

                                {hovered === index && (
                                    <motion.span
                                        layoutId="underline"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-(--accent-strong) rounded-full"
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    />
                                )}
                            </a>
                        </motion.li>
                    ))}
                </ul>

                {!isOpen && (
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="md:hidden p-2 text-(--foreground)"
                        onClick={() => setIsOpen(true)}
                    >
                        <FiMenu size={26} />
                    </motion.button>
                )}
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 70, damping: 12 }}
                        className="fixed top-0 right-0 h-full w-64 bg-(--surface-dark) backdrop-blur-xl shadow-2xl border-l border-(--mist)/20 md:hidden flex flex-col"
                    >
                        <div className="flex justify-end p-4">
                            <motion.button whileTap={{ scale: 0.9 }} onClick={() => setIsOpen(false)}>
                                <FiX size={26} className="text-(--foreground)" />
                            </motion.button>
                        </div>

                        <ul className="flex flex-col items-start space-y-6 mt-8 pl-8 text-lg font-medium text-(--foreground)">
                            {navItems.map((item, i) => (
                                <motion.li
                                    key={item.name}
                                    whileHover={{ scale: 1.05, x: 6 }}
                                    transition={{ type: "spring", stiffness: 250, damping: 15 }}
                                    className={`cursor-pointer ${item.link === hash
                                            ? "text-(--accent) font-semibold"
                                            : "hover:text-(--accent-soft)"
                                        }`}
                                >
                                    <a
                                        href={item.link}
                                        className="flex flex-col transition-all text-white duration-200"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                        <span className="text-(--accent-strong) text-sm">{item.jp}</span>
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );

};

export default Navbar;
