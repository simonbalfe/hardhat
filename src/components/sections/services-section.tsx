import { BarChart3, MapPin, PenLine } from "lucide-react";

const SERVICES = [
  {
    icon: MapPin,
    title: "Local Targeting",
    description:
      "We focus your ads on potential customers within a reasonable distance, ensuring every lead is actually serviceable. No more wasted ad spend on leads outside your service area.",
    highlights: [
      "Geo-targeted campaigns",
      "Radius-based advertising",
      "Local market research",
    ],
  },
  {
    icon: PenLine,
    title: "High-Converting Copy",
    description:
      "Using market research from your area, we craft compelling headlines, offers, and ad copy that attract high-quality prospects at scale.",
    highlights: [
      "Market-specific messaging",
      "Tested ad creatives",
      "Compelling offers",
    ],
  },
  {
    icon: BarChart3,
    title: "Continuous Optimization",
    description:
      "Once the ads are live, we monitor performance and make data-driven tweaks to ensure consistent improvement and maximum ROI.",
    highlights: [
      "Weekly performance reviews",
      "A/B testing",
      "ROI tracking",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-obsidian px-2.5 lg:px-0">
      <div className="container border-x border-b border-dark-gray">
        <div className="border-b border-dark-gray px-6 py-12 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5">
              <span className="text-sm font-medium text-amber-500">
                What We Do
              </span>
            </div>
            <h2 className="text-foreground text-2xl tracking-tight md:text-3xl lg:text-4xl">
              A Complete Lead Generation System
            </h2>
            <p className="text-mid-gray mx-auto mt-4 max-w-2xl text-base lg:text-lg">
              We don't just run ads. We build a complete system designed to
              deliver qualified, ready-to-buy leads directly to your calendar.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="border-b border-dark-gray p-8 lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <div className="mb-6 inline-flex rounded-xl bg-amber-500/10 p-4">
                <service.icon className="size-8 text-amber-500" />
              </div>
              <h3 className="text-foreground mb-3 text-xl font-semibold lg:text-2xl">
                {service.title}
              </h3>
              <p className="text-mid-gray mb-6 text-base">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="text-foreground flex items-center gap-2 text-sm"
                  >
                    <div className="size-1.5 rounded-full bg-amber-500" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
