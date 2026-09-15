"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUp } from "./variants";

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
  amount?: number;
}

/** Single-block fade-up on scroll into view. Use for standalone content
 * that isn't part of a card grid (e.g. a banner or lone intro block). */
export function Reveal({ delay = 0, amount = 0.3, transition, ...props }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={fadeUp}
      transition={{ delay, ...transition }}
      {...props}
    />
  );
}
