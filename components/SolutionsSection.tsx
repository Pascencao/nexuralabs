'use client'

import { Code, Zap, Link } from 'lucide-react'
import React from 'react'

const solutions = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored applications built specifically for your business processes and requirements.",
    features: ["Scalable architecture", "Modern tech stack", "User-centered design"]
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Streamline repetitive tasks and workflows to boost productivity and reduce errors.",
    features: ["Workflow optimization", "API integrations", "Real-time monitoring"]
  },
  {
    icon: Link,
    title: "System Integration",
    description: "Connect your existing tools and platforms for seamless data flow and collaboration.",
    features: ["Third-party APIs", "Data synchronization", "Unified dashboard"]
  }
]

export const SolutionsSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We transform your challenges into opportunities with cutting-edge technology solutions.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-white to-neutral-50 rounded-2xl p-8 border border-gray-100 hover:border-accent/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <solution.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-primary mb-4">
                {solution.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {solution.description}
              </p>
              
              <ul className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 