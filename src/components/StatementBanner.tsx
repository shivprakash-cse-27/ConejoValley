import React from "react";
import Image from "next/image";

export default function StatementBanner() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-[4vw]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
          {/* Left Photo (Cols 1 to 7) */}
          <div className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[620px] aspect-[16/10] sm:aspect-[16/10] photo-frame overflow-hidden bg-[#F6F4EE]">
              <Image
                src="/images/clone/sec7-banner.jpg"
                alt="Family of four standing on a beach, holding hands, facing the ocean at sunset."
                fill
                sizes="(max-width: 1024px) 100vw, 620px"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Heading Statement (Cols 8 to 12) */}
          <div className="lg:col-span-6 xl:col-span-5 text-left space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.5rem] font-light text-[#2B2B2B] leading-[1.2]">
              Honoring where you’ve been{" "}
              <span className="font-script text-[#86B3B3] text-[1.25em] font-light inline-block">
                &amp;
              </span>{" "}
              helping shape where you’re headed.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
