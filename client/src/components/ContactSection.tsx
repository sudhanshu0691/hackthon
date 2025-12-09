import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, ExternalLink } from "lucide-react";
import { SiLinkedin, SiX, SiDiscord, SiYoutube } from "react-icons/si";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    href: "#",
    color: "hover:text-[#0077B5]",
  },
  {
    name: "X",
    icon: SiX,
    href: "#",
    color: "hover:text-foreground",
  },
  {
    name: "Discord",
    icon: SiDiscord,
    href: "#",
    color: "hover:text-[#5865F2]",
  },
  {
    name: "YouTube",
    icon: SiYoutube,
    href: "#",
    color: "hover:text-[#FF0000]",
  },
];

export default function ContactSection() {
  const handleRegisterClick = () => {
    // todo: remove mock functionality - integrate with real registration
    console.log("Register button clicked");
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-muted/30"
      data-testid="contact-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-google-blue">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or need support? Reach out to us or connect with the
            GDG community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card data-testid="contact-info-card">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-google-blue/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-google-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:gdgoncampusggct@gmail.com"
                      className="font-medium hover:text-google-blue transition-colors"
                      data-testid="contact-email"
                    >
                      gdgoncampusggct@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-google-red/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-google-red" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a
                      href="tel:+918839374992"
                      className="font-medium hover:text-google-red transition-colors"
                      data-testid="contact-phone"
                    >
                      +91 8839374992
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm text-muted-foreground mb-4">
                  Follow us on social media
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`w-10 h-10 bg-card border rounded-lg flex items-center justify-center transition-colors ${social.color}`}
                      data-testid={`social-link-${social.name.toLowerCase()}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-google-blue/5 via-google-red/5 to-google-green/5">
            <CardContent className="pt-6 flex flex-col justify-center h-full">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Innovate?</h3>
                <p className="text-muted-foreground mb-6">
                  Join thousands of student innovators building the future with
                  Google technologies. Registration is open until team formation
                  deadline.
                </p>
                <Button
                  size="lg"
                  className="bg-google-blue hover:bg-google-blue/90 text-white px-8"
                  onClick={handleRegisterClick}
                  data-testid="contact-register-button"
                >
                  Register Now
                </Button>
                <p className="text-xs text-muted-foreground mt-4">
                  Registration through your GDG on Campus chapter
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
