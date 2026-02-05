import { Video } from "lucide-react";

const EXAMPLE_AD = {
  title: "Roofing Ad",
  description: "High-converting roofing lead gen ad",
  video: "/images/ads/ad-1.mp4",
};

function PhoneMockup({
  title,
  description,
  video,
}: {
  title: string;
  description: string;
  video: string;
}) {
  return (
    <div className="flex flex-col items-center">
      {/* Phone Frame */}
      <div className="relative">
        {/* Phone outer frame */}
        <div className="relative h-[500px] w-[250px] overflow-hidden rounded-[40px] border-4 border-zinc-700 bg-zinc-900 shadow-2xl sm:h-[580px] sm:w-[280px]">
          {/* Notch */}
          <div className="absolute left-1/2 top-2 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-zinc-800" />

          {/* Screen content - Video */}
          <video
            src={video}
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 z-10 h-1 w-24 -translate-x-1/2 rounded-full bg-zinc-600" />
        </div>
      </div>

      {/* Caption */}
      <div className="mt-6 text-center">
        <h3 className="text-foreground text-lg font-semibold">{title}</h3>
        <p className="text-mid-gray mt-1 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default function ExampleAdsSection() {
  return (
    <section id="example-ads" className="bg-obsidian px-2.5 lg:px-0">
      <div className="container border-x border-b border-dark-gray">
        {/* Header */}
        <div className="border-b border-dark-gray px-6 py-12 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5">
              <Video className="size-4 text-amber-500" />
              <span className="text-sm font-medium text-amber-500">
                Ad Examples
              </span>
            </div>
            <h2 className="text-foreground text-2xl tracking-tight md:text-3xl lg:text-4xl">
              Ads That Actually Convert
            </h2>
            <p className="text-mid-gray mx-auto mt-4 max-w-2xl text-base lg:text-lg">
              Take a look at some of the high-performing video ads we create for
              our clients. Designed for mobile, optimized for results.
            </p>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="flex items-center justify-center px-6 py-12 lg:px-12 lg:py-16">
          <PhoneMockup
            title={EXAMPLE_AD.title}
            description={EXAMPLE_AD.description}
            video={EXAMPLE_AD.video}
          />
        </div>
      </div>
    </section>
  );
}
