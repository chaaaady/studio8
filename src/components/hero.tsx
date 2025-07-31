import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] w-full flex items-center justify-center overflow-hidden border-b border-border">
            <div className="max-w-screen-xl w-full flex flex-col-reverse lg:flex-row mx-auto items-center justify-between gap-16 px-6 pt-4 pb-20 lg:pt-8 lg:pb-16">
        <div className="w-full max-w-xl space-y-8">
          <div className="space-y-6 hidden lg:block animate-in slide-in-from-left-4 duration-700 delay-200">
            <span className="text-sm font-semibold bg-primary text-primary-foreground px-4 py-2 rounded-full tracking-wide inline-block">
              EN CE MOMENT
            </span>
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground">
              30€/H DANS TOUS LES STUDIOS
            </h2>
            <p className="text-2xl font-medium text-muted-foreground tracking-wide">
              VALABLE JUSQU'AU 31 AOÛT
            </p>
            <div className="pt-8 animate-in slide-in-from-left-4 duration-700 delay-500">
              <Button
                size="lg"
                className="rounded-xl text-base font-medium px-8 py-4 h-auto bg-black text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                asChild
              >
                <a href="tel:0756812255">
                  Réserver une session 
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="relative w-full max-w-md lg:max-w-lg bg-accent rounded-2xl aspect-[2/3] lg:aspect-[3/4] overflow-hidden shadow-lg lg:shadow-none animate-in slide-in-from-bottom-4 duration-700">
          <img
            src="/hero-image.webp"
            alt="Studio Emara"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/40 lg:hidden"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-8 lg:hidden">
            <div className="space-y-6">
              <span className="text-xs font-semibold bg-white/25 backdrop-blur-sm px-4 py-2 rounded-full tracking-wide">
                EN CE MOMENT
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
                30€/H DANS TOUS LES STUDIOS
              </h2>
              <p className="text-xl font-medium opacity-95 tracking-wide">
                VALABLE JUSQU'AU 31 AOÛT
              </p>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 lg:hidden">
            <Button
              size="lg"
              className="w-full rounded-xl text-base font-medium px-8 py-4 h-auto bg-white text-black hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              asChild
            >
              <a href="tel:0756812255">
                Réserver une session 
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
