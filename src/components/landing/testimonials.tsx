// components/landing/TestimonialsSection.tsx
"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"
// Animation variants
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
}

const card: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

const testimonials = [
  {
    name: "Dr. Amina Yusuf",
    role: "Medical Director, City Clinic",
    text: "FindMeRX has completely transformed how we source and manage medications. Our patients now receive prescriptions faster and more reliably.",
    image: "/users/user1.jpg",
  },
  {
    name: "Pharm. John Okeke",
    role: "Owner, GreenLife Pharmacy",
    text: "Inventory management is no longer a headache. With FindMeRX, I can track my stock in real time and restock with ease.",
    image: "/users/user2.jpg",
  },
  {
    name: "Grace E.",
    role: "Patient",
    text: "I can now consult with pharmacists remotely and get verified medications delivered to me. It has made my life so much easier.",
    image: "/users/user3.jpg",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
          Trusted by Healthcare Professionals & Patients
        </h2>
        <p className="text-lg text-gray-600">
          See how FindMeRX is making an impact across the healthcare ecosystem.
        </p>
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            variants={card}
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
          >
            <Image
              src={t.image}
              alt={t.name}
              width={80}
              height={80}
              className="rounded-full mb-4 object-cover"
            />
            <p className="text-gray-600 mb-4 italic">“{t.text}”</p>
            <h4 className="font-semibold text-green-700">{t.name}</h4>
            <span className="text-sm text-gray-500">{t.role}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
