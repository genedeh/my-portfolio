"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaWhatsapp, FaReact, FaGitAlt, FaPython, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiFigma, SiJavascript, SiDjango, SiLua, SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export default function AboutSection() {
    return (
        <section
            className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 sm:px-12 py-16 gap-12 bg-transparent text-(--background)"
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative flex justify-center items-center"
            >
                <div className="relative p-4 md:p-6 w-[280px] md:w-[320px] flex flex-col items-center">
                    <motion.img
                        src="/ME.jpg"
                        alt="Profile"
                        className="w-full h-auto rounded-2xl object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                    />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex-1 flex flex-col items-center md:items-center text-center mt-16 gap-6 max-w-3xl"
            >
                <h2 className="text-2xl text-white font-semibold">
                    Hi, I&apos;m <span className="text-(--accent)">Genesis Enedeh</span>
                </h2>

                {/* Description */}
                <p className="text-lg font-bold sm:text-xl leading-relaxed text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <span className="text-(--accent-strong)"> Lorem</span>
                    <span className="text-(--accent-strong)"> ipsum</span> dolor sit amet,
                    consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    <span className="italic"> Duis aute irure dolor</span> in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>

                {/* Contact icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex justify-center gap-6 mt-4 w-auto bg-white/20 backdrop-blur-md rounded-3xl shadow-xl p-4"
                >
                    <a href="https://wa.me/+2348129674178" target="_blank" rel="noreferrer">
                        <FaWhatsapp className="text-3xl text-green-500 hover:scale-110 transition-all duration-300" />
                    </a>
                    <a href="https://www.linkedin.com/in/genesis-enedeh-8b136833b/" target="_blank" rel="noreferrer">
                        <FaLinkedin className="text-3xl text-blue-600 hover:scale-110 transition-all duration-300" />
                    </a>
                    <a href="https://github.com/genedeh" target="_blank" rel="noreferrer">
                        <FaGithub className="text-3xl text-gray-900 hover:scale-110 transition-all duration-300" />
                    </a>
                </motion.div>

                {/* Software carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="relative mt-10 overflow-hidden w-full max-w-3xl flex flex-col items-center justify-center"
                >
                    <h3 className="text-xl text-white font-semibold mb-3 text-start">
                        Softwares & Tools
                    </h3>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 p-4 place-items-center bg-transparent"
                    >
                        <div className="bg-blue-200/50 backdrop-blur-md rounded-3xl shadow-xl p-2 w-[62px] h-[62px] flex items-center justify-center">
                            <FaReact className="text-blue-400 hover:scale-125 transition-all duration-300" size={30} />
                        </div>

                        <div className="bg-sky-200/50 backdrop-blur-md rounded-3xl shadow-xl p-2 w-[62px] h-[62px] flex items-center justify-center">
                            <TbBrandReactNative className="text-sky-500 hover:scale-125 transition-all duration-300" size={30} />
                        </div>

                        <div className="bg-gray-200/50 backdrop-blur-md rounded-3xl shadow-xl p-2 w-[62px] h-[62px] flex items-center justify-center">
                            <FaGithub className="text-gray-800 hover:scale-125 transition-all duration-300" size={30} />
                        </div>

                        <div className="bg-purple-200/50 backdrop-blur-md rounded-3xl shadow-xl p-2 w-[62px] h-[62px] flex items-center justify-center">
                            <SiFigma className="text-purple-500 hover:scale-125 transition-all duration-300" size={30} />
                        </div>

                        <div className="bg-orange-200/50 backdrop-blur-md rounded-3xl shadow-xl p-2 w-[62px] h-[62px] flex items-center justify-center">
                            <FaGitAlt className="text-orange-600 hover:scale-125 transition-all duration-300" size={30} />
                        </div>

                        <div className="bg-yellow-100/50 backdrop-blur-md rounded-3xl shadow-xl p-2 w-[62px] h-[62px] flex items-center justify-center">
                            <FaPython className="text-yellow-500 hover:scale-125 transition-all duration-300" size={30} />
                        </div>

                        <div className="bg-amber-100/50 backdrop-blur-md rounded-3xl shadow-xl p-2 w-[62px] h-[62px] flex items-center justify-center">
                            <SiJavascript className="text-yellow-400 hover:scale-125 transition-all duration-300" size={30} />
                        </div>

                        <div className="bg-green-200/50 backdrop-blur-md rounded-3xl shadow-xl p-2 w-[62px] h-[62px] flex items-center justify-center">
                            <SiDjango className="text-green-700 hover:scale-125 transition-all duration-300" size={30} />
                        </div>

                        <div className="bg-indigo-200/50 backdrop-blur-md rounded-3xl shadow-xl p-2 w-[62px] h-[62px] flex items-center justify-center">
                            <SiLua className="text-indigo-600 hover:scale-125 transition-all duration-300" size={30} />
                        </div>

                        <div className="bg-blue-100/50 backdrop-blur-md rounded-3xl shadow-xl p-2 w-[62px] h-[62px] flex items-center justify-center">
                            <SiTypescript className="text-blue-600 hover:scale-125 transition-all duration-300" size={30} />
                        </div>

                        <div className="bg-neutral-200/50 backdrop-blur-md rounded-3xl shadow-xl p-2 w-[62px] h-[62px] flex items-center justify-center">
                            <SiNextdotjs className="text-white dark:text-white hover:scale-125 transition-all duration-300" size={30} />
                        </div>

                        <div className="bg-orange-100/50 backdrop-blur-md rounded-3xl shadow-xl p-2 w-[62px] h-[62px] flex items-center justify-center">
                            <FaHtml5 className="text-orange-500 hover:scale-125 transition-all duration-300" size={30} />
                        </div>

                        <div className="bg-sky-100/50 backdrop-blur-md rounded-3xl shadow-xl p-2 w-[62px] h-[62px] flex items-center justify-center">
                            <FaCss3Alt className="text-blue-500 hover:scale-125 transition-all duration-300" size={30} />
                        </div>

                        <div className="bg-cyan-100/50 backdrop-blur-md rounded-3xl shadow-xl p-2 w-[62px] h-[62px] flex items-center justify-center">
                            <SiTailwindcss className="text-cyan-500 hover:scale-125 transition-all duration-300" size={30} />
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
