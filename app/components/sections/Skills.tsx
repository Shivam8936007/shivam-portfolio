"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Braces,
  Cloud,
  Database,
  FileCode2,
  Gauge,
  MonitorCog,
  ShieldCheck,
} from "lucide-react";

const skillCards = [
  
  {
    title: "Tailwind CSS",
    description:
      "Creating responsive, modern, and clean layouts quickly using utility-first styling.",
    icon: <FileCode2 className="h-20 w-20 text-[#2f8fff]" />,
  },
  {
    title: "JavaScript",
    description:
      "Writing efficient, modern, and optimized code for both frontend and backend logic.",
    icon: <Braces className="h-20 w-20 text-[#2f8fff]" />,
  },
  {
    title: "React",
    description:
      "Building fast, interactive, and component-based UIs with clean state management.",
    icon: <Atom className="h-20 w-20 text-[#2f8fff]" />,
  },
  {
    title: "Node.js",
    description:
      "Creating scalable backend services and application logic for real-world products.",
    icon: <Cloud className="h-20 w-20 text-[#2f8fff]" />,
  },
  {
    title: "MongoDB",
    description:
      "Managing structured data with flexible schemas and optimized query performance.",
    icon: <Database className="h-20 w-20 text-[#2f8fff]" />,
  },
  {
    title: "Express.js",
    description:
      "Designing REST APIs and server-side features with a clean, maintainable approach.",
    icon: <MonitorCog className="h-20 w-20 text-[#2f8fff]" />,
  },
];

const serviceCards = [
  {
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications using React, Node.js, Express, and MongoDB with clean architecture and scalable code.",
    icon: <FileCode2 className="h-16 w-16 text-[#2f8fff]" />,
  },
  {
    title: "Frontend Development",
    description:
      "Fast, responsive, and user-friendly interfaces built with React and modern UI frameworks like Tailwind CSS.",
    icon: <Braces className="h-16 w-16 text-[#2f8fff]" />,
  },
  {
    title: "Backend & API Development",
    description:
      "Secure and efficient REST APIs using Node.js and Express, optimized for performance and scalability.",
    icon: <MonitorCog className="h-16 w-16 text-[#2f8fff]" />,
  },
  {
    title: "Database Design & Management",
    description:
      "Well-structured MongoDB databases with optimized queries for speed, reliability, and data integrity.",
    icon: <Database className="h-16 w-16 text-[#2f8fff]" />,
  },
  {
    title: "Authentication & Authorization",
    description:
      "Login systems, access control, and secure role-based protection for production-ready apps.",
    icon: <ShieldCheck className="h-16 w-16 text-[#2f8fff]" />,
  },
  {
    title: "E-Commerce Development",
    description:
      "Storefronts, product pages, carts, and checkout flows designed to feel smooth and conversion-friendly.",
    icon: <Cloud className="h-16 w-16 text-[#2f8fff]" />,
  },
  {
    title: "Performance Optimization",
    description:
      "Faster loading pages, cleaner rendering behavior, and interface improvements that make apps feel lighter.",
    icon: <Gauge className="h-16 w-16 text-[#2f8fff]" />,
  },
  {
    title: "Deployment & Hosting Support",
    description:
      "Practical help with shipping, hosting, and maintaining web applications after development is complete.",
    icon: <Cloud className="h-16 w-16 text-[#2f8fff]" />,
  },
];

function FramedCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`gradient-border interactive-border rounded-[1.35rem] ${className}`}>
      <div className="gradient-panel rounded-[1.35rem]">{children}</div>
    </div>
  );
}

export function Skills() {
  return (
    <>
      <section id="skills" className="section-spacing py-16 lg:py-20">
        <div className="mx-auto max-w-[115rem]">
          <div className="text-center">
            <h2 className="section-title">Skills &amp; Technologies</h2>
            <p className="mx-auto mt-8 max-w-[52rem] text-[1.08rem] leading-[1.4] text-white/88 sm:text-[1.18rem]">
              I work with modern tools and technologies to build fast, scalable
              and efficient web applications.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {skillCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <FramedCard className="h-full">
                  <div className="interactive-card flex h-full min-h-[25rem] flex-col items-center px-10 py-12 text-center">
                    <div className="transition-transform duration-300 hover:scale-110">
                      {card.icon}
                    </div>
                    <h3 className="mt-10 text-[2.1rem] font-semibold leading-tight text-white">
                      {card.title}
                    </h3>
                    <p className="mt-8 text-[1rem] leading-[1.35] text-white/86 sm:text-[1.08rem]">
                      {card.description}
                    </p>
                  </div>
                </FramedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section-spacing py-6 pb-16 lg:pb-20">
        <div className="mx-auto max-w-[120rem]">
          <div className="text-center">
            <h2 className="section-title">Services I Provide</h2>
            <p className="mx-auto mt-8 max-w-[70rem] text-[1.05rem] leading-[1.4] text-white/88 sm:text-[1.14rem]">
              I offer design and development services focused on building fast,
              modern, and user-friendly digital experiences.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
              >
                <FramedCard className="h-full">
                  <div className="interactive-card flex h-full min-h-[24rem] flex-col items-center px-8 py-12 text-center">
                    <div className="transition-transform duration-300 hover:scale-110">
                      {card.icon}
                    </div>
                    <h3 className="mt-8 text-[1.85rem] font-semibold leading-[1.15] text-white">
                      {card.title}
                    </h3>
                    <p className="mt-6 text-[0.98rem] leading-[1.34] text-white/84">
                      {card.description}
                    </p>
                  </div>
                </FramedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
