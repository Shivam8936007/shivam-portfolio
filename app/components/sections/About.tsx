"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="section-spacing py-16 lg:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-full max-w-[54rem]"
        >
          <div className="interactive-card overflow-hidden rounded-[2rem] bg-black shadow-[0_20px_80px_rgba(0,0,0,0.28)]">
            <div className="relative aspect-[0.9] w-full">
              <Image
                src="/hero-bg.png"
                alt="Developer portrait placeholder"
                fill
                className="object-cover opacity-80 saturate-150 transition-transform duration-500 hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_56%_30%,rgba(47,143,255,0.55),transparent_20%),radial-gradient(circle_at_42%_54%,rgba(255,88,100,0.38),transparent_22%),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.5))]" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="max-w-[44rem]"
        >
          <h2 className="section-title">About Me</h2>
          <div className="mt-12 space-y-10 text-[1.1rem] leading-[1.6] text-white/85 sm:text-[1.22rem]">
            <p>
              I am a MERN Stack Web Developer focusing on building
              production-ready applications. I enjoy designing APIs, creating
              interactive user interfaces, and optimizing performance to deliver
              smooth and efficient user experiences.
            </p>
            <p>
              Along with strong problem-solving skills, I follow clean
              architecture principles and modern development patterns. I&apos;m
              passionate about writing maintainable code, improving UI/UX flows,
              and building applications that feel fast, secure, and intuitive.
              I actively explore new tools in the MERN ecosystem to stay updated
              and keep improving my development workflow.
            </p>
          </div>

          <a
            href="#"
            className="cta-gradient interactive-button mt-12 inline-flex items-center gap-3 rounded-full px-10 py-5 text-[1rem] font-semibold text-white"
          >
            Download Resume
            <Download className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
