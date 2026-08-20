"use client";

import { AnimatePresence, MotionConfig, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/hackathons", label: "Hackathons" },
  { href: "/perks", label: "Perks" },
  { href: "/developer", label: "Developer" },
];

export function Navbar() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileOpen]);

  return (
    <MotionConfig reducedMotion="user">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 font-bold" aria-label="AKCS home">
            <Image src="/ak-knight.png" alt="" width={38} height={38} className="h-9 w-9 object-cover" aria-hidden="true" />
            <span className="text-lg">
              AK<span className="text-purple-400">CS</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`nav-link text-sm text-zinc-300 transition-colors hover:text-purple-400${active ? " is-active" : ""}`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      className="nav-active-line"
                      layoutId="desktop-active-route"
                      transition={{ type: "spring", stiffness: 360, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <Button className="bg-purple-600 hover:bg-purple-700" asChild>
              <a
                href="https://form.typeform.com/to/PuDW3kHi"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Club
              </a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? "close" : "menu"}
                initial={shouldReduceMotion ? false : { opacity: 0, rotate: -35, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, rotate: 35, scale: 0.8 }}
                transition={{ duration: 0.16 }}
              >
                {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
              </motion.span>
            </AnimatePresence>
          </Button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.button
                type="button"
                className="mobile-nav-scrim md:hidden"
                aria-label="Close navigation menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                onClick={() => setMobileOpen(false)}
              />

              <motion.aside
                id="mobile-navigation"
                className="mobile-nav-panel md:hidden"
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: "100%" }}
                transition={{ type: "spring", stiffness: 320, damping: 34 }}
              >
                <div className="mobile-nav-meta">
                  <span>AKCS / navigation</span>
                  <span>route {pathname}</span>
                </div>

                <nav aria-label="Mobile navigation">
                  {links.map((link, index) => {
                    const active = pathname === link.href;

                    return (
                      <motion.div
                        key={link.href}
                        initial={shouldReduceMotion ? false : { opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.045 + 0.05 }}
                      >
                        <Link
                          href={link.href}
                          aria-current={active ? "page" : undefined}
                          className={active ? "is-active" : undefined}
                          onClick={() => setMobileOpen(false)}
                        >
                          <span>0{index + 1}</span>
                          {link.label}
                          <span aria-hidden="true">↗</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <a
                  className="mobile-nav-cta"
                  href="https://form.typeform.com/to/PuDW3kHi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Club
                </a>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </header>
    </MotionConfig>
  );
}
