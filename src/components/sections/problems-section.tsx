import {
  AlertCircle,
  Clock,
  DollarSign,
  Search,
  Target,
  TrendingDown,
  Users,
} from "lucide-react";

// Placeholder image for problems illustration
const PROBLEMS_IMAGE = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop";

const PROBLEMS = [
  {
    icon: Search,
    title: "Difficulty Finding Serious Leads",
    description:
      "Spending hours chasing leads that never convert into real jobs.",
  },
  {
    icon: Users,
    title: "Unqualified Leads",
    description:
      "Wasting time on prospects who aren't ready or able to commit.",
  },
  {
    icon: DollarSign,
    title: "Competing on Price",
    description:
      "Getting dragged into price wars that kill your profit margins.",
  },
  {
    icon: Target,
    title: "Difficulty Standing Out",
    description:
      "Struggling to position yourself as the go-to expert in your area.",
  },
  {
    icon: AlertCircle,
    title: "Lack of Quality Leads",
    description: "Missing out on long-term partnerships and repeat business.",
  },
  {
    icon: TrendingDown,
    title: "Inconsistent Inquiries",
    description:
      "Feast or famine cycles during off-peak seasons hurt cash flow.",
  },
  {
    icon: Clock,
    title: "Low-Budget Prospects",
    description:
      "Constantly fielding calls from people seeking the cheapest option.",
  },
];

export default function ProblemsSection() {
  return (
    <section id="problems" className="bg-obsidian px-2.5 lg:px-0">
      <div className="container border-x border-b border-dark-gray">
        <div className="px-6 py-12 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-foreground text-2xl tracking-tight md:text-3xl lg:text-4xl">
              Sound Familiar?
            </h2>
            <p className="text-mid-gray mx-auto mt-4 max-w-2xl text-base lg:text-lg">
              These are the problems that hold roofing businesses back. We've
              built our system specifically to solve them.
            </p>
          </div>

          {/* Problems Illustration */}
          <div className="mt-10 overflow-hidden rounded-xl border border-dark-gray">
            <img
              src={PROBLEMS_IMAGE}
              alt="Business challenges illustration"
              className="h-48 w-full object-cover lg:h-64"
            />
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {PROBLEMS.map((problem, index) => (
              <div
                key={index}
                className="group rounded-lg border border-dark-gray bg-jet p-6 transition-all hover:border-amber-500/30 hover:bg-jet/80"
              >
                <div className="mb-4 inline-flex rounded-lg bg-amber-500/10 p-3">
                  <problem.icon className="size-6 text-amber-500" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  {problem.title}
                </h3>
                <p className="text-mid-gray text-sm">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
