"use client";
import { motion } from "framer-motion";

const AboutUsSection = () => {
    return (
        <section className="relative flex flex-col md:flex-row items-center justify-between w-full min-h-[90vh] px-8 md:px-20 py-16 bg-transparent overflow-hidden text-(--foreground)">
            <motion.div
                className="relative z-10 flex-1 max-w-xl text-center md:text-left"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <h2 className="text-4xl md:text-5xl font-bold tracking-wide mb-6">
                    Oh <span className="text-(--mountain-3)">About</span> Me
                </h2>

                <p className="text-base md:text-lg opacity-80 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    ac sapien quis nunc aliquet tincidunt. In vel justo eu odio tincidunt
                    tincidunt. Sed vitae magna sapien. Quisque ac malesuada leo. Integer
                    vulputate libero ut magna fringilla, ut tincidunt neque feugiat.
                </p>

                <motion.div
                    className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 1 }}
                >
                    {[
                        "JavaScript",
                        "TypeScript",
                        "Python",
                        "React",
                        "Next.js",
                        "Django",
                        "Node.js",
                        "Tailwind",
                    ].map((lang, i) => (
                        <motion.div
                            key={i}
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: "rgba(255,255,255,0.5)",
                            }}
                            className="text-sm md:text-base px-4 py-2 rounded-lg border bg-red-50 border-white/10 backdrop-blur-sm cursor-default transition-all duration-200 text-center"
                        >
                            {lang}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div
                className="relative flex-1 flex justify-center md:justify-end items-center mt-16 md:mt-0"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="absolute bottom-0 right-0 w-[400px] h-[500px] opacity-80 pointer-events-none">
                    <img src="bg/Samurai.jpeg" alt="Samurai" className="w-full h-full object-contain" /> 
                </div>

                <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10 w-[220px] h-[260px] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)] backdrop-blur-sm"
                    style={{
                        background:
                            "linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                    }}
                >
                     <img src="ME.jpg" alt="Master Gen" className="w-full h-full object-hover" />
                </motion.div>
            </motion.div>

            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/2 to-transparent pointer-events-none" />
            <div className="absolute -bottom-20 left-0 w-[300px] h-[300px] bg-accent/20 blur-[100px] rounded-full pointer-events-none" />
        </section>
    );
};

export default AboutUsSection;
