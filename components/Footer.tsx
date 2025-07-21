'use client'

import { Linkedin, Instagram } from 'lucide-react'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              NexuraLabs
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Tech solutions that grow with you. We build custom software, automate processes, and integrate systems to help your business scale efficiently.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/nexuralabs/" 
                target="_blank"
                className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/nexuralabs/" 
                target="_blank"
                className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Custom Software</li>
              <li>Process Automation</li>
              <li>System Integration</li>
              <li>Consulting</li>
            </ul>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 NexuraLabs. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-gray-400 hover:text-accent text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-accent text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 