"use client";
import { Phone, MapPin, Clock, Share2, MessageCircle, Mail } from "lucide-react";

const WA_NUMBER = "919158524724";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp (Fastest)",
    detail: "+91 91585 24724",
    note: "Reply within 10 minutes",
    link: `https://wa.me/${WA_NUMBER}?text=Hi%20GharFix!%20I%20have%20a%20question.`,
    color: "var(--wa-green)",
  },
  {
    icon: Phone,
    title: "Call us",
    detail: "+91 98765 43210",
    note: "Mon–Sun, 8am – 8pm",
    link: `tel:+${WA_NUMBER}`,
    color: "var(--saffron)",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "hello@gharfix.in",
    note: "Reply within 24 hours",
    link: "mailto:hello@gharfix.in",
    color: "#185FA5",
  },
  {
    icon: Share2,
    title: "Instagram",
    detail: "@gharfix.in",
    note: "For updates & tips",
    link: "https://instagram.com/gharfix.in",
    color: "#C13584",
  },
];

export default function ContactPage() {
  const handleWA = (type: string) => {
    const msg = encodeURIComponent(`Hi GharFix! I need help with: *${type}*`);
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--stone)", padding: "64px 24px 56px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <span className="section-tag">We're here to help</span>
          <h1 className="display" style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, margin: "0 0 16px" }}>
            Get in touch
          </h1>
          <p style={{ fontSize: 17, color: "var(--ink-soft)", maxWidth: 480, lineHeight: 1.7, margin: 0 }}>
            Questions, bookings, feedback, or just want to say hi — we're always on WhatsApp.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section style={{ padding: "56px 24px", background: "var(--cream)" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginBottom: 48 }}>
            {contactMethods.map((m) => (
              <a
                key={m.title}
                href={m.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "white",
                  border: "1px solid var(--stone-mid)",
                  borderRadius: 8,
                  padding: "24px 20px",
                  textDecoration: "none",
                  transition: "box-shadow 0.2s, transform 0.2s",
                  display: "block",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(0,0,0,0.09)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.transform = "none";
                }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 8, background: `${m.color}18`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <m.icon size={22} style={{ color: m.color }} />
                </div>
                <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--stone-dark)", margin: "0 0 6px" }}>{m.title}</p>
                <p style={{ fontSize: 16, fontWeight: 600, color: "var(--ink)", margin: "0 0 4px" }}>{m.detail}</p>
                <p style={{ fontSize: 13, color: "var(--stone-dark)", margin: 0 }}>{m.note}</p>
              </a>
            ))}
          </div>

          {/* Quick booking shortcuts */}
          <div style={{ background: "white", border: "1px solid var(--stone-mid)", borderRadius: 8, padding: "28px 28px 24px" }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 6px" }}>Quick book via WhatsApp</h3>
            <p style={{ fontSize: 14, color: "var(--ink-soft)", margin: "0 0 20px" }}>
              Tap a service below and we'll open a pre-filled WhatsApp message for you.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {["AC Repair", "AC Service & Cleaning", "Annual Maintenance Plan", "Electrician", "Fan Installation", "Deep Home Cleaning", "Kitchen Cleaning", "Sofa Cleaning"].map((s) => (
                <button
                  key={s}
                  onClick={() => handleWA(s)}
                  style={{
                    padding: "9px 18px",
                    borderRadius: 99,
                    border: "1.5px solid var(--stone-mid)",
                    background: "var(--stone)",
                    fontSize: 13,
                    fontWeight: 500,
                    cursor: "pointer",
                    color: "var(--ink-soft)",
                    transition: "all 0.15s",
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--wa-green)";
                    (e.currentTarget as HTMLElement).style.color = "var(--wa-green)";
                    (e.currentTarget as HTMLElement).style.background = "#F0FFF4";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--stone-mid)";
                    (e.currentTarget as HTMLElement).style.color = "var(--ink-soft)";
                    (e.currentTarget as HTMLElement).style.background = "var(--stone)";
                  }}
                >
                  <MessageCircle size={14} />
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section style={{ padding: "64px 24px", background: "var(--stone)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <span className="section-tag">Service area</span>
          <h2 className="display" style={{ fontSize: 28, fontWeight: 700, margin: "0 0 24px" }}>Where we operate</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { area: "Vadodara city", zones: "All areas including Alkapuri, Gorwa, Manjalpur, Fatehganj, Karelibaug, Akota" },
              { area: "Vaghodia", zones: "Vaghodia town and GIDC industrial areas" },
              { area: "Expanding soon", zones: "Anand, Bharuch, Nadiad — coming in Q3 2024" },
            ].map((loc) => (
              <div key={loc.area} style={{ display: "flex", gap: 14, padding: "16px 20px", background: "white", borderRadius: 8, border: "1px solid var(--stone-mid)" }}>
                <MapPin size={20} style={{ color: "var(--saffron)", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p style={{ fontWeight: 600, fontSize: 15, margin: "0 0 4px" }}>{loc.area}</p>
                  <p style={{ fontSize: 14, color: "var(--ink-soft)", margin: 0 }}>{loc.zones}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 24, padding: "14px 20px", background: "var(--saffron-pale)", borderRadius: 8, border: "1px solid rgba(232,86,10,0.2)" }}>
            <Clock size={18} style={{ color: "var(--saffron)", flexShrink: 0 }} />
            <p style={{ fontSize: 14, color: "var(--ink-soft)", margin: 0 }}>
              <strong>Service hours:</strong> Monday to Sunday, 8:00 AM – 8:00 PM. Emergency electrician available outside these hours.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
