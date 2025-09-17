"use client"

import { motion, Variants } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// Animation variants
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

const faqs = [
  {
    q: "What is FindMeRX?",
    a: "FindMeRX is a digital healthcare platform that connects pharmacies, doctors, and patients. It enables seamless prescriptions, telepharmacy consultations, and inventory management.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. We use industry-standard encryption and comply with healthcare data regulations to keep your information safe and confidential.",
  },
  {
    q: "How does it help pharmacies?",
    a: "Pharmacies can manage their inventory in real-time, receive digital prescriptions from doctors, and connect with more patients through our platform.",
  },
  {
    q: "Can patients use it directly?",
    a: "Absolutely. Patients can search for medications, consult pharmacists remotely, and connect with verified pharmacies and doctors.",
  },
  {
    q: "Is FindMeRX available nationwide?",
    a: "We are expanding rapidly. Currently, FindMeRX is available in major cities, with plans to scale nationwide soon.",
  },
]

export default function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <motion.div
        className="max-w-4xl mx-auto px-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Section Title */}
        <motion.div variants={item} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Got questions? We’ve got answers.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <motion.div key={i} variants={item}>
              <AccordionItem value={`item-${i}`}>
                <AccordionTrigger className="text-lg font-medium text-green-700">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </section>
  )
}
