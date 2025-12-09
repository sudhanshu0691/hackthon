import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Users,
  Trophy,
  Rocket,
  GraduationCap,
  Gift,
} from "lucide-react";

const benefits = [
  {
    icon: Code,
    title: "Hands-on Experience",
    description:
      "Build real projects using Google Cloud, Firebase, TensorFlow, and other Google technologies.",
    color: "bg-google-blue/10 text-google-blue",
  },
  {
    icon: Users,
    title: "Network & Collaborate",
    description:
      "Connect with fellow innovators, GDG members, and industry professionals from around the world.",
    color: "bg-google-red/10 text-google-red",
  },
  {
    icon: GraduationCap,
    title: "Expert Mentorship",
    description:
      "Get guidance from Google Developer Experts and experienced tech professionals throughout.",
    color: "bg-google-yellow/10 text-google-yellow",
  },
  {
    icon: Trophy,
    title: "Win Prizes",
    description:
      "Compete for exciting prizes including Google goodies, certificates, and recognition.",
    color: "bg-google-green/10 text-google-green",
  },
  {
    icon: Rocket,
    title: "Launch Your Ideas",
    description:
      "Transform your innovative ideas into working prototypes with real-world impact.",
    color: "bg-google-blue/10 text-google-blue",
  },
  {
    icon: Gift,
    title: "Exclusive Swag",
    description:
      "Receive exclusive Google Developer swag and certificates of participation.",
    color: "bg-google-red/10 text-google-red",
  },
];

export default function WhyJoinSection() {
  return (
    <section
      className="py-16 md:py-24 bg-muted/30"
      data-testid="why-join-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why <span className="text-google-red">Join</span> TechSprint?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            More than just a hackathon - it's a launchpad for your tech career
            and innovation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <Card
              key={benefit.title}
              className="hover-elevate transition-all duration-300"
              data-testid={`benefit-card-${benefit.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <CardContent className="pt-6">
                <div
                  className={`w-12 h-12 rounded-lg ${benefit.color} flex items-center justify-center mb-4`}
                >
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
