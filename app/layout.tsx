import type { Metadata } from 'next'
import './globals.css'
import React from 'react'

export const metadata: Metadata = {
  title: 'NexuraLabs | Tech Solutions that Grow with You',
  description: 'Custom software development, process automation, and system integration solutions that adapt to your business needs.',
  keywords: 'software development, process automation, system integration, custom software, business solutions',
  authors: [{ name: 'NexuraLabs' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 