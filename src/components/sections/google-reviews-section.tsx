import { ArrowUp, Search, Star, Trophy, Users } from "lucide-react";

const BENEFITS = [
  {
    icon: ArrowUp,
    title: "Rank Higher on Google",
    description:
      "More reviews signal trust to Google's algorithm, pushing your business higher in local search results.",
  },
  {
    icon: Search,
    title: "More Organic Leads",
    description:
      "Better rankings mean more visibility, bringing in inbound leads without paying for ads.",
  },
  {
    icon: Users,
    title: "Win Over Competitors",
    description:
      "When prospects compare options, the business with more positive reviews wins.",
  },
  {
    icon: Trophy,
    title: "Become the Local Leader",
    description:
      "Establish yourself as the most trusted roofing company in your service area.",
  },
];

export default function GoogleReviewsSection() {
  return (
    <section className="bg-obsidian px-2.5 lg:px-0">
      <div className="container border-x border-b border-dark-gray">
        <div className="grid lg:grid-cols-2">
          {/* Left side - Info */}
          <div className="border-b border-dark-gray p-8 lg:border-b-0 lg:border-r lg:p-12">
            <div className="mb-6 inline-flex items-center gap-2">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-5 text-amber-500"
                    fill="currentColor"
                  />
                ))}
              </div>
              <span className="text-foreground text-sm font-medium">
                Google Review Campaign
              </span>
            </div>

            <h2 className="text-foreground mb-4 text-2xl tracking-tight md:text-3xl lg:text-4xl">
              Dominate Local Search with More 5-Star Reviews
            </h2>

            <p className="text-mid-gray mb-8 text-base lg:text-lg">
              Your Google reviews are your online reputation. We help you
              systematically collect more reviews from happy customers, boosting
              your visibility and credibility.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {BENEFITS.map((benefit, index) => (
                <div key={index} className="flex gap-3">
                  <div className="shrink-0 rounded-lg bg-amber-500/10 p-2">
                    <benefit.icon className="size-5 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-1 text-sm font-semibold">
                      {benefit.title}
                    </h3>
                    <p className="text-mid-gray text-xs">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="flex items-center justify-center bg-jet p-8 lg:p-12">
            <div className="w-full max-w-sm space-y-4">
              {/* Mock Google Review Cards */}
              <div className="rounded-lg border border-dark-gray bg-obsidian p-4">
                <div className="mb-2 flex items-center gap-2">
                  <div className="size-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600" />
                  <div>
                    <p className="text-foreground text-sm font-medium">
                      James Wilson
                    </p>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="size-3 text-amber-500"
                          fill="currentColor"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-mid-gray text-sm">
                  "Excellent work on our roof. Professional team, fair pricing,
                  and completed ahead of schedule!"
                </p>
              </div>

              <div className="rounded-lg border border-dark-gray bg-obsidian p-4">
                <div className="mb-2 flex items-center gap-2">
                  <div className="size-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />
                  <div>
                    <p className="text-foreground text-sm font-medium">
                      Sarah Mitchell
                    </p>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="size-3 text-amber-500"
                          fill="currentColor"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-mid-gray text-sm">
                  "Best roofing company in the area. They went above and beyond
                  our expectations."
                </p>
              </div>

              <div className="rounded-lg border border-dark-gray bg-obsidian p-4">
                <div className="mb-2 flex items-center gap-2">
                  <div className="size-10 rounded-full bg-gradient-to-br from-green-500 to-teal-600" />
                  <div>
                    <p className="text-foreground text-sm font-medium">
                      Robert Chen
                    </p>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="size-3 text-amber-500"
                          fill="currentColor"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-mid-gray text-sm">
                  "Highly recommend! Quality workmanship and great customer
                  service."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
