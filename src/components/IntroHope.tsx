import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function IntroHope() {
  return (
    <section id="about" className="bg-[#F6F4EE] py-20 sm:py-24 lg:py-32 xl:py-36">
      <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-[4vw]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">
          {/* Left Narrative Text (Cols 1 to 7) */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10 text-left">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.5rem] leading-[1.18] font-light text-[#2B2B2B] max-w-2xl">
              You’re holding onto hope that life can be better than it is right now.
            </h2>

            {/* Two side-by-side columns of body copy */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base sm:text-lg text-[#555555] font-light leading-relaxed">
              <p>
                At Conejo Valley Family Counseling we want to make that hope a reality.
                Whether you&apos;re an adult seeking personal growth, looking to work through
                your trauma, a couple working on your relationship, or a parent looking for
                support for your child, we provide a compassionate and safe space to help you
                navigate all of life’s ups and downs.
              </p>

              <p>
                First and foremost, we believe what you’re going through is real, valid, and
                worthy of support. Our team offers clients in the Newbury Park area and across
                CA an environment to discover a new life and a deeper sense of self in the
                midst of their struggles. As we tap into the power of connection and
                understanding, you can find your footing again and take a transformative path
                forward.
              </p>
            </div>
          </div>

          {/* Right Portrait Photo (Cols 8 to 12) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] xl:max-w-[500px] aspect-[4/5] photo-frame overflow-hidden bg-[#F6F4EE]">
              <Image
                src="/images/clone/sec2-hope.jpg"
                alt="Sandy beach with gentle ocean waves and a cloudy sky."
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1440px) 460px, 500px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
