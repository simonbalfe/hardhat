import {
  ArrowRight,
  CheckCircle,
  Image,
  Key,
  PlayCircle,
  Rocket,
  Settings,
} from "lucide-react";

import { Button } from "@/components/ui/button";

// Placeholder image for onboarding
const ONBOARDING_IMAGE = "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=400&fit=crop";

const STEPS = [
  {
    icon: Image,
    title: "Share Your Work",
    description: "Send through images and videos of past work",
  },
  {
    icon: Key,
    title: "Provide Access",
    description:
      "Send us your sign in details to your Facebook account, so we can access Ads Manager and add staff to it",
  },
  {
    icon: Settings,
    title: "We Build Everything",
    description: "We will make the ads and setup the entire system",
  },
  {
    icon: PlayCircle,
    title: "Stay Updated",
    description:
      "We will keep you updated at every step of the process and send ads for approval if needed",
  },
  {
    icon: Rocket,
    title: "Launch & Receive Leads",
    description:
      "We launch the ads and leads come through to your preferred method",
  },
];

export default function NextStepsSection() {
  return (
    <section id="contact" className="bg-obsidian px-2.5 lg:px-0">
      <div className="container border-x border-b border-dark-gray">
        {/* Header */}
        <div className="border-b border-dark-gray px-6 py-12 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5">
              <span className="text-sm font-medium text-amber-500">
                Getting Started
              </span>
            </div>
            <h2 className="text-foreground text-2xl tracking-tight md:text-3xl lg:text-4xl">
              Next Steps
            </h2>
            <p className="text-mid-gray mx-auto mt-4 max-w-2xl text-base lg:text-lg">
              Here's exactly what happens after you decide to work with us.
            </p>
          </div>
        </div>

        {/* Onboarding Image */}
        <div className="border-b border-dark-gray p-6 lg:p-8">
          <div className="overflow-hidden rounded-xl border border-dark-gray">
            <img
              src={ONBOARDING_IMAGE}
              alt="Easy onboarding process"
              className="h-48 w-full object-cover lg:h-56"
            />
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step, index) => (
            <div
              key={index}
              className="relative border-b border-dark-gray p-6 md:border-r md:last:border-r-0 lg:border-b-0"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-black">
                  {index + 1}
                </div>
                <step.icon className="size-5 text-amber-500" />
              </div>
              <h3 className="text-foreground mb-2 font-semibold">
                {step.title}
              </h3>
              <p className="text-mid-gray text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-orange-500/10 px-6 py-12 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-foreground mb-4 text-2xl font-semibold lg:text-3xl">
              Ready to Fill Your Calendar with Qualified Leads?
            </h3>
            <p className="text-mid-gray mb-8 text-base">
              Book a free strategy call to see if we're a good fit. No pressure,
              no hard sell—just a conversation about your business and how we
              might be able to help.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <a href="mailto:hello@hardhatgrowth.co.uk">
                  Book Your Strategy Call
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="size-5 text-amber-500" />
                <span className="text-foreground text-sm">No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="size-5 text-amber-500" />
                <span className="text-foreground text-sm">
                  Performance-based pricing
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="size-5 text-amber-500" />
                <span className="text-foreground text-sm">
                  Cancel anytime
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
