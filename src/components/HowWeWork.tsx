import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HowWeWork() {
  return (
    <section className="bg-[#E3D8CA] py-20 sm:py-24 lg:py-32 xl:py-36">
      <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-[4vw]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">
          {/* Left Content (Cols 1 to 7) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            <p className="text-xs sm:text-[0.8125rem] xl:text-[0.875rem] font-medium tracking-[0.14em] text-[#2B2B2B]/70 uppercase">
              HOW WE WORK
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.5rem] leading-[1.18] font-light text-[#2B2B2B]">
              We’re here to make a difference.
            </h2>

            {/* Two Side-by-Side Paragraph Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base sm:text-lg text-[#2B2B2B]/85 font-light leading-relaxed">
              <p>
                The clients we work with are balancing so many things at once, it’s
                often hard for them to put themselves first. Here, your needs are always
                top priority. Our team takes the time to deeply listen to our clients in
                order to truly understand their story and their struggles. We recognize
                that no two people are the same and that personalized therapy means an
                intentional, tailored approach. (You won’t find anything “one-size-fits-all”
                here.) If you’re ready to do the work, we’re ready to help.
              </p>

              <p>
                Sometimes we may gently challenge you to look at things differently and
                other times we may explore your emotions, all while encouraging you to
                practice what you’ve learned in your daily life. We take what we do
                seriously because we know how important it is for you to heal from what’s
                hurting you, discover a fulfilling life, and build meaningful relationships.
                Our goal is to walk alongside you in this journey, offering support and
                guidance as you uncover your strengths and embrace what the future can hold
                for you.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="#about"
                className="btn-primary text-xs sm:text-sm tracking-[0.14em] font-medium"
              >
                Learn more about us
              </Link>
            </div>
          </div>

          {/* Right Photo (Cols 8 to 12) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] xl:max-w-[500px] aspect-[4/5] photo-frame overflow-hidden bg-[#E3D8CA]">
              <Image
                src="/images/clone/sec6-work.jpg"
                alt="A woman and a child in white dresses dancing on a sandy beach with tall grasses and a distant building in the background during sunset."
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
