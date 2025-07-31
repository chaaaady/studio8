import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Features = () => {
  const services = [
    {
      title: "Enregistrement",
      content: "Nos studios sont équipés des dernières technologies pour garantir une qualité d'enregistrement professionnelle. Microphones de studio, préamplis haut de gamme et acoustique optimisée."
    },
    {
      title: "Mix/Mastering",
      content: "Notre équipe d'ingénieurs son expérimentés assure un mix et mastering de qualité professionnelle, prêt pour la diffusion sur toutes les plateformes."
    },
    {
      title: "Production",
      content: "Accompagnement complet dans la création de vos projets musicaux, de la composition à la finalisation, avec des producteurs reconnus."
    },
    {
      title: "Direction artistique",
      content: "Conseils et accompagnement personnalisé pour définir votre identité artistique et développer votre projet musical de manière cohérente."
    }
  ];

  return (
    <section id="features" className="py-12 lg:py-16 bg-accent/30">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="bg-background border-2 border-border rounded-2xl p-6 lg:p-8">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                Nos services
              </h2>
              <p className="text-16 text-muted-foreground max-w-2xl mx-auto">
                Une gamme complète de services professionnels pour accompagner vos projets musicaux
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {services.map((service, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-accent/30 border border-border rounded-xl px-4"
                  >
                    <AccordionTrigger className="text-left text-base font-semibold py-4 hover:no-underline">
                      {service.title}
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <p className="text-16 text-muted-foreground leading-relaxed">
                        {service.content}
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

export default Features;
