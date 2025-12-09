import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

const eligibility = [
  "Open to all college/university students",
  "Teams of 2-4 members allowed",
  "Individual participation is permitted",
  "Members can be from different institutions",
  "Must register through GDG on Campus chapter",
];

const requirements = [
  "Projects must use at least one Google technology",
  "All work must be original and created during the hackathon",
  "Pre-existing code must be disclosed",
  "Working prototype required for submission",
  "Demo video must be included with submission",
];

const notAllowed = [
  "Plagiarism or copied projects",
  "Using proprietary/licensed code without permission",
  "Submitting incomplete or non-functional projects",
  "Violating Google's terms of service",
];

export default function RulesSection() {
  return (
    <section
      className="py-16 md:py-24 bg-muted/30"
      data-testid="rules-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Rules & <span className="text-google-red">Eligibility</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Review the guidelines to ensure your team qualifies and your project
            meets all requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card data-testid="eligibility-card">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <span className="w-8 h-8 bg-google-green/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-google-green" />
                </span>
                Eligibility Criteria
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {eligibility.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-google-green shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card data-testid="requirements-card">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <span className="w-8 h-8 bg-google-blue/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-google-blue" />
                </span>
                Submission Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {requirements.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-google-blue shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="md:col-span-2" data-testid="not-allowed-card">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <span className="w-8 h-8 bg-google-red/10 rounded-full flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-google-red" />
                </span>
                Not Allowed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {notAllowed.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-google-red shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
