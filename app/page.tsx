import { Hero } from '../components/Hero'
import { ProblemsSection } from '../components/ProblemsSection'
import { SolutionsSection } from '../components/SolutionsSection'
import { WhyNexuraLabs } from '../components/WhyNexuraLabs'
import { TestimonialsSection } from '../components/TestimonialsSection'
import { CTASection } from '../components/CTASection'
import { Footer } from '../components/Footer'
import React from 'react'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemsSection />
      <SolutionsSection />
      <WhyNexuraLabs />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
} 