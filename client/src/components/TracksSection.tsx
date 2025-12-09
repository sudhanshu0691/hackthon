import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Globe, Cloud, Shield, Leaf } from "lucide-react";

const tracks = [
  {
    icon: Brain,
    title: "AI / Machine Learning",
    description:
      "Build intelligent solutions using TensorFlow, Vertex AI, and Google's ML APIs to solve complex problems.",
    technologies: ["TensorFlow", "Vertex AI", "AutoML"],
    color: "border-t-google-blue",
    iconColor: "text-google-blue",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Create modern web applications using Angular, Flutter for Web, Firebase, and Progressive Web Apps.",
    technologies: ["Angular", "Flutter", "Firebase"],
    color: "border-t-google-red",
    iconColor: "text-google-red",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description:
      "Leverage Google Cloud Platform to build scalable, reliable, and secure cloud-native applications.",
    technologies: ["GCP", "Cloud Run", "BigQuery"],
    color: "border-t-google-yellow",
    iconColor: "text-google-yellow",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Develop security solutions and tools that protect users and organizations from digital threats.",
    technologies: ["reCAPTCHA", "Cloud Armor", "IAM"],
    color: "border-t-google-green",
    iconColor: "text-google-green",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Create tech solutions addressing climate change, resource management, and environmental challenges.",
    technologies: ["Earth Engine", "Maps API", "IoT"],
    color: "border-t-google-blue",
    iconColor: "text-google-blue",
  },
];

export default function TracksSection() {
  return (
    <section
      id="tracks"
      className="py-16 md:py-24 bg-background"
      data-testid="tracks-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hackathon <span className="text-google-yellow">Tracks</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your innovation path. All projects must incorporate at least
            one Google technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track) => (
            <Card
              key={track.title}
              className={`border-t-4 ${track.color} hover-elevate transition-all duration-300`}
              data-testid={`track-card-${track.title.toLowerCase().replace(/[\s/]+/g, "-")}`}
            >
              <CardContent className="pt-6">
                <track.icon className={`w-10 h-10 ${track.iconColor} mb-4`} />
                <h3 className="text-xl font-semibold mb-2">{track.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {track.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {track.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
