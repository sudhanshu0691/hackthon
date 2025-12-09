import { Target, Users, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const goals = [
  {
    icon: Lightbulb,
    title: "Drive Innovation",
    description:
      "Build meaningful solutions using Google technologies to solve real-world social, environmental, or operational problems.",
    color: "text-google-yellow",
  },
  {
    icon: Users,
    title: "Build Community",
    description:
      "Train organizers through hands-on experience, strengthening GDG on Campus chapters and fostering collaboration.",
    color: "text-google-blue",
  },
  {
    icon: Target,
    title: "Create Impact",
    description:
      "Develop practical skills in event ownership, community engagement, and professional hackathon operations.",
    color: "text-google-green",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-background"
      data-testid="about-section"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          About <span className="text-google-blue">TechSprint</span>
        </h2>

        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
          TechSprint is a full-scale, end-to-end hackathon modeled on major
          innovation hackathons. It follows an outcome-focused approach where
          participants solve challenges under the{" "}
          <span className="font-semibold text-foreground">
            Open Innovation problem statement
          </span>
          .
        </p>

        <p className="text-base text-muted-foreground mb-12 max-w-3xl mx-auto">
          Student innovators from across campuses and communities build
          impactful solutions using Google technologies (mandatory) to address
          social, environmental, or operational problems they see around them.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {goals.map((goal) => (
            <Card
              key={goal.title}
              className="text-left"
              data-testid={`about-card-${goal.title.toLowerCase().replace(" ", "-")}`}
            >
              <CardContent className="pt-6">
                <goal.icon className={`w-10 h-10 ${goal.color} mb-4`} />
                <h3 className="text-lg font-semibold mb-2">{goal.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {goal.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
