const artists = [
  "Booba", "Ninho", "Damso", "Gunna", "Jul", "Niska", "SCH", "Naps",
  "SDM", "PNL", "Djadja & Dinaz", "Kaaris", "Kalash", "Bramsito",
  "Dosseh", "RK", "Gambino", "Maes",
];

const About = () => {
  return (
    <section id="about" className="py-12 xs:py-20 bg-accent/50">
      <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight">
            Qui sommes-nous ?
          </h2>
          <p className="mt-6 max-w-2xl text-lg">
            Les studios d'enregistrement Emara ont été fondés par les frères
            Emara (Trent 700 et Chady Emara), producteurs multi-certifiés.
            <br />
            Forts de leur expertise, ils ont marqué l'industrie musicale rap
            par leurs collaborations avec de nombreux artistes réputés.
          </p>
        </div>
        {/* Mobile marquee */}
        <div className="relative mt-8 md:hidden overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            {artists.concat(artists).map((artist, index) => (
              <span key={index} className="mx-4 text-xl font-semibold">
                {artist}
              </span>
            ))}
          </div>
        </div>
        {/* Desktop block list */}
        <div className="hidden md:flex flex-wrap gap-4">
          {artists.map((artist) => (
            <span key={artist} className="text-lg font-semibold">
              {artist}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 