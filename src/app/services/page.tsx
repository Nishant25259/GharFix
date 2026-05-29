"use client";
import { Phone, Wind, Zap, Sparkles, CheckCircle2, MessageCircle } from "lucide-react";

const WA_NUMBER = "919158524724";

const services = [
  {
    icon: Wind,
    category: "AC Repair & Service",
    items: [
      { name: "AC Gas Refill (1.5 ton)", price: "₹1,200", time: "1–2 hrs" },
      { name: "AC Deep Cleaning (split)", price: "₹599", time: "1 hr" },
      { name: "AC Installation (split)", price: "₹1,499", time: "2–3 hrs" },
      { name: "AC Not Cooling — Diagnosis", price: "₹299", time: "30 min" },
      { name: "Annual AC Maintenance Plan", price: "₹2,499/yr", time: "2 visits" },
      { name: "Window AC Service", price: "₹499", time: "1 hr" },
    ],
    highlight: "Most popular",
    color: "#E8F4FF",
    iconColor: "#185FA5",
  },
  {
    icon: Zap,
    category: "Electrician Services",
    items: [
      { name: "Fan Installation", price: "₹349", time: "30 min" },
      { name: "Light / Fixture Installation", price: "₹249", time: "20 min" },
      { name: "Switchboard Repair", price: "₹399", time: "30–60 min" },
      { name: "Wiring Fault Detection", price: "₹499", time: "1 hr" },
      { name: "MCB / Circuit Breaker Fix", price: "₹599", time: "45 min" },
      { name: "Full Home Wiring Inspection", price: "₹799", time: "2 hrs" },
    ],
    highlight: null,
    color: "var(--saffron-pale)",
    iconColor: "var(--saffron)",
  },
  {
    icon: Sparkles,
    category: "Deep Home Cleaning",
    items: [
      { name: "1 BHK Full Deep Clean", price: "₹1,299", time: "3–4 hrs" },
      { name: "2 BHK Full Deep Clean", price: "₹1,799", time: "4–5 hrs" },
      { name: "3 BHK Full Deep Clean", price: "₹2,499", time: "5–7 hrs" },
      { name: "Kitchen Deep Clean", price: "₹799", time: "2 hrs" },
      { name: "Bathroom Deep Clean (per unit)", price: "₹399", time: "45 min" },
      { name: "Sofa / Carpet Steam Clean", price: "₹599", time: "1–2 hrs" },
    ],
    highlight: "New",
    color: "#E8F5E9",
    iconColor: "#2E7D32",
  },
];

const included = [
  "Verified & background-checked professional",
  "All tools and equipment brought by worker",
  "Before & after photo documentation",
  "OTP-based job completion — you control it",
  "30-day service guarantee on all work",
  "No hidden charges — price agreed upfront",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--stone)", padding: "64px 24px 56px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <span className="section-tag">Everything we offer</span>
          <h1 className="display" style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, margin: "0 0 16px" }}>
            Our services &<br />
            <span style={{ color: "var(--saffron)" }}>pricing</span>
          </h1>
          <p style={{ fontSize: 17, color: "var(--ink-soft)", maxWidth: 520, lineHeight: 1.7, margin: 0 }}>
            Transparent, fixed prices — no surprises. All jobs come with a 30-day service guarantee.
          </p>
        </div>
      </section>

      {/* Service tables */}
      <section style={{ padding: "56px 24px", background: "var(--cream)" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", display: "flex", flexDirection: "column", gap: 48 }}>
          {services.map((cat) => (
            <div key={cat.category}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 8,
                    background: cat.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <cat.icon size={24} style={{ color: cat.iconColor }} />
                </div>
                <div>
                  <h2 className="display" style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>{cat.category}</h2>
                  {cat.highlight && (
                    <span style={{ fontSize: 11, fontWeight: 600, color: "var(--saffron)", background: "var(--saffron-pale)", padding: "2px 10px", borderRadius: 99, marginTop: 4, display: "inline-block" }}>
                      {cat.highlight}
                    </span>
                  )}
                </div>
              </div>
              <div
                style={{
                  background: "white",
                  border: "1px solid var(--stone-mid)",
                  borderRadius: 8,
                  overflow: "hidden",
                }}
              >
                {cat.items.map((item, i) => (
                  <div
                    key={item.name}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto auto",
                      gap: 16,
                      padding: "16px 24px",
                      borderBottom: i < cat.items.length - 1 ? "1px solid var(--stone-mid)" : "none",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontSize: 15, fontWeight: 500 }}>{item.name}</span>
                    <span style={{ fontSize: 12, color: "var(--stone-dark)", whiteSpace: "nowrap" }}>{item.time}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ fontSize: 15, fontWeight: 700, color: "var(--saffron)", whiteSpace: "nowrap" }}>{item.price}</span>
                      <a
                        href={`https://wa.me/${WA_NUMBER}?text=Hi%20GharFix!%20I%20want%20to%20book%3A%20*${encodeURIComponent(item.name)}*`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: "var(--wa-green)",
                          color: "white",
                          fontSize: 12,
                          fontWeight: 600,
                          padding: "6px 14px",
                          borderRadius: 4,
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                          whiteSpace: "nowrap",
                        }}
                      >
                        <MessageCircle size={13} />
                        Book
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What's always included */}
      <section style={{ padding: "64px 24px", background: "var(--stone)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <span className="section-tag">Every booking</span>
          <h2 className="display" style={{ fontSize: 32, fontWeight: 700, margin: "0 0 8px" }}>
            Always included — at no extra cost
          </h2>
          <div className="divider-saffron" />
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {included.map((item) => (
              <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <CheckCircle2 size={20} style={{ color: "var(--saffron)", flexShrink: 0, marginTop: 1 }} />
                <span style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--ink)", padding: "64px 24px", textAlign: "center" }}>
        <h2 className="display" style={{ fontSize: 32, fontWeight: 700, color: "white", margin: "0 0 12px" }}>
          Need a custom quote?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 16, margin: "0 0 28px" }}>
          Send us your requirement on WhatsApp and we&apos;ll get back with a price in minutes.
        </p>
        <a
          href={`https://wa.me/${WA_NUMBER}?text=Hi%20GharFix!%20I%20need%20a%20custom%20quote%20for%20a%20service.`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa"
          style={{ fontSize: 15 }}
        >
          <Phone size={17} />
          WhatsApp us for a quote
        </a>
      </section>
    </>
  );
}
