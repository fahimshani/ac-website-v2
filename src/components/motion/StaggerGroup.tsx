"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { staggerContainer } from "./variants";

interface StaggerGroupProps extends HTMLMotionProps<"div"> {
  stagger?: number;
  delayChildren?: number;
  amount?: number;
}

/**
 * Scroll-triggered stagger container. Wrap section content in this, then
 * wrap each block/card that should cascade in with <StaggerItem>. Works
 * through plain layout `div`s in between — variant state propagates via
 * context, not DOM adjacency.
 */
export function StaggerGroup({
  stagger = 0.12,
  delayChildren = 0,
  amount = 0.2,
  variants,
  ...props
}: StaggerGroupProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants ?? staggerContainer(stagger, delayChildren)}
      {...props}
    />
  );
}
