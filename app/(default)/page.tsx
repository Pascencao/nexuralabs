export const metadata = {
  title: "Nexura Labs | Tech Solutions that Grow with You",
  description: "Nexura Labs ofrece soluciones tecnológicas personalizadas, transformación digital, desarrollo de software a medida y ciberseguridad. Innovación para empresas que buscan crecer y destacarse en un mundo digital.",
  keywords: "Nexura Labs, transformación digital, desarrollo a medida, ciberseguridad, soluciones tecnológicas, innovación empresarial, tecnología para empresas",
  author: "Nexura Labs",
  url: "https://www.nexuralabs.com",
  image: "https://www.nexuralabs.com/og-image.jpg",
  ogDescription: "Soluciones tecnológicas personalizadas para empresas. Transformación digital, desarrollo de software y ciberseguridad para un crecimiento sostenible.",
  ogType: "website",
  ogUrl: "http://www.nexuralabs.agency",
  twitterCard: "summary_large_image",
  twitterTitle: "Nexura Labs | Tech Solutions that Grow with You",
  twitterDescription: "Nexura Labs ayuda a empresas con transformación digital, desarrollo de software a medida y ciberseguridad. Conecta, innova y crece con nosotros.",
  twitterImage: "https://www.nexuralabs.com/twitter-image.jpg",
  canonical: "http://www.nexuralabs.agency",
};

import React from 'react';
import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Cta from "@/components/cta";
import Calendar from "@/components/ui/calendar";

export default function Home() {
  return (
    <>
      <PageIllustration />
      
      {/* Hero Section */}
      <Hero 
        title="Tech Solutions that Grow with You"
        subtitle="Empowering your projects with tailored technology and optimized processes."
        description="At Nexura Labs, we provide comprehensive development and consulting services designed to help businesses scale and achieve their goals. With a commitment to quality and a client-first approach, we deliver solutions that grow alongside your needs."
      />

      {/* Services Section */}
      <Workflows
        title="Our Services: Tailored Solutions for Your Business"
        description="We provide comprehensive development and consulting services designed to help businesses scale and achieve their goals. With a commitment to quality and a client-first approach, we deliver solutions that grow alongside your needs."
        services={[
          {
            title: "Custom Software Development",
            description: "We create tailored technology solutions that seamlessly integrate with your business operations. From web applications to enterprise systems, our approach focuses on building scalable, high-quality platforms designed to support your growth and evolving needs."
          },
          {
            title: "Technology Architecture Consulting", 
            description: "We guide companies in designing and optimizing their technology infrastructure. Whether it's assessing your current setup or implementing a future-proof architecture, we ensure your technology aligns with your long-term vision, delivering robust and efficient solutions."
          },
          {
            title: "Team and Process Optimization",
            description: "Beyond software, we help businesses enhance workflows and team efficiency. Using proven agile methodologies and continuous integration practices, we streamline processes to reduce bottlenecks and accelerate delivery, ensuring that both technology and teams perform at their best."
          }
        ]}
      />

      {/* Experience Section */}
      <Features
        title="Experience that Makes a Difference"
        description="With over a decade in the industry, Nexura Labs has collaborated with global companies to develop and optimize technology projects. We bring expertise in system architecture, agile methodologies, and team management to deliver comprehensive solutions tailored to your needs."
      />

      {/* Testimonials Section */}
      {/*<Testimonials />*/}
      {/* Contact CTA Section */}
      <Cta
        tag="Connect with us"
        title="Do you have a project in mind or need to optimize your processes? Let's talk!"
        description="We'll be in touch soon to explore how Nexura Labs can help you achieve your goals."
      />

      <Calendar />
    </>
  );
}