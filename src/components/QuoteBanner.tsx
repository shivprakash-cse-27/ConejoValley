import React from "react";
import Image from "next/image";

export default function QuoteBanner() {
  return (
    <section className="relative min-h-[380px] sm:min-h-[440px] lg:min-h-[500px] w-full overflow-hidden flex items-center justify-center py-20 sm:py-28 lg:py-32">
      {/* Background Image: Two children running on the beach */}
      <Image
        src="/images/clone/sec4-leaf.png"
        alt="Children running on beach"
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark Overlay for Text Legibility */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Quote Heading */}
      <div className="relative z-10 max-w-4xl xl:max-w-5xl mx-auto px-6 sm:px-10 text-center">
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.5rem] xl:text-[2.85rem] 2xl:text-[3.25rem] leading-[1.35] font-light !text-white tracking-wide drop-shadow-md">
          You deserve a place where your story is heard, valued, and understood. Nothing will be too heavy for us to carry together.
        </h2>
      </div>
    </section>
  );
}
