"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// Helper animation variant for consistent scroll reveals
const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#0a0a0a] text-white overflow-hidden selection:bg-gray-800">
      
      {/* 1. HERO SECTION (From previous step) */}
      <section className="relative flex h-screen w-full flex-col items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center z-10"
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.4em] mb-6 text-gray-400">Join us to celebrate</p>
          <h1 className="text-5xl md:text-8xl font-serif mb-8 tracking-wide">
            Vijay <span className="text-gray-600 italic font-light">&</span> Nivetha
          </h1>
          <p className="text-base md:text-xl font-light tracking-widest text-gray-300">June 6th & 7th, 2026</p>
        </motion.div>
      </section>

      {/* 2. THE WELCOME / LOVE QUOTE */}
      <section className="flex min-h-[70vh] w-full items-center justify-center px-6 py-24">
        <motion.div 
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl text-center"
        >
          <h2 className="text-3xl md:text-5xl font-serif leading-relaxed text-gray-200">
            "Two souls but a single thought, <br/>
            <span className="italic text-gray-500">two hearts that beat as one."</span>
          </h2>
          <div className="mt-12 w-px h-24 bg-gradient-to-b from-gray-500 to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* 3. ENGAGEMENT PHOTOS */}
      <section className="w-full max-w-6xl px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Side */}
          <motion.div 
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xs uppercase tracking-[0.3em] text-gray-400">Our Story</h3>
            <p className="text-2xl md:text-4xl font-serif text-gray-200 leading-snug">
              From a beautiful beginning to a lifetime of adventures together.
            </p>
            <p className="text-gray-500 font-light tracking-wide pt-4">
              Captured during our engagement on February 13, 2026.
            </p>
          </motion.div>

          {/* Photo Side */}
          <motion.div 
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative h-[600px] w-full rounded-2xl overflow-hidden bg-gray-900 border border-gray-800"
          >
            {/* Replace this div with your actual Next.js <Image /> component */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-mono text-sm">
              [ Insert Engagement Photo Here ]
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. THE VENUE */}
      <section className="w-full min-h-[80vh] flex flex-col items-center justify-center px-6 py-32 bg-[#111]">
        <motion.div 
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-8 max-w-2xl"
        >
          <h3 className="text-xs uppercase tracking-[0.3em] text-gray-400">The Celebration</h3>
          <h2 className="text-4xl md:text-6xl font-serif text-gray-200">The Venue</h2>
          
          <div className="pt-8 space-y-4 font-light text-gray-400 tracking-wide text-lg md:text-xl">
            <p className="text-white font-medium">Grand Palace Hall</p>
            <p>123 Wedding Boulevard</p>
            <p>City Name, State, Zip</p>
          </div>
          
          <button className="mt-12 px-8 py-4 border border-gray-600 rounded-full text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-500">
            Open in Google Maps
          </button>
        </motion.div>
      </section>

    </main>
  );
}