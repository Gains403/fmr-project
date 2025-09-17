"use client"

import { motion, Variants } from "framer-motion"
import { Button } from "@/components/ui/button"

// Animation variants
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.4 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

export default function CTASection() {
  return (
    <section className="py-20 bg-green-600">
      <motion.div
        className="max-w-5xl mx-auto px-6 text-center text-white"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Ready to Transform Healthcare?
        </motion.h2>

        <motion.p
          variants={item}
          className="text-lg md:text-xl mb-10 text-green-100"
        >
          Join FindMeRX today and experience seamless connections between
          pharmacies, doctors, and patients.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-white text-green-600 hover:bg-green-100 font-semibold"
          >
            Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-green-700"
          >
            Request a Demo
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
