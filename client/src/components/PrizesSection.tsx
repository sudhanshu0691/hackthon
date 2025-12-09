import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Medal, Gift, Sparkles, Cloud, Laptop, GraduationCap } from "lucide-react";
import gdgLogo from "@assets/generated_images/GDG logo.png";

const winnerPrizes = [
  {
    place: "1st Place",
    icon: Trophy,
    title: "Grand Champion",
    prizes: [
      "Google Pixel Device",
      "$500 Google Cloud Credits",
      "Exclusive Google Swag Box",
      "Certificate of Excellence",
      "1:1 Mentorship Session with GDE",
    ],
    color: "bg-gradient-to-br from-yellow-400 to-amber-500",
    borderColor: "border-yellow-400",
    bgGlow: "bg-yellow-500/10",
  },
  {
    place: "2nd Place",
    icon: Award,
    title: "Innovation Star",
    prizes: [
      "Google Nest Hub",
      "$300 Google Cloud Credits",
      "Premium Google Merchandise",
      "Certificate of Achievement",
      "Networking with Google Team",
    ],
    color: "bg-gradient-to-br from-gray-300 to-gray-400",
    borderColor: "border-gray-400",
    bgGlow: "bg-gray-400/10",
  },
  {
    place: "3rd Place",
    icon: Medal,
    title: "Rising Innovator",
    prizes: [
      "Google Chromecast",
      "$200 Google Cloud Credits",
      "Google Developer Swag",
      "Certificate of Recognition",
      "Feature on GDG Platform",
    ],
    color: "bg-gradient-to-br from-amber-600 to-amber-700",
    borderColor: "border-amber-600",
    bgGlow: "bg-amber-600/10",
  },
];

const surpriseGifts = [
  { icon: Gift, label: "Mystery Google Swag Boxes", color: "text-google-red" },
  { icon: Cloud, label: "Free Cloud Credits for All Participants", color: "text-google-blue" },
  { icon: Laptop, label: "Chance to Win Chromebook", color: "text-google-green" },
  { icon: GraduationCap, label: "Skill Badges & Certifications", color: "text-google-yellow" },
  { icon: Sparkles, label: "Surprise Giveaways During Events", color: "text-google-red" },
];

const allParticipants = [
  "Google Developer Profile Badge",
  "Participation Certificate",
  "Exclusive Event Stickers",
  "Google Cloud Skills Boost Access",
  "Community Recognition",
];

export default function PrizesSection() {
  return (
    <section
      id="prizes"
      className="py-16 md:py-24 bg-background"
      data-testid="prizes-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <img src={gdgLogo} alt="GDG Logo" className="w-8 h-8" />
            <Sparkles className="w-6 h-6 text-google-yellow" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-google-yellow">Prizes</span> & Surprises
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Win amazing Google gifts, exclusive swag, and surprise rewards!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {winnerPrizes.map((prize) => (
            <Card
              key={prize.place}
              className={`relative overflow-visible border-t-4 ${prize.borderColor} hover-elevate transition-all duration-300`}
              data-testid={`prize-${prize.place.toLowerCase().replace(" ", "-")}`}
            >
              <div
                className={`absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 ${prize.color} rounded-full flex items-center justify-center shadow-lg`}
              >
                <prize.icon className="w-7 h-7 text-white" />
              </div>
              <CardHeader className="pt-12 pb-2 text-center">
                <Badge variant="secondary" className="mx-auto mb-2">
                  {prize.place}
                </Badge>
                <CardTitle className="text-xl">{prize.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-google-blue/10 via-google-red/10 to-google-green/10 border-dashed border-2 mb-8">
          <CardContent className="py-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Trophy className="w-6 h-6 text-google-blue" />
              <h3 className="text-xl font-semibold">Prize Pool & Rewards</h3>
              <Sparkles className="w-5 h-5 text-google-yellow" />
            </div>
            <p className="text-center text-muted-foreground mb-6">
              Compete with innovators and stand to win exciting prizes, cloud credits, and exclusive opportunities!
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardContent className="py-8">
            <h3 className="text-xl font-semibold text-center mb-6">
              All Participants Receive
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {allParticipants.map((item) => (
                <Badge
                  key={item}
                  variant="secondary"
                  className="text-sm py-2 px-4"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
