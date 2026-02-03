"use client";

import { useState } from "react";
import Footer from "@/components/(main)/Footer";
import Navbar from "@/components/navbar";

// Original Code (Commented Out as requested)
// import { client } from "@/sanity/lib/client";
// import { portfolioQuery } from "@/sanity/lib/queries";
// import ProjectsClient from "@/components/(main)/ProjectsClient";
//
// export const revalidate = 60;
//
// export default async function ProductPage() {
//   const data = await client.fetch(portfolioQuery);
//   return <ProjectsClient projects={data?.projects || []} />;
// }

interface PortfolioCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  pdfUrl: string;
  stats: { label: string; value: string }[];
  features: string[];
}

const portfolioCategories: PortfolioCategory[] = [
  {
    id: "software",
    title: "Software Development",
    subtitle: "Digital Craftsmanship",
    description:
      "Cutting-edge applications, scalable architectures, and innovative solutions that transform businesses.",
    pdfUrl: "/pdfs/software-portfolio.pdf",
    stats: [
      { label: "Projects", value: "50+" },
      { label: "Technologies", value: "25+" },
      { label: "Years", value: "8+" },
    ],
    features: [
      "Web Applications",
      "Mobile Development",
      "Cloud Architecture",
    ],
  },
  {
    id: "marketing",
    title: "Marketing & Growth",
    subtitle: "Strategic Excellence",
    description:
      "Data-driven campaigns, brand strategies, and growth frameworks that deliver measurable results.",
    pdfUrl: "/pdfs/marketing-portfolio.pdf",
    stats: [
      { label: "Campaigns", value: "200+" },
      { label: "ROI Increase", value: "340%" },
      { label: "Brands", value: "75+" },
    ],
    features: [
      "Brand Strategy",
      "Digital Marketing",
      "Growth Hacking",
      "Analytics",
    ],
  },
];

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
  );
}

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}

function PortfolioCard({
  category,
  index,
}: {
  category: PortfolioCategory;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = category.pdfUrl;
    link.download = `${category.id}-portfolio.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const Icon = index === 0 ? CodeIcon : ChartIcon;

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glowing border effect */}
      <div
        className={`absolute -inset-px rounded-3xl bg-linear-to-r from-primary via-accent to-primary opacity-0 blur-2xl transition-all duration-500 ${isHovered ? "opacity-100" : ""}`}
      />
      {/* Stronger Bottom Glow */}
      <div
        className={`absolute -bottom-10 left-0 right-0 mx-auto h-32 w-[90%] bg-primary/60 blur-[80px] transition-all duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
      />

      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_-10px_var(--primary)] lg:p-10">
        {/* Animated background gradient */}
        <div
          className={`absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : ""}`}
        />

        {/* Floating particles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <SparkleIcon
            className={`absolute right-8 top-8 h-3 w-3 text-primary/30 transition-all duration-700 ${isHovered ? "translate-y-[-10px] opacity-100" : "opacity-0"}`}
          />
          <SparkleIcon
            className={`absolute bottom-20 left-12 h-2 w-2 text-accent/40 transition-all delay-100 duration-700 ${isHovered ? "translate-y-[-15px] opacity-100" : "opacity-0"}`}
          />
          <SparkleIcon
            className={`absolute right-20 top-32 h-2 w-2 text-primary/20 transition-all delay-200 duration-700 ${isHovered ? "translate-y-[-8px] opacity-100" : "opacity-0"}`}
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon Badge */}
          <div className="mb-8 inline-flex items-center gap-3">
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-secondary transition-all duration-300 ${isHovered ? "border-primary/50 bg-primary/10" : ""}`}
            >
              <Icon
                className={`h-7 w-7 transition-colors duration-300 ${isHovered ? "text-primary" : "text-muted-foreground"}`}
              />
            </div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {category.subtitle}
            </span>
          </div>

          {/* Title */}
          <h3 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            <span className="text-balance">{category.title}</span>
          </h3>

          {/* Description */}
          <p className="mb-8 max-w-md text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
            {category.description}
          </p>

          {/* Stats */}
          <div className="mb-8 grid grid-cols-3 gap-4 border-y border-border py-6">
            {category.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div
                  className={`text-2xl font-bold transition-colors duration-300 lg:text-3xl ${isHovered ? "text-primary" : "text-foreground"}`}
                >
                  {stat.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="mb-10 flex flex-wrap gap-2">
            {category.features.map((feature, i) => (
              <span
                key={i}
                className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all duration-300 ${
                  isHovered
                    ? "border-primary/30 bg-primary/10 text-primary"
                    : "border-border bg-secondary text-muted-foreground"
                }`}
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="group/btn relative flex w-full items-center justify-between overflow-hidden rounded-2xl border border-border bg-secondary p-5 transition-all duration-300 hover:border-primary hover:bg-primary/10"
          >
            <div className="flex items-center gap-4">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${isHovered ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}
              >
                <DownloadIcon className="h-5 w-5" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-foreground">
                  Download Portfolio
                </div>
                <div className="text-xs text-muted-foreground">PDF Format</div>
              </div>
            </div>
            <ArrowIcon
              className={`h-5 w-5 transition-all duration-300 ${isHovered ? "translate-x-1 text-primary" : "text-muted-foreground"}`}
            />

            {/* Button hover effect */}
            <div
              className={`absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-primary/10 to-transparent transition-transform duration-700 ${isHovered ? "translate-x-full" : ""}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

interface PortfolioDownloadProps {
  mainPdfUrl?: string;
}

export default function ProjectsPage({
  mainPdfUrl = "/pdfs/full-portfolio.pdf",
}: PortfolioDownloadProps) {
  const [isMainHovered, setIsMainHovered] = useState(false);

  const handleMainDownload = () => {
    const link = document.createElement("a");
    link.href = mainPdfUrl;
    link.download = "complete-portfolio.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-background">
      <section className="relative min-h-screen overflow-hidden py-24 lg:py-32"> {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
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
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="mb-20 text-center lg:mb-28">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-border bg-card/50 px-5 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              Portfolio Collection
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mx-auto mb-6 max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl">
            Explore Our{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                Creative Work
              </span>
              <span className="absolute -bottom-2 left-0 h-3 w-full bg-primary/20 blur-md" />
            </span>
          </h1>

          <p className="mx-auto mb-12 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground lg:text-xl">
            Discover a curated collection of projects showcasing innovation,
            craftsmanship, and measurable impact across software development and
            marketing.
          </p>

          {/* Main Download Button */}
          <div className="flex justify-center">
            <button
              onClick={handleMainDownload}
              onMouseEnter={() => setIsMainHovered(true)}
              onMouseLeave={() => setIsMainHovered(false)}
              className="group relative overflow-hidden"
            >
              {/* Button glow */}
              <div
                className={`absolute -inset-1 rounded-full bg-linear-to-r from-primary via-accent to-primary opacity-0 blur transition-all duration-500 ${isMainHovered ? "opacity-75" : ""}`}
              />

              {/* Shimmer effect */}
              <div
                className={`absolute inset-0 -translate-x-full rounded-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ${isMainHovered ? "translate-x-full" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {portfolioCategories.map((category, index) => (
            <PortfolioCard key={category.id} category={category} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center lg:mt-28">
          <div className="inline-flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <svg
                className="h-5 w-5 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">High-resolution PDFs</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <svg
                className="h-5 w-5 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">Detailed case studies</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <svg
                className="h-5 w-5 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">Updated regularly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
      <Footer />
    </main>
  );
}
