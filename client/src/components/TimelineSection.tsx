import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const milestones = [
  {
    date: "Dec 5, 2025",
    title: "Launch of Campaign",
    description: "Official kickoff of TechSprint 2025 with registration opening.",
    color: "bg-google-blue",
    completed: true,
  },
  {
    date: "Dec 5, 2025",
    title: "Registration & Team Formation",
    description: "Form your teams and register on the platform. Host & Report 1st Event.",
    color: "bg-google-red",
    completed: false,
  },
  {
    date: "Dec 10, 2025",
    title: "Project Submission",
    description: "Submit your initial project proposals and ideas for review.",
    color: "bg-google-yellow",
    completed: false,
  },
  {
    date: "Dec 25, 2025",
    title: "Initial Evaluations",
    description: "Projects undergo first round of evaluation. Host & Report 2nd Event.",
    color: "bg-google-green",
    completed: false,
  },
  {
    date: "To Be Decided",
    title: "Top 10 Announcement",
    description: "Top 10 teams announced for the final pitching round.",
    color: "bg-google-blue",
    completed: false,
  },
  {
    date: "To Be Decided",
    title: "Top 10 Teams Pitching",
    description: "Final presentations and demos. Top 3 announcement & Host 3rd Event.",
    color: "bg-google-red",
    completed: false,
  },
  {
    date: "To Be Decided",
    title: "Winner Submission",
    description: "Organizers submit top 3 winning teams for final recognition.",
    color: "bg-google-green",
    completed: false,
  },
];

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="py-16 md:py-24 bg-muted/30"
      data-testid="timeline-section"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Campaign <span className="text-google-green">Timeline</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From December 5, 2025 to January 20, 2026 - your journey to
            innovation.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.title}
                className={`relative flex items-start gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                data-testid={`timeline-item-${index}`}
              >
                <div className="hidden md:block flex-1" />

                <div
                  className={`absolute left-4 md:left-1/2 w-8 h-8 ${milestone.color} rounded-full flex items-center justify-center -translate-x-1/2 z-10`}
                >
                  {milestone.completed ? (
                    <Check className="w-4 h-4 text-white" />
                  ) : (
                    <div className="w-3 h-3 bg-white rounded-full" />
                  )}
                </div>

                <Card className="ml-12 md:ml-0 flex-1">
                  <CardContent className="pt-4 pb-4">
                    <span className="text-xs font-medium text-muted-foreground">
                      {milestone.date}
                    </span>
                    <h3 className="text-base font-semibold mt-1">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
