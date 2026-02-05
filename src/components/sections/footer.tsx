import { HardHat } from "lucide-react";

const navigation = [
  { name: "Services", href: "#services" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Results", href: "#results" },
  { name: "Our Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];


export function Footer() {
  return (
    <footer className="text-foreground bg-obsidian px-2.5 lg:px-0">
      <div className="container p-0">
        {/* Main Footer */}
        <div className="bg-jet grid border-l border-r border-dark-gray p-0 lg:grid-cols-3">
          {/* Brand */}
          <div className="border-b border-b-dark-gray px-6 py-10 lg:border-b-0 lg:border-r lg:border-r-dark-gray lg:px-8 lg:py-12">
            <a href="/" className="mb-4 flex items-center gap-2">
              <HardHat className="size-8 text-amber-500" />
              <span className="text-xl font-bold">Hard Hat Growth</span>
            </a>
            <p className="text-mid-gray mt-4 text-sm">
              Helping roofing businesses generate qualified leads and close more
              jobs with our proven appointment setting system.
            </p>
          </div>

          {/* Navigation */}
          <div className="border-b border-b-dark-gray px-6 py-10 lg:border-b-0 lg:border-r lg:border-r-dark-gray lg:px-8 lg:py-12">
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-mid-gray transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="border-b border-b-dark-gray px-6 py-10 lg:border-b-0 lg:px-8 lg:py-12">
            <h3 className="mb-4 text-lg font-bold">Get in Touch</h3>
            <p className="text-mid-gray mb-4 text-sm">
              Ready to grow your roofing business?
            </p>
            <a
              href="mailto:hello@hardhatgrowth.co.uk"
              className="text-amber-500 transition-colors hover:text-amber-400"
            >
              hello@hardhatgrowth.co.uk
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-l border-r border-dark-gray px-6 py-4 lg:px-8">
          <p className="text-mid-gray text-xs">
            © {new Date().getFullYear()} Hard Hat Growth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
