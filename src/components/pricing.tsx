import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";

const Pricing = () => {
  const studioPlans = [
    {
      name: "STUDIO A",
      price: "35€/H",
      description: "2h minimum",
      popular: true,
      features: ["40 m²", "Jusqu'à 10 personnes", "Ingénieur son inclus"]
    },
    {
      name: "STUDIO B",
      price: "35€/H",
      description: "2h minimum",
      popular: true,
      features: ["40 m²", "Jusqu'à 10 personnes", "Ingénieur son inclus"]
    },
    {
      name: "STUDIO C",
      price: "30€/H",
      description: "2h minimum",
      popular: false,
      features: ["25 m²", "Jusqu'à 6 personnes", "Ingénieur son inclus"]
    },
    {
      name: "STUDIO D - BEATMAKING",
      price: "20€/H",
      description: "5h minimum",
      popular: false,
      features: ["Poste de travail dédié", "Accès aux équipements", "Idéal pour la production"]
    }
  ];

  const additionalServices = [
    {
      name: "MIX-MASTERING",
      price: "145€ / TITRE",
      description: "Qualité professionnelle prête à la diffusion.",
      popular: true,
      features: ["Mix des voix", "Ajout d'effets", "Mastering pro"],
      buttonText: "RÉSERVER"
    },
    {
      name: "LOCK OUT",
      price: "100€ / H",
      description: "Privatisation complète des 3 studios (+100m²).",
      popular: false,
      features: ["Accès illimité aux studios", "Jusqu'à 25 personnes"],
      buttonText: "RÉSERVER"
    },
    {
      name: "SÉMINAIRE",
      price: "Sur demande",
      description: "Création d'albums avec beatmakers & ingés – location semaine (4 studios dédiés).",
      popular: false,
      features: ["4 studios dédiés", "Beatmakers & ingénieurs inclus"],
      buttonText: "RÉSERVER"
    },
    {
      name: "RÉSERVATIONS SANS INGÉNIEUR SON",
      price: "Voir Grille tarifaire",
      description: "Tarifs sans ingénieur son disponibles.",
      popular: false,
      features: ["Autonomie complète", "Accès équipements"],
      buttonText: "Grille Tarifaire"
    }
  ];

  return (
    <section id="pricing" className="py-12 lg:py-16">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="bg-background border-2 border-border lg:border-2 lg:border-border border-0 rounded-2xl p-6 lg:p-8 shadow-lg lg:shadow-none animate-in slide-in-from-bottom-4 duration-700">
          <div className="space-y-16">
            {/* Studios */}
            <div className="space-y-12">
              <div className="space-y-4 text-center animate-in slide-in-from-bottom-4 duration-700 delay-200">
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                  Tarifs studios
                </h2>
                <p className="text-16 text-muted-foreground">
                  Horaire 16h-4h du matin, 7 jours sur 7
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {studioPlans.map((plan, index) => (
                  <div 
                    key={index}
                    className={`relative p-6 rounded-2xl border-2 lg:border-2 border-0 h-full flex flex-col shadow-lg lg:shadow-none transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                      plan.popular 
                        ? 'bg-accent/30 lg:border-primary lg:border-border' 
                        : 'bg-accent/30 lg:border-border'
                    }`}
                  >
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground border-0 px-4 py-1">
                        Populaire
                      </Badge>
                    )}
                    
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">
                        {plan.name}
                      </h3>
                      <div className="space-y-1">
                        <p className="text-2xl font-bold text-foreground">
                          {plan.price}
                        </p>
                        <p className="text-16 text-muted-foreground">
                          {plan.description}
                        </p>
                      </div>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <ul className="space-y-2 flex-1">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <Check className="h-4 w-4 mt-0.5 text-foreground flex-shrink-0" />
                          <span className="text-16 text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button className="w-full mt-6 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg" asChild>
                      <a href="tel:0756812255">
                        RÉSERVER
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Autres prestations */}
            <div className="space-y-12">
              <div className="space-y-4 text-center animate-in slide-in-from-bottom-4 duration-700 delay-200">
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                  Autres prestations
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {additionalServices.map((service, index) => (
                                                <div
                                key={index}
                                className={`relative p-6 rounded-2xl border-2 lg:border-2 border-0 h-full flex flex-col shadow-lg lg:shadow-none ${
                                  service.popular
                                    ? 'bg-accent/30 lg:border-primary'
                                    : 'bg-accent/30 lg:border-border'
                                }`}
                              >
                    {service.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground border-0 px-4 py-1">
                        Populaire
                      </Badge>
                    )}
                    
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">
                        {service.name}
                      </h3>
                      <div className="space-y-1">
                        <p className="text-2xl font-bold text-foreground">
                          {service.price}
                        </p>
                        <p className="text-16 text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <ul className="space-y-2 flex-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <Check className="h-4 w-4 mt-0.5 text-foreground flex-shrink-0" />
                          <span className="text-16 text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button className="w-full mt-6 rounded-xl font-medium" asChild>
                      <a href="tel:0756812255">
                        {service.buttonText}
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
