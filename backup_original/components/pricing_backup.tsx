import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";

const Pricing = () => {
  // Limité à 3 plans principaux pour desktop (Apple-like simplicity)
  const studioPlans = [
    {
      name: "STUDIO A",
      price: "35€/H",
      description: "2h minimum",
      popular: true,
      features: ["40 m²", "Jusqu'à 10 personnes", "Ingénieur son inclus"],
      gradient: "from-blue-500/10 to-purple-500/10",
      image: "/studio-a.jpeg"
    },
    {
      name: "STUDIO B", 
      price: "35€/H",
      description: "2h minimum",
      popular: false,
      features: ["40 m²", "Jusqu'à 10 personnes", "Ingénieur son inclus"],
      gradient: "from-emerald-500/10 to-blue-500/10",
      image: "/placeholder.svg"
    },
    {
      name: "STUDIO C",
      price: "30€/H", 
      description: "2h minimum",
      popular: false,
      features: ["25 m²", "Jusqu'à 6 personnes", "Ingénieur son inclus"],
      gradient: "from-orange-500/10 to-red-500/10",
      image: "/placeholder.svg"
    }
  ];

  const allPlans = [
    ...studioPlans,
    {
      name: "STUDIO D - BEATMAKING",
      price: "20€/H",
      description: "5h minimum", 
      popular: false,
      features: ["Poste de travail dédié", "Accès aux équipements", "Idéal pour la production"],
      gradient: "from-purple-500/10 to-pink-500/10",
      image: "/placeholder.svg"
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
    <section id="pricing" className="py-12 lg:py-16 scroll-snap-align-start bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Titre principal */}
        <div className="space-y-4 text-center mb-12 animate-in slide-in-from-bottom-4 duration-700 delay-200">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Tarifs studios
          </h2>
          <p className="text-16 text-muted-foreground">
            Horaire 16h-4h du matin, 7 jours sur 7
          </p>
        </div>

        {/* Studios sans carte globale */}
        <div className="space-y-16">
              
              {/* Desktop: 3 plans seulement */}
              <div className="hidden lg:grid lg:grid-cols-3 gap-6">
                {studioPlans.map((plan, index) => (
                  <div 
                    key={index}
                    className={`group relative rounded-2xl bg-white border transition-all duration-300 hover:scale-[1.01] overflow-hidden ${
                      plan.popular 
                        ? 'border-blue-200 shadow-lg ring-1 ring-blue-100' 
                        : 'border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg'
                    } h-[520px] flex flex-col`}
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    
                    {/* Badge Recommandé bien positionné */}
                    {plan.popular && (
                      <div className="absolute -top-3 left-4 z-30">
                        <div className="bg-blue-600 text-white px-3 py-1.5 rounded-full shadow-lg text-xs font-semibold">
                          Recommandé
                        </div>
                      </div>
                    )}
                    
                    {/* Image du studio - Mode portrait */}
                    <div className="relative overflow-hidden h-[320px]">
                      <img 
                        src={plan.image}
                        alt={plan.name}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 rounded-t-2xl"
                      />
                      
                      {/* Overlay subtil style Apple */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      
                      {/* Info minimale sur l'image */}
                      <div className="absolute bottom-4 left-4">
                        <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/50">
                          <span className="text-xs font-medium text-gray-800">
                            {plan.features[1]}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Contenu principal - Style Apple clean */}
                    <div className="p-6 space-y-4">
                      {/* Header avec prix */}
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {plan.name}
                        </h3>
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-bold text-gray-900">
                            {plan.price.split('/')[0]}
                          </span>
                          <span className="text-base text-gray-600 font-medium">
                            /{plan.price.split('/')[1]}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">
                          {plan.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Features minimalistes - Style Apple */}
                    <div className="px-6 pb-2">
                      <div className="space-y-2">
                        {plan.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Bouton CTA - Style Apple */}
                    <div className="p-6 pt-2">
                      <Button 
                        className={`w-full h-11 rounded-xl font-medium transition-all duration-200 ${
                          plan.popular 
                            ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                            : 'bg-gray-900 hover:bg-black text-white'
                        }`} 
                        onClick={() => {
                          window.location.href = "tel:0756812255";
                        }}
                      >
                        Réserver
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile: Studio A centré avec aperçu Studio B à gauche */}
              <div className="lg:hidden">
                <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide px-4 -mx-4">
                  {allPlans.map((plan, index) => (
                    <div 
                      key={index}
                      className={`relative rounded-2xl ${index === 0 ? 'min-w-[calc(100vw-6rem)] ml-4' : 'min-w-[calc(100vw-8rem)]'} max-w-[320px] min-h-[460px] flex-shrink-0 snap-center bg-white border border-gray-200 shadow-lg overflow-hidden group`}
                    >

                      
                      {/* Badge Recommandé mobile */}
                      {plan.popular && (
                        <div className="absolute -top-3 left-3 z-30">
                          <div className="bg-blue-600 text-white px-3 py-1.5 rounded-full shadow-lg text-xs font-semibold">
                            Recommandé
                          </div>
                        </div>
                      )}
                      
                      {/* Contenu principal */}
                      <div className="relative z-10 p-8 h-full flex flex-col">
                        {/* Image mode portrait - Mobile */}
                        <div className="relative mb-6 overflow-hidden rounded-xl h-56">
                          <img 
                            src={plan.image}
                            alt={plan.name}
                            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                          />
                          
                          {/* Info capacité en overlay */}
                          <div className="absolute bottom-3 right-3">
                            <div className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md">
                              <span className="text-xs font-medium text-gray-800">
                                {plan.features[1]}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Contenu principal - Mobile */}
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {plan.name}
                            </h3>
                            <div className="flex items-baseline gap-1">
                              <span className="text-2xl font-bold text-gray-900">
                                {plan.price.split('/')[0]}
                              </span>
                              <span className="text-sm text-gray-600 font-medium">
                                /{plan.price.split('/')[1]}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600">
                              {plan.description}
                            </p>
                          </div>
                        </div>
                        
                        {/* Features minimalistes - Mobile */}
                        <div className="space-y-2 mb-4">
                          {plan.features.slice(0, 3).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                              <span className="text-sm text-gray-600">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                        
                        {/* Bouton CTA - Mobile Apple style */}
                        <Button 
                          className={`w-full h-11 rounded-xl font-medium transition-all duration-200 ${
                            plan.popular 
                              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                              : 'bg-gray-900 hover:bg-black text-white'
                          }`} 
                          onClick={() => {
                            window.location.href = "tel:0756812255";
                          }}
                        >
                          Réserver
                        </Button>
                      </div>
                      

                    </div>
                  ))}
                </div>
                
                {/* Indicateur de pagination style Apple */}
                <div className="flex justify-center mt-6 space-x-2">
                  {allPlans.map((_, index) => (
                    <div
                      key={index}
                      className="w-2 h-2 rounded-full bg-muted-foreground/40"
                    ></div>
                  ))}
                </div>
              </div>
        </div>

        {/* Autres prestations */}
        <div className="mt-16">
          <div className="space-y-4 text-center mb-12 animate-in slide-in-from-bottom-4 duration-700 delay-200">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Autres prestations
            </h2>
          </div>
          
          {/* Desktop: Grid 3 colonnes */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
                {additionalServices.slice(0, 3).map((service, index) => (
                  <div
                    key={index}
                    className={`group relative p-8 rounded-3xl bg-white border border-gray-200 h-full flex flex-col transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-gray-200/50`}
                    style={{
                      animationDelay: `${index * 150}ms`
                    }}
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
                    
                    <Button 
                      className="w-full mt-6 rounded-2xl font-medium bg-black text-white hover:bg-gray-800 hover:scale-[1.02] transition-all duration-300"
                      onClick={() => {
                        if (service.buttonText === "Grille Tarifaire") {
                          // Toast pour copier le numéro
                          navigator.clipboard.writeText("0756812255");
                          // Ici on pourrait ajouter un toast mais pour l'instant juste copier
                        } else {
                          window.location.href = "tel:0756812255";
                        }
                      }}
                    >
                      {service.buttonText}
                    </Button>
                  </div>
                ))}
          </div>
          
          {/* Mobile: Carousel style Apple */}
          <div className="lg:hidden">
            <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide px-4 -mx-4">
              {additionalServices.map((service, index) => (
                <div 
                  key={index}
                  className={`relative rounded-[2.5rem] ${index === 0 ? 'min-w-[calc(100vw-8rem)] ml-4' : 'min-w-[calc(100vw-6rem)]'} max-w-[360px] min-h-[500px] flex-shrink-0 snap-center bg-white border border-gray-200 shadow-xl overflow-hidden group`}
                >
                  {/* Badge populaire style Apple */}
                  {service.popular && (
                    <div className="absolute top-6 right-6 z-10">
                      <div className="bg-blue-500 rounded-full px-4 py-2">
                        <span className="text-sm font-semibold text-white">Populaire</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Contenu principal */}
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    {/* Header sans image */}
                    <div className="space-y-6 mb-8">
                      <h3 className="text-2xl font-bold text-foreground leading-tight">
                        {service.name}
                      </h3>
                      <div className="space-y-3">
                        <p className="text-4xl font-bold text-foreground">
                          {service.price}
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Features avec style Apple */}
                    <div className="space-y-4 flex-1 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="h-3 w-3 text-foreground" />
                          </div>
                          <span className="text-lg text-muted-foreground leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Bouton style Apple */}
                    <Button 
                      className="w-full h-14 rounded-2xl font-semibold text-lg bg-black text-white hover:bg-gray-800 hover:scale-[1.02] transition-all duration-300 shadow-lg" 
                      onClick={() => {
                        if (service.buttonText === "Grille Tarifaire") {
                          navigator.clipboard.writeText("0756812255");
                        } else {
                          window.location.href = "tel:0756812255";
                        }
                      }}
                    >
                      {service.buttonText}
                    </Button>
                  </div>
                  

                </div>
              ))}
            </div>
            
            {/* Indicateur de pagination style Apple */}
            <div className="flex justify-center mt-6 space-x-2">
              {additionalServices.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-muted-foreground/40"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
