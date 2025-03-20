"use client"

import { HeroSection } from '@/components/sections/hero-section'
import { ServicesSection } from '@/components/sections/services-section'
import { CompanySection } from '@/components/sections/company-section'
import { ContactSection } from '@/components/sections/contact-section'

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <ServicesSection />
      <CompanySection />
      <ContactSection />
    </main>
  )
}
