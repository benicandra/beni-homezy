"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionSectionProps extends HTMLMotionProps<"section"> {
  children: ReactNode;
}

export const MotionSection = ({
  children,
  className,
  ...props
}: MotionSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
};
