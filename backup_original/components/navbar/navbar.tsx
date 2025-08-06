import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import ThemeToggle from "../theme-toggle";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 h-16 bg-white/5 backdrop-blur-md animate-in slide-in-from-top-4 duration-500">
      <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button variant="outline" className="hidden sm:inline-flex transition-all duration-300 hover:scale-105 bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
            <a href="tel:0756812255">Contact</a>
          </Button>
          <Button className="hidden xs:inline-flex transition-all duration-300 hover:scale-105 bg-white text-black hover:bg-gray-100" asChild>
            <a href="tel:0756812255">Réserver</a>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
