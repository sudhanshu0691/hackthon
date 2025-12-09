import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Code, Target, Palette, Presentation } from "lucide-react";

const criteria = [
  {
    icon: Lightbulb,
    title: "Innovation",
    percentage: 25,
    description: "Originality and creativity of the solution. How unique is the approach?",
    color: "text-google-yellow",
    bgColor: "bg-google-yellow",
  },
  {
    icon: Code,
    title: "Technical Implementation",
    percentage: 25,
    description: "Quality of code, use of Google technologies, and technical complexity.",
    color: "text-google-blue",
    bgColor: "bg-google-blue",
  },
  {
    icon: Target,
    title: "Impact & Feasibility",
    percentage: 20,
    description: "Real-world applicability and potential to create meaningful change.",
    color: "text-google-green",
    bgColor: "bg-google-green",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    percentage: 15,
    description: "User experience, interface design, and overall usability of the solution.",
    color: "text-google-red",
    bgColor: "bg-google-red",
  },
  {
    icon: Presentation,
    title: "Presentation",
    percentage: 15,
    description: "Clarity of demo, pitch quality, and ability to communicate the solution.",
    color: "text-google-blue",
    bgColor: "bg-google-blue",
  },
];

export default function JudgingSection() {
  return (
    <section
      className="py-16 md:py-24 bg-background"
      data-testid="judging-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Judging <span className="text-google-blue">Criteria</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Projects will be evaluated by industry experts and GDG mentors based
            on these key criteria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {criteria.map((item) => (
            <Card
              key={item.title}
              className="relative overflow-visible"
              data-testid={`judging-card-${item.title.toLowerCase().replace(/[\s/&]+/g, "-")}`}
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between gap-2 mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-opacity-10 ${item.color} flex items-center justify-center`}
                    style={{
                      backgroundColor: `hsl(var(--${item.bgColor.replace("bg-", "")}) / 0.1)`,
                    }}
                  >
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div
                    className={`text-2xl font-bold ${item.color}`}
                  >
                    {item.percentage}%
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.bgColor} rounded-full transition-all duration-500`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
