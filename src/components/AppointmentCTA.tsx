import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AppointmentCTA() {
  return (
    <section id="contact" className="bg-[#F6F4EE] py-20 sm:py-24 lg:py-32 xl:py-36 overflow-hidden">
      <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-[4vw]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* Left Vertical Photo (Cols 1 to 3 on desktop) */}
          <div className="hidden lg:flex lg:col-span-3 justify-start">
            <div className="relative w-full max-w-[280px] xl:max-w-[320px] aspect-[3/4] xl:aspect-[2/3] photo-frame overflow-hidden bg-[#F6F4EE]">
              <Image
                src="/images/clone/sec9-therapist-1.jpg"
                alt="A person picking up seashells on a sandy beach."
                fill
                sizes="(max-width: 1440px) 280px, 320px"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Center Text Content (Cols 4 to 8 on desktop) */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left max-w-xl mx-auto lg:mx-0">
            <p className="text-xs sm:text-[0.8125rem] xl:text-[0.875rem] font-medium tracking-[0.14em] text-[#666666] uppercase">
              SCHEDULE AN APPOINTMENT
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.5rem] leading-[1.18] font-light text-[#2B2B2B]">
              Find a therapist who is the right fit for{" "}
              <span className="font-script text-[#86B3B3] text-[1.25em] font-light lowercase inline-block">
                you
              </span>
              .
            </h2>

            <div className="space-y-4 sm:space-y-5 text-base sm:text-lg text-[#555555] font-light leading-relaxed">
              <p>
                Coming to therapy is a courageous decision, and connecting with the
                right kind of therapist makes all the difference. We understand that
                your journey is personal, and we&apos;re here to support you with care
                and understanding every step of the way.
              </p>
              <p>
                Each member of our team brings dedicated expertise and a commitment
                to support you in your struggles. We want you to feel prioritized,
                understood, and empowered.
              </p>
              <p className="font-normal text-[#2B2B2B]">
                Click the button below to schedule an appointment.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="#contact"
                className="btn-secondary text-xs sm:text-sm tracking-[0.14em] px-9 py-4 font-medium"
              >
                Book now
              </Link>
            </div>
          </div>

          {/* Right Large Photo (Cols 9 to 12 on desktop) */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] xl:max-w-[420px] aspect-[4/5] photo-frame overflow-hidden bg-[#F6F4EE]">
              <Image
                src="/images/clone/sec9-therapist-2.jpg"
                alt="A person in a striped dress pointing at shells on the sandy beach, with a child in blue shorts standing barefoot nearby."
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1440px) 380px, 420px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
