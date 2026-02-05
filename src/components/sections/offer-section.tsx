import {
  Calendar,
  CheckCircle,
  Headphones,
  MessageSquare,
  Star,
} from "lucide-react";

const OFFER_ITEMS = [
  {
    icon: MessageSquare,
    title: "Complete Appointment Setting System",
    features: [
      "Level 2 Qualification",
      "Booked Directly into Your Calendar",
      "Internal Call Handling Team",
    ],
  },
  {
    icon: Star,
    title: "Google Review Campaign",
    features: [
      "Automated review requests",
      "Reputation management",
      "Review response templates",
    ],
  },
];

const PRICING = [
  {
    label: "Commission",
    value: "10%",
    description: "per closed job",
  },
  {
    label: "Ad Spend",
    value: "£10-30",
    description: "per day minimum",
  },
];

export default function OfferSection() {
  return (
    <section className="bg-obsidian px-2.5 lg:px-0">
      <div className="container border-x border-b border-dark-gray">
        {/* Header */}
        <div className="border-b border-dark-gray px-6 py-12 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5">
              <span className="text-sm font-medium text-amber-500">
                Our Offer
              </span>
            </div>
            <h2 className="text-foreground text-2xl tracking-tight md:text-3xl lg:text-4xl">
              Full Appointment Setting
            </h2>
            <p className="text-mid-gray mx-auto mt-4 max-w-2xl text-base lg:text-lg">
              Everything you need to fill your calendar with qualified,
              ready-to-buy roofing leads.
            </p>
          </div>
        </div>

        {/* Offer Details */}
        <div className="grid lg:grid-cols-3">
          {/* What's Included */}
          <div className="col-span-2 border-b border-dark-gray p-8 lg:border-b-0 lg:border-r lg:p-12">
            <h3 className="text-foreground mb-8 text-xl font-semibold">
              What's Included
            </h3>
            <div className="grid gap-8 sm:grid-cols-2">
              {OFFER_ITEMS.map((item, index) => (
                <div key={index}>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-amber-500/10 p-2">
                      <item.icon className="size-5 text-amber-500" />
                    </div>
                    <h4 className="text-foreground font-semibold">
                      {item.title}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="size-4 text-amber-500" />
                        <span className="text-mid-gray text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 rounded-lg border border-dark-gray bg-jet p-6 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <Calendar className="size-5 text-amber-500" />
                <span className="text-foreground text-sm">
                  Direct Calendar Booking
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Headphones className="size-5 text-amber-500" />
                <span className="text-foreground text-sm">
                  Dedicated Support Team
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="size-5 text-amber-500" />
                <span className="text-foreground text-sm">
                  CRM Integration
                </span>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="flex flex-col justify-center bg-jet p-8 lg:p-12">
            <h3 className="text-foreground mb-6 text-xl font-semibold">
              Simple Pricing
            </h3>
            <div className="space-y-6">
              {PRICING.map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-dark-gray bg-obsidian p-4"
                >
                  <p className="text-mid-gray text-sm">{item.label}</p>
                  <p className="text-foreground text-3xl font-bold">
                    {item.value}
                  </p>
                  <p className="text-mid-gray text-sm">{item.description}</p>
                </div>
              ))}
            </div>
            <p className="text-mid-gray mt-6 text-center text-xs">
              We only win when you win. Our commission model means we're fully
              invested in your success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
