import { Button } from "@/components/ui/button";
import { ArrowUpRight, Play, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen w-full relative overflow-hidden scroll-snap-align-start">
      {/* Desktop Layout - Hero avec image de fond */}
      <div className="hidden lg:block relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/hero-image.webp"
            alt="Studio Emara"
            className="object-cover w-full h-full"
          />
          {/* Gradient Overlay uniforme */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        </div>

        {/* Content - Centré et structuré comme les autres sections */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
          <div className="max-w-screen-xl w-full">
            <div className="text-center space-y-12 animate-stagger-1">
              {/* Badge promo */}
              <div className="animate-stagger-1">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full border border-white/20">
                  <Star className="h-4 w-4" />
                  <span className="text-sm font-semibold tracking-wide">EN CE MOMENT</span>
                </div>
              </div>

              {/* Titre principal avec style section-title */}
              <div className="space-y-6 animate-stagger-2">
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                  30€/H DANS TOUS LES STUDIOS
                </h1>
                <p className="text-xl lg:text-2xl text-white/90 font-medium max-w-3xl mx-auto">
                  VALABLE JUSQU'AU 31 AOÛT
                </p>
              </div>

              {/* CTA cohérent avec le design system */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-stagger-3">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl group min-w-[280px]"
                  asChild
                >
                  <a href="tel:0756812255" className="flex items-center gap-3">
                    Réserver une session
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 group min-w-[280px]"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Découvrir les studios
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Padding léger avec header et barre Safari */}
      <div className="lg:hidden min-h-screen flex flex-col justify-between pt-4 pb-8">
        <div className="max-w-screen-xl mx-auto px-6 w-full flex-1 flex items-center">
          <div className="w-full bg-white rounded-3xl aspect-[3/5] relative overflow-hidden shadow-xl animate-stagger-1 border border-gray-200">
            {/* Image de fond */}
            <img
              src="/hero-image.webp"
              alt="Studio Emara"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
              {/* Badge en haut */}
              <div className="flex justify-center">
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                  <Star className="h-4 w-4" />
                  <span className="text-sm font-semibold">EN CE MOMENT</span>
                </div>
              </div>
              
              {/* Titre central */}
              <div className="text-center space-y-6">
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
                  30€/H DANS TOUS LES STUDIOS
                </h1>
                <p className="text-lg sm:text-xl font-medium opacity-95">
                  VALABLE JUSQU'AU 31 AOÛT
                </p>
              </div>
              
              {/* Boutons en bas */}
              <div className="space-y-3">
                <Button
                  className="w-full bg-white text-black hover:bg-gray-100 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                  asChild
                >
                  <a href="tel:0756812255" className="flex items-center justify-center gap-2">
                    Réserver une session
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-black py-4 text-lg font-semibold rounded-2xl transition-all duration-300"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Découvrir les studios
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
