"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "MERN Todo App (2025)",
    description:
      "A fully functional Todo application with authentication, CRUD operations, and a clean, responsive UI.",
    tech: ["React", "Node.js", "Express.js", "Node.js"],
  },
  {
    title: "E-Commerce Demo (2025)",
    description:
      "A demo e-commerce platform featuring product listing, cart system, and checkout flow.",
    tech: ["React", "Node.js", "Express.js", "Node.js"],
  },
];

function ProjectCard({
  title,
  description,
  tech,
}: {
  title: string;
  description: string;
  tech: string[];
}) {
  return (
    <div className="gradient-border interactive-border rounded-[1.7rem]">
      <div className="gradient-panel interactive-card rounded-[1.7rem] p-8">
        <div className="overflow-hidden rounded-[1.5rem]">
          <div className="relative aspect-[1.42] w-full">
            <Image
              src="/hero-bg.png"
              alt={title}
              fill
              className="object-cover opacity-90 transition-transform duration-500 hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_0%,rgba(66,238,255,0.55),transparent_18%),linear-gradient(180deg,rgba(34,61,120,0.34),rgba(7,12,29,0.22))]" />
          </div>
        </div>

        <h3 className="mt-8 text-[2.3rem] font-semibold leading-[1.12] text-white">
          {title}
        </h3>
        <p className="mt-6 max-w-[46rem] text-[1rem] leading-[1.35] text-white/88 sm:text-[1.08rem]">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          {tech.map((item) => (
            <span
              key={item}
              className="interactive-button rounded-full bg-[#17305a] px-6 py-3 text-[1rem] font-medium text-[#2f8fff]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-spacing py-16 lg:py-20">
      <div className="mx-auto max-w-[120rem]">
        <div className="text-center">
          <h2 className="section-title">Recent Projects</h2>
          <p className="mx-auto mt-8 max-w-[56rem] text-[1.08rem] leading-[1.35] text-white/88 sm:text-[1.18rem]">
            Here are some of the real-world projects I&apos;ve built using the
            MERN stack.
          </p>
        </div>

        <div className="mt-16 grid gap-8 xl:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
