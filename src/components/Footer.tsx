import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const teamMembers = [
    "Jennifer Anderson",
    "Heather Williams-Baumgart",
    "Autumn Bodily",
    "Michaela Gorospe",
    "Candace Bletscher",
    "Samantha Johnson",
    "Andrea Watkins",
    "Rosa Gomez",
    "Chad Flores",
  ];

  return (
    <footer className="bg-white border-t border-[#EAE6DF]">
      {/* Section 10: Multi-Column Practice Directory */}
      <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-[4vw] py-16 sm:py-20 xl:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16">
          {/* Column 1: Logo and Overview */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/clone/logo.png"
                alt="Conejo Valley Family Counseling"
                width={260}
                height={75}
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-sm xl:text-base text-[#555555] font-light leading-relaxed max-w-sm">
              We want to make getting started simple. You’re welcome to come into our
              office in Newbury Park or schedule virtual appointments from anywhere
              in CA—whatever works best for you.
            </p>
          </div>

          {/* Column 2: Navigate */}
          <div className="lg:col-span-2 space-y-3.5">
            <h5 className="font-serif text-lg xl:text-xl font-normal text-[#2B2B2B]">
              Navigate
            </h5>
            <ul className="space-y-2 text-sm xl:text-base text-[#555555] font-light">
              <li>
                <Link href="/" className="hover:text-black transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-black transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="hover:text-black transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-black transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="lg:col-span-3 space-y-3.5">
            <h5 className="font-serif text-lg xl:text-xl font-normal text-[#2B2B2B]">
              Contact
            </h5>
            <div className="space-y-2 text-sm xl:text-base text-[#555555] font-light leading-relaxed">
              <p>
                925 Broadbeck Dr Suites 200 and 225
                <br />
                Newbury Park, CA 91320
              </p>
              <p>
                <a
                  href="mailto:info@conejovalleycounseling.com"
                  className="hover:text-black transition-colors underline decoration-dotted"
                >
                  info@conejovalleycounseling.com
                </a>
              </p>
              <p>
                <a href="tel:8052423120" className="hover:text-black transition-colors font-normal">
                  805.242.3120
                </a>
              </p>
              <p className="pt-2 text-xs xl:text-sm text-[#777777]">
                Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, &amp;
                Simi Valley
              </p>
            </div>
          </div>

          {/* Column 4: Our Team */}
          <div className="lg:col-span-3 space-y-3.5">
            <h5 className="font-serif text-lg xl:text-xl font-normal text-[#2B2B2B]">
              Our Team
            </h5>
            <ul className="space-y-1.5 text-xs xl:text-sm text-[#555555] font-light">
              {teamMembers.map((member, i) => (
                <li key={i}>
                  <Link href="#team" className="hover:text-black transition-colors">
                    {member}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Section 11: Dark Legal Disclaimer Strip */}
      <div className="bg-[#1E2220] text-[#F7F5F0]/80 py-6 px-6 sm:px-10 lg:px-[4vw] border-t border-white/10">
        <div className="w-full max-w-[1680px] mx-auto flex flex-col sm:flex-row items-center justify-between text-xs xl:text-sm font-light gap-3 text-center sm:text-left">
          <p className="space-x-2">
            <Link href="#terms" className="hover:text-white transition-colors">Terms</Link>
            <span>|</span>
            <Link href="#privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="#disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            <span>|</span>
            <span>Website by <a href="https://walkerstrategyco.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline underline-offset-2">Walker Strategy Co.</a></span>
          </p>
          <p className="text-[#F7F5F0]/60 text-[0.75rem] xl:text-xs">
            © {new Date().getFullYear()} Conejo Valley Family Counseling. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
