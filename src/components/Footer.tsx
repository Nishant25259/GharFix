import Link from "next/link";
import { Phone, Share2, MapPin, MessageCircle } from "lucide-react";

const WA_NUMBER = "919158524724";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%20want%20to%20book%20a%20service`;

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--ink)",
        color: "rgba(255,255,255,0.7)",
        padding: "56px 24px 32px",
      }}
    >
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 48,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div>
            <span
              className="display"
              style={{ fontSize: 28, fontWeight: 700, color: "white" }}
            >
              Ghar<span style={{ color: "var(--saffron)" }}>Fix</span>
            </span>
            <p style={{ fontSize: 14, lineHeight: 1.7, marginTop: 12 }}>
              Trusted home services for Vadodara and nearby Gujarat cities.
              Verified professionals, transparent pricing.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 4,
                  background: "rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  transition: "background 0.2s",
                }}
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 4,
                  background: "rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  transition: "background 0.2s",
                }}
              >
                <Share2 size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--saffron)",
                marginBottom: 16,
              }}
            >
              Services
            </p>
            {["AC Repair & Service", "Electrician Services", "Deep Home Cleaning"].map((s) => (
              <Link
                key={s}
                href="/services"
                style={{
                  display: "block",
                  fontSize: 14,
                  marginBottom: 10,
                  color: "rgba(255,255,255,0.65)",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
              >
                {s}
              </Link>
            ))}
          </div>

          {/* Quick links */}
          <div>
            <p
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--saffron)",
                marginBottom: 16,
              }}
            >
              Company
            </p>
            {[
              { label: "About us", href: "/about" },
              { label: "How it works", href: "/how-it-works" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  display: "block",
                  fontSize: 14,
                  marginBottom: 10,
                  color: "rgba(255,255,255,0.65)",
                  textDecoration: "none",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--saffron)",
                marginBottom: 16,
              }}
            >
              Contact
            </p>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 12 }}>
              <MapPin size={16} style={{ color: "var(--saffron)", flexShrink: 0, marginTop: 2 }} />
              <span style={{ fontSize: 14, lineHeight: 1.6 }}>
                Vaghodia, Vadodara<br />Gujarat, India
              </span>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <Phone size={16} style={{ color: "var(--saffron)", flexShrink: 0 }} />
              <a
                href={`tel:+${WA_NUMBER}`}
                style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", textDecoration: "none" }}
              >
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 13 }}>© 2024 GharFix. All rights reserved.</p>
          <p style={{ fontSize: 13 }}>Made with ❤ in Vadodara, Gujarat</p>
        </div>
      </div>
    </footer>
  );
}
