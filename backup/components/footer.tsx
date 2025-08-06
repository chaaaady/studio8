import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Logo } from "./navbar/logo";

const Footer = () => {
  return (
    <footer className="mt-12 xs:mt-16 bg-accent/50 border-t">
      <div className="max-w-screen-xl mx-auto py-12 px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold">Prêt à créer votre prochain hit ?</h3>
          <p className="mt-2 text-lg text-muted-foreground">
            Contactez-nous dès aujourd'hui pour réserver votre session.
          </p>
        </div>
      </div>
      <Separator />
      <div className="max-w-screen-xl mx-auto py-8 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 px-6">
        <div className="col-span-1">
          <Logo />
          <p className="mt-4 text-muted-foreground">
            Fondé par les frères Emara, producteurs multi-certifiés.
          </p>
        </div>

        <div className="md:justify-self-end">
          <h6 className="font-semibold text-foreground">Navigation</h6>
          <ul className="mt-6 space-y-4">
            <li><a href="#features" className="text-muted-foreground hover:text-foreground">Services</a></li>
            <li><a href="#testimonials" className="text-muted-foreground hover:text-foreground">Artistes</a></li>
            <li><a href="#pricing" className="text-muted-foreground hover:text-foreground">Tarifs</a></li>
            <li><a href="#faq" className="text-muted-foreground hover:text-foreground">FAQ</a></li>
          </ul>
        </div>

        <div className="md:justify-self-end">
          <h6 className="font-semibold text-foreground">CONTACT</h6>
          <ul className="mt-6 space-y-4">
            <li>
              <a
                href="tel:0756812255"
                className="text-muted-foreground hover:text-foreground"
              >
                07 56 81 22 55
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/33756812255"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Separator />
      <div className="max-w-screen-xl mx-auto py-8 flex items-center justify-center px-6">
        <span className="text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Studios Emara. Tous droits réservés.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
