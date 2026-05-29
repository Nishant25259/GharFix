"use client";
import Link from "next/link";
import { Phone, Shield, Clock, Star, ChevronRight, Zap, Wind, Sparkles, ArrowRight } from "lucide-react";

const WA_NUMBER = "919158524724";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%20want%20to%20book%20a%20service`;

const services = [
  {
    icon: Wind,
    title: "AC Repair & Service",
    desc: "Cooling not working? Gas refill, cleaning, installation — all AC problems solved same day.",
    price: "Starting ₹499",
    tag: "Most booked",
  },
  {
    icon: Zap,
    title: "Electrician Services",
    desc: "Wiring, fan installation, switchboard repair, short-circuit fixes by certified electricians.",
    price: "Starting ₹299",
    tag: null,
  },
  {
    icon: Sparkles,
    title: "Deep Home Cleaning",
    desc: "Full home, kitchen, bathroom, sofa & carpet deep clean. Before/after photos guaranteed.",
    price: "Starting ₹799",
    tag: "New",
  },
];

const steps = [
  { num: "01", title: "Choose your service", desc: "Pick from AC, electrician, or cleaning on WhatsApp or website." },
  { num: "02", title: "Pick a time slot", desc: "Select a time that works for you — same day or scheduled." },
  { num: "03", title: "Professional arrives", desc: "Verified worker reaches on time in uniform with all tools." },
  { num: "04", title: "Job done, OTP confirm", desc: "You confirm completion via OTP. Pay only when satisfied." },
];

const testimonials = [
  { name: "Priya Shah", area: "Alkapuri, Vadodara", text: "AC was dripping water for 2 days. GharFix sent a technician within 3 hours. Fixed it perfectly and even cleaned the filters. Will use again!", rating: 5 },
  { name: "Rakesh Patel", area: "Vaghodia", text: "Needed urgent electrician for a short circuit at home. Got one in under 2 hours. Honest pricing, no hidden charges. Highly recommend.", rating: 5 },
  { name: "Neha Desai", area: "Gorwa, Vadodara", text: "Booked deep cleaning for our 3 BHK. The team was professional, in uniform, and left the house spotless. Even cleaned behind the fridge!", rating: 5 },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "var(--stone)",
          padding: "80px 24px 72px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative saffron blob */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "var(--saffron)",
            opacity: 0.06,
          }}
        />
        <div style={{ maxWidth: 1140, margin: "0 auto", position: "relative" }}>
          <div style={{ maxWidth: 680 }}>
            <span className="section-tag fade-up">Vadodara & Vaghodia · Gujarat</span>
            <h1
              className="display fade-up delay-1"
              style={{ fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 1.15, margin: "0 0 20px", fontWeight: 800 }}
            >
              Home repairs,<br />
              <span style={{ color: "var(--saffron)" }}>done right.</span>
            </h1>
            <p
              className="fade-up delay-2"
              style={{ fontSize: 18, lineHeight: 1.7, color: "var(--ink-soft)", maxWidth: 520, margin: "0 0 36px" }}
            >
              Verified professionals for AC service, electrical work, and deep cleaning.
              Same-day booking. Transparent pricing. No surprises.
            </p>
            <div className="fade-up delay-3" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa">
                <Phone size={17} />
                Book on WhatsApp
              </a>
              <Link href="/services" className="btn-outline">
                View all services
                <ChevronRight size={17} />
              </Link>
            </div>

            {/* Trust bar */}
            <div
              className="fade-up delay-4"
              style={{
                display: "flex",
                gap: 32,
                marginTop: 48,
                flexWrap: "wrap",
              }}
            >
              {[
                { icon: Shield, label: "Verified professionals" },
                { icon: Clock, label: "Same-day service" },
                { icon: Star, label: "4.8 avg rating" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Icon size={18} style={{ color: "var(--saffron)" }} />
                  <span style={{ fontSize: 14, fontWeight: 500, color: "var(--ink-soft)" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "72px 24px", background: "var(--cream)" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <span className="section-tag">What we fix</span>
          <h2 className="display" style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 700, margin: 0 }}>
            Our services
          </h2>
          <div className="divider-saffron" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
              marginTop: 8,
            }}
          >
            {services.map((s) => (
              <div
                key={s.title}
                style={{
                  background: "white",
                  border: "1px solid var(--stone-mid)",
                  borderRadius: 8,
                  padding: "28px 28px 24px",
                  position: "relative",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.transform = "none";
                }}
              >
                {s.tag && (
                  <span
                    style={{
                      position: "absolute",
                      top: 20,
                      right: 20,
                      fontSize: 11,
                      fontWeight: 600,
                      background: "var(--saffron-pale)",
                      color: "var(--saffron)",
                      padding: "3px 10px",
                      borderRadius: 99,
                    }}
                  >
                    {s.tag}
                  </span>
                )}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 8,
                    background: "var(--saffron-pale)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                  }}
                >
                  <s.icon size={26} style={{ color: "var(--saffron)" }} />
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 600, margin: "0 0 10px" }}>{s.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--ink-soft)", margin: "0 0 20px" }}>
                  {s.desc}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 15, fontWeight: 600, color: "var(--saffron)" }}>{s.price}</span>
                  <Link
                    href="/services"
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: "var(--ink-soft)",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    Details <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: "72px 24px", background: "var(--stone)" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <span className="section-tag">Simple process</span>
          <h2 className="display" style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 700, margin: 0 }}>
            How GharFix works
          </h2>
          <div className="divider-saffron" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 32,
              marginTop: 8,
            }}
          >
            {steps.map((s, i) => (
              <div key={s.num} style={{ display: "flex", gap: 18 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: i === 0 ? "var(--saffron)" : "var(--stone-mid)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    fontWeight: 700,
                    color: i === 0 ? "white" : "var(--ink-soft)",
                    flexShrink: 0,
                  }}
                >
                  {s.num}
                </div>
                <div>
                  <h4 style={{ fontSize: 16, fontWeight: 600, margin: "8px 0 8px" }}>{s.title}</h4>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--ink-soft)", margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "72px 24px", background: "var(--cream)" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <span className="section-tag">Customer stories</span>
          <h2 className="display" style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 700, margin: 0 }}>
            What people say
          </h2>
          <div className="divider-saffron" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                style={{
                  background: "white",
                  border: "1px solid var(--stone-mid)",
                  borderRadius: 8,
                  padding: "24px 24px 20px",
                }}
              >
                <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={15} fill="var(--saffron)" style={{ color: "var(--saffron)" }} />
                  ))}
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: "var(--ink-soft)", margin: "0 0 18px", fontStyle: "italic" }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p style={{ fontWeight: 600, fontSize: 14, margin: 0 }}>{t.name}</p>
                  <p style={{ fontSize: 12, color: "var(--stone-dark)", margin: "3px 0 0" }}>{t.area}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section
        style={{
          background: "var(--saffron)",
          padding: "64px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2
            className="display"
            style={{ fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 700, color: "white", margin: "0 0 16px" }}
          >
            Ready to fix it today?
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.88)", margin: "0 0 32px", lineHeight: 1.7 }}>
            Message us on WhatsApp and we&apos;ll connect you with a verified professional within minutes.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "white",
              color: "var(--saffron)",
              padding: "16px 36px",
              borderRadius: 4,
              fontWeight: 700,
              fontSize: 16,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              transition: "transform 0.2s",
            }}
          >
            <Phone size={18} />
            Book on WhatsApp — Free
          </a>
        </div>
      </section>
    </>
  );
}
