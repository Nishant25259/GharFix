"use client";
import { useState } from "react";
import { MessageCircle, X, ChevronRight } from "lucide-react";

const WA_NUMBER = "919158524724";

const services = [
  "AC Repair & Service",
  "AC Deep Cleaning",
  "Annual AC Maintenance Plan",
  "Electrician — Wiring / Repair",
  "Fan / Light Installation",
  "Switchboard Repair",
  "Deep Home Cleaning",
  "Sofa / Carpet Cleaning",
  "Kitchen Deep Clean",
];

export default function WABookingWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"select" | "confirm">("select");
  const [selected, setSelected] = useState("");

  const handleBook = () => {
    if (!selected) return;
    const msg = encodeURIComponent(
      `Hi GharFix! 🙏\n\nI want to book: *${selected}*\n\nPlease share available time slots.`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
    setOpen(false);
    setStep("select");
    setSelected("");
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          bottom: 28,
          right: 28,
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "var(--wa-green)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(37,211,102,0.5)",
          zIndex: 200,
          transition: "transform 0.2s",
          animation: open ? "none" : "pulse-wa 2.5s infinite",
        }}
        aria-label="Book via WhatsApp"
      >
        <MessageCircle size={28} color="white" fill="white" />
      </button>

      {/* Panel */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 100,
            right: 28,
            width: 340,
            background: "var(--cream)",
            borderRadius: 12,
            boxShadow: "0 16px 48px rgba(0,0,0,0.18)",
            zIndex: 200,
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "var(--wa-green)",
              padding: "18px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <p style={{ fontWeight: 600, fontSize: 16, color: "white", margin: 0 }}>
                Book a Service
              </p>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.85)", margin: "4px 0 0" }}>
                We reply within 10 minutes
              </p>
            </div>
            <button
              onClick={() => { setOpen(false); setStep("select"); setSelected(""); }}
              style={{ background: "none", border: "none", cursor: "pointer", color: "white" }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div style={{ padding: 20 }}>
            <p style={{ fontSize: 13, color: "var(--ink-soft)", marginBottom: 14, fontWeight: 500 }}>
              What service do you need?
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, maxHeight: 280, overflowY: "auto" }}>
              {services.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelected(s)}
                  style={{
                    textAlign: "left",
                    padding: "11px 14px",
                    borderRadius: 6,
                    border: `1.5px solid ${selected === s ? "var(--saffron)" : "var(--stone-mid)"}`,
                    background: selected === s ? "var(--saffron-pale)" : "white",
                    cursor: "pointer",
                    fontSize: 13,
                    fontWeight: selected === s ? 600 : 400,
                    color: selected === s ? "var(--saffron)" : "var(--ink-soft)",
                    transition: "all 0.15s",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>

            <button
              onClick={handleBook}
              disabled={!selected}
              className="btn-wa"
              style={{
                width: "100%",
                justifyContent: "center",
                marginTop: 16,
                opacity: selected ? 1 : 0.5,
                cursor: selected ? "pointer" : "not-allowed",
                fontSize: 14,
              }}
            >
              <MessageCircle size={16} />
              Continue on WhatsApp
              <ChevronRight size={16} />
            </button>
            <p style={{ fontSize: 11, color: "var(--stone-dark)", textAlign: "center", marginTop: 8 }}>
              Opens WhatsApp with your booking details
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse-wa {
          0%, 100% { transform: scale(1); box-shadow: 0 4px 20px rgba(37,211,102,0.5); }
          50% { transform: scale(1.07); box-shadow: 0 4px 32px rgba(37,211,102,0.7); }
        }
      `}</style>
    </>
  );
}
