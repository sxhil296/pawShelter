import { Dog } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

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
                <li><a href="#" className="text-muted-foreground hover:text-primary">Home</a></li>
                <li><a href="#need" className="text-muted-foreground hover:text-primary">Why We Need You</a></li>
                <li><a href="#impact" className="text-muted-foreground hover:text-primary">Our Impact</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support Us</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Donate</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Volunteer</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Adopt</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Partner With Us</a></li>
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
            <p>&copy; {new Date().getFullYear()} PawShelter. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )}