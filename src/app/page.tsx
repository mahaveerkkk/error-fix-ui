"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Download,
  Clock,
  Users,
  Smartphone,
  Star,
  Zap,
  MapPin,
  Bell,
  CalendarCheck,
  Shield,
  ChevronRight,
  Sparkles,
  Timer,
  UserCheck,
  Menu,
  X,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Live Queue Tracking",
      desc: "See real-time queue status, wait times, and your position — all from your phone.",
      color: "from-amber-500/20 to-amber-600/5",
      iconColor: "text-amber-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Discover Nearby Salons",
      desc: "Find top-rated salons near you with GPS-powered search and real ratings.",
      color: "from-blue-500/20 to-blue-600/5",
      iconColor: "text-blue-500",
    },
    {
      icon: <CalendarCheck className="w-6 h-6" />,
      title: "Instant Booking",
      desc: "Book your preferred service and time slot in seconds. No calls needed.",
      color: "from-emerald-500/20 to-emerald-600/5",
      iconColor: "text-emerald-500",
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Smart Notifications",
      desc: "Get notified when your turn approaches. Arrive exactly when your chair is ready.",
      color: "from-purple-500/20 to-purple-600/5",
      iconColor: "text-purple-500",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Ratings & Reviews",
      desc: "Read honest reviews from real customers. Make informed choices every time.",
      color: "from-pink-500/20 to-pink-600/5",
      iconColor: "text-pink-500",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Salon Dashboard",
      desc: "For salon owners — manage queues, bookings, staff, and analytics in one place.",
      color: "from-cyan-500/20 to-cyan-600/5",
      iconColor: "text-cyan-500",
    },
  ];

  const steps = [
    { step: "01", title: "Download & Sign Up", desc: "Get the app and create your account in seconds.", icon: <Smartphone className="w-8 h-8" /> },
    { step: "02", title: "Find Your Salon", desc: "Browse nearby salons, check queues, read reviews.", icon: <MapPin className="w-8 h-8" /> },
    { step: "03", title: "Join the Queue", desc: "Book your slot remotely. No need to wait in line.", icon: <UserCheck className="w-8 h-8" /> },
    { step: "04", title: "Get Notified & Go", desc: "We'll alert you when it's your turn. Show up, sit down, relax.", icon: <Bell className="w-8 h-8" /> },
  ];

  const handleDownload = () => {
    console.log("Download triggered");
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">

      {/* ───── NAVBAR ───── */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
        ? "bg-[#0A0A0B]/80 backdrop-blur-2xl border-b border-white/5 py-3"
        : "bg-transparent py-5"
        }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2.5">
            <img
              src="/logo.svg"
              alt="StylQ"
              className="w-9 h-9"
              style={{ filter: 'invert(87%) sepia(31%) saturate(1437%) hue-rotate(352deg) brightness(92%) contrast(85%)' }}
            />
            <span className="text-xl font-black tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Styl<span className="text-amber-500">Q</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-white/50 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-white/50 hover:text-white transition-colors">How It Works</a>
            <a href="#download" className="text-sm text-white/50 hover:text-white transition-colors">Download</a>
            <a
              href="/downloads/stylq.apk"
              download
              onClick={handleDownload}
              className="btn-primary px-5 py-2.5 rounded-full text-sm flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> Download App
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#111113]/95 backdrop-blur-xl border-b border-white/5 px-6 py-6 space-y-4"
          >
            <a href="#features" className="block text-white/70 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#how-it-works" className="block text-white/70 hover:text-white" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
            <a href="#download" className="block text-white/70 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Download</a>
            <a
              href="/downloads/stylq.apk"
              download
              className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm"
            >
              <Download className="w-4 h-4" /> Download App
            </a>
          </motion.div>
        )}
      </nav>


      {/* ───── HERO SECTION ───── */}
      <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
        <div className="grid-pattern absolute inset-0 opacity-30" />

        <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span className="text-xs font-semibold text-amber-500 tracking-wide">SMART SALON QUEUE MANAGEMENT</span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-5xl md:text-7xl font-black leading-[1.05] mb-7 tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Skip the wait.
                <br />
                <span className="gradient-text">Get styled.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-xl md:text-2xl text-white/30 leading-relaxed mb-4 max-w-lg italic" style={{ fontFamily: 'var(--font-serif)' }}>
                &ldquo;I can&apos;t change the world, but I can change your hair.&rdquo;
              </motion.p>
              <motion.p variants={fadeUp} className="text-base text-white/45 leading-relaxed mb-10 max-w-lg">
                Find nearby salons, join queues remotely, track your turn in real-time, and never wait in line again.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/downloads/stylq.apk"
                  download
                  onClick={handleDownload}
                  className="btn-primary px-8 py-4 rounded-2xl text-sm font-bold flex items-center justify-center gap-3 tracking-wide"
                >
                  <Download className="w-5 h-5" />
                  DOWNLOAD FOR ANDROID
                </a>
                <a
                  href="#how-it-works"
                  className="btn-secondary px-8 py-4 rounded-2xl text-sm flex items-center justify-center gap-3"
                >
                  See How It Works <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Mini Stats */}
              <motion.div variants={fadeUp} className="flex gap-8 mt-12">
                {[
                  { num: "500+", label: "Bookings" },
                  { num: "4.8★", label: "Rating" },
                  { num: "50+", label: "Salons" },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="text-2xl font-black text-white">{s.num}</div>
                    <div className="text-xs text-white/35 font-medium">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative">
                {/* Glow behind phone */}
                <div className="absolute -inset-8 bg-gradient-to-br from-amber-500/15 via-purple-500/10 to-blue-500/10 blur-[80px] rounded-full" />

                {/* Phone */}
                <div className="phone-mockup relative z-10 w-[280px] animate-float-slow">
                  <div className="phone-screen bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] flex flex-col items-center justify-center p-6">
                    {/* Mock App Screen */}
                    <div className="w-full space-y-4">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <div className="text-[10px] text-white/40">Hello, User 👋</div>
                          <div className="text-sm font-bold text-white">Find your style</div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                          <Bell className="w-4 h-4 text-amber-500" />
                        </div>
                      </div>

                      {/* Search bar */}
                      <div className="bg-white/5 rounded-xl py-2.5 px-3 flex items-center gap-2 border border-white/5">
                        <MapPin className="w-3 h-3 text-white/30" />
                        <span className="text-[10px] text-white/30">Search salons...</span>
                      </div>

                      {/* Salon cards */}
                      {[
                        { name: "Premium Salon", queue: 3, wait: "15m", rating: "4.9" },
                        { name: "Elite Cuts", queue: 1, wait: "5m", rating: "4.8" },
                        { name: "Style Studio", queue: 5, wait: "25m", rating: "4.7" },
                      ].map((salon, i) => (
                        <div key={i} className="bg-white/5 rounded-xl p-3 border border-white/5 flex justify-between items-center">
                          <div>
                            <div className="text-xs font-bold text-white">{salon.name}</div>
                            <div className="text-[9px] text-white/40 mt-0.5 flex items-center gap-2">
                              <span className="flex items-center gap-0.5"><Users className="w-2.5 h-2.5" /> {salon.queue}</span>
                              <span className="flex items-center gap-0.5"><Timer className="w-2.5 h-2.5" /> {salon.wait}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-0.5 bg-amber-500/15 px-2 py-0.5 rounded-md">
                            <Star className="w-2.5 h-2.5 text-amber-500 fill-amber-500" />
                            <span className="text-[9px] font-bold text-amber-500">{salon.rating}</span>
                          </div>
                        </div>
                      ))}

                      {/* Bottom button */}
                      <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl py-2.5 text-center">
                        <span className="text-[10px] font-bold text-black">JOIN QUEUE NOW →</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-16 top-1/4 glass-card rounded-2xl px-4 py-3 flex items-center gap-3 z-20"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-white">Live Queue</div>
                    <div className="text-[9px] text-white/40">3 ahead of you</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-12 bottom-1/3 glass-card rounded-2xl px-4 py-3 flex items-center gap-3 z-20"
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <Bell className="w-4 h-4 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-white">Your Turn!</div>
                    <div className="text-[9px] text-white/40">Chair is ready</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0B] to-transparent" />
      </section>


      {/* ───── QUOTES MARQUEE STRIP ───── */}
      <section className="py-12 border-y border-white/5 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0B] via-transparent to-[#0A0A0B] z-10 pointer-events-none" />
        <div className="flex animate-[marquee_25s_linear_infinite] whitespace-nowrap">
          {[
            "I can't change the world, but I can change your hair ✂️",
            "Life isn't perfect, but your hair can be 💇",
            "Your hair is your crown — never let it fall 👑",
            "A great hairstyle is the best accessory ✨",
            "Good hair speaks louder than words 💬",
            "Invest in your hair, it's the crown you never take off 🏆",
          ].map((quote, i) => (
            <span
              key={i}
              className="inline-block mx-12 text-lg md:text-xl text-white/15 font-medium italic"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {quote}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {[
            "I can't change the world, but I can change your hair ✂️",
            "Life isn't perfect, but your hair can be 💇",
            "Your hair is your crown — never let it fall 👑",
            "A great hairstyle is the best accessory ✨",
            "Good hair speaks louder than words 💬",
            "Invest in your hair, it's the crown you never take off 🏆",
          ].map((quote, i) => (
            <span
              key={`dup-${i}`}
              className="inline-block mx-12 text-lg md:text-xl text-white/15 font-medium italic"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {quote}
            </span>
          ))}
        </div>
      </section>


      {/* ───── FEATURES ───── */}
      <section id="features" className="py-28 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-20"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-xs font-semibold text-white/60 tracking-wide">POWERFUL FEATURES</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black tracking-tight mb-5" style={{ fontFamily: 'var(--font-display)' }}>
              Everything you need.
              <br />
              <span className="text-white/30">Nothing you don&apos;t.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-white/40 max-w-2xl mx-auto">
              From finding salons to tracking your queue position in real-time — StylQ handles it all.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="glass-card rounded-2xl p-7 group cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <div className={f.iconColor}>{f.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-2.5 text-white">{f.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ───── DIVIDER ───── */}
      <div className="section-divider max-w-4xl mx-auto" />


      {/* ───── HOW IT WORKS ───── */}
      <section id="how-it-works" className="py-28 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-20"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <Timer className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-xs font-semibold text-white/60 tracking-wide">HOW IT WORKS</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black tracking-tight mb-5" style={{ fontFamily: 'var(--font-display)' }}>
              Four steps to
              <br />
              <span className="gradient-text">perfect styling.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {steps.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative group"
              >
                <div className="glass-card rounded-2xl p-7 h-full">
                  {/* Step number */}
                  <div className="text-5xl font-black text-white/[0.03] absolute top-4 right-6"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {s.step}
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-600/5 flex items-center justify-center mb-5 text-amber-500 group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{s.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{s.desc}</p>
                </div>

                {/* Connector arrow */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-6 h-6 text-white/10" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ───── DIVIDER ───── */}
      <div className="section-divider max-w-4xl mx-auto" />


      {/* ───── FOR SALON OWNERS ───── */}
      <section className="py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-xs font-semibold text-purple-400 tracking-wide">FOR SALON OWNERS</span>
              </motion.div>

              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black tracking-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Run your salon
                <br />
                <span className="gradient-text-purple">smarter, not harder.</span>
              </motion.h2>

              <motion.p variants={fadeUp} className="text-lg text-white/40 leading-relaxed mb-10 max-w-lg">
                Manage your queue digitally, reduce no-shows, get real-time analytics,
                and delight your customers with a modern experience.
              </motion.p>

              <motion.div variants={fadeUp} className="space-y-4">
                {[
                  "Digital queue management — no more paper lists",
                  "Accept or reject bookings instantly",
                  "Real-time analytics and earnings dashboard",
                  "Staff management and service configuration",
                  "Push notifications keep customers informed",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Zap className="w-3 h-3 text-amber-500" />
                    </div>
                    <span className="text-sm text-white/60">{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Stats Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { num: "2x", label: "Faster service", icon: <Zap className="w-5 h-5 text-amber-500" /> },
                { num: "40%", label: "Fewer no-shows", icon: <UserCheck className="w-5 h-5 text-emerald-500" /> },
                { num: "100%", label: "Digital queue", icon: <Users className="w-5 h-5 text-blue-500" /> },
                { num: "24/7", label: "Analytics access", icon: <Star className="w-5 h-5 text-purple-500" /> },
              ].map((s, i) => (
                <motion.div key={i} variants={fadeUp} className="stat-card">
                  <div className="mb-3">{s.icon}</div>
                  <div className="text-3xl font-black text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>{s.num}</div>
                  <div className="text-xs text-white/40 font-medium">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>


      {/* ───── DIVIDER ───── */}
      <div className="section-divider max-w-4xl mx-auto" />


      {/* ───── DOWNLOAD CTA ───── */}
      <section id="download" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-[#111113] to-purple-500/10" />
            <div className="absolute inset-0 grid-pattern opacity-20" />

            <div className="relative z-10 py-20 px-8 md:px-16 text-center">
              <motion.div variants={fadeUp}>
                <img
                  src="/logo.svg"
                  alt="StylQ"
                  className="w-20 h-20 mx-auto mb-8"
                  style={{ filter: 'invert(87%) sepia(31%) saturate(1437%) hue-rotate(352deg) brightness(92%) contrast(85%)' }}
                />
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="text-4xl md:text-6xl font-black tracking-tight mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Ready to skip
                <br />
                <span className="gradient-text">the queue?</span>
              </motion.h2>

              <motion.p variants={fadeUp} className="text-lg text-white/40 max-w-xl mx-auto mb-10">
                Download StylQ now and transform your salon experience. Available for Android.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/downloads/stylq.apk"
                  download
                  onClick={handleDownload}
                  className="btn-primary px-10 py-5 rounded-2xl text-sm font-bold flex items-center justify-center gap-3 tracking-wide"
                >
                  <Download className="w-5 h-5" />
                  DOWNLOAD APK
                </a>
              </motion.div>

              <motion.p variants={fadeUp} className="text-xs text-white/25 mt-6">
                Android 8.0+ required  •  Free to use  •  No ads
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ───── FOOTER ───── */}
      <footer className="border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <img
                src="/logo.svg"
                alt="StylQ"
                className="w-8 h-8"
                style={{ filter: 'invert(87%) sepia(31%) saturate(1437%) hue-rotate(352deg) brightness(92%) contrast(85%)' }}
              />
              <span className="text-lg font-black tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Styl<span className="text-amber-500">Q</span>
              </span>
            </div>

            {/* Links */}
            <div className="flex gap-8 text-sm text-white/30">
              <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white/60 transition-colors">Support</a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-white/20">
              © 2026 StylQ Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
