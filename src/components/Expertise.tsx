import React from "react";
import Link from "next/link";

export default function Expertise() {
  const col1 = [
    { title: "Dissociation", href: "#specialties" },
    { title: "Trauma", href: "#specialties" },
    { title: "Family conflict" },
    { title: "Special needs parenting", href: "#specialties" },
    { title: "Depression" },
    { title: "marriage", href: "#who-we-help" },
  ];

  const col2 = [
    { title: "anxiety" },
    { title: "relationships" },
    { title: "children", href: "#who-we-help" },
    { title: "teens", href: "#who-we-help" },
    { title: "intimacy & connection", href: "#who-we-help" },
    { title: "…and more." },
  ];

  return (
    <section className="bg-white py-24 sm:py-28 lg:py-36 border-b border-[#EAE6DF]">
      <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-[4vw]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-start">
          {/* Left Title */}
          <div className="lg:col-span-5 sticky top-28">
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.5rem] font-light text-[#2B2B2B] leading-tight">
              Our areas of{" "}
              <span className="font-script text-[#86B3B3] text-[1.25em] font-light lowercase inline-block">
                expertise
              </span>
            </h3>
          </div>

          {/* Right Horizontal Rule List Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-12 xl:gap-x-16">
            {/* Column 1 */}
            <div>
              {col1.map((item, idx) => (
                <div key={idx} className="group">
                  <div className="py-4 xl:py-5">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-sm xl:text-[0.9375rem] text-[#2B2B2B] uppercase tracking-[0.14em] font-medium transition-colors hover:text-[#86B3B3] block"
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <span className="text-sm xl:text-[0.9375rem] text-[#2B2B2B] uppercase tracking-[0.14em] font-medium block">
                        {item.title}
                      </span>
                    )}
                  </div>
                  <hr className="border-t border-[#EAE6DF]" />
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div>
              {col2.map((item, idx) => (
                <div key={idx} className="group">
                  <div className="py-4 xl:py-5">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-sm xl:text-[0.9375rem] text-[#2B2B2B] uppercase tracking-[0.14em] font-medium transition-colors hover:text-[#86B3B3] block"
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <span className="text-sm xl:text-[0.9375rem] text-[#2B2B2B] uppercase tracking-[0.14em] font-medium block">
                        {item.title}
                      </span>
                    )}
                  </div>
                  <hr className="border-t border-[#EAE6DF]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
