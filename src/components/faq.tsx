import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <section id="faq" className="py-20 lg:py-24 bg-accent/30">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="bg-background border-2 border-border rounded-2xl p-8 lg:p-12">
          <div className="space-y-16">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                Questions fréquentes
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Réponses rapides aux questions courantes sur nos services
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-accent/30 border border-border rounded-xl px-6"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold py-6 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
