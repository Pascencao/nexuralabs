'use client'

import { Target, Zap, Shield } from 'lucide-react'
import React from 'react'

const reasons = [
  {
    icon: Target,
    title: "Business-first mindset",
    description: "We understand your industry challenges and build solutions that directly address your business goals, not just technical requirements."
  },
  {
    icon: Zap,
    title: "Fast, flexible development",
    description: "Agile methodology ensures rapid delivery and continuous improvement, allowing you to see results quickly and adapt as needed."
  },
  {
    icon: Shield,
    title: "End-to-end solutions",
    description: "From initial consultation to deployment and ongoing support, we handle every aspect of your digital transformation journey."
  }
]

export const WhyNexuraLabs = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary to-blue-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why NexuraLabs?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We're not just developers – we're your technology partners in growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/30 transition-colors">
                <reason.icon className="w-10 h-10 text-accent" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4">
                {reason.title}
              </h3>
              
              <p className="text-blue-100 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-16 pt-16 border-t border-blue-700">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-blue-200">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">95%</div>
              <div className="text-blue-200">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-blue-200">Support Available</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">3x</div>
              <div className="text-blue-200">Faster Development</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 