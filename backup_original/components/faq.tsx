import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Quelle est la capacité d'accueil des studios ?",
      answer: "Nos studios peuvent accueillir de 4 à 10 personnes selon le studio choisi. Le Studio A peut accueillir jusqu'à 10 personnes, le Studio B jusqu'à 4 personnes, et le Studio C jusqu'à 6 personnes."
    },
    {
      question: "Le studio est-il fumeur ?",
      answer: "Oui, nos studios sont équipés pour les fumeurs avec des zones dédiées et une ventilation appropriée pour maintenir un environnement confortable pour tous."
    },
    {
      question: "Est ce que l'alcool est autorisé ?",
      answer: "Oui, l'alcool est autorisé dans nos studios. Nous demandons simplement de respecter les lieux et de consommer avec modération pour maintenir un environnement professionnel."
    },
    {
      question: "Où se trouve le studio ?",
      answer: "Nos studios sont situés en région parisienne, facilement accessibles en transports en commun. L'adresse exacte vous sera communiquée lors de la réservation."
    },
    {
      question: "Peut-on réserver une session pour le jour même ?",
      answer: "Nous acceptons les réservations de dernière minute selon la disponibilité. Nous recommandons cependant de réserver à l'avance pour garantir votre créneau préféré."
    },
    {
      question: "Est-il possible de réserver la nuit ?",
      answer: "Oui, nos studios sont ouverts de 16h à 4h du matin, 7 jours sur 7. Les sessions nocturnes sont très populaires et offrent une ambiance unique pour la création."
    }
  ];

  return (
    <section id="faq" className="section-container">
      <div className="max-w-screen-xl mx-auto">
        {/* Titre principal */}
        <div className="space-y-4 text-center mb-12 animate-stagger-1">
          <h2 className="section-title">
            Questions fréquentes
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Réponses rapides aux questions courantes sur nos services
          </p>
        </div>
        
        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="faq-item animate-stagger-2"
                style={{
                  animationDelay: `${(index + 2) * 100}ms`
                }}
              >
                <AccordionTrigger className="faq-trigger hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="faq-content">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Contact */}
        <div className="mt-16 text-center animate-stagger-4">
          <div className="card-apple max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto">
                <Phone className="h-8 w-8 text-gray-700" />
              </div>
              <div className="space-y-4">
                <h3 className="card-title text-xl">
                  Vous avez d'autres questions ?
                </h3>
                <p className="card-content">
                  Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner dans votre projet.
                </p>
              </div>
              <Button
                className="btn-primary"
                onClick={() => {
                  window.location.href = "tel:0756812255";
                }}
              >
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
