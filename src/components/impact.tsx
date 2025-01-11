"use client";

import { useInView } from "react-intersection-observer";
import AnimatedNumbers from "react-animated-numbers";

export default function Impact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, 
  });


  const impactData = [
    { id: "dogsRescued", label: "Dogs Rescued", number: 500 },
    { id: "dogsAdopted", label: "Dogs Adopted", number: 500 },
    { id: "medicalTreatments", label: "Medical Treatments", number: 500 },
    { id: "mealsServed", label: "Meals Served", number: 1000 },
  ];

  return (
    <section id="impact" className="py-20 bg-muted" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {impactData.map(({ id, label, number }) => (
            <div key={id}>
              <h3 className="text-4xl font-bold text-primary mb-2">
                <span className="flex items-center justify-center">
                  {inView && (
                    <AnimatedNumbers
                      includeComma
                      transitions={(index) => ({
                        type: "spring",
                        duration: index + 0.3,
                      })}
                      animateToNumber={number}
                    />
                  )}
                  +
                </span>
              </h3>
              <p className="text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
