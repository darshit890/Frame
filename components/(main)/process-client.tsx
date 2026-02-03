"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

interface ProcessStep {
  title?: string;
  description?: string;
  icon?: string;
  features?: string[];
}

interface ProcessClientProps {
  subheading?: string;
  heading?: string;
  steps?: ProcessStep[];
}

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  bulb: (props) => (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M32 2 C20 2 12 12 12 22 C12 30 18 34 20 38 L20 44 H44 V38 C46 34 52 30 52 22 C52 12 44 2 32 2Z" />
      <path d="M26 30 Q32 26 38 30" />
      <line x1="22" y1="48" x2="42" y2="48" />
      <line x1="24" y1="52" x2="40" y2="52" />
      <line x1="26" y1="56" x2="38" y2="56" />
    </svg>
  ),
  puzzle: (props) => (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
      />
    </svg>
  ),
  document: (props) => (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
      />
    </svg>
  ),
  rocket: (props) => (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      />
    </svg>
  ),
};

function ProcessCard({
  step,
  index,
  totalSteps,
  isActive,
  isPast,
}: {
  step: ProcessStep;
  index: number;
  totalSteps: number;
  isActive: boolean;
  isPast: boolean;
}) {
  const IconComponent =
    step.icon && iconMap[step.icon] ? iconMap[step.icon] : iconMap["bulb"];

  const features = step.features || [
    "Strategic Planning",
    "Expert Consultation",
    "Data-Driven Insights",
  ];

  return (
    <div
      className={`
        relative rounded-3xl overflow-hidden
        border transition-all duration-500
        ${isActive 
          ? "border-primary/60 shadow-[0_0_80px_-20px_#04d9ff]" 
          : "border-primary/10 shadow-2xl"
        }
      `}
      style={{
        backgroundColor: "var(--card)",
      }}
    >
      {/* Solid inner background to ensure no transparency */}
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: "var(--card)" }}
      />

      {/* Animated border glow */}
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: `linear-gradient(90deg, transparent 0%, #04d9ff 50%, transparent 100%)`,
              backgroundSize: "200% 100%",
              animation: "shimmer 3s infinite linear",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              padding: "2px",
            }}
          />
        </motion.div>
      )}

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#04d9ff 1px, transparent 1px),
            linear-gradient(90deg, #04d9ff 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Main content */}
      <div className="relative p-6 md:p-12 lg:p-16">
        {/* Top row - Step number and status */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex items-center gap-4">
            {/* Large step number */}
            <div className="relative">
              <span
                className="text-[60px] sm:text-[80px] md:text-[140px] font-black leading-none select-none"
                style={{
                  WebkitTextStroke: isActive ? "2px #04d9ff" : "1px rgba(4, 217, 255, 0.2)",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              {isActive && (
                <motion.div
                  className="absolute inset-0 blur-2xl"
                  style={{
                    background: "radial-gradient(circle, rgba(4, 217, 255, 0.15) 0%, transparent 70%)",
                  }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </div>
          </div>

          {/* Status badge */}
          <motion.div
            className={`
              flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border
              ${isActive 
                ? "border-primary/50 text-primary" 
                : isPast
                ? "border-primary/30 text-primary/60"
                : "border-primary/10 text-primary/30"
              }
            `}
            style={{
              backgroundColor: isActive ? "rgba(4, 217, 255, 0.1)" : "rgba(4, 217, 255, 0.02)",
            }}
          >
            {isActive && (
              <motion.span
                className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full"
                style={{ backgroundColor: "#04d9ff" }}
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
              {isPast ? "Completed" : isActive ? "In Progress" : "Upcoming"}
            </span>
          </motion.div>
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Left column - Title and description */}
          <div className="space-y-4 md:space-y-6">
            {/* Icon */}
            <motion.div
              className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-2xl"
              style={{
                backgroundColor: isActive ? "#04d9ff" : "rgba(4, 217, 255, 0.1)",
                color: isActive ? "#0a1420" : "rgba(4, 217, 255, 0.6)",
              }}
              animate={isActive ? {
                boxShadow: ["0 0 0 0 rgba(4, 217, 255, 0.3)", "0 0 40px 10px rgba(4, 217, 255, 0.15)", "0 0 0 0 rgba(4, 217, 255, 0.3)"],
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <IconComponent className="w-6 h-6 md:w-8 md:h-8" />
            </motion.div>

            {/* Title */}
            <h3 
              className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance"
              style={{
                color: isActive ? "#f0f4f8" : "rgba(240, 244, 248, 0.5)",
              }}
            >
              {step.title}
            </h3>

            {/* Description */}
            <p 
              className="text-base md:text-lg leading-relaxed max-w-lg"
              style={{
                color: isActive ? "rgba(200, 210, 220, 0.9)" : "rgba(200, 210, 220, 0.4)",
              }}
            >
              {step.description}
            </p>
          </div>

          {/* Right column - Features and metrics */}
          <div className="space-y-8">
            {/* Features list */}
            <div className="space-y-4">
              <h4 
                className="text-sm font-bold tracking-[0.2em] uppercase"
                style={{
                  color: isActive ? "#04d9ff" : "rgba(4, 217, 255, 0.4)",
                }}
              >
                What We Deliver
              </h4>
              <div className="space-y-3">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-xl border transition-all"
                    style={{
                      backgroundColor: isActive ? "rgba(4, 217, 255, 0.05)" : "rgba(4, 217, 255, 0.01)",
                      borderColor: isActive ? "rgba(4, 217, 255, 0.2)" : "rgba(4, 217, 255, 0.05)",
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: isActive ? 1 : 0.5, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <motion.div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        backgroundColor: isActive ? "#04d9ff" : "rgba(4, 217, 255, 0.15)",
                        color: isActive ? "#0a1420" : "rgba(4, 217, 255, 0.6)",
                      }}
                    >
                      {i + 1}
                    </motion.div>
                    <span style={{ color: isActive ? "#f0f4f8" : "rgba(240, 244, 248, 0.5)" }}>
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Progress indicator within card */}
            <div 
              className="pt-4 border-t"
              style={{ borderColor: "rgba(4, 217, 255, 0.1)" }}
            >
              <div className="flex items-center justify-between text-xs mb-3">
                <span style={{ color: isActive ? "#04d9ff" : "rgba(4, 217, 255, 0.4)" }}>
                  Progress
                </span>
                <span style={{ color: isActive ? "#f0f4f8" : "rgba(240, 244, 248, 0.5)" }}>
                  Step {index + 1} of {totalSteps}
                </span>
              </div>
              <div 
                className="h-2 rounded-full overflow-hidden"
                style={{ backgroundColor: "rgba(4, 217, 255, 0.1)" }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{ 
                    background: "linear-gradient(to right, #04d9ff, rgba(4, 217, 255, 0.6))",
                    width: `${((index + 1) / totalSteps) * 100}%`,
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${((index + 1) / totalSteps) * 100}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Floating particles */}
        {isActive && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  backgroundColor: "#04d9ff",
                  left: `${10 + Math.random() * 80}%`,
                  bottom: 0,
                }}
                animate={{
                  y: [0, -300 - Math.random() * 200],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProcessClient({
  subheading = "Our Process",
  heading = "How We Deliver Results",
  steps = [
    {
      title: "Discovery & Strategy",
      description:
        "We dive deep into understanding your vision, goals, and challenges to craft a tailored strategy that sets the foundation for success.",
      icon: "bulb",
      features: ["Market Research", "Competitor Analysis", "Goal Definition"],
    },
    {
      title: "Design & Development",
      description:
        "Our team brings your vision to life through innovative design and cutting-edge development, ensuring every detail aligns with your objectives.",
      icon: "puzzle",
      features: ["UI/UX Design", "Agile Development", "Quality Assurance"],
    },
    {
      title: "Launch & Optimize",
      description:
        "We deploy your solution and continuously optimize based on real-world performance, ensuring sustained growth and maximum impact.",
      icon: "rocket",
      features: ["Deployment Strategy", "Performance Monitoring", "Continuous Improvement"],
    },
  ],
}: ProcessClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = React.useState(0);
  
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = Math.min(
      steps.length - 1,
      Math.floor(latest * steps.length)
    );
    setActiveIndex(newIndex);
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  if (!steps || steps.length === 0) {
    return null;
  }

  return (
    <section
      ref={containerRef}
      className="relative text-foreground mt-24 md:mt-32"
      style={{ 
        height: `${100 + steps.length * 100}vh`,
        backgroundColor: "var(--background)",
      }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ y: backgroundY }}
        >
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Gradient orbs */}
          <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[150px]" />
        </motion.div>

        {/* Content wrapper */}
        <div className="relative h-full flex flex-col justify-center px-4 md:px-8 lg:px-16 pt-8 pb-24 md:pt-12 md:pb-32">
          {/* Header */}
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className="inline-flex items-center gap-3 mb-4">
              <div 
                className="h-px w-8 md:w-16"
                style={{ background: "linear-gradient(to right, transparent, #04d9ff)" }}
              />
              <span 
                className="text-[10px] md:text-sm font-bold tracking-[0.3em] uppercase"
                style={{ color: "#04d9ff" }}
              >
                {subheading}
              </span>
              <div 
                className="h-px w-8 md:w-16"
                style={{ background: "linear-gradient(to left, transparent, #04d9ff)" }}
              />
            </motion.div>

            <h2 
              className="text-2xl md:text-5xl lg:text-6xl font-bold text-balance"
              style={{ color: "#f0f4f8" }}
            >
              {heading}
            </h2>

            {/* Scroll progress indicator */}
            <div className="mt-6 flex items-center justify-center gap-2">
              {steps.map((_, i) => (
                <motion.div
                  key={i}
                  className="h-1.5 rounded-full transition-all duration-500"
                  style={{
                    backgroundColor: activeIndex >= i ? "#04d9ff" : "rgba(4, 217, 255, 0.2)",
                    width: activeIndex >= i ? "2rem" : "0.75rem",
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Card stack container */}
          <div className="relative flex-1 max-w-6xl mx-auto w-full max-h-[75vh] md:max-h-[600px]">
            {steps.map((step, index) => {
              const isActive = index === activeIndex;
              const isPast = index < activeIndex;
              const isFuture = index > activeIndex;
              
              // Calculate position in stack
              const offset = isFuture 
                ? (index - activeIndex) * 20 
                : isPast 
                ? (activeIndex - index) * -8 
                : 0;
              
              const scale = isFuture 
                ? 1 - (index - activeIndex) * 0.05 
                : isPast 
                ? 0.95 - (activeIndex - index) * 0.02 
                : 1;
              
              const zIndex = steps.length - Math.abs(index - activeIndex);
              const opacity = isActive ? 1 : isPast ? 0 : 1 - (index - activeIndex) * 0.3;

              return (
                <motion.div
                  key={index}
                  className="absolute inset-x-0 top-0 w-full"
                  animate={{
                    y: offset,
                    scale,
                    opacity,
                    zIndex,
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 30,
                  }}
                >
                  <ProcessCard
                    step={step}
                    index={index}
                    totalSteps={steps.length}
                    isActive={isActive}
                    isPast={isPast}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Scroll hint */}
          <motion.div
            className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span 
              className="text-xs tracking-widest uppercase"
              style={{ color: "rgba(200, 210, 220, 0.5)" }}
            >
              Scroll to explore
            </span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="#04d9ff"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Shimmer keyframes */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  );
}
