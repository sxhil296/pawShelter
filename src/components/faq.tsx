import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  const faqData = [
    {
      question: "How will my donation help the dogs?",
      answer:
        "Your donation will be used to cover essential expenses such as food, medical care, vaccinations, shelter maintenance, and rescue operations for stray and abandoned dogs.",
    },
    {
      question: "Can I visit the shelter to see the dogs?",
      answer:
        "Yes, we welcome visitors! Please contact us to schedule your visit. We’re happy to show you how your contributions make a difference.",
    },
    {
      question: "Is my donation tax-deductible?",
      answer:
        "Yes, all donations to our shelter are tax-deductible. We’ll provide a receipt for your records.",
    },
    {
      question: "Can I adopt a dog from the shelter?",
      answer:
        "Absolutely! We have many loving dogs waiting for a forever home. Visit our adoption page or contact us to learn more about the process.",
    },
    {
      question: "Do you accept items other than money as donations?",
      answer:
        "Yes, we accept items like dog food, blankets, toys, cleaning supplies, and more. Please reach out to us to arrange a drop-off.",
    },
    {
      question: "How can I volunteer to help?",
      answer:
        "We’re always looking for passionate volunteers. You can assist with dog care, shelter maintenance, or fundraising. Visit our volunteer page for more information.",
    },
    {
      question: "Can I donate monthly or set up recurring donations?",
      answer:
        "Yes, you can! We have a recurring donation option that ensures consistent support for the dogs in our care.",
    },
    {
      question: "How do I know my donation is being used effectively?",
      answer:
        "We are committed to transparency. Regular updates, reports, and financial summaries are shared with our donors to show how their contributions are making an impact.",
    },
    {
      question: "What happens if the shelter receives more donations than needed?",
      answer:
        "Excess funds will be saved for future needs, such as medical emergencies or shelter expansion, ensuring every dollar helps animals in need.",
    },
    {
      question: "How can I contact you if I have more questions?",
      answer:
        "You can reach us via email at [your-email@example.com] or call us at [your-phone-number]. We’re happy to assist you!",
    },
  ];
  
  export default function Faq() {
    return (
      <section id="faq" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible>
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-lg font-normal ">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-lg text-primary">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    );
  }
  