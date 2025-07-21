'use client'

import { ArrowRight } from 'lucide-react'
import React from 'react'

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-blue-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-900"></div>
      </div>
      
      <div className="container-custom section-padding relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Brand */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              NexuraLabs
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 font-medium">
              Tech Solutions that Grow with You
            </p>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Let's build your{' '}
            <span className="text-accent">digital future</span>
          </h2>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Custom software that adapts to your business, not the other way around.
          </p>
          
          {/* CTA Button */}
          <a href="https://calendar.app.google/FSR7oYq68hXB2KGq8" target="_blank" className="btn-primary max-w-xs text-lg px-8 py-4 flex items-center gap-2 mx-auto group">
            Request a Free Evaluation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
} 