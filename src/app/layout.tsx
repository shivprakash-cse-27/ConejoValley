import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Counseling in Newbury Park, CA | Conejo Valley Family Counseling",
  description:
    "Counseling for adults, couples, and children in Newbury & across CA. EMDR, trauma & dissociation, special needs parenting, anxiety, & more. In-person & online.",
  icons: {
    icon: "/images/clone/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/fsc1wsd.css" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#2B2B2B] antialiased selection:bg-[#E3D8CC] selection:text-[#2B2B2B]">
        {children}
      </body>
    </html>
  );
}

