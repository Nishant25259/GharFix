"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const WA_NUMBER = "919158524724"; // Replace with real number
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%20want%20to%20book%20a%20service`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      style={{
        background: "var(--cream)",
        borderBottom: "1px solid var(--stone-mid)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "0 24px",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <span
            className="display"
            style={{ fontSize: 24, fontWeight: 700, color: "var(--ink)" }}
          >
            Ghar<span style={{ color: "var(--saffron)" }}>Fix</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div
          style={{ display: "flex", gap: 32, alignItems: "center" }}
          className="hidden-mobile"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "var(--ink-soft)",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--saffron)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--ink-soft)")
              }
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa hidden-mobile"
          style={{ padding: "10px 20px", fontSize: 14 }}
        >
          <Phone size={16} />
          Book on WhatsApp
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--ink)",
            display: "none",
          }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "var(--cream)",
            borderTop: "1px solid var(--stone-mid)",
            padding: "16px 24px 24px",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                fontSize: 16,
                fontWeight: 500,
                color: "var(--ink-soft)",
                textDecoration: "none",
                borderBottom: "1px solid var(--stone-mid)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa"
            style={{ marginTop: 20, width: "100%", justifyContent: "center" }}
          >
            <Phone size={16} />
            Book on WhatsApp
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
