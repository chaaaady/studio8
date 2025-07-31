import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] w-full flex items-center justify-center overflow-hidden border-b border-border">
      <div className="max-w-screen-xl w-full flex flex-col-reverse lg:flex-row mx-auto items-center justify-between gap-16 px-6 pt-8 pb-20 lg:py-24">
        <div className="w-full max-w-xl space-y-8">
          <div className="space-y-2 hidden sm:block">
            <Badge className="rounded-full py-2 px-4 text-sm font-medium bg-primary text-primary-foreground border-0">
              Offre été
            </Badge>
            <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-foreground">
              Studio Emara
            </h1>
          </div>
          
          <div className="space-y-4 hidden sm:block">
            <p className="text-xl font-semibold text-primary">
              4 H D'ENREGISTREMENT AVEC INGÉNIEUR SON À 130€
            </p>
          </div>
          
          <div className="flex justify-center sm:justify-start pt-4">
            <Button
              size="lg"
              className="w-full rounded-xl text-base font-medium px-8 py-6 h-auto"
              asChild
            >
              <a href="tel:0756812255">
                Réserver une session 
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        
        <div className="relative lg:max-w-lg xl:max-w-xl w-full bg-accent rounded-2xl aspect-square overflow-hidden">
          <img
            src="/placeholder.svg"
            alt="Studio Emara"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
