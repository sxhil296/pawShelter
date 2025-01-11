'use client'
import { useState } from "react";
import { Button } from "./ui/button";
import { Dog, Menu, X } from "lucide-react";
// import { ModeToggle } from "./modeToggle";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="fixed w-full bg-background/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Dog className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">PawShelter</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-foreground/80 hover:text-primary">Home</a>
              <a href="#need" className="text-foreground/80 hover:text-primary">Why We Need You</a>
              <a href="#impact" className="text-foreground/80 hover:text-primary">Our Impact</a>
              <a href="#contact" className="text-foreground/80 hover:text-primary">Contact</a>
              {/* <ModeToggle /> */}
              <Button>Donate Now</Button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-background shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-foreground/80 hover:text-primary">Home</a>
              <a href="#need" className="block px-3 py-2 text-foreground/80 hover:text-primary">Why We Need You</a>
              <a href="#impact" className="block px-3 py-2 text-foreground/80 hover:text-primary">Our Impact</a>
              <a href="#contact" className="block px-3 py-2 text-foreground/80 hover:text-primary">Contact</a>
              {/* <div className="px-3 py-2 flex justify-start">
              <ModeToggle />
              </div> */}
              <div className="px-3 py-2">
                <Button className="w-full">Donate Now</Button>
              M</div>
            </div>
          </div>
        )}
      </header>
  );
}