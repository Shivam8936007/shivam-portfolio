"use client";
import { useState } from "react";
import {
  BadgeCheck,
  Globe,
  Link,
  Mail,
  MapPin,
  Phone,
  Send,
  Share2,
} from "lucide-react";
import { motion } from "framer-motion";


const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: <Globe className="h-6 w-6" />, href: "#" },
  { icon: <Share2 className="h-6 w-6" />, href: "#" },
  { icon: <BadgeCheck className="h-6 w-6" />, href: "#" },
  { icon: <Link className="h-6 w-6" />, href: "#" },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 1200);
  };

  return (
    <section id="contact" className="section-spacing pb-0 pt-16 lg:pt-20">
      <div className="text-center">
        <h2 className="section-title">Contact Us</h2>
        <p className="mx-auto mt-8 max-w-[58rem] text-[1.08rem] leading-[1.35] text-white/88 sm:text-[1.18rem]">
          Have a project in mind? Let&apos;s connect and discuss how I can help
          bring your ideas to life.
        </p>
      </div>

      <div className="mt-16 grid gap-12 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="pt-6"
        >
          <h3 className="text-[3.5rem] font-bold leading-[1.05] tracking-[-0.05em] text-white">
            Get in touch today
          </h3>
          <p className="mt-10 max-w-[32rem] text-[1.15rem] leading-[1.55] text-white/78">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="mt-14 space-y-9 text-white">
            <div className="flex items-center gap-5 text-[1.12rem]">
              <Mail className="h-7 w-7 text-white/85" />
              google@gmail.com
            </div>
            <div className="flex items-center gap-5 text-[1.12rem]">
              <Phone className="h-7 w-7 text-white/85" />
              +92 300000000
            </div>
            <div className="flex items-start gap-5 text-[1.12rem]">
              <MapPin className="mt-1 h-7 w-7 text-white/85" />
              <span>
                Lahore, Punjab,
                <br />
                Pakistan
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="gradient-border interactive-border rounded-[2rem]"
        >
          <div className="gradient-panel interactive-card rounded-[2rem] p-8 sm:p-12">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-8 md:grid-cols-2">
                <Field label="Name" placeholder="John Carter" />
                <Field label="Email" placeholder="example@email.com" />
                <Field label="Phone" placeholder="(123) 456 - 789" />
                <Field label="Company" placeholder="Facebook" />
              </div>

              <div className="mt-8">
                <label className="mb-4 block text-[1rem] font-semibold text-white">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Please type your message here..."
                  className="interactive-input w-full rounded-[2rem] border border-transparent bg-transparent px-8 py-7 text-[1.1rem] text-white outline-none placeholder:text-white/45"
                />
                <div className="pointer-events-none -mt-[1px] rounded-[2rem] border border-transparent bg-[linear-gradient(90deg,#2f8fff,#ff4b5f)] p-px">
                  <div className="h-0 rounded-[2rem]" />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="cta-gradient interactive-button mt-8 inline-flex min-w-[18rem] items-center justify-center gap-3 rounded-full px-10 py-5 text-[1rem] font-semibold text-white disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      <footer className="mt-24 bg-[#162243] py-20">
        <div className="flex flex-col items-center justify-between gap-8 xl:flex-row">
          <a href="#home" className="text-[1.85rem] font-bold tracking-[-0.04em]">
            <span className="blue-red-text">MERN Stack Developer</span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-10 text-[1rem] font-medium text-white">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="cta-gradient interactive-button flex h-14 w-14 items-center justify-center rounded-xl text-white"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 h-px bg-gradient-to-r from-[#ff5864] via-[#736cf6] to-[#2d90ff]" />
        <p className="mt-12 text-center text-[1rem] text-white/88 sm:text-[1.2rem]">
          Copyright © 2025 Sajid Yaqub | All Rights Reserved
        </p>
      </footer>
    </section>
  );
}

function Field({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="mb-4 block text-[1rem] font-semibold text-white">
        {label}
      </label>
      <div className="gradient-border interactive-input rounded-full">
        <div className="gradient-panel rounded-full">
          <input
            type="text"
            placeholder={placeholder}
            className="w-full bg-transparent px-8 py-7 text-[1.1rem] text-white outline-none placeholder:text-white/45"
          />
        </div>
      </div>
    </div>
  );
}
