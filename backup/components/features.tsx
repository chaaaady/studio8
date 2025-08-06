import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";

const services = [
  {
    title: "ENREGISTREMENT",
    description: "Sessions d'enregistrement avec ingénieur son dans nos studios équipés pour un rendu professionnel.",
  },
  {
    title: "MIX/MASTERING",
    description: "Optimisation de vos pistes avec mixage et mastering prêts pour la distribution.",
  },
  {
    title: "PRODUCTION",
    description: "Accompagnement sur mesure dans la création de vos morceaux, de l'idée au produit fini.",
  },
  {
    title: "DIRECTION ARTISTIQUE",
    description: "Conseils experts pour affiner votre identité musicale et la cohérence de votre projet.",
  },
];

const Features = () => (
  <div id="features" className="max-w-screen-xl mx-auto w-full py-12 xs:py-16 px-6">
    <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight">Nos services</h2>
    <Accordion type="single" collapsible className="mt-8 xs:mt-14 space-y-4">
      {services.map((srv, idx) => (
        <AccordionItem
          key={srv.title}
          value={`srv-${idx}`}
          className="bg-accent/50 rounded-xl px-4"
        >
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-4 font-semibold tracking-tight text-left text-lg hover:underline [&[data-state=open]>svg]:rotate-45">
              {srv.title}
              <PlusIcon className="h-5 w-5 shrink-0 transition-transform duration-200" />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionContent className="text-[15px] pb-4 pr-6">
            {srv.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

export default Features;
