'use client'

import { Calendar, Phone, Mail } from 'lucide-react'
import React from 'react'

export const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary to-blue-900 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to scale smarter?
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's talk about your challenges and explore how our technology solutions can transform your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="https://calendar.app.google/FSR7oYq68hXB2KGq8" target="_blank" className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2 group">
              <Calendar className="w-5 h-5" />
              Schedule a Call
            </a>
          </div>
          
          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-blue-700">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-blue-200">+54 (341) 6156-930</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-blue-200"><a href="mailto:pablo@nexuralabs.agency">Pablo@nexuralabs.agency</a></p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Response Time</h3>
              <p className="text-blue-200">Within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 