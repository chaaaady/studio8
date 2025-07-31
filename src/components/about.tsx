const About = () => {
  const artists = [
    "Booba", "Ninho", "Damso", "Gunna", "Jul", "Niska", "SCH", "Naps", "SDM", 
    "PNL", "Djadja & Dinaz", "Kaaris", "Kalash", "Bramsito", "Dosseh", "RK", 
    "Gambino", "Maes"
  ];

  return (
    <section id="about" className="py-20 lg:py-24">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="bg-background border-2 border-border rounded-2xl p-8 lg:p-12">
          <div className="space-y-16">
            {/* Header */}
            <div className="space-y-4 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                Qui sommes-nous ?
              </h2>
              <div className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                <p className="mb-4">
                  Les studios d'enregistrement Emara ont été fondés par les frères Emara 
                  (Trent 700 et Chady Emara), producteurs multi-certifiés.
                </p>
                <p>
                  Forts de leur expertise, ils ont marqué l'industrie musicale rap 
                  par leurs collaborations avec de nombreux artistes réputés.
                </p>
              </div>
            </div>
            
            {/* Artists Section */}
            <div className="space-y-8">
              {/* Mobile marquee */}
              <div className="relative lg:hidden overflow-hidden bg-accent/30 rounded-xl p-6">
                <div className="animate-marquee-slow whitespace-nowrap">
                  {artists.map((artist, index) => (
                    <span key={index} className="mx-4 text-lg font-medium text-foreground">
                      {artist}
                    </span>
                  ))}
                  {artists.map((artist, index) => (
                    <span key={`duplicate-${index}`} className="mx-4 text-lg font-medium text-foreground">
                      {artist}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Desktop grid */}
              <div className="hidden lg:grid grid-cols-3 gap-4">
                {artists.map((artist, index) => (
                  <div 
                    key={index} 
                    className="p-4 bg-accent/30 rounded-xl border border-border text-center hover:bg-accent/50 transition-colors"
                  >
                    <span className="text-lg font-medium text-foreground">
                      {artist}
                    </span>
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

export default About; 