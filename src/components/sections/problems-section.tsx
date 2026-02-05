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
const PROBLEMS_IMAGE = "/images/angry.png";

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

function ProblemCard({ problem, className = "" }: { problem: typeof PROBLEMS[number]; className?: string }) {
  const Icon = problem.icon;
  return (
    <div className={`group rounded-lg border border-dark-gray bg-jet p-5 transition-all hover:border-amber-500/30 hover:bg-jet/80 ${className}`}>
      <div className="mb-3 inline-flex rounded-lg bg-amber-500/10 p-2.5">
        <Icon className="size-5 text-amber-500" />
      </div>
      <h3 className="text-foreground mb-1.5 text-base font-semibold">
        {problem.title}
      </h3>
      <p className="text-mid-gray text-sm">{problem.description}</p>
    </div>
  );
}

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

          {/* Problems grid with image in center */}
          <div className="mt-10 grid gap-4 grid-cols-1 md:grid-cols-3">
            {/* Top row - 3 problems */}
            {PROBLEMS.slice(0, 3).map((problem, index) => (
              <ProblemCard key={index} problem={problem} />
            ))}

            {/* Middle row - problem, image, problem */}
            <ProblemCard problem={PROBLEMS[3]} />

            {/* Center image */}
            <div className="overflow-hidden rounded-lg border border-dark-gray">
              <img
                src={PROBLEMS_IMAGE}
                alt="Business challenges illustration"
                className="aspect-square w-full h-full object-cover"
              />
            </div>

            <ProblemCard problem={PROBLEMS[4]} />

            {/* Bottom row - 2 problems */}
            <ProblemCard problem={PROBLEMS[5]} />

            <div className="hidden md:block" /> {/* Empty center cell */}

            <ProblemCard problem={PROBLEMS[6]} />
          </div>
        </div>
      </div>
    </section>
  );
}
