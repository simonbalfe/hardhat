import { ArrowRight, Building2, Home, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";

const STATS = [
  {
    value: "52",
    label: "Leads Generated",
    sublabel: "in 25 days",
  },
  {
    value: "12",
    label: "High Intent Quotes",
    sublabel: "after qualification",
  },
  {
    value: "5",
    label: "Jobs Closed",
    sublabel: "from qualified quotes",
  },
  {
    value: "41.67%",
    label: "Close Rate",
    sublabel: "quotes to jobs",
  },
];

const JOBS = [
  {
    icon: Home,
    title: "4 Residential Jobs",
    description: "Townhouses & semi-detached homes",
    profit: "£24,000",
  },
  {
    icon: Building2,
    title: "1 Commercial Building",
    description: "Large commercial roofing project",
    profit: "£56,400",
  },
];

export default function ResultsSection() {
  return (
    <section id="results" className="bg-obsidian px-2.5 lg:px-0">
      <div className="container border-x border-b border-dark-gray">
        {/* Header */}
        <div className="border-b border-dark-gray px-6 py-12 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5">
              <TrendingUp className="size-4 text-amber-500" />
              <span className="text-sm font-medium text-amber-500">
                Real Results
              </span>
            </div>
            <h2 className="text-foreground text-2xl tracking-tight md:text-3xl lg:text-4xl">
              What You Can Expect
            </h2>
            <p className="text-mid-gray mx-auto mt-4 max-w-2xl text-base lg:text-lg">
              Here's a real example of what our system delivered for a roofing
              client in just 25 days.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid border-b border-dark-gray sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="border-b border-dark-gray p-8 text-center sm:border-r sm:last:border-r-0 lg:border-b-0"
            >
              <p className="text-4xl font-bold text-amber-500 lg:text-5xl">
                {stat.value}
              </p>
              <p className="text-foreground mt-2 text-lg font-medium">
                {stat.label}
              </p>
              <p className="text-mid-gray text-sm">{stat.sublabel}</p>
            </div>
          ))}
        </div>

        {/* Breakdown */}
        <div className="grid lg:grid-cols-2">
          {/* Jobs Breakdown */}
          <div className="border-b border-dark-gray p-8 lg:border-b-0 lg:border-r lg:p-12">
            <h3 className="text-foreground mb-6 text-xl font-semibold">
              Jobs Completed
            </h3>
            <div className="space-y-4">
              {JOBS.map((job, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border border-dark-gray bg-jet p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-amber-500/10 p-3">
                      <job.icon className="size-6 text-amber-500" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">{job.title}</p>
                      <p className="text-mid-gray text-sm">{job.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-amber-500">
                      {job.profit}
                    </p>
                    <p className="text-mid-gray text-xs">profit</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Total Profit */}
          <div className="flex flex-col items-center justify-center bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-8 lg:p-12">
            <p className="text-mid-gray mb-2 text-sm uppercase tracking-wider">
              Total Profit Generated
            </p>
            <p className="text-foreground text-5xl font-bold lg:text-6xl">
              £80,000<span className="text-amber-500">+</span>
            </p>
            <p className="text-mid-gray mt-2 text-center text-sm">
              Once all jobs were completed
            </p>

            <div className="mt-8">
              <Button asChild size="lg">
                <a href="#contact">
                  Get Results Like This
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
