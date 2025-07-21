'use client'

import { Link, Clock, MessageSquare } from 'lucide-react'
import React from 'react'

const problems = [
  {
    icon: Link,
    title: "Disconnected tools",
    description: "Your team struggles with multiple systems that don't talk to each other, creating data silos and inefficiencies."
  },
  {
    icon: Clock,
    title: "Manual approvals",
    description: "Time-consuming approval processes slow down your operations and create bottlenecks in your workflow."
  },
  {
    icon: MessageSquare,
    title: "Endless emails & spreadsheets",
    description: "Important information gets lost in email threads and spreadsheets, making collaboration difficult."
  }
]

export const ProblemsSection = () => {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What's holding your growth?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These common challenges prevent businesses from scaling efficiently and reaching their full potential.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <problem.icon className="w-8 h-8 text-accent" />
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-4">
                {problem.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 