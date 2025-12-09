import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can participate in TechSprint 2025?",
    answer:
      "TechSprint is open to all college and university students. You can participate individually or form teams of 2-4 members. Team members can be from different institutions.",
  },
  {
    question: "What Google technologies can I use?",
    answer:
      "You can use any Google technology including Google Cloud Platform, Firebase, TensorFlow, Angular, Flutter, Google Maps APIs, Vertex AI, and more. Your project must incorporate at least one Google technology.",
  },
  {
    question: "How do I register for the hackathon?",
    answer:
      "Registration is done through your local GDG on Campus chapter. Contact your chapter organizers or register through the official platform link shared by your GDG community.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "No, TechSprint 2025 is completely free to participate. There are no registration fees or hidden costs.",
  },
  {
    question: "Can I use pre-existing code or projects?",
    answer:
      "All work should be original and created during the hackathon period. However, you can use open-source libraries and frameworks. Any pre-existing code must be disclosed during submission.",
  },
  {
    question: "What should my submission include?",
    answer:
      "Your submission should include a working prototype, source code repository, a demo video (max 3 minutes), and a brief project description explaining the problem, solution, and Google technologies used.",
  },
  {
    question: "How will projects be evaluated?",
    answer:
      "Projects are evaluated based on Innovation (25%), Technical Implementation (25%), Impact & Feasibility (20%), UI/UX Design (15%), and Presentation (15%). All evaluations are conducted by your GDG on Campus organizers.",
  },
  {
    question: "What happens after I submit my project?",
    answer:
      "After submission, your project undergoes initial evaluation. Top 10 projects advance to the final pitching round where they present to judges. The top 3 winners are then announced and submitted for recognition.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background" data-testid="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-google-red">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know
            about TechSprint 2025.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border rounded-lg px-6"
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger className="text-left hover:no-underline py-4">
                <span className="font-medium">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
