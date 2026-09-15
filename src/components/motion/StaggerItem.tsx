"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ComponentType } from "react";
import { fadeUp } from "./variants";

type Tag = "div" | "li";

type StaggerItemProps = HTMLMotionProps<"div"> & { as?: Tag };

/**
 * A single cascading child of <StaggerGroup>. Inherits hidden/visible
 * state from the nearest ancestor StaggerGroup — no props needed there.
 * Pass `as="li"` when the item sits inside a <ul>/<ol>.
 */
export function StaggerItem({ as = "div", variants, ...props }: StaggerItemProps) {
  const MotionTag = (
    as === "li" ? motion.li : motion.div
  ) as ComponentType<HTMLMotionProps<"div">>;
  return <MotionTag variants={variants ?? fadeUp} {...props} />;
}
