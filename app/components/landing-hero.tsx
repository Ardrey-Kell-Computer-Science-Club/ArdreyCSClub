"use client";

import { ArrowRight, Braces, Terminal } from "lucide-react";
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const terminalFrames = [
  {
    command: "npm run build",
    output: "compiled / 8 routes / 0 errors",
  },
  {
    command: "python train.py --team akcs",
    output: "model ready / accuracy climbing",
  },
  {
    command: "git push origin next-project",
    output: "shipped / branch is live",
  },
  {
    command: "./hackathon --mode collaborate",
    output: "team found / timer started",
  },
];

const matrixColumns = 20;
const matrixRows = 10;
const csCutout = new Set([
  "1-3", "1-4", "1-5", "1-6", "1-7",
  "2-2", "2-3", "2-4",
  "3-2", "3-3",
  "4-2", "4-3",
  "5-2", "5-3",
  "6-2", "6-3",
  "7-2", "7-3", "7-4",
  "8-3", "8-4", "8-5", "8-6", "8-7",
  "1-12", "1-13", "1-14", "1-15", "1-16", "1-17",
  "2-11", "2-12", "2-13",
  "3-11", "3-12", "3-13",
  "4-12", "4-13", "4-14", "4-15", "4-16",
  "5-15", "5-16", "5-17",
  "6-15", "6-16", "6-17",
  "7-15", "7-16", "7-17",
  "8-11", "8-12", "8-13", "8-14", "8-15", "8-16",
]);

function CsTileField() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.figure
      className="cs-matrix"
      aria-label="CS rendered in negative space inside an interactive lavender tile matrix"
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, x: 18 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="cs-matrix-grid" aria-hidden="true">
        {Array.from({ length: matrixColumns * matrixRows }, (_, index) => {
          const row = Math.floor(index / matrixColumns);
          const column = index % matrixColumns;
          const isCutout = csCutout.has(`${row}-${column}`);

          return (
            <span
              key={`${row}-${column}`}
              className={isCutout ? "cs-matrix-hole" : "cs-matrix-tile"}
              style={{
                animationDelay: `${((row * 3 + column) % 12) * 24 + 180}ms`,
                opacity: isCutout ? 0 : 0.42 + ((row * 7 + column * 3) % 5) * 0.1,
              }}
            />
          );
        })}
      </div>

      <figcaption>
        <span>matrix / cs</span>
        <span>hover / displace</span>
      </figcaption>
    </motion.figure>
  );
}

function LiveTerminal({ delay = 0 }: { delay?: number }) {
  const shouldReduceMotion = useReducedMotion();
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = window.setInterval(() => {
      setFrame((current) => (current + 1) % terminalFrames.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, [shouldReduceMotion]);

  const activeFrame = terminalFrames[frame];

  return (
    <motion.aside
      className="hero-terminal"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      aria-label="Live club terminal showing example build commands"
      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
      transition={{
        opacity: { delay, duration: 0.46, ease: [0.16, 1, 0.3, 1] },
        y: { delay, type: "spring", stiffness: 260, damping: 24 },
      }}
    >
      <div className="terminal-titlebar">
        <span className="terminal-title">
          <Terminal aria-hidden="true" /> akcs/session
        </span>
        <span className="terminal-status">
          <span aria-hidden="true" /> live
        </span>
      </div>

      <div className="terminal-body">
        <div className="terminal-history" aria-hidden="true">
          <span>system / club environment loaded</span>
          <span>member@akcs:~</span>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeFrame.command}
            className="terminal-frame"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 7 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <p>
              <span className="terminal-prompt">$</span> {activeFrame.command}
              <span className="terminal-caret" aria-hidden="true" />
            </p>
            <p className="terminal-output">{activeFrame.output}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="terminal-progress" aria-hidden="true">
        <motion.span
          key={frame}
          initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 2.8, ease: "linear" }}
        />
      </div>
    </motion.aside>
  );
}

export function LandingHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      <main className="home-shell min-h-screen bg-black text-white">
        <section className="home-hero">
          <motion.div
            className="hero-signal-line"
            initial={shouldReduceMotion ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          />

          <div className="hero-inner">
            <motion.div
              className="hero-meta"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06, duration: 0.46, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="hero-school">Ardrey Kell High School</span>
              <span className="hero-coordinate">35.0532° N / 80.8431° W</span>
            </motion.div>

            <div className="hero-heading-stage">
              <motion.h1
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.46, ease: [0.16, 1, 0.3, 1] }}
              >
                Ardrey Kell
                <motion.span
                  initial={shouldReduceMotion ? false : { opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.28, duration: 0.46, ease: [0.16, 1, 0.3, 1] }}
                >
                  Computer Science Club
                </motion.span>
              </motion.h1>

              <CsTileField />
            </div>

            <div className="hero-support-grid">
              <motion.div
                className="hero-copy"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.46, ease: [0.16, 1, 0.3, 1] }}
              >
                <p>
                  Learn programming, build projects, participate in hackathons,
                  compete in coding competitions, and connect with students who
                  share a passion for technology.
                </p>

                <div className="hero-actions">
                  <motion.div whileHover={shouldReduceMotion ? undefined : { x: 3 }}>
                    <Link href="/about" className="hero-primary-action">
                      Learn More
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  </motion.div>

                  <motion.div whileHover={shouldReduceMotion ? undefined : { x: 3 }}>
                    <Link href="/hackathons" className="hero-secondary-action">
                      View Hackathons
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              <LiveTerminal delay={0.28} />
            </div>

            <motion.div
              className="hero-telemetry"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36, duration: 0.46, ease: [0.16, 1, 0.3, 1] }}
            >
              <span><Braces aria-hidden="true" /> build / compete / ship</span>
              <span>status / accepting members</span>
              <span>cycle / 2026</span>
            </motion.div>
          </div>
        </section>
      </main>
    </MotionConfig>
  );
}
