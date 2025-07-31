import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Features = () => {
  const services = [
    {
      title: "ENREGISTREMENT",
      content: "Nos studios sont équipés des dernières technologies pour garantir une qualité d'enregistrement professionnelle. Microphones de studio, préamplis haut de gamme et acoustique optimisée."
    },
    {
      title: "MIX/MASTERING",
      content: "Notre équipe d'ingénieurs son expérimentés assure un mix et mastering de qualité professionnelle, prêt pour la diffusion sur toutes les plateformes."
    },
    {
      title: "PRODUCTION",
      content: "Accompagnement complet dans la création de vos projets musicaux, de la composition à la finalisation, avec des producteurs reconnus."
    },
    {
      title: "DIRECTION ARTISTIQUE",
      content: "Conseils et accompagnement personnalisé pour définir votre identité artistique et développer votre projet musical de manière cohérente."
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-24 bg-accent/30">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="bg-background border-2 border-border rounded-2xl p-8 lg:p-12">
          <div className="space-y-16">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                Nos services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Une gamme complète de services professionnels pour accompagner vos projets musicaux
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {services.map((service, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-accent/30 border border-border rounded-xl px-6"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold py-6 hover:no-underline">
                      {service.title}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <p className="text-muted-foreground leading-relaxed">
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
