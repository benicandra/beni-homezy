"use client";

import { HTMLMotionProps, motion, Variants } from "framer-motion";
import { ReactNode } from "react";

export const motionVariants: Record<string, Variants> = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  },
};

interface MotionSectionProps extends HTMLMotionProps<"section"> {
  children: ReactNode;
  stagger?: boolean;
  staggerDelay?: number;
  delay?: number;
}

export const MotionSection = ({
  children,
  className,
  stagger = false,
  staggerDelay = 0.15,
  delay = 0,
  ...props
}: MotionSectionProps) => {
  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay },
    },
  };

  const staggerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={stagger ? staggerVariants : defaultVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
};

interface MotionItemProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  variantType?: keyof typeof motionVariants;
}

export const MotionItem = ({
  children,
  variantType = "fadeInUp",
  className,
  ...props
}: MotionItemProps) => {
  return (
    <motion.div
      variants={motionVariants[variantType]}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
