"use client";
import { Dog } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import Spinner from "./spinner";

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "Why We Need You", href: "#need" },
  { name: "Our Impact", href: "#impact" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const supportLinks = [
  { name: "Donate", href: "#" },
  { name: "Volunteer", href: "#contact" },
  { name: "Adopt", href: "#contact" },
  { name: "Partner With Us", href: "#contact" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubscribe = async () => {
    if (!email.trim()) {
      toast({
        variant: "destructive",
        title: "Uh oh! Email is required.",
        description: "Please enter a valid email address.",
      });
      return; 
    }
    setLoading(true);
    try {
      const response = await axios.post(
        `http://localhost:3000/api/subscribe`,
       { email}
      );
      console.log(response.data);
      if (response.data.message == "Subscribed successfully.") {
        setEmail("");
        toast({
          description: "You have successfully subscribed.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("Axios Error:", error.response?.data || error.message);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      } else {
        console.log("Unexpected Error:", error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <footer className="bg-muted py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Dog className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">PawShelter</span>
            </div>
            <p className="text-muted-foreground">
              Providing love and care to street dogs, one paw at a time.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support Us</h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for updates.
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button onClick={handleSubscribe} disabled={loading}>
                {loading? <Spinner/> : "Subscribe"}
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <Link href="#" className="underline">
              PawShelter
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
