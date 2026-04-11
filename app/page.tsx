import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeatureSection1 } from "@/components/feature-section-1"
import { FeatureSection2 } from "@/components/feature-section-2"
import { RecipeSection } from "@/components/recipe-section"
import { ShippingSection } from "@/components/shipping-section"
import { ReviewsSection } from "@/components/reviews-section"
import { FaqSection } from "@/components/faq-section"
import { PurchaseSection } from "@/components/purchase-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <FeatureSection1 />
        <FeatureSection2 />
        <RecipeSection />
        <ShippingSection />
        <ReviewsSection />
        <FaqSection />
        <PurchaseSection />
      </main>
      <Footer />
    </div>
  )
}
