import { Logo } from "./navbar/logo";

const Footer = () => {
  return (
    <footer className="bg-[#111111] border-t border-border scroll-snap-align-start">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Logo & Description */}
            <div className="space-y-6">
              <Logo />
              <p className="text-muted-foreground leading-relaxed">
                Fondé par les frères Emara, producteurs multi-certifiés et reconnus dans l'industrie musicale.
              </p>
            </div>
            
            {/* Contact */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">
                Contact
              </h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="tel:0756812255" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    07 56 81 22 55
                  </a>
                </li>
                <li>
                  <a 
                    href="https://wa.me/33756812255" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Navigation */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">
                Navigation
              </h4>
              <ul className="space-y-4">
                <li>
                  <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                    Artistes
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                    Tarifs
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border" />
        
        {/* Copyright */}
        <div className="py-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Studios Emara. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
