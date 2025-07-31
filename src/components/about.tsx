const About = () => {
  const artists = [
    "Booba", "Ninho", "Damso", "Gunna", "Jul", "Niska", "SCH", "Naps", "SDM", 
    "PNL", "Djadja & Dinaz", "Kaaris", "Kalash", "Bramsito", "Dosseh", "RK", 
    "Gambino", "Maes"
  ];

  return (
    <section id="about" className="py-12 lg:py-16 bg-accent/50">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="bg-background border-2 border-border rounded-2xl p-6 lg:p-8">
          <div className="space-y-12">
            {/* Header */}
            <div className="space-y-4 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                Qui sommes-nous ?
              </h2>
              <div className="text-16 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
            <div className="space-y-6">
              {/* Mobile marquee */}
              <div className="relative lg:hidden overflow-hidden bg-accent/30 rounded-xl p-4">
                <div className="animate-marquee-slow whitespace-nowrap">
                  {artists.map((artist, index) => (
                    <span key={index} className="mx-4 text-16 font-medium text-foreground">
                      {artist}
                    </span>
                  ))}
                  {artists.map((artist, index) => (
                    <span key={`duplicate-${index}`} className="mx-4 text-16 font-medium text-foreground">
                      {artist}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Desktop grid */}
              <div className="hidden lg:grid grid-cols-3 gap-3">
                {artists.map((artist, index) => (
                  <div 
                    key={index} 
                    className="p-3 bg-accent/30 rounded-xl border border-border text-center hover:bg-accent/50 transition-colors"
                  >
                    <span className="text-16 font-medium text-foreground">
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