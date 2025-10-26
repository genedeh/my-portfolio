"use client";

import { motion } from "framer-motion";

const HomeSection = () => {
    return (
        <section
            id="home"
            className="relative w-full h-screen md:h-[90vh] overflow-hidden flex flex-col md:flex-row items-center justify-center md:justify-between px-6 sm:px-12 bg-transparent text-[var(--foreground)]"
        >
            <div className="absolute inset-0 bg-(--mist)/15 backdrop-blur-[1px]" />

            <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
                {typeof window !== 'undefined' && Array.from({ length: 12 }).map((_, i) => (
                    <motion.span
                        key={i}
                        className="absolute w-3 h-3 bg-(--accent) rounded-full opacity-60"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: -50,
                            scale: 0.8 + Math.random() * 0.6,
                        }}
                        animate={{
                            y: [null, window.innerHeight + 100],
                            x: [null, `+=${Math.random() * 100 - 50}`],
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 10 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </div>

                <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative z-10 text-center md:text-left max-w-xl space-y-4"
            >
                <motion.h1
                    className="text-5xl sm:text-6xl font-bold tracking-wide leading-tight drop-shadow-lg"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    Welcome to{" "}
                    <span className="text-(--accent)">Master Gen&apos;s</span>{" "}
                    Portfolio
                </motion.h1>

                <motion.p
                    className="text-lg sm:text-xl opacity-90 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                >
                    A harmony of <span className="text-(--accent-strong)">code</span>,
                    <span className="text-(--accent-strong)"> art</span>, and{" "}
                    <span className="text-(--accent-strong)">philosophy</span>.
                </motion.p>

                <motion.div
                    className="pt-6 flex flex-wrap gap-4 justify-center md:justify-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                >
                    <button className="px-6 py-2 cursor-pointer bg-(--accent) text-(--background) rounded-full shadow-md hover:bg-(--accent-strong) transition-all duration-300">
                        Explore My Work
                    </button>
                    <button className="px-6 py-2 cursor-pointer border border-(--accent) rounded-full hover:bg-(--accent) hover:text-(--background) transition-all duration-300">
                        Contact Me
                    </button>
                </motion.div>
            </motion.div>

            <motion.div
                className="relative z-10 hidden md:flex justify-end items-end flex-1"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
            >
                <div className="relative w-[400px] h-[400px] flex items-center justify-center">
                    <motion.div
                        className="absolute w-40 h-56 rounded-4xl bg-(--accent)/70 shadow-lg backdrop-blur-sm"
                        animate={{
                            y: [0, -10, 0],
                            scale: [1, 1.05, 1],
                            opacity: [0.9, 1, 0.9],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{ top: "20%", left: "10%" }}
                    />

                    <motion.div
                        className="absolute w-48 h-64 rounded-4xl bg-(--accent-strong)/60 shadow-lg backdrop-blur-sm"
                        animate={{
                            y: [0, -15, 0],
                            scale: [1, 1.04, 1],
                            opacity: [0.8, 1, 0.8],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5,
                        }}
                        style={{ top: "35%", left: "35%" }}
                    />

                    <motion.div
                        className="absolute w-36 h-48 rounded-4xl bg-(--mist)/70 shadow-md backdrop-blur-md"
                        animate={{
                            y: [0, -20, 0],
                            scale: [1, 1.06, 1],
                            opacity: [0.9, 1, 0.9],
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                        style={{ top: "50%", left: "60%" }}
                    />
                </div>
            </motion.div>

            <div className="absolute top-0 right-0 w-[250px] h-[250px] pointer-events-none">
                <img src="/bg/Scribe.png" alt="Sakura Tree" className="w-full h-full object-contain opacity-80" /> 
            </div>
        </section>
    );
};

export default HomeSection;
