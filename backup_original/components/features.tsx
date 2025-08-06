import { Button } from "@/components/ui/button";
import { Mic, Headphones, Music, Palette } from "lucide-react";

const Features = () => {
  const services = [
    {
      title: "Enregistrement",
      description: "Nos studios sont équipés des dernières technologies pour garantir une qualité d'enregistrement professionnelle.",
      features: ["Microphones de studio", "Préamplis haut de gamme", "Acoustique optimisée"],
      icon: Mic,
      popular: false
    },
    {
      title: "Mix/Mastering",
      description: "Notre équipe d'ingénieurs son expérimentés assure un mix et mastering de qualité professionnelle.",
      features: ["Mix professionnel", "Mastering haute qualité", "Prêt pour diffusion"],
      icon: Headphones,
      popular: true
    },
    {
      title: "Production",
      description: "Accompagnement complet dans la création de vos projets musicaux, de la composition à la finalisation.",
      features: ["Composition", "Arrangement", "Producteurs reconnus"],
      icon: Music,
      popular: false
    },
    {
      title: "Direction artistique",
      description: "Conseils et accompagnement personnalisé pour définir votre identité artistique.",
      features: ["Conseil personnalisé", "Identité artistique", "Développement projet"],
      icon: Palette,
      popular: false
    }
  ];

  return (
    <section id="features" className="section-container">
      <div className="max-w-screen-xl mx-auto">
        {/* Titre principal */}
        <div className="space-y-4 text-center mb-12 animate-stagger-1">
          <h2 className="section-title">
            Nos services
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Une gamme complète de services professionnels pour accompagner vos projets musicaux
          </p>
        </div>

        {/* Services Grid - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`card-apple relative ${service.popular ? 'ring-2 ring-blue-500' : ''}`}
                style={{
                  animationDelay: `${(index + 2) * 150}ms`
                }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Populaire
                    </div>
                  </div>
                )}
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-gray-700" />
                    </div>
                    <h3 className="card-title text-xl">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="card-content">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="card-content text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    className="btn-primary mt-6"
                    onClick={() => {
                      window.location.href = "tel:0756812255";
                    }}
                  >
                    En savoir plus
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Services Carousel - Mobile */}
        <div className="lg:hidden">
          <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide px-4 -mx-4">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className={`relative rounded-3xl ${
                    index === 0 ? 'min-w-[calc(100vw-8rem)] ml-4' : 'min-w-[calc(100vw-6rem)]'
                  } max-w-[360px] min-h-[400px] flex-shrink-0 snap-center bg-white border border-gray-200 shadow-xl overflow-hidden p-6`}
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-blue-500 rounded-full px-3 py-1">
                        <span className="text-sm font-semibold text-white">Populaire</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-6 h-full flex flex-col">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-gray-700" />
                      </div>
                      <h3 className="card-title text-xl">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="card-content flex-1">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="card-content text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button
                      className="btn-primary mt-6"
                      onClick={() => {
                        window.location.href = "tel:0756812255";
                      }}
                    >
                      En savoir plus
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Indicateur de pagination */}
          <div className="flex justify-center mt-6 space-x-2">
            {services.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
