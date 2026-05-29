import { MessageCircle, CalendarCheck, HardHat, ShieldCheck, Star, Phone } from "lucide-react";

const WA_NUMBER = "919158524724";

const steps = [
  {
    icon: MessageCircle,
    num: "01",
    title: "Message us on WhatsApp",
    desc: "Tell us what you need — AC issue, electrical problem, or cleaning job. Describe the problem in your own words, even in Gujarati or Hindi. We reply within 10 minutes.",
    note: "No app download needed.",
  },
  {
    icon: CalendarCheck,
    num: "02",
    title: "Confirm your time slot",
    desc: "We share available slots for the same day or next day. You pick the time that works for you. Morning, afternoon, or evening — we work around your schedule.",
    note: "Same-day bookings available.",
  },
  {
    icon: HardHat,
    num: "03",
    title: "Professional arrives on time",
    desc: "Our verified worker arrives in uniform with all necessary tools and equipment. They will call you 15 minutes before arrival. No strangers — every worker has completed Aadhaar KYC.",
    note: "Worker calls before arrival.",
  },
  {
    icon: ShieldCheck,
    num: "04",
    title: "Job completed, OTP confirmation",
    desc: "After the work is done, you receive a one-time password on your mobile. Enter the OTP only when you are fully satisfied. This protects you — workers get paid only after your OTP.",
    note: "You control the payment trigger.",
  },
  {
    icon: Star,
    num: "05",
    title: "Rate your experience",
    desc: "After the job, share a quick rating. This helps us maintain quality and rewards our best workers. Your feedback directly improves GharFix for your neighbours.",
    note: "2-minute feedback, optional.",
  },
];

const faqs = [
  { q: "How do I know the professional is verified?", a: "Every worker completes Aadhaar KYC verification and phone verification before being listed on GharFix. We also keep portfolio proof and conduct random quality checks." },
  { q: "What if the problem isn't fixed properly?", a: "All work comes with a 30-day service guarantee. If the same issue recurs, we send the professional back at no extra charge within the guarantee period." },
  { q: "Do I need to arrange any tools or materials?", a: "No. Our professionals bring all necessary tools. For materials (like AC gas, wiring), we inform you upfront about material costs before starting any work." },
  { q: "Can I book for the same day?", a: "Yes! We support same-day bookings for all three services, subject to professional availability. Message us on WhatsApp and we'll confirm within 10 minutes." },
  { q: "What areas do you serve?", a: "Currently we serve Vadodara city and Vaghodia. We are expanding to nearby Gujarat cities in 2024. WhatsApp us to check availability in your area." },
  { q: "What are the payment options?", a: "We accept UPI (Google Pay, PhonePe, Paytm), bank transfer, and cash. Payment is triggered only after you confirm job completion via OTP." },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--stone)", padding: "64px 24px 56px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <span className="section-tag">Simple as 1-2-3</span>
          <h1 className="display" style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, margin: "0 0 16px" }}>
            How GharFix<br />
            <span style={{ color: "var(--saffron)" }}>works for you</span>
          </h1>
          <p style={{ fontSize: 17, color: "var(--ink-soft)", maxWidth: 500, lineHeight: 1.7, margin: 0 }}>
            From WhatsApp message to job done — the whole process is designed to be simple, safe, and transparent.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section style={{ padding: "64px 24px", background: "var(--cream)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {steps.map((s, i) => (
              <div
                key={s.num}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: 24,
                  paddingBottom: i < steps.length - 1 ? 48 : 0,
                  position: "relative",
                }}
              >
                {/* Timeline line */}
                {i < steps.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      left: 39,
                      top: 80,
                      bottom: 0,
                      width: 2,
                      background: "var(--stone-mid)",
                    }}
                  />
                )}
                {/* Icon circle */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      background: i === 0 ? "var(--saffron)" : "var(--stone)",
                      border: i !== 0 ? "2px solid var(--stone-mid)" : "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      zIndex: 1,
                      position: "relative",
                    }}
                  >
                    <s.icon size={26} style={{ color: i === 0 ? "white" : "var(--saffron)" }} />
                  </div>
                </div>
                {/* Content */}
                <div style={{ paddingTop: 12 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", color: "var(--stone-dark)", display: "block", marginBottom: 6 }}>
                    STEP {s.num}
                  </span>
                  <h3 className="display" style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>{s.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--ink-soft)", margin: "0 0 12px" }}>{s.desc}</p>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: 12,
                      fontWeight: 600,
                      color: "var(--saffron)",
                      background: "var(--saffron-pale)",
                      padding: "4px 12px",
                      borderRadius: 99,
                    }}
                  >
                    {s.note}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ padding: "64px 24px", background: "var(--stone)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span className="section-tag">Got questions?</span>
          <h2 className="display" style={{ fontSize: 32, fontWeight: 700, margin: "0 0 8px" }}>Frequently asked</h2>
          <div className="divider-saffron" />
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  padding: "20px 0",
                  borderBottom: i < faqs.length - 1 ? "1px solid var(--stone-mid)" : "none",
                }}
              >
                <h4 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 8px" }}>{faq.q}</h4>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: "var(--ink-soft)", margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--saffron)", padding: "64px 24px", textAlign: "center" }}>
        <h2 className="display" style={{ fontSize: 32, fontWeight: 700, color: "white", margin: "0 0 12px" }}>
          Ready to try it?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.9)", fontSize: 16, margin: "0 0 28px" }}>
          First booking takes under 2 minutes on WhatsApp.
        </p>
        <a
          href={`https://wa.me/${WA_NUMBER}?text=Hi%20GharFix!%20I%20want%20to%20book%20my%20first%20service.`}
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
          }}
        >
          <Phone size={18} />
          Book my first service
        </a>
      </section>
    </>
  );
}
