"use client";
import { motion } from "framer-motion";

const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Django",
    "Node.js",
    "TailwindCSS",
    "Python",
];

const AboutUsSection = () => {
    return (
        <section
            id="about"
            className="relative flex flex-col md:flex-row items-center justify-between w-full min-h-[90vh] px-6 md:px-20 py-16 bg-transparent overflow-hidden text-black"
        >
            <motion.div
                initial={{ x: "-100%" }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute left-0 top-0 w-3 md:w-15 h-full bg-linear-to-b from-red-200/60 via-gray-400/70 to-red-950/60 shadow-lg rounded-r-xl"
            />
            <motion.div
                initial={{ x: "100%" }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute right-0 top-0 w-3 md:w-15 h-full bg-linear-to-b from-red-200/60 via-gray-400/70 to-red-950/60 shadow-lg rounded-l-xl"
            />

            <motion.div
                className="relative z-10 flex-1 max-w-xl text-center md:text-left"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <h2 className="text-4xl md:text-5xl font-bold tracking-wide mb-6">
                    About <span className="text-accent">Me</span>
                </h2>

                <p className="font-semibold md:text-lg opacity-80 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    ac sapien quis nunc aliquet tincidunt. In vel justo eu odio tincidunt
                    tincidunt. Sed vitae magna sapien. Quisque ac malesuada leo. Integer
                    vulputate libero ut magna fringilla, ut tincidunt neque feugiat.
                </p>

                {/* Animated Skills Grid */}
                <motion.div
                    className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.15 },
                        },
                    }}
                >
                    {skills.map((skill, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            whileHover={{
                                scale: 1.08,
                                backgroundColor: "var(--accent)",
                                color: "#fff",
                            }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="text-sm md:text-base px-4 py-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm cursor-default text-center transition-all duration-200"
                        >
                            {skill}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* RIGHT SIDE — Profile Card */}
            <motion.div
                className="relative flex-1 flex justify-center md:justify-end items-center mt-16 md:mt-0"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                {/* Floating Pulse Background */}
                <motion.div
                    className="absolute w-72 h-72 rounded-full bg-accent/10 blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.4, 0.6, 0.4],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Samurai Frame */}
                <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 w-[230px] h-[260px] rounded-2xl overflow-hidden border border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.1)] backdrop-blur-md"
                    style={{
                        background:
                            "linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                    }}
                >
                    <img
                        src="/ME.jpg"
                        alt="Master Gen"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </motion.div>

            {/* Ambient Glow */}
            <div className="absolute -bottom-20 left-10 w-[300px] h-[300px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
};

export default AboutUsSection;
