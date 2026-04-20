"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section className="section-spacing py-16 lg:py-20">
      <div className="mx-auto max-w-[90rem]">
        <div className="text-center">
          <h2 className="section-title">Testimonials</h2>
          <p className="mx-auto mt-8 max-w-[58rem] text-[1.08rem] leading-[1.35] text-white/88 sm:text-[1.18rem]">
            Feedback from clients and collaborators I&apos;ve worked with on real
            projects and web applications.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[auto_1fr_auto]">
          <button
            type="button"
            aria-label="Previous testimonial"
            className="cta-gradient mx-auto flex h-20 w-20 items-center justify-center rounded-full text-white"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
            className="gradient-border rounded-[1.8rem]"
          >
            <div className="gradient-panel rounded-[1.8rem] px-8 py-12 text-center sm:px-16 sm:py-16">
              <div className="flex justify-center gap-3 text-[#ff9f1c]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-10 w-10 fill-current" />
                ))}
              </div>

              <p className="mx-auto mt-10 max-w-[56rem] text-[1.18rem] leading-[1.38] text-white/92 sm:text-[1.45rem]">
                Sajid handled both frontend and backend tasks smoothly and
                always ensured the codebase stayed clean, structured, and easy
                to maintain. He identified performance bottlenecks early,
                proposed solid solutions, and implemented them without
                disrupting the workflow.
              </p>

              <div className="mt-10 text-[2rem] font-bold text-[#ff5b60]">
                Wambui Muli
              </div>
              <div className="mt-3 text-[1.05rem] text-white">17/05/2023</div>
            </div>
          </motion.div>

          <button
            type="button"
            aria-label="Next testimonial"
            className="cta-gradient mx-auto flex h-20 w-20 items-center justify-center rounded-full text-white"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          <span className="h-4 w-4 rounded-full bg-white" />
          <span className="h-4 w-4 rounded-full bg-[#ff4b5f]" />
          <span className="h-4 w-4 rounded-full bg-white" />
          <span className="h-4 w-4 rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}
