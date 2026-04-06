"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";

// Helper animation variants
const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

const scaleInVariant: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

function ScrollProgressIndicator() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50"
      style={{ scaleX }}
    />
  );
}

function ParallaxText({ children, offset = 50 }: { children: React.ReactNode; offset?: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
}

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  return (
    <main ref={containerRef} className="flex min-h-screen flex-col items-center bg-black text-white overflow-y-scroll overflow-x-hidden selection:bg-gray-700 relative">
      <ScrollProgressIndicator />

      {/* SECTION 1: HERO - The Grand Entrance */}
      <section className="relative flex h-screen w-full flex-col items-center justify-center px-6">
        <ParallaxText offset={100}>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-[150px] animate-pulse" />
          </div>
        </ParallaxText>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center z-10 relative"
        >
          <motion.p 
            className="text-xs md:text-sm uppercase tracking-[0.4em] mb-6 text-blue-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Join us to celebrate
          </motion.p>
          <motion.h1 
            className="text-6xl md:text-9xl font-serif mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Vijay <span className="text-gray-500 italic font-light">&</span> Nivetha
          </motion.h1>
          <motion.p 
            className="text-base md:text-2xl font-light tracking-widest text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            June 6th & 7th, 2026
          </motion.p>
          
          <motion.div
            className="mt-16 inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="text-sm text-gray-500 tracking-widest">Scroll to explore the celebration</div>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 2: Love Quote with Vertical Line */}
      <section className="flex min-h-screen w-full items-center justify-center px-6 py-24 relative">
        <div className="absolute left-1/2 top-0 w-px h-32 bg-gradient-to-b from-transparent via-blue-500 to-transparent -translate-x-1/2" />
        
        <motion.div 
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl text-center"
        >
          <h2 className="text-4xl md:text-6xl font-serif leading-relaxed text-white mb-8">
            "Two souls but a single thought,
          </h2>
          <h2 className="text-4xl md:text-6xl font-serif leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 italic mb-12">
            two hearts that beat as one."
          </h2>
          
          <div className="mt-16 w-px h-32 bg-gradient-to-b from-purple-500 to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* SECTION 3: Our Story with Engagement Photo */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-32">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Text Side */}
            <motion.div 
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-blue-400 mb-4">Our Story</p>
                <h3 className="text-5xl font-serif text-white mb-6">
                  From a beautiful beginning
                </h3>
              </div>
              
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Every love story is unique, but ours feels like it was written in the stars. From the moment we met, we knew we&apos;d found something special.
                </p>
                <p>
                  Through laughter and adventure, quiet moments and grand celebrations, we&apos;ve built a foundation strong enough to last a lifetime.
                </p>
                <p className="text-gray-500">
                  Captured during our engagement on February 13, 2026.
                </p>
              </div>
            </motion.div>

            {/* Photo Side with Parallax */}
            <ParallaxText offset={30}>
              <motion.div 
                variants={scaleInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative h-[600px] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/20 shadow-2xl"
              >
                <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-mono text-sm">
                  [ Your Engagement Photo ]
                </div>
              </motion.div>
            </ParallaxText>
          </div>
        </div>
      </section>

      {/* SECTION 4: Invitation Card Style - Classic */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-32 bg-gradient-to-b from-black via-gray-950 to-black">
        <motion.div 
          variants={scaleInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-md w-full aspect-square rounded-2xl bg-white text-black p-12 shadow-2xl border border-gray-200 flex flex-col items-center justify-center text-center space-y-6"
        >
          <div className="text-sm uppercase tracking-[0.3em] text-gray-600">
            You are cordially invited
          </div>
          <h2 className="text-4xl font-serif">Vijay & Nivetha</h2>
          <div className="w-12 h-px bg-gray-400" />
          <p className="text-gray-700">
            Request the honor of your presence at the celebration of their marriage
          </p>
          <div className="space-y-2 text-sm text-gray-600">
            <p>Saturday, the sixth of June</p>
            <p>Two thousand twenty-six</p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 5: Venue Information */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-32">
        <motion.div 
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-12 max-w-3xl"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-blue-400 mb-4">The Venue</p>
            <h2 className="text-6xl font-serif text-white mb-8">Grand Palace Hall</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-2"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Location</p>
              <p className="text-lg text-gray-300">123 Wedding Boulevard</p>
              <p className="text-lg text-gray-300">City Name, State, Zip</p>
            </motion.div>

            <motion.div 
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Celebration</p>
              <p className="text-lg text-gray-300">Friday, June 6th</p>
              <p className="text-lg text-gray-300">7:00 PM onwards</p>
            </motion.div>

            <motion.div 
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Reception</p>
              <p className="text-lg text-gray-300">Saturday, June 7th</p>
              <p className="text-lg text-gray-300">4:00 PM onwards</p>
            </motion.div>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm tracking-widest uppercase font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          >
            Open in Google Maps
          </motion.button>
        </motion.div>
      </section>

      {/* SECTION 6: Invitation Card Style - Modern */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-32 bg-gradient-to-b from-black via-blue-950/10 to-black">
        <div className="max-w-2xl w-full">
          <motion.div 
            variants={scaleInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative rounded-3xl bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 backdrop-blur-md p-16 space-y-8"
          >
            <div className="absolute top-6 right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
            <div className="absolute bottom-6 left-6 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 space-y-8">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-blue-300 mb-4">A Modern Celebration</p>
                <h2 className="text-5xl font-serif text-white">
                  Vijay & Nivetha
                </h2>
              </div>

              <div className="space-y-6 text-gray-200">
                <p className="text-lg leading-relaxed">
                  Together with their families request the pleasure of your company at the marriage celebration of
                </p>
                
                <div className="bg-white/5 rounded-xl p-8 border border-white/10 space-y-4">
                  <p className="text-sm text-gray-400">Friday, June 6th, 2026</p>
                  <p className="text-2xl font-serif text-white">Wedding Ceremony & Celebration</p>
                  <p className="text-sm text-gray-400">7:00 PM - Grand Palace Hall</p>
                </div>

                <div className="bg-white/5 rounded-xl p-8 border border-white/10 space-y-4">
                  <p className="text-sm text-gray-400">Saturday, June 7th, 2026</p>
                  <p className="text-2xl font-serif text-white">Reception & Dinner</p>
                  <p className="text-sm text-gray-400">4:00 PM - Grand Palace Hall</p>
                </div>
              </div>

              <div className="pt-8 space-y-4 border-t border-white/10">
                <p className="text-sm text-gray-400">RSVP by June 1st, 2026</p>
                <p className="text-gray-300">
                  <span className="font-semibold">Email:</span> celebration@vijayandnivetha.com
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: Timeline */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-32">
        <motion.div 
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl w-full"
        >
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-blue-400 mb-4">The Journey</p>
            <h2 className="text-6xl font-serif text-white">A Timeline of Love</h2>
          </div>

          <div className="space-y-12">
            {[
              { date: "2021", title: "The Beginning", desc: "Two souls meet and everything changes" },
              { date: "2024", title: "Forever Yes", desc: "A proposal under the starlit sky" },
              { date: "2026", title: "The Union", desc: "We celebrate our eternal bond" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-8"
              >
                <div className="hidden md:block text-right flex-shrink-0 w-32">
                  <p className="text-4xl font-serif text-blue-400">{item.date}</p>
                </div>
                <div className="hidden md:block w-px h-24 bg-gradient-to-b from-blue-500 to-transparent" />
                <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-blue-300 mb-2">Milestone</p>
                  <h3 className="text-2xl font-serif text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SECTION 8: Final Call - Traditional Indian Style */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-500/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl" />
        </div>

        <motion.div 
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl relative z-10 space-y-12"
        >
          <div className="space-y-6">
            <p className="text-lg text-gray-400 font-light tracking-widest">
              We would be honored by your presence and blessings
            </p>
            <h2 className="text-5xl md:text-7xl font-serif text-white">
              Celebrating Love,<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
                Unity & Joy
              </span>
            </h2>
          </div>

          <div className="space-y-4 text-gray-300">
            <p>With love and gratitude,</p>
            <p className="text-2xl font-serif">The Families of Vijay & Nivetha</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-10 py-5 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full text-lg tracking-widest uppercase font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
          >
            RSVP Now
          </motion.button>
        </motion.div>
      </section>

      {/* SECTION 9: Final Message */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-32 bg-gradient-to-t from-gray-950 to-black">
        <motion.div 
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-2xl space-y-8"
        >
          <p className="text-5xl md:text-6xl font-serif text-white leading-relaxed">
            "Every moment with you <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              is a blessing"
            </span>
          </p>
          
          <div className="pt-12 space-y-4 text-gray-400">
            <p>Thank you for being a part of our journey</p>
            <p>See you at the celebration!</p>
          </div>

          <div className="pt-16 pb-32 w-px h-32 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent mx-auto" />
        </motion.div>
      </section>

    </main>
  );
}
