import React from "react";
import Link from "next/link";

export default function Specialties() {
  const items = [
    {
      title: "Trauma",
      description:
        "We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.",
    },
    {
      title: "Dissociation",
      description:
        "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
    },
    {
      title: "EMDR",
      description:
        "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
    },
    {
      title: "Special Needs Parenting",
      description:
        "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
    },
  ];

  return (
    <section id="specialties" className="bg-white py-20 sm:py-24 lg:py-32 xl:py-36">
      <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-[4vw]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
          {/* Left Heading (Cols 1 to 4) */}
          <div className="lg:col-span-4 sticky top-28">
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.5rem] font-light text-[#2B2B2B] leading-tight">
              Our{" "}
              <span className="font-script text-[#86B3B3] text-[1.25em] font-light lowercase inline-block">
                specialties
              </span>{" "}
              include…
            </h3>
          </div>

          {/* Right 2x2 Cards Grid (Cols 5 to 12) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 xl:gap-12">
            {/* Card 1: Trauma */}
            <div className="flex flex-col justify-between p-6 sm:p-8 bg-[#FBF9F5] border border-[#EBE6DD] rounded-none">
              <div className="space-y-4 mb-8">
                <h4 className="font-serif text-2xl xl:text-[1.75rem] font-light text-[#2B2B2B]">
                  Trauma
                </h4>
                <p className="text-sm sm:text-base text-[#555555] font-light leading-relaxed">
                  We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.
                </p>
              </div>
              <div>
                <Link
                  href="#contact"
                  className="btn-primary text-xs tracking-[0.12em] font-medium"
                >
                  Learn more
                </Link>
              </div>
            </div>

            {/* Card 2: EMDR */}
            <div className="flex flex-col justify-between p-6 sm:p-8 bg-[#FBF9F5] border border-[#EBE6DD] rounded-none">
              <div className="space-y-4 mb-8">
                <h4 className="font-serif text-2xl xl:text-[1.75rem] font-light text-[#2B2B2B]">
                  EMDR
                </h4>
                <p className="text-sm sm:text-base text-[#555555] font-light leading-relaxed">
                  Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.
                </p>
              </div>
              <div>
                <Link
                  href="#contact"
                  className="btn-primary text-xs tracking-[0.12em] font-medium"
                >
                  Learn more
                </Link>
              </div>
            </div>

            {/* Card 3: Dissociation */}
            <div className="flex flex-col justify-between p-6 sm:p-8 bg-[#FBF9F5] border border-[#EBE6DD] rounded-none">
              <div className="space-y-4 mb-8">
                <h4 className="font-serif text-2xl xl:text-[1.75rem] font-light text-[#2B2B2B]">
                  Dissociation
                </h4>
                <p className="text-sm sm:text-base text-[#555555] font-light leading-relaxed">
                  The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.
                </p>
              </div>
              <div>
                <Link
                  href="#contact"
                  className="btn-primary text-xs tracking-[0.12em] font-medium"
                >
                  Learn more
                </Link>
              </div>
            </div>

            {/* Card 4: Special Needs Parenting */}
            <div className="flex flex-col justify-between p-6 sm:p-8 bg-[#FBF9F5] border border-[#EBE6DD] rounded-none">
              <div className="space-y-4 mb-8">
                <h4 className="font-serif text-2xl xl:text-[1.75rem] font-light text-[#2B2B2B]">
                  Special Needs Parenting
                </h4>
                <p className="text-sm sm:text-base text-[#555555] font-light leading-relaxed">
                  Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.
                </p>
              </div>
              <div>
                <Link
                  href="#contact"
                  className="btn-primary text-xs tracking-[0.12em] font-medium"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
