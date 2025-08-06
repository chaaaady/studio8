import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";

const Pricing = () => {
  // Limité à 3 plans principaux pour desktop (Style "Aujourd'hui" iOS)
  const studioPlans = [
    {
      name: "STUDIO A",
      price: "35€/H",
      description: "2h minimum",
      popular: true,
      features: ["40 m²", "Jusqu'à 10 personnes", "Ingénieur son inclus"],
      image: "/studio-a.jpeg"
    },
    {
      name: "STUDIO B", 
      price: "35€/H",
      description: "2h minimum",
      popular: false,
      features: ["40 m²", "Jusqu'à 10 personnes", "Ingénieur son inclus"],
      image: "/placeholder.svg"
    },
    {
      name: "STUDIO C",
      price: "30€/H", 
      description: "2h minimum",
      popular: false,
      features: ["25 m²", "Jusqu'à 6 personnes", "Ingénieur son inclus"],
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

        {/* Studios section */}
        <div className="space-y-16">
              
              {/* Desktop: Cartes "Aujourd'hui" App Store iOS */}
              <div className="hidden lg:grid lg:grid-cols-3 gap-5">
                {studioPlans.map((plan, index) => (
                  <div 
                    key={index}
                    className="group relative bg-white overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      aspectRatio: '16/9',
                      borderRadius: '28px',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                      animationDelay: `${index * 150}ms`
                    }}
                  >
                    {/* Image plein cadre avec point focal centré */}
                    <div className="relative w-full h-full overflow-hidden">
                      <img 
                        src={plan.image}
                        alt={plan.name}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Overlay gradient linéaire (transparent → rgba(0,0,0,0.4) 35% bas) */}
                      <div 
                        className="absolute inset-0"
                        style={{
                          background: 'linear-gradient(to bottom, transparent 65%, rgba(0, 0, 0, 0.4) 100%)'
                        }}
                      ></div>
                      
                      {/* Badge de lecture centré (cercle play) */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div 
                          className="flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                          style={{
                            width: '72px',
                            height: '72px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                            backdropFilter: 'blur(10px)'
                          }}
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-black ml-1">
                            <path d="M8 5.14v13.72L19 12L8 5.14z" fill="currentColor"/>
                          </svg>
                        </div>
                      </div>
                      
                      {/* Libellé haut (LES STUDIOS QU'ON AIME) */}
                      <div 
                        className="absolute text-white font-semibold uppercase tracking-wide"
                        style={{
                          top: '16px',
                          left: '20px',
                          fontSize: '12px',
                          lineHeight: '16px'
                        }}
                      >
                        LES STUDIOS QU'ON AIME
                      </div>
                      
                      {/* Titre principal */}
                      <div 
                        className="absolute"
                        style={{
                          bottom: '84px',
                          left: '20px',
                          right: '20px'
                        }}
                      >
                        <div className="space-y-1">
                          <h3 
                            className="text-white font-bold leading-tight"
                            style={{
                              fontSize: '28px',
                              lineHeight: '32px',
                              maxWidth: '80%'
                            }}
                          >
                            {plan.name}
                          </h3>
                          <p 
                            className="text-white"
                            style={{
                              fontSize: '15px',
                              lineHeight: '20px',
                              maxWidth: '80%'
                            }}
                          >
                            Studio d'enregistrement professionnel - {plan.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Pied de carte (ultraThinMaterial) */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 border-t"
                      style={{ 
                        height: '84px',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(20px)',
                        borderTopColor: 'rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      <div 
                        className="flex items-center justify-between h-full"
                        style={{ padding: '0 20px' }}
                      >
                        {/* Icône app + textes */}
                        <div className="flex items-center gap-3">
                          {/* Icône app (64×64 radius 14) */}
                          <div 
                            className="bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
                            style={{
                              width: '64px',
                              height: '64px',
                              borderRadius: '14px'
                            }}
                          >
                            <span className="text-white font-bold text-2xl">S</span>
                          </div>
                          
                          {/* Nom app + genre */}
                          <div className="space-y-0.5">
                            <div 
                              className="text-white font-semibold"
                              style={{
                                fontSize: '17px',
                                lineHeight: '22px'
                              }}
                            >
                              {plan.name.replace('STUDIO ', 'Studio ')}
                            </div>
                            <div 
                              className="text-white/70"
                              style={{
                                fontSize: '15px',
                                lineHeight: '20px'
                              }}
                            >
                              {plan.price} • {plan.features[1]}
                            </div>
                            <div 
                              className="text-white/70"
                              style={{
                                fontSize: '11px',
                                lineHeight: '14px'
                              }}
                            >
                              Services inclus
                            </div>
                          </div>
                        </div>
                        
                        {/* Bouton CTA (Obtenir) */}
                        <Button
                          className="bg-white text-blue-600 hover:bg-gray-50 font-semibold border-0 transition-all duration-200"
                          style={{
                            height: '32px',
                            minWidth: '88px',
                            fontSize: '15px',
                            borderRadius: '16px'
                          }}
                          onClick={() => {
                            window.location.href = "tel:0756812255";
                          }}
                        >
                          Réserver
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile: Cartes "Aujourd'hui" App Store iOS */}
              <div className="lg:hidden">
                <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide px-4 -mx-4">
                  {allPlans.map((plan, index) => (
                    <div 
                      key={index}
                      className={`relative bg-white overflow-hidden transition-all duration-300 ${index === 0 ? 'min-w-[85vw] ml-4' : 'min-w-[80vw]'} max-w-[340px] flex-shrink-0 snap-center group`}
                      style={{
                        aspectRatio: '16/9',
                        borderRadius: '28px',
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      {/* Image plein cadre mobile */}
                      <div className="relative w-full h-full overflow-hidden">
                        <img 
                          src={plan.image}
                          alt={plan.name}
                          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                        />
                        
                        {/* Overlay gradient mobile */}
                        <div 
                          className="absolute inset-0"
                          style={{
                            background: 'linear-gradient(to bottom, transparent 65%, rgba(0, 0, 0, 0.4) 100%)'
                          }}
                        ></div>
                        
                        {/* Badge de lecture centré mobile */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div 
                            className="flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                            style={{
                              width: '60px',
                              height: '60px',
                              borderRadius: '50%',
                              backgroundColor: 'rgba(255, 255, 255, 0.7)',
                              backdropFilter: 'blur(10px)'
                            }}
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-black ml-0.5">
                              <path d="M8 5.14v13.72L19 12L8 5.14z" fill="currentColor"/>
                            </svg>
                          </div>
                        </div>
                        
                        {/* Libellé haut mobile */}
                        <div 
                          className="absolute text-white font-semibold uppercase tracking-wide"
                          style={{
                            top: '12px',
                            left: '16px',
                            fontSize: '10px',
                            lineHeight: '14px'
                          }}
                        >
                          LES STUDIOS QU'ON AIME
                        </div>
                        
                        {/* Titre mobile */}
                        <div 
                          className="absolute"
                          style={{
                            bottom: '70px',
                            left: '16px',
                            right: '16px'
                          }}
                        >
                          <div className="space-y-1">
                            <h3 
                              className="text-white font-bold leading-tight"
                              style={{
                                fontSize: '22px',
                                lineHeight: '26px',
                                maxWidth: '80%'
                              }}
                            >
                              {plan.name}
                            </h3>
                            <p 
                              className="text-white"
                              style={{
                                fontSize: '13px',
                                lineHeight: '18px',
                                maxWidth: '80%'
                              }}
                            >
                              Studio professionnel - {plan.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Pied de carte mobile */}
                      <div 
                        className="absolute bottom-0 left-0 right-0 border-t"
                        style={{ 
                          height: '70px',
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          backdropFilter: 'blur(20px)',
                          borderTopColor: 'rgba(255, 255, 255, 0.2)'
                        }}
                      >
                        <div 
                          className="flex items-center justify-between h-full"
                          style={{ padding: '0 16px' }}
                        >
                          {/* Icône + textes mobile */}
                          <div className="flex items-center gap-2.5">
                            <div 
                              className="bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
                              style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '12px'
                              }}
                            >
                              <span className="text-white font-bold text-lg">S</span>
                            </div>
                            
                            <div className="space-y-0.5">
                              <div 
                                className="text-white font-semibold"
                                style={{
                                  fontSize: '15px',
                                  lineHeight: '18px'
                                }}
                              >
                                {plan.name.replace('STUDIO ', 'Studio ')}
                              </div>
                              <div 
                                className="text-white/70"
                                style={{
                                  fontSize: '13px',
                                  lineHeight: '16px'
                                }}
                              >
                                {plan.price} • {plan.features[1]}
                              </div>
                              <div 
                                className="text-white/70"
                                style={{
                                  fontSize: '10px',
                                  lineHeight: '12px'
                                }}
                              >
                                Services inclus
                              </div>
                            </div>
                          </div>
                          
                          {/* Bouton mobile */}
                          <Button
                            className="bg-white text-blue-600 hover:bg-gray-50 font-semibold border-0"
                            style={{
                              height: '28px',
                              minWidth: '72px',
                              fontSize: '13px',
                              borderRadius: '14px'
                            }}
                            onClick={() => {
                              window.location.href = "tel:0756812255";
                            }}
                          >
                            Réserver
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Indicateurs de page */}
                <div className="flex justify-center mt-4 space-x-1">
                  {allPlans.map((_, index) => (
                    <div
                      key={index}
                      className="w-1.5 h-1.5 rounded-full bg-gray-400"
                    ></div>
                  ))}
                </div>
              </div>
        </div>

        {/* Autres prestations - Section Liste (style "Jouons - Parfait en multijoueur") */}
        <div className="mt-16">
          <div className="space-y-4 text-center mb-12 animate-in slide-in-from-bottom-4 duration-700 delay-200">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Autres prestations
            </h2>
          </div>

          {/* Desktop: Container blanc avec coins arrondis */}
          <div className="hidden lg:block">
            <div 
              className="bg-white p-5"
              style={{
                borderRadius: '28px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* Libellé haut */}
              <div 
                className="text-gray-500 font-semibold uppercase tracking-wide mb-2"
                style={{
                  fontSize: '12px',
                  lineHeight: '16px'
                }}
              >
                NOS SERVICES
              </div>
              
              {/* Titre */}
              <h3 
                className="text-black font-bold mb-4"
                style={{
                  fontSize: '28px',
                  lineHeight: '32px'
                }}
              >
                Parfait pour votre projet
              </h3>
              
              {/* Liste des services */}
              <div className="space-y-0">
                {additionalServices.map((service, index) => (
                  <div key={index}>
                    <div 
                      className="flex items-center justify-between"
                      style={{ height: '76px' }}
                    >
                      {/* Icône app */}
                      <div className="flex items-center gap-3">
                        <div 
                          className="bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center"
                          style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '14px'
                          }}
                        >
                          <span className="text-white font-bold text-2xl">
                            {service.name.charAt(0)}
                          </span>
                        </div>
                        
                        {/* Textes */}
                        <div className="space-y-0.5">
                          <div 
                            className="text-black font-semibold"
                            style={{
                              fontSize: '17px',
                              lineHeight: '22px'
                            }}
                          >
                            {service.name}
                          </div>
                          <div 
                            className="text-gray-500"
                            style={{
                              fontSize: '15px',
                              lineHeight: '20px'
                            }}
                          >
                            {service.price} • {service.description}
                          </div>
                          <div 
                            className="text-gray-500"
                            style={{
                              fontSize: '11px',
                              lineHeight: '14px'
                            }}
                          >
                            Services inclus
                          </div>
                        </div>
                      </div>
                      
                      {/* Bouton */}
                      <Button
                        className="bg-gray-100 text-blue-600 hover:bg-gray-200 font-semibold border-0"
                        style={{
                          height: '28px',
                          minWidth: '72px',
                          fontSize: '15px',
                          borderRadius: '14px'
                        }}
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
                    
                    {/* Séparateur */}
                    {index < additionalServices.length - 1 && (
                      <div 
                        className="border-gray-200"
                        style={{
                          borderBottomWidth: '0.5px'
                        }}
                      ></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: Carousel style Apple */}
          <div className="lg:hidden">
            <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide px-4 -mx-4">
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  className={`relative ${index === 0 ? 'min-w-[calc(100vw-8rem)] ml-4' : 'min-w-[calc(100vw-6rem)]'} max-w-[360px] min-h-[500px] flex-shrink-0 snap-center bg-white border border-gray-200 shadow-xl overflow-hidden group`}
                  style={{ borderRadius: '28px' }}
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
                      className="w-full h-14 font-semibold text-lg bg-black text-white hover:bg-gray-800 hover:scale-[1.02] transition-all duration-300 shadow-lg"
                      style={{ borderRadius: '22px' }}
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