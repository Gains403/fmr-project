import HeroSection from "@/components/landing/heroSection";
import Navbar from "@/components/landing/navbar";
import FeaturesSection from "@/components/landing/featuresSection";
import AboutSection from "@/components/landing/about";
import TestimonialsSection from "@/components/landing/testimonials";
import CTASection from "@/components/landing/CTASection";
import FAQSection from "@/components/landing/FAQ";
import Footer from "@/components/landing/footer";




export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </>
  )
}