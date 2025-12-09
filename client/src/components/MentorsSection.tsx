import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// todo: remove mock functionality - replace with real mentor data
const mentors = [
  {
    name: "Sarah Chen",
    role: "Google Developer Expert",
    expertise: "Machine Learning",
    initials: "SC",
    color: "bg-google-blue",
  },
  {
    name: "Michael Kumar",
    role: "GDG Lead",
    expertise: "Cloud Architecture",
    initials: "MK",
    color: "bg-google-red",
  },
  {
    name: "Emily Rodriguez",
    role: "Senior Engineer",
    expertise: "Web Development",
    initials: "ER",
    color: "bg-google-yellow",
  },
  {
    name: "David Park",
    role: "Tech Lead",
    expertise: "Mobile Development",
    initials: "DP",
    color: "bg-google-green",
  },
  {
    name: "Priya Sharma",
    role: "Security Expert",
    expertise: "Cybersecurity",
    initials: "PS",
    color: "bg-google-blue",
  },
  {
    name: "James Wilson",
    role: "Product Manager",
    expertise: "UX Design",
    initials: "JW",
    color: "bg-google-red",
  },
];

export default function MentorsSection() {
  return (
    <section
      className="py-16 md:py-24 bg-muted/30"
      data-testid="mentors-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mentors & <span className="text-google-green">Judges</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from industry experts and Google Developer Experts who will
            guide and evaluate your projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <Card
              key={mentor.name}
              className="text-center hover-elevate transition-all duration-300"
              data-testid={`mentor-card-${mentor.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <CardContent className="pt-6">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarFallback
                    className={`${mentor.color} text-white text-xl font-semibold`}
                  >
                    {mentor.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold">{mentor.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {mentor.role}
                </p>
                <Badge variant="secondary">{mentor.expertise}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
