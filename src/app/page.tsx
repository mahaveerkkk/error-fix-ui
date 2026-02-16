"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Crown,
  Smartphone,
  CheckCircle2,
  ChevronRight,
  ShieldCheck
} from "lucide-react";

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // VIP Download Handler
  const handleDownload = (e: React.MouseEvent) => {
    // You can add tracking or logic here
    console.log("VIP Direct Download Triggered");
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans obsidian-bg transition-colors duration-1000">

      {/* VIP Minimalist Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? "bg-black/95 backdrop-blur-2xl border-b border-white/5 py-4" : "bg-transparent py-10"
        }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <img src="/logo.svg" alt="StylQ Logo" className="w-12 h-12 invert brightness-100 contrast-100" style={{ filter: 'invert(87%) sepia(31%) saturate(1437%) hue-rotate(352deg) brightness(92%) contrast(85%)' }} />
            <span className="text-3xl font-black font-outfit tracking-tighter uppercase italic leading-none hidden sm:block">
              Styl<span className="text-amber-500">Q</span>
            </span>
          </motion.div>

          <div className="hidden lg:flex items-center gap-12 text-[10px] font-black tracking-[0.3em] uppercase text-white/40">
            <a href="#experience" className="hover:text-amber-500 transition-colors">THE EXPERIENCE</a>
            <a href="#security" className="hover:text-amber-500 transition-colors">PRIVACY</a>
            <a
              href="/downloads/stylq.apk"
              download
              onClick={handleDownload}
              className="px-10 py-4 bg-white text-black hover:bg-amber-500 transition-all font-black text-center"
            >
              DOWNLOAD APP
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* VIP HERO - BOLD & MINIMALIST */}
        <section className="relative min-h-screen flex items-center justify-center pt-20">
          <div className="container mx-auto px-10 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-4 px-6 py-2 bg-white/5 border border-white/10 mb-12 backdrop-blur-3xl">
                <Crown size={14} className="text-amber-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-500">ELITE ACCESS ONLY</span>
              </div>

              <div className="flex justify-center mb-10">
                <img src="/logo.svg" alt="StylQ" className="w-32 h-32 md:w-48 md:h-48 drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]" style={{ filter: 'invert(87%) sepia(31%) saturate(1437%) hue-rotate(352deg) brightness(92%) contrast(85%)' }} />
              </div>

              <h1 className="text-7xl md:text-[12rem] font-black font-outfit leading-[0.8] mb-12 tracking-tighter uppercase italic drop-shadow-2xl">
                VIP <br /> <span className="vip-text">GROOMING</span>
              </h1>

              <p className="text-xl md:text-3xl text-white/40 mb-20 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
                The world's most exclusive automated queueing system. Pure algorithmic luxury, crafted for the top 1%.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-10">
                <a
                  href="/downloads/stylq.apk"
                  download
                  onClick={handleDownload}
                  className="group relative px-16 py-8 bg-amber-500 overflow-hidden transition-all hover:scale-105"
                >
                  <span className="relative z-10 flex items-center justify-center gap-4 text-black font-black text-sm tracking-[0.4em]">
                    DOWNLOAD APK <Download className="w-5 h-5" />
                  </span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Subtle Ambient Light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-video bg-amber-500/5 blur-[180px] rounded-full -z-10 animate-pulse" />
        </section>

        {/* EXPERIENCE STRIP */}
        <section id="experience" className="py-40 border-y border-white/5 bg-zinc-950/20">
          <div className="container mx-auto px-10">
            <div className="grid md:grid-cols-3 gap-20">
              {[
                { t: "NO QUEUES", d: "Join live from anywhere. Arrive only when your chair is ready." },
                { t: "ELITE STYLISTS", d: "Hand-picked masters of the craft, vetted for the perfect result." },
                { t: "INSTANT APP", d: "Direct download access. No store delays. Absolute speed." }
              ].map((feat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="relative p-10 border border-white/5 hover:border-amber-500/10 transition-colors"
                >
                  <div className="text-amber-500/20 text-6xl font-black italic absolute -top-8 -left-4">0{i + 1}</div>
                  <h3 className="text-2xl font-black mb-6 italic uppercase tracking-tighter">{feat.t}</h3>
                  <p className="text-white/40 font-medium leading-relaxed">{feat.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DIRECT DOWNLOAD CTA */}
        <section id="download" className="py-60 relative text-center">
          <div className="container mx-auto px-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="max-w-4xl mx-auto p-20 bg-white/5 border border-white/10 backdrop-blur-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-amber-500" />
              <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-10">INSTANT <span className="text-amber-500">RELEASE.</span></h2>
              <p className="text-xl text-white/50 mb-16 font-light uppercase tracking-widest leading-loose">
                Experience the full power of StylQ instantly. Click below to download the official Android application package.
              </p>

              <a
                href="/downloads/stylq.apk"
                download
                className="inline-flex items-center gap-10 px-16 py-8 bg-white text-black font-black text-sm tracking-[0.5em] hover:bg-amber-500 transition-all uppercase"
              >
                GET STYLQ NOW <Smartphone />
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-40 border-t border-white/5">
        <div className="container mx-auto px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-20 opacity-50">
            <span className="text-3xl font-black uppercase italic tracking-tighter">Styl<span className="text-amber-500">Q</span></span>
            <div className="flex gap-20 text-[10px] font-black uppercase tracking-[0.2em]">
              <a href="#" className="hover:text-amber-500 transition-colors">PRIVACY POLICY</a>
              <a href="#" className="hover:text-amber-500 transition-colors">TERMS OF SERVICE</a>
              <a href="#" className="hover:text-amber-500 transition-colors">SUPPORT</a>
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em]">© 2026 STYLQ TECHNOLOGIES</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
