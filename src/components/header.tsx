"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Dog, Menu, X } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./modeToggle";
import PaymentModal from "./paymentModal";

const links = [
  { name: "Home", href: "#" },
  { name: "Why We Need You", href: "#need" },
  { name: "Our Impact", href: "#impact" },
  { name: "Gallery", href: "#gallery" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed w-full bg-background/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Dog className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">PawShelter</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`text-foreground/80 hover:text-primary`}
                >
                  {link.name}
                </Link>
              ))}
              <ModeToggle />
              <Button onClick={openModal}>Donate Now</Button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-background shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <ul>
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-3 py-2 text-foreground/80 hover:text-primary `}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="px-3 py-2 flex justify-start" onClick={() => setIsMenuOpen(false)}>
                <ModeToggle />
              </div>
              <div className="px-3 py-2">
                <Button className="w-full" onClick={openModal}>Donate Now</Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <PaymentModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
