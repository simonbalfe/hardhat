const TEAM = [
  {
    name: "Hardev Uppal",
    role: "CEO",
    initials: "HU",
    description:
      "Leading strategy and business development, ensuring our clients get the best results possible.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    name: "Charles Banks",
    role: "CMO",
    initials: "CB",
    description:
      "Heading up marketing and ad campaigns, crafting high-converting copy that drives leads.",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    name: "Simon Balfe",
    role: "CTO",
    initials: "SB",
    description:
      "Building and optimizing the tech stack that powers our lead generation systems.",
    gradient: "from-green-500 to-teal-600",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="bg-obsidian px-2.5 lg:px-0">
      <div className="container border-x border-b border-dark-gray">
        {/* Header */}
        <div className="border-b border-dark-gray px-6 py-12 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5">
              <span className="text-sm font-medium text-amber-500">
                Who We Are
              </span>
            </div>
            <h2 className="text-foreground text-2xl tracking-tight md:text-3xl lg:text-4xl">
              Meet the Team
            </h2>
            <p className="text-mid-gray mx-auto mt-4 max-w-2xl text-base lg:text-lg">
              We're a tight-knit team dedicated to helping roofing businesses
              grow with predictable, qualified leads.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3">
          {TEAM.map((member, index) => (
            <div
              key={index}
              className="border-b border-dark-gray p-8 text-center md:border-b-0 md:border-r md:last:border-r-0 lg:p-12"
            >
              {/* Avatar Placeholder */}
              <div className="mx-auto mb-6">
                <div
                  className={`mx-auto flex size-32 items-center justify-center rounded-2xl bg-gradient-to-br ${member.gradient} text-4xl font-bold text-white lg:size-40`}
                >
                  {member.initials}
                </div>
              </div>

              <h3 className="text-foreground text-xl font-semibold">
                {member.name}
              </h3>
              <p className="mb-4 text-lg font-medium text-amber-500">
                {member.role}
              </p>
              <p className="text-mid-gray text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
