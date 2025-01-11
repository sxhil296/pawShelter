import { Dog } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";


const quickLinks = [
  { name: 'Home', href: '#' },
  { name: 'Why We Need You', href: '#need' },
  { name: 'Our Impact', href: '#impact' },
  {name: "Gallery", href: '#gallery' },
  { name: 'Contact', href: '#contact' },
]

const supportLinks = [
  { name: 'Donate', href: '#' },
  { name: 'Volunteer', href: '#contact' },
  { name: 'Adopt', href: '#contact' },
  { name: 'Partner With Us', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Dog className="h-8 w-8 text-primary" />
                <span className="ml-2 text-xl font-bold">PawShelter</span>
              </div>
              <p className="text-muted-foreground">Providing love and care to street dogs, one paw at a time.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}><Link href={link.href} className="text-muted-foreground hover:text-primary">{link.name}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support Us</h4>
              <ul className="space-y-2">
                {supportLinks.map((link, index) => (
                  <li key={index}><Link href={link.href} className="text-muted-foreground hover:text-primary">{link.name}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-muted-foreground mb-4">Subscribe to our newsletter for updates.</p>
              <div className="flex gap-2">
                <Input placeholder="Your email" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} <Link href="#" className="underline">PawShelter</Link>. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )}