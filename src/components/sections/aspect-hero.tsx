import { ArrowRight, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

const BENEFITS = [
  "Qualified, High-Intent Leads",
  "Full Appointment Setting",
  "Google Review Campaigns",
  "Data-Driven Optimization",
];

const AspectHero = () => (
  <section
    id="aspect-hero"
    className="relative overflow-hidden bg-obsidian px-2.5 lg:px-0"
  >
    <div className="container relative border-l border-r border-l-dark-gray border-r-dark-gray px-5">
      <div className="pointer-events-none absolute inset-0 flex size-full items-center justify-center opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-transparent to-orange-500/20" />
      </div>

      <div className="py-16 lg:py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6 text-center lg:gap-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5">
            <span className="text-sm font-medium text-amber-500">
              Lead Generation for Roofing Businesses
            </span>
          </div>

          <img
            src="/images/hat.jpeg"
            alt="Hard Hat Growth"
            className="size-24 rounded-2xl shadow-2xl sm:size-28 md:size-32 lg:size-36"
          />

          <h1 className="text-foreground text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Hard Hat Growth
          </h1>

          <p className="text-foreground text-2xl tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
            Stop Chasing Leads.
            <br />
            <span className="text-amber-500">Start Closing Jobs.</span>
          </p>

          <p className="font-inter-tight text-mid-gray max-w-xl text-base md:text-lg lg:text-xl">
            We generate high-quality, pre-qualified leads for roofing
            contractors. Our team handles everything from ads to appointment
            booking—so you can focus on what you do best.
          </p>

          <ul className="grid gap-3 sm:grid-cols-2">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2">
                <CheckCircle className="size-5 text-amber-500" />
                <span className="text-foreground text-sm">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button asChild size="lg">
              <a href="https://calendly.com/hardevuppal2/30min?month=2026-02" target="_blank" rel="noopener noreferrer" aria-label="Book a call">
                Book a Strategy Call
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="#results" aria-label="See our results">
                See Our Results
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AspectHero;
