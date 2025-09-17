// components/landing/AboutSection.tsx
"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Variants } from "framer-motion"

// Animation variants
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
}

const itemLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

const itemRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <motion.div
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Left - Image */}
        <motion.div variants={itemLeft} className="flex justify-center">
          <Image
            src="/about-healthcare.jpg"
            alt="FindMeRX in action"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Right - Text */}
        <motion.div variants={itemRight} className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
            Why Choose FindMeRX?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            At <span className="font-semibold">FindMeRX</span>, we go beyond
            connecting pharmacies, doctors, and patients. Our platform ensures
            **safe medication delivery**, **real-time inventory management**, and
            **telepharmacy support** that bridges healthcare gaps.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li>✅ Trusted by 500+ pharmacies nationwide</li>
            <li>✅ Real-time access to verified medications</li>
            <li>✅ Telepharmacy for remote consultations</li>
            <li>✅ Seamless patient-doctor-pharmacy coordination</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  )
}
