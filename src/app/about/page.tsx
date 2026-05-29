"use client";
import { Target, Heart, TrendingUp, Phone } from "lucide-react";

const WA_NUMBER = "919158524724";

const values = [
  { icon: Heart, title: "Trust first", desc: "Every worker is Aadhaar-verified. We don't list anyone we wouldn't invite into our own home." },
  { icon: Target, title: "Transparent pricing", desc: "Price is agreed before the job starts. No 'extra charges' after the work is done." },
  { icon: TrendingUp, title: "Local focus", desc: "We're from Gujarat. We understand the needs, language, and expectations of our customers." },
];

const milestones = [
  { year: "2024", event: "GharFix founded in Vadodara with 3 service categories" },
  { year: "Q2 2024", event: "First 100 happy customers in Vadodara & Vaghodia" },
  { year: "Q3 2024", event: "Expanded to Anand and Bharuch" },
  { year: "2025", event: "Mobile app launch & 1,000+ monthly bookings goal" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--stone)", padding: "64px 24px 56px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <span className="section-tag">Our story</span>
            <h1 className="display" style={{ fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 800, margin: "0 0 20px", lineHeight: 1.2 }}>
              Organizing home services<br />
              <span style={{ color: "var(--saffron)" }}>for Gujarat's cities</span>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--ink-soft)", margin: "0 0 16px" }}>
              GharFix started with a simple observation: finding a reliable AC technician or electrician in Vadodara was harder than it should be. You'd call 3–4 people, get different prices, and never know if they'd actually show up.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--ink-soft)", margin: 0 }}>
              We decided to fix that — by bringing verified professionals, transparent pricing, and technology to the home services market in Tier-2 and Tier-3 Gujarat cities that apps like Urban Company have ignored.
            </p>
          </div>
          <div
            style={{
              background: "var(--saffron-pale)",
              borderRadius: 12,
              padding: "40px 32px",
              border: "1px solid var(--stone-mid)",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              {[
                { num: "150+", label: "Happy customers" },
                { num: "6", label: "Verified workers" },
                { num: "3", label: "Service categories" },
                { num: "2", label: "Cities served" },
              ].map((stat) => (
                <div key={stat.label} style={{ textAlign: "center" }}>
                  <p className="display" style={{ fontSize: 36, fontWeight: 800, color: "var(--saffron)", margin: "0 0 4px" }}>{stat.num}</p>
                  <p style={{ fontSize: 13, color: "var(--ink-soft)", margin: 0 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "64px 24px", background: "var(--cream)" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <span className="section-tag">What we stand for</span>
          <h2 className="display" style={{ fontSize: 32, fontWeight: 700, margin: "0 0 8px" }}>Our values</h2>
          <div className="divider-saffron" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {values.map((v) => (
              <div key={v.title} style={{ background: "white", border: "1px solid var(--stone-mid)", borderRadius: 8, padding: "28px 24px" }}>
                <div style={{ width: 48, height: 48, borderRadius: 8, background: "var(--saffron-pale)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <v.icon size={24} style={{ color: "var(--saffron)" }} />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 10px" }}>{v.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--ink-soft)", margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section style={{ padding: "64px 24px", background: "var(--stone)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <span className="section-tag">Where we're headed</span>
          <h2 className="display" style={{ fontSize: 32, fontWeight: 700, margin: "0 0 8px" }}>Our roadmap</h2>
          <div className="divider-saffron" />
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {milestones.map((m, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: 20, paddingBottom: i < milestones.length - 1 ? 28 : 0, paddingTop: i > 0 ? 28 : 0, borderBottom: i < milestones.length - 1 ? "1px solid var(--stone-mid)" : "none" }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "var(--saffron)", paddingTop: 2 }}>{m.year}</span>
                <p style={{ fontSize: 15, color: "var(--ink-soft)", margin: 0, lineHeight: 1.6 }}>{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--ink)", padding: "64px 24px", textAlign: "center" }}>
        <h2 className="display" style={{ fontSize: 32, fontWeight: 700, color: "white", margin: "0 0 12px" }}>
          Join our journey
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 16, margin: "0 0 28px" }}>
          Be one of our early customers in Vadodara & Vaghodia.
        </p>
        <a
          href={`https://wa.me/${WA_NUMBER}?text=Hi%20GharFix!%20I%20want%20to%20book%20a%20service.`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa"
          style={{ fontSize: 15 }}
        >
          <Phone size={17} />
          Book your first service
        </a>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
