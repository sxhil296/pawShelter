'use client'
import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";
import PaymentModal from "./paymentModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="pt-16">
        <div className="relative">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
            alt="Dogs"
            width={1920}
            height={1080}
            className="w-full h-[90vh] object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="max-w-3xl mx-auto text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Give Them a Place to Call Home
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Help us provide shelter, care, and love to street dogs. Every donation makes a difference in their lives.
              </p>
              <div className="flex justify-center items-center gap-4 flex-col sm:flex-row">
                <Button size="lg" className="text-lg" onClick={openModal}>Donate Now</Button>
                <Button size="lg" variant="secondary" className="text-lg">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
        <PaymentModal isOpen={isModalOpen} onClose={closeModal} />
      </section>
  )}