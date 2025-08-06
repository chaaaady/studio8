import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";

const faq = [
  {
    question: "Quelle est la capacité d'accueil des studios ?",
    answer:
      "Le studio A peut accueillir jusqu'à 10 personnes, le studio B, 6 personnes et le C, 4 personnes.",
  },
  {
    question: "Le studio est-il fumeur ?",
    answer:
      "Oui, un purificateur d'air est installé pour garantir une bonne ventilation de la pièce.",
  },
  {
    question: "Est ce que l'alcool est autorisé ?",
    answer:
      "Non, la consomation d'alcool est formellement interdite dans le studio.",
  },
  {
    question: "Où se trouve le studio ?",
    answer:
      "Le studio est idéalement situé au 50 Quai des Carrières, 94220 Charenton-le-Pont, juste en face de l'autoroute A4. Il se trouve à seulement 5 minutes du périphérique Porte de Bercy, à 4 minutes des quais de Seine, et à 8 minutes à pied de la station Charenton-Écoles.",
  },
  {
    question: "Peut-on réserver une session pour le jour même ?",
    answer:
      "Non, nous ne pouvons accepter que des réservations effectuées au moins 24 heures à l'avance, en raison de contraintes logistiques.",
  },
  {
    question: "Est-il possible de réserver la nuit ?",
    answer: "Oui, nos studios sont disponibles 24h/24. Contactez-nous pour organiser une session nocturne.",
  },
];

const FAQ = () => {
  return (
    <div id="faq" className="w-full max-w-screen-xl mx-auto py-8 xs:py-16 px-6">
      <h2 className="text-3xl xs:text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tighter">
        Questions fréquentes
      </h2>
      <p className="mt-1.5 xs:text-lg text-muted-foreground">
        Réponses rapides aux questions courantes sur nos services.
      </p>

      <div className="min-h-[550px] md:min-h-[320px] xl:min-h-[300px]">
        <Accordion
          type="single"
          collapsible
          className="mt-8 space-y-4 md:columns-2 gap-4"
        >
          {faq.map(({ question, answer }, index) => (
            <AccordionItem
              key={question}
              value={`question-${index}`}
              className="bg-accent py-1 px-4 rounded-xl border-none !mt-0 !mb-4 break-inside-avoid"
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger
                  className={cn(
                    "flex flex-1 items-center justify-between py-4 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                    "text-start text-lg"
                  )}
                >
                  {question}
                  <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="text-[15px]">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
