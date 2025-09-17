"use client"

import Image from "next/image"
import { motion, Variants } from "framer-motion"

const features = [
  {
    title: "Verified Pharmacies",
    desc:
      "Partner only with licensed and trusted pharmacies. Every product is authentic and traceable.",
    image: "/images/fmr-verified-pharmacies.png",
  },
  {
    title: "Telepharmacy Consultations",
    desc:
      "Get prescriptions and advice virtually from licensed doctors and pharmacists without leaving home.",
    image: "/images/fmr-telepharmacy.png",
  },
  {
    title: "Inventory Management Dashboard",
    desc:
      "Track stock levels, receive low-stock alerts, and manage reorders automatically.",
    image: "/images/fmr-inventory-management.png",
  },
  {
    title: "Fast & Reliable Delivery",
    desc:
      "Same-day and next-day delivery with full transparency and real-time tracking.",
    image: "/images/fmr-delivery.png",
  },
]

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

export default function FeaturesSection() {
	return (
		<section id="features" className="py-20 bg-green-50">
			<div className="max-w-7xl mx-auto px-6 text-center mb-16">
				<h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
					Powerful Features for Smarter Healthcare
				</h2>
				<p className="text-lg text-gray-600">
					Everything you need to connect doctors, pharmacies, and patients in one
					platform.
				</p>
			</div>

			<motion.div
				className="max-w-7xl mx-auto flex flex-col gap-20"
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.2 }}
			>
				{features.map((f, i) => (
					<motion.div
						key={i}
						variants={item}
						className={`flex flex-col md:flex-row items-center gap-10 ${
							i % 2 === 1 ? "md:flex-row-reverse" : ""
						}`}
					>
						{/* Image */}
						<motion.div variants={item} className="flex-1">
							<Image
								src={f.image}
								alt={f.title}
								width={500}
								height={350}
								className="rounded-2xl shadow-lg object-cover"
							/>
						</motion.div>

						{/* Text */}
						<motion.div
							variants={item}
							className="flex-1 text-center md:text-left"
						>
							<h3 className="text-2xl font-semibold text-green-700 mb-4">
								{f.title}
							</h3>
							<p className="text-gray-600 text-lg">{f.desc}</p>
						</motion.div>
					</motion.div>
				))}
			</motion.div>
		</section>
	)
}
