// components/landing/Hero.tsx
"use client"

import { Typewriter } from "react-simple-typewriter"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="bg-green-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Left side - Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-black-700 mb-6">
            Connecting{" "}
            <span className="text-green-600">
              <Typewriter
                words={[
                  "Pharmacies",
                  "Doctors",
                  "Patients",
                  "Communities",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>

          <motion.p
            className="text-lg text-gray-600 mb-6 max-w-lg mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Find trusted medications, manage inventory, and consult virtually
            with ease on FindMeRX.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600"
            >
              Learn More
            </Button>
          </motion.div>
            <motion.div>
            <p className="text-sm text-gray-500 mt-3">
                Already have an account?{" "}
                <a href="/auth/signin" className="text-green-500 hover:underline">
                Sign in here
                </a>
            </p>

            </motion.div>
        </motion.div>

        {/* Right side - Image (hidden on mobile) */}
        <motion.div
          className="hidden md:flex flex-1 justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src="/images/fmr-hero.png"
            alt="Healthcare Illustration"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  )
}
