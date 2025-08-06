import { Button } from "@/components/ui/button";

const About = () => {
  const artists = [
    "Booba", "Ninho", "Damso", "Gunna", "Jul", "Niska", "SCH", "Naps", "SDM", 
    "PNL", "Djadja & Dinaz", "Kaaris", "Kalash", "Bramsito", "Dosseh", "RK", 
    "Gambino", "Maes"
  ];

  return (
    <section id="about" className="section-container">
      <div className="max-w-screen-xl mx-auto">
        
        {/* Une seule carte avec le contenu principal */}
        <div className="card-apple animate-stagger-1">
          <div className="space-y-8">
            <div className="text-center space-y-6">
              <h2 className="section-title">
                Qui sommes-nous ?
              </h2>
              <div className="space-y-4 section-subtitle max-w-4xl mx-auto">
                <p>
                  Les studios d'enregistrement Emara ont été fondés par les frères Emara 
                  (Trent 700 et Chady Emara), producteurs multi-certifiés.
                </p>
                <p>
                  Forts de leur expertise, ils ont marqué l'industrie musicale rap 
                  par leurs collaborations avec de nombreux artistes réputés.
                </p>
              </div>
            </div>
            
            {/* Mobile: Elegant marquee */}
            <div className="lg:hidden">
              <div className="relative overflow-hidden py-4">
                <div className="animate-marquee-slow whitespace-nowrap">
                  {[...artists, ...artists].map((artist, index) => (
                    <span 
                      key={index} 
                      className="inline-block mx-6 card-content font-medium"
                    >
                      {artist}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Desktop: Clean grid */}
            <div className="hidden lg:grid grid-cols-6 gap-4">
              {artists.map((artist, index) => (
                <div
                  key={index}
                  className="group px-4 py-3 rounded-xl text-center 
                           hover:bg-gray-50 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="card-content font-medium group-hover:text-foreground transition-colors">
                    {artist}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center pt-8">
              <Button
                className="btn-primary max-w-md mx-auto"
                onClick={() => {
                  window.location.href = "tel:0756812255";
                }}
              >
                Voir la discographie
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 