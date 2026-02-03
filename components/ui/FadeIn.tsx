'use client';
import { motion } from 'framer-motion';

export default function FadeIn({ children, delay = 0, className = '', direction = 'up', fullWidth = false, style }: { children: React.ReactNode, delay?: number, className?: string, direction?: 'up' | 'down' | 'left' | 'right', fullWidth?: boolean, style?: React.CSSProperties }) {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay } 
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px" }}
      variants={variants}
      className={`${className} ${fullWidth ? 'w-full' : ''}`}
      style={style}
    >
      {children}
    </motion.div>
  );
}
