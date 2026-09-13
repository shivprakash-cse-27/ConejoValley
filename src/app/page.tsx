import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroHope from "@/components/IntroHope";
import WhoWeHelp from "@/components/WhoWeHelp";
import QuoteBanner from "@/components/QuoteBanner";
import Expertise from "@/components/Expertise";
import HowWeWork from "@/components/HowWeWork";
import StatementBanner from "@/components/StatementBanner";
import Specialties from "@/components/Specialties";
import AppointmentCTA from "@/components/AppointmentCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#2B2B2B]">
      {/* 1. Header Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Hope / Intro */}
        <IntroHope />

        {/* Section 3: Who We Help */}
        <WhoWeHelp />

        {/* Section 4: Quote Callout Banner */}
        <QuoteBanner />

        {/* Section 5: Areas of Expertise */}
        <Expertise />

        {/* Section 6: How We Work */}
        <HowWeWork />

        {/* Section 7: Full-Width Photographic Statement Banner */}
        <StatementBanner />

        {/* Section 8: Our Specialties Include */}
        <Specialties />

        {/* Section 9: Schedule an Appointment / Find a Therapist */}
        <AppointmentCTA />
      </main>

      {/* Sections 10 & 11: Multi-Column Practice Footer & Legal Strip */}
      <Footer />
    </div>
  );
}

