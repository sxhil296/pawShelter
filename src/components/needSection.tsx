import { Dog, Heart, Users } from "lucide-react";

export default function NeedSection() {
  return (
    <section id="need" className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Why We Need Your Help</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-4">Care & Love</h3>
          <p className="text-muted-foreground">Every street dog deserves love, care, and a safe place to call home.</p>
        </div>
        <div className="text-center">
          <Users className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-4">Community Support</h3>
          <p className="text-muted-foreground">Together, we can make a difference in the lives of these animals.</p>
        </div>
        <div className="text-center">
          <Dog className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-4">Better Lives</h3>
          <p className="text-muted-foreground">Your support helps us provide medical care, food, and shelter.</p>
        </div>
      </div>
    </div>
  </section>
  )}