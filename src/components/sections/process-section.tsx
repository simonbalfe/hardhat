import { CalendarCheck, DollarSign, MessageSquare, Zap } from "lucide-react";

const PROCESS_IMAGE = "/images/speed.png";

const STEPS = [
  {
    step: "01",
    icon: Zap,
    title: "Immediate Contact",
    description:
      "Once a lead comes in, we instantly follow up within the first few minutes. Speed is key—our rapid response helps start the conversation while the lead is still hot.",
    highlight: "Waiting more than 5 minutes can reduce results by up to 95%.",
  },
  {
    step: "02",
    icon: MessageSquare,
    title: "Strategic Qualification",
    description:
      "We engage leads in a structured conversation, qualifying them based on our proven criteria—as well as any custom filters you require.",
    highlight: "Only serious prospects make it through our vetting process.",
  },
  {
    step: "03",
    icon: DollarSign,
    title: "Buyer Intent & Budget",
    description:
      "We make sure each lead not only shows interest but also has the intent to buy and the budget to move forward.",
    highlight: "You only speak with pre-qualified, ready-to-buy prospects.",
  },
  {
    step: "04",
    icon: CalendarCheck,
    title: "Booked Appointment",
    description:
      "Qualified leads are booked directly into your calendar. You show up, give the quote, and close the deal.",
    highlight: "No chasing leads—they come to you ready.",
  },
];

export default function ProcessSection() {
  return (
    <section id="how-it-works" className="bg-obsidian px-2.5 lg:px-0">
      <div className="container border-x border-b border-dark-gray">
        <div className="border-b border-dark-gray px-6 py-12 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5">
              <span className="text-sm font-medium text-amber-500">
                How It Works
              </span>
            </div>
            <h2 className="text-foreground text-2xl tracking-tight md:text-3xl lg:text-4xl">
              From Lead to Booked Appointment
            </h2>
            <p className="text-mid-gray mx-auto mt-4 max-w-2xl text-base lg:text-lg">
              Our battle-tested process ensures only serious, qualified
              prospects end up on your calendar.
            </p>
          </div>
        </div>

        {/* Process Image */}
        <div className="border-b border-dark-gray p-8 lg:p-12">
          <div className="mx-auto max-w-md overflow-hidden rounded-xl border border-dark-gray">
            <img
              src={PROCESS_IMAGE}
              alt="Our lead generation process visualization"
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <div
              key={index}
              className="relative border-b border-dark-gray p-8 md:border-r md:last:border-r-0 lg:border-b-0"
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="text-4xl font-bold text-amber-500/30">
                  {step.step}
                </span>
                <div className="rounded-lg bg-amber-500/10 p-2">
                  <step.icon className="size-5 text-amber-500" />
                </div>
              </div>
              <h3 className="text-foreground mb-3 text-lg font-semibold">
                {step.title}
              </h3>
              <p className="text-mid-gray mb-4 text-sm">{step.description}</p>
              <p className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-3 text-xs text-amber-500">
                {step.highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
