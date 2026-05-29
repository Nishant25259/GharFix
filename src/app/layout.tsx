import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WABookingWidget from "@/components/WABookingWidget";

export const metadata: Metadata = {
  title: "GharFix — Trusted Home Services in Vadodara",
  description:
    "Book verified AC repair, electrician, and deep cleaning professionals in Vadodara and Vaghodia. Fast, transparent, reliable.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WABookingWidget />
      </body>
    </html>
  );
}
