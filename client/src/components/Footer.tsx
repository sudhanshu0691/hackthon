import gdgLogo from "@assets/generated_images/GDG logo.png";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "Timeline", href: "#timeline" },
  { label: "Prizes", href: "#prizes" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <img src={gdgLogo} alt="GDG Logo" className="w-6 h-6" />
            <span className="font-bold text-lg">TechSprint 2025</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`footer-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            Powered by{" "}
            <span className="font-medium text-foreground">
              GDG on Campus
            </span>{" "}
            Communities Worldwide
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            2025 TechSprint. All rights reserved. Google and the Google logo
            are trademarks of Google LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
