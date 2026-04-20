"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "@/components/ui/footer";
import SiteHeader from "@/components/site-header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 450,
      easing: "ease-out-sine",
      offset: 24,
    });
  });

  return (
    <>
      <SiteHeader />
      <main className="relative flex grow flex-col">{children}</main>
      <Footer />
    </>
  );
}
