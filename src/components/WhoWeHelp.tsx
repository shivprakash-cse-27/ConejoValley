import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function WhoWeHelp() {
  const cards = [
    {
      title: "Adults",
      image: "/images/clone/help-adults.jpg",
      alt: "Two people sitting on a log at the beach, facing a lake with mountains in the background.",
      description:
        "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
    },
    {
      title: "Couples",
      image: "/images/clone/help-couples.jpg",
      alt: "A couple embracing on the beach, with both wearing casual summer clothing and smiling at each other. The ocean is in the background.",
      href: "#who-we-help",
      description:
        "Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
    },
    {
      title: "Children & Teens",
      image: "/images/clone/help-children.jpg",
      alt: "A boy carrying a girl on a beach with waves in the background.",
      href: "#who-we-help",
      description:
        "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32 xl:py-36">
      <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-[4vw] text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.5rem] font-light text-[#2B2B2B] mb-16 sm:mb-20 xl:mb-24">
          Who we{" "}
          <span className="font-script text-[#86B3B3] text-[1.25em] font-light lowercase inline-block">
            help
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-10 lg:gap-12 xl:gap-16 text-center max-w-6xl xl:max-w-7xl mx-auto">
          {cards.map((card, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] xl:max-w-[420px] aspect-[4/5] photo-frame overflow-hidden bg-[#F6F4EE] mb-6 xl:mb-8">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1440px) 380px, 420px"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>

              <h4 className="font-serif text-2xl sm:text-3xl xl:text-[2rem] font-light text-[#2B2B2B] mb-3 xl:mb-4">
                {card.href ? (
                  <Link href={card.href} className="hover:text-[#86B3B3] transition-colors">
                    {card.title}
                  </Link>
                ) : (
                  card.title
                )}
              </h4>

              <p className="text-sm sm:text-base xl:text-lg text-[#555555] font-light leading-relaxed max-w-xs sm:max-w-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
