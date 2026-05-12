"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
};

type MotionArticleProps = HTMLMotionProps<"article"> & {
  index?: number;
};

export function Reveal({ children, delay = 0, ...props }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionArticle({ index = 0, ...props }: MotionArticleProps) {
  const reduceMotion = useReducedMotion();
  const delay = Math.min(index * 0.055, 0.28);

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    />
  );
}

export function FloatingVisual(props: HTMLMotionProps<"div">) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 28 }}
      animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: [0, -12, 0] }}
      transition={
        reduceMotion
          ? undefined
          : {
              opacity: { duration: 0.75, ease: "easeOut" },
              scale: { duration: 0.75, ease: "easeOut" },
              y: { duration: 7, repeat: Infinity, ease: "easeInOut" }
            }
      }
      {...props}
    />
  );
}
