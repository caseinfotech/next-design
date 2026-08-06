"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero">
      <motion.div
        className="hero-glow"
        aria-hidden="true"
        animate={reduceMotion ? undefined : { opacity: [.45, .75, .45], scale: [1, 1.06, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="hero-inner">
        <motion.div
          className="hero-copy-block"
          initial={{ opacity: 0, x: reduceMotion ? 0 : -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8, ease: [.22, 1, .36, 1] }}
        >
          <p className="eyebrow hero-kicker">Digital experiences. Built for the future.</p>
          <h1 className="hero-title">
            <span>Websites are</span>
            <span>everywhere.</span>
            <span className="hero-gradient-text">Experiences</span>
            <span className="hero-gradient-text">are not.</span>
          </h1>
          <p className="hero-copy">
            Premium websites, web applications, and creative platforms built
            with modern technology and immersive design.
          </p>
          <div className="hero-actions">
            <a className="button hero-primary" href="#work">Explore work <span>→</span></a>
            <a className="button" href="/contact">Start a project <span>↗</span></a>
          </div>
        </motion.div>

        <motion.div
          className="hero-showcase"
          initial={{ opacity: 0, x: reduceMotion ? 0 : 46, scale: reduceMotion ? 1 : .97 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0, scale: 1, y: [0, -7, 0] }}
          transition={reduceMotion ? { duration: .3 } : { opacity: { delay: .2, duration: .9 }, x: { delay: .2, duration: .9 }, scale: { delay: .2, duration: .9 }, y: { delay: 1.1, duration: 7, repeat: Infinity, ease: "easeInOut" } }}
        >
          <Image
            src="/hero-devices.png"
            alt="Next Design project showcase featuring Brian Noland, ChuneLab, Solana Risk Radar, and Driftkid"
            width={850}
            height={450}
            priority
          />
          <div className="hero-showcase-sheen" aria-hidden="true" />
          <div className="hero-showcase-scroll" aria-hidden="true"><span>Scroll to explore</span><i/><b/></div>
        </motion.div>

        <motion.div className="hero-meta" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}}>
          <span>Built with passion. Coded to perform.</span>
        </motion.div>
      </div>
    </section>
  );
}
