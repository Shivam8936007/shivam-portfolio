"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Atom,
  Braces,
  Database,
  FileCode2,
  Share2,
} from "lucide-react";

const orbitIcons = [
  { icon: <Share2 className="h-8 w-8" />, className: "left-[15%] top-[12%]" },
  { icon: <Atom className="h-8 w-8" />, className: "right-[18%] top-[7%]" },
  { icon: <FileCode2 className="h-8 w-8" />, className: "left-[3%] top-[48%]" },
  { icon: <Braces className="h-8 w-8" />, className: "left-[20%] bottom-[6%]" },
  { icon: <Database className="h-8 w-8" />, className: "right-[2%] top-[56%]" },
  { icon: <FileCode2 className="h-8 w-8" />, className: "right-[12%] bottom-[3%]" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="section-spacing overflow-hidden pb-20 pt-16 lg:pb-24 lg:pt-24"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[40rem]"
        >
          <h1 className="text-[4.8rem] font-bold leading-[0.98] tracking-[-0.06em] text-white sm:text-[5.6rem] lg:text-[6.9rem]">
            Hi, I&apos;m
          </h1>
          <h2 className="mt-4 text-[4rem] font-bold leading-[0.95] tracking-[-0.06em] sm:text-[4.8rem] lg:text-[6.1rem]">
            <span className="blue-red-text">Sajid Yaqub</span>
          </h2>

          <p className="mt-10 max-w-[39rem] text-[1.1rem] leading-[1.45] text-white/92 sm:text-[1.25rem] lg:text-[1.35rem]">
            I build scalable full-stack applications using React, Node.js,
            Express and MongoDB. I love clean code and fast UIs.
          </p>

          <div className="mt-12 flex flex-col gap-5 sm:flex-row">
            <a
              href="#projects"
              className="cta-gradient interactive-button inline-flex min-w-[19rem] items-center justify-center rounded-full px-10 py-5 text-[1rem] font-semibold text-white"
            >
              View Projects
            </a>
            <div className="gradient-border interactive-border rounded-full">
              <a
                href="#contact"
                className="gradient-panel interactive-button inline-flex min-w-[23rem] items-center justify-center gap-3 rounded-full px-10 py-5 text-[1rem] font-semibold text-[#2f8fff]"
              >
                Let&apos;s Collaborate
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto flex w-full max-w-[48rem] justify-center"
        >
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(157,119,255,0.18)_0%,rgba(47,143,255,0.08)_34%,transparent_68%)] blur-2xl" />
          <div className="relative flex aspect-square w-full max-w-[34rem] items-center justify-center">
            <div className="absolute inset-[10%] rounded-full bg-black" />
            <div className="absolute inset-[1%] rounded-full bg-[radial-gradient(circle,rgba(47,143,255,0.2),transparent_44%)] blur-[80px]" />

            <div className="absolute inset-[12%] overflow-hidden rounded-full">
              <Image
                src="/hero-bg.png"
                alt="Developer portrait placeholder"
                fill
                priority
                className="object-cover opacity-75 saturate-150"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_36%,rgba(47,143,255,0.52),transparent_22%),radial-gradient(circle_at_40%_56%,rgba(255,88,100,0.42),transparent_24%),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.42))]" />
            </div>

            {orbitIcons.map((item, index) => (
              <div
                key={index}
                className={`absolute ${item.className} interactive-card flex h-20 w-20 items-center justify-center rounded-full bg-[#213864]/70 text-[#2f8fff] shadow-[0_0_40px_rgba(47,143,255,0.12)]`}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
