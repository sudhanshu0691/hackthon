import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/hackathon_collaboration_hero_image.png";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

      <div className="absolute top-20 left-10 w-32 h-32 bg-google-blue/20 rounded-full blur-3xl" />
      <div className="absolute top-40 right-20 w-48 h-48 bg-google-red/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-google-yellow/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-google-green/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 bg-google-green rounded-full animate-pulse" />
          <span className="text-white/90 text-sm font-medium">
            Registration Open
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="text-google-blue">Tech</span>
          <span className="text-google-red">Sprint</span>{" "}
          <span className="text-google-yellow">20</span>
          <span className="text-google-green">25</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
          Google Innovation Hackathon
        </p>

        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Innovate. Build. Transform. Build impactful solutions using Google
          technologies to address real-world problems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 text-white/90">
            <Calendar className="w-5 h-5" />
            <span>Dec 5, 2025 - Jan 20, 2026</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full" />
          <div className="flex items-center gap-2 text-white/90">
            <MapPin className="w-5 h-5" />
            <span>Gyan Ganga College of Technology, Jabalpur, Madhya Pradesh</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-google-blue hover:bg-google-blue/90 text-white px-8 py-6 text-lg"
            onClick={() => window.open("https://vision.hack2skill.com/event/gdgoc-25-ggct_25?utm_source=hack2skill&utm_medium=homepage&sectionid=6932bb30308f012360a46bbe", "_blank")}
            data-testid="hero-register-button"
          >
            Register Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg"
            onClick={() =>
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            data-testid="hero-learn-more-button"
          >
            Learn More
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
