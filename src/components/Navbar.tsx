"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="relative w-full z-50 bg-[#F6F4EE]">

      {/* =====================================================
          DESKTOP HEADER
      ===================================================== */}
      <div
        className="
          hidden
          lg:flex
          w-full
          min-h-[128.73px]
          py-[26.88px]
          px-6
          sm:px-12
          lg:px-[4vw]
          items-center
          justify-between
        "
      >

        {/* ===================================================
            LOGO
        =================================================== */}
        <Link
          href="/"
          className="relative flex items-center shrink-0"
        >
          <Image
            src="/images/clone/logo.png"
            alt="Conejo Valley Family Counseling"
            width={257}
            height={75}
            priority
            className="w-[257px] h-[75px] object-contain"
          />
        </Link>


        {/* ===================================================
            DESKTOP NAVIGATION
        =================================================== */}
        <div className="flex items-center">

          <nav
            className="
              flex
              items-center
              space-x-7
              xl:space-x-8
              text-[13px]
              xl:text-[14px]
              uppercase
              tracking-[0.14em]
              font-normal
              text-[#2B2B2B]
            "
          >

            {/* =================================================
                ABOUT
            ================================================= */}
            <div className="relative">
              <Link
                href="#about"
                className="
                  block
                  py-1
                  text-[#2B2B2B]
                  hover:opacity-60
                  transition-opacity
                  duration-200
                "
              >
                About
              </Link>
            </div>


            {/* =================================================
                OUR TEAM
            ================================================= */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("team")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className="
                  block
                  py-1
                  text-[#2B2B2B]
                  hover:opacity-60
                  transition-opacity
                  duration-200
                  uppercase
                  tracking-[0.14em]
                  focus:outline-none
                  cursor-pointer
                "
              >
                Our Team
              </button>

              {activeDropdown === "team" && (
                <div
                  className="
                    absolute
                    top-full
                    left-1/2
                    -translate-x-1/2
                    pt-3
                    w-[260px]
                    z-50
                  "
                >
                  <div className="flex flex-col items-center gap-[11px]">

                    {[
                      "Jennifer Anderson, LMFT",
                      "Candace Bletscher, AMFT",
                      "Heather Williams-Baumgart, AMFT",
                      "Michaela Gorospe, AMFT",
                      "Samantha Johnson, AMFT",
                      "Autumn Bodily, AMFT",
                      "Andrea Watkins, APCC",
                      "Rosa Gomez, AMFT",
                      "Chad Flores, AMFT",
                    ].map((member, i) => (
                      <Link
                        key={i}
                        href="#team"
                        className="
                          text-[11px]
                          leading-[15px]
                          uppercase
                          tracking-[0.08em]
                          text-[#2B2B2B]
                          whitespace-nowrap
                          hover:opacity-60
                          transition-opacity
                          duration-200
                        "
                      >
                        {member}
                      </Link>
                    ))}

                  </div>
                </div>
              )}
            </div>


            {/* =================================================
                SPECIALTIES
            ================================================= */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("specialties")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className="
                  block
                  py-1
                  text-[#2B2B2B]
                  hover:opacity-60
                  transition-opacity
                  duration-200
                  uppercase
                  tracking-[0.14em]
                  focus:outline-none
                  cursor-pointer
                "
              >
                Specialties
              </button>

              {activeDropdown === "specialties" && (
                <div
                  className="
                    absolute
                    top-full
                    left-1/2
                    -translate-x-1/2
                    pt-3
                    w-[220px]
                    z-50
                  "
                >
                  <div className="flex flex-col items-center gap-[11px]">

                    {[
                      "Dissociation",
                      "Trauma",
                      "Special Needs Parenting",
                      "Couples",
                      "Children & Teens",
                      "Anxiety & Depression",
                      "Adoption",
                    ].map((item, i) => (
                      <Link
                        key={i}
                        href="#specialties"
                        className="
                          text-[11px]
                          leading-[15px]
                          uppercase
                          tracking-[0.08em]
                          text-[#2B2B2B]
                          whitespace-nowrap
                          hover:opacity-60
                          transition-opacity
                          duration-200
                        "
                      >
                        {item}
                      </Link>
                    ))}

                  </div>
                </div>
              )}
            </div>


            {/* =================================================
                METHODS
            ================================================= */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("methods")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className="
                  block
                  py-1
                  text-[#2B2B2B]
                  hover:opacity-60
                  transition-opacity
                  duration-200
                  uppercase
                  tracking-[0.14em]
                  focus:outline-none
                  cursor-pointer
                "
              >
                Methods
              </button>

              {activeDropdown === "methods" && (
                <div
                  className="
                    absolute
                    top-full
                    left-1/2
                    -translate-x-1/2
                    pt-3
                    w-[200px]
                    z-50
                  "
                >
                  <div className="flex flex-col items-center gap-[11px]">

                    {[
                      "EMDR",
                      "Brainspotting",
                      "Somatic Therapy",
                      "Parts Work Therapy",
                    ].map((item, i) => (
                      <Link
                        key={i}
                        href="#methods"
                        className="
                          text-[11px]
                          leading-[15px]
                          uppercase
                          tracking-[0.08em]
                          text-[#2B2B2B]
                          whitespace-nowrap
                          hover:opacity-60
                          transition-opacity
                          duration-200
                        "
                      >
                        {item}
                      </Link>
                    ))}

                  </div>
                </div>
              )}
            </div>


            {/* =================================================
                FAQS
            ================================================= */}
            <div className="relative">
              <Link
                href="#faqs"
                className="
                  block
                  py-1
                  text-[#2B2B2B]
                  hover:opacity-60
                  transition-opacity
                  duration-200
                "
              >
                FAQs
              </Link>
            </div>

          </nav>


          {/* =================================================
              CONTACT BUTTON
          ================================================= */}
          <div className="ml-12 shrink-0">
            <Link
              href="#contact"
              className="
                inline-flex
                items-center
                justify-center

                w-[104.89px]
                h-[47px]

                px-[19.5px]
                py-[15px]

                border-[1px]
                border-solid
                border-[#2B2B2B]

                rounded-full

                text-[11.544px]
                leading-[17px]
                font-normal

                text-[#2B2B2B]
                uppercase
                tracking-[0.14em]

                hover:bg-[#2B2B2B]
                hover:text-white
                hover:scale-[1.03]

                transition-all
                duration-300
                ease-out
              "
            >
              Contact
            </Link>
          </div>

        </div>
      </div>


      {/* =====================================================
          MOBILE HEADER
      ===================================================== */}
      <div
        className="
          lg:hidden
          w-full
          h-[96px]
          px-6
          sm:px-12
          flex
          items-center
          justify-between
        "
      >

        {/* Mobile Logo */}
        <Link
          href="/"
          className="relative flex items-center shrink-0"
        >
          <Image
            src="/images/clone/logo.png"
            alt="Conejo Valley Family Counseling"
            width={257}
            height={75}
            priority
            className="
              w-[200px]
              sm:w-[230px]
              h-auto
              object-contain
            "
          />
        </Link>


        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="
            p-2
            text-[#2B2B2B]
            focus:outline-none
          "
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </button>

      </div>


      {/* =====================================================
          MOBILE DRAWER
      ===================================================== */}
      {mobileMenuOpen && (
        <div
          className="
            lg:hidden
            bg-white
            border-t
            border-[#EBE6DD]
            px-6
            py-8
            space-y-4
            max-h-[85vh]
            overflow-y-auto
          "
        >

          {/* =================================================
              ABOUT
          ================================================= */}
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="
              block
              text-base
              font-medium
              text-[#2B2B2B]
              py-2.5
              border-b
              border-gray-100
            "
          >
            About
          </Link>


          {/* =================================================
              MOBILE OUR TEAM
          ================================================= */}
          <div>
            <button
              type="button"
              onClick={() => toggleDropdown("mob-team")}
              className="
                w-full
                flex
                items-center
                justify-between
                text-base
                font-medium
                text-[#2B2B2B]
                py-2.5
                border-b
                border-gray-100
              "
            >
              <span>Our Team</span>

              <ChevronDown
                className={`
                  w-4
                  h-4
                  transition-transform
                  duration-200
                  ${
                    activeDropdown === "mob-team"
                      ? "rotate-180"
                      : ""
                  }
                `}
              />
            </button>

            {activeDropdown === "mob-team" && (
              <div
                className="
                  pl-4
                  py-2
                  space-y-2
                  bg-[#F7F5F0]
                  rounded-sm
                  mt-1
                "
              >
                {[
                  "Jennifer Anderson, LMFT",
                  "Candace Bletscher, AMFT",
                  "Heather Williams-Baumgart, AMFT",
                  "Michaela Gorospe, AMFT",
                  "Samantha Johnson, AMFT",
                  "Autumn Bodily, AMFT",
                  "Andrea Watkins, APCC",
                  "Rosa Gomez, AMFT",
                  "Chad Flores, AMFT",
                ].map((member, i) => (
                  <Link
                    key={i}
                    href="#team"
                    onClick={() => setMobileMenuOpen(false)}
                    className="
                      block
                      text-xs
                      text-[#555]
                      py-1.5
                    "
                  >
                    {member}
                  </Link>
                ))}
              </div>
            )}
          </div>


          {/* =================================================
              MOBILE SPECIALTIES
          ================================================= */}
          <div>
            <button
              type="button"
              onClick={() => toggleDropdown("mob-specialties")}
              className="
                w-full
                flex
                items-center
                justify-between
                text-base
                font-medium
                text-[#2B2B2B]
                py-2.5
                border-b
                border-gray-100
              "
            >
              <span>Specialties</span>

              <ChevronDown
                className={`
                  w-4
                  h-4
                  transition-transform
                  duration-200
                  ${
                    activeDropdown === "mob-specialties"
                      ? "rotate-180"
                      : ""
                  }
                `}
              />
            </button>

            {activeDropdown === "mob-specialties" && (
              <div
                className="
                  pl-4
                  py-2
                  space-y-2
                  bg-[#F7F5F0]
                  rounded-sm
                  mt-1
                "
              >
                {[
                  "Dissociation",
                  "Trauma",
                  "Special Needs Parenting",
                  "Couples",
                  "Children & Teens",
                  "Anxiety & Depression",
                  "Adoption",
                ].map((item, i) => (
                  <Link
                    key={i}
                    href="#specialties"
                    onClick={() => setMobileMenuOpen(false)}
                    className="
                      block
                      text-xs
                      text-[#555]
                      py-1.5
                    "
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>


          {/* =================================================
              MOBILE METHODS
          ================================================= */}
          <div>
            <button
              type="button"
              onClick={() => toggleDropdown("mob-methods")}
              className="
                w-full
                flex
                items-center
                justify-between
                text-base
                font-medium
                text-[#2B2B2B]
                py-2.5
                border-b
                border-gray-100
              "
            >
              <span>Methods</span>

              <ChevronDown
                className={`
                  w-4
                  h-4
                  transition-transform
                  duration-200
                  ${
                    activeDropdown === "mob-methods"
                      ? "rotate-180"
                      : ""
                  }
                `}
              />
            </button>

            {activeDropdown === "mob-methods" && (
              <div
                className="
                  pl-4
                  py-2
                  space-y-2
                  bg-[#F7F5F0]
                  rounded-sm
                  mt-1
                "
              >
                {[
                  "EMDR",
                  "Brainspotting",
                  "Somatic Therapy",
                  "Parts Work Therapy",
                ].map((method, i) => (
                  <Link
                    key={i}
                    href="#methods"
                    onClick={() => setMobileMenuOpen(false)}
                    className="
                      block
                      text-xs
                      text-[#555]
                      py-1.5
                    "
                  >
                    {method}
                  </Link>
                ))}
              </div>
            )}
          </div>


          {/* =================================================
              FAQS
          ================================================= */}
          <Link
            href="#faqs"
            onClick={() => setMobileMenuOpen(false)}
            className="
              block
              text-base
              font-medium
              text-[#2B2B2B]
              py-2.5
              border-b
              border-gray-100
            "
          >
            FAQs
          </Link>


          {/* =================================================
              MOBILE CONTACT
          ================================================= */}
          <div className="pt-4">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="
                inline-flex
                items-center
                justify-center

                w-full
                h-[47px]

                px-[19.5px]
                py-[15px]

                border-[1px]
                border-solid
                border-[#2B2B2B]

                rounded-full

                text-[11.544px]
                leading-[17px]
                font-normal

                text-[#2B2B2B]
                uppercase
                tracking-[0.14em]

                hover:bg-[#2B2B2B]
                hover:text-white
                hover:scale-[1.01]

                transition-all
                duration-300
                ease-out
              "
            >
              Contact
            </Link>
          </div>

        </div>
      )}

    </header>
  );
}