import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#F6F4EE] overflow-hidden pt-0 pb-12 sm:pb-16 lg:pb-24">
      <div className="fe-hero-grid w-full">
        {/* Eyebrow Announcement Block (Rows 2-4, Cols 12-20) */}
        <div className="hero-block-eyebrow flex items-end pb-2">
          <p className="text-[11px] sm:text-[12px] lg:text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#746B60] leading-relaxed">
            ONLINE &amp; IN-PERSON COUNSELING IN NEWBURY PARK &amp;
            <br className="hidden sm:inline" /> ACROSS CA
          </p>
        </div>

        {/* Heading and Subtitle Block (Rows 7-15, Cols 12-24) */}
        <div className="hero-block-heading flex flex-col justify-center text-left pt-2 sm:pt-0">
          <h1 className="font-serif text-[2.1rem] sm:text-[2.6rem] lg:text-[2.85rem] xl:text-[3.2rem] 2xl:text-[3.5rem] leading-[1.15] font-light text-[#2B2B2B] tracking-[-0.01em]">
            Rebuild your foundation on
            <br className="hidden lg:inline" /> solid ground and finally begin
            <br className="hidden lg:inline" /> to{" "}
            <span className="font-script text-[#86B3B3] text-[1.28em] font-normal lowercase inline-block ml-1">
              thrive
            </span>
            .
          </h1>

          <p className="mt-4 sm:mt-5 text-[#555555] font-light text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.6] max-w-[540px]">
            Specialized therapy for adults, couples, teens, and children to reflect,
            heal, and grow.
          </p>
        </div>

        {/* Action Button Block (Rows 15-17, Cols 12-24) */}
        <div className="hero-block-button flex items-start pt-2">
          <Link
            href="#contact"
            className="btn-primary text-xs sm:text-sm tracking-[0.14em] font-medium uppercase"
          >
            Book an Appointment
          </Link>
        </div>

        {/* Left Family Photo (Rows 2-17, Cols 1-10 — FLUSH TO LEFT EDGE 0px MARGIN) */}
        <div className="hero-block-photo-left">
          <div className="relative w-full h-full min-h-[380px] sm:min-h-[480px] lg:min-h-[580px] xl:min-h-[640px] 2xl:min-h-[700px] overflow-hidden bg-[#F6F4EE]">
            <Image
              src="/images/clone/hero-1.jpg"
              alt="Counseling in Newbury Park, CA"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1440px) 42vw, 640px"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Right Detail Photo (Rows 7-17, Cols 25-27 — FLUSH TO RIGHT EDGE 0px MARGIN) */}
        <div className="hero-block-photo-right">
          <div className="relative w-full h-full min-h-[200px] lg:min-h-0 overflow-hidden bg-[#F6F4EE]">
            <Image
              src="/images/clone/hero-2-ocean.jpg"
              alt="Conejo Valley Family Counseling Ocean Wave Detail"
              fill
              sizes="(max-width: 768px) 30vw, (max-width: 1440px) 15vw, 220px"
              className="object-cover object-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
