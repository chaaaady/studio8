import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

const studioPlans = [
  {
    name: "STUDIO A",
    price: "35€/H",
    description: "2h minimum",
    features: ["40 m²", "Jusqu'à 10 personnes", "Ingénieur son inclus"],
    isPopular: true,
  },
  {
    name: "STUDIO B",
    price: "35€/H",
    description: "2h minimum",
    features: ["20 m²", "Jusqu'à 4 personnes", "Ingénieur son inclus"],
    isPopular: true,
  },
  {
    name: "STUDIO C",
    price: "30€/H",
    description: "2h minimum",
    features: ["25 m²", "Jusqu'à 6 personnes", "Ingénieur son inclus"],
  },
  {
    name: "STUDIO D - BEATMAKING",
    price: "20€/H",
    description: "5h minimum",
    features: ["Poste de travail dédié", "Accès aux équipements", "Idéal pour la production"],
  },
];

const otherServices = [
    {
        name: "MIX-MASTERING",
        price: "145€ / TITRE",
        description: "Qualité professionnelle prête à la diffusion.",
        features: ["Mix des voix", "Ajout d'effets", "Mastering pro"],
        isPopular: true,
    },
    {
        name: "LOCK OUT",
        price: "100€ / H",
        description: "Privatisation complète des 3 studios (+100m²).",
        features: ["Accès illimité aux studios", "Jusqu'à 25 personnes"],
    },
    {
        name: "SÉMINAIRE",
        price: "",
        description: "Création d'albums avec beatmakers & ingés – location semaine (4 studios dédiés).",
        buttonText: "Réserver",
        features: ["4 studios dédiés", "Beatmakers & ingénieurs inclus"],
    },
    {
        name: "RÉSERVATIONS SANS INGÉNIEUR SON",
        price: "",
        description: "Tarifs sans ingénieur son disponibles.",
        buttonText: "Découvrir les tarifs",
        features: ["Autonomie complète", "Accès équipements"],
    }
]

const Pricing = () => {
  return (
    <div id="pricing" className="max-w-screen-xl mx-auto py-12 xs:py-16 px-6">
      <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight">
        Tarifs studios
      </h2>
      <p className="mt-2 text-muted-foreground text-lg">Horaire 16h-4h du matin, 7&nbsp;jours sur&nbsp;7</p>
      <div className="mt-8 xs:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-8">
        {studioPlans.map((plan) => (
          <PricingCard key={plan.name} {...plan} />
        ))}
      </div>

      <h2 className="mt-16 xs:mt-24 text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight">
        Autres prestations
      </h2>
      <div className="mt-8 xs:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-8">
        {otherServices.map((plan) => (
          <PricingCard key={plan.name} {...plan} />
        ))}
      </div>
    </div>
  );
};

const PricingCard = ({ name, price, description, features, isPopular, buttonText }: any) => (
  <div
    className={cn(
      "relative bg-accent/50 border p-7 rounded-xl h-full flex flex-col",
      { "bg-background border-[2px] border-primary": isPopular }
    )}
  >
    {isPopular && (
      <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
        Populaire
      </Badge>
    )}
    <h3 className="text-lg font-medium">{name}</h3>
    {price && (
      <p className="mt-2 text-4xl font-bold">{price}</p>
    )}
    <p className="mt-1 font-medium text-muted-foreground">{description}</p>
    {features && (
      <>
        <Separator className="my-6" />
        <ul className="space-y-2">
          {features.map((feature: string) => (
            <li key={feature} className="flex items-start gap-2">
              <CircleCheck className="h-4 w-4 mt-1 text-foreground" />
              {feature}
            </li>
          ))}
        </ul>
      </>
    )}
    <Button
      variant={isPopular ? "default" : "secondary"}
      size="lg"
      className="w-full mt-8 rounded-full bg-foreground text-background hover:bg-foreground/90"
    >
      {buttonText || "RÉSERVER"}
    </Button>
  </div>
);

export default Pricing;
