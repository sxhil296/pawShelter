"use client";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Spinner from "./spinner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const response = await axios.post(
        `http://localhost:3000/api/contact`,
        values
      );
      console.log(response.data);
      if (response.data.message == "Message sent successfully.") {
        toast({
          description: "Your message has been sent.",
        });
      } else{
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
  }
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3" />
                <span>contact@pawshelter.org</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-primary mr-3" />
                <span>Spaze iTech Park, Gurugram, India</span>
              </div>
            </div>
          </div>
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={loading}>
                  {loading ? <Spinner /> : "Send Message"}
              
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
