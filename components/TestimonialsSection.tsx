'use client'

import { Star, Quote } from 'lucide-react'
import React from 'react'

const testimonials = [
  {
    name: "María González",
    position: "CEO",
    company: "TechFlow Solutions",
    content: "NexuraLabs transformed our entire workflow. Their custom software solution reduced our processing time by 70% and eliminated countless manual errors.",
    rating: 5
  },
  {
    name: "Carlos Rodríguez",
    position: "CTO",
    company: "InnovateCorp",
    content: "The team at NexuraLabs truly understands business needs. They delivered a solution that not only works perfectly but also scales with our growth.",
    rating: 5
  },
  {
    name: "Ana Martínez",
    position: "Operations Director",
    company: "GlobalTech Industries",
    content: "Working with NexuraLabs was a game-changer. Their process automation tools saved us hours every day and improved our team's productivity significantly.",
    rating: 5
  }
]

export const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-accent/20">
                <Quote className="w-8 h-8" />
              </div>
              
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-primary mb-8">
              Trusted by companies worldwide
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">TechFlow</div>
              <div className="text-2xl font-bold text-gray-400">InnovateCorp</div>
              <div className="text-2xl font-bold text-gray-400">GlobalTech</div>
              <div className="text-2xl font-bold text-gray-400">DataSync</div>
              <div className="text-2xl font-bold text-gray-400">CloudWorks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 