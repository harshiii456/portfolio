import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Certificates data (added URLs for View button)
const CERTS = {
  tech: [
    {
      title: "Introduction to LLM",
      org: "CreateBytes",
      date: "2025",
      img: "/certs/CBX.jpg",
      link: "/certs/CBX.jpg",
    },
    {
      title: "PowerBI with AI",
      org: "Office Master",
      date: "2025",
      img: "/certs/PBIWithAI.jpg",
      link: "/certs/PBIWithAI.jpg",
    },
    {
      title: "Python Foundation Certificate",
      org: "Infosys",
      date: "2025",
      img: "/certs/pythoninfo.jpg",
      link: "/certs/pythoninfo.jpg",
    },
    {
      title: "Introduction to Data Management",
      org: "Meta",
      date: "2024",
      img: "/certs/DataManagement.jpg",
      link: "/certs/DataManagement.jpg",
    },
    {
      title: "Python Data Analysis",
      org: "Meta",
      date: "2024",
      img: "/certs/pyDataAnalysis.jpg",
      link: "/certs/pyDataAnalysis.jpg",
    },
    {
      title: "Marketing Analytics with Meta",
      org: "Meta",
      date: "2024",
      img: "/certs/MarketingAnalysis.jpg",
      link: "/certs/MarketingAnalysis.jpg",
    },
    {
      title: "Data Analytics Job Stimulation",
      org: "Deloitte",
      date: "2025",
      img: "/certs/Deloitte.png",
      link: "/certs/Deloitte.ong",
    },
    
  ],
  other: [
    {
      title: "DICE TECHNOVISION 2.0",
      org: "DICE, Chitkara University",
      date: "2024",
      img: "/certs/Carnival.jpg",
      link: "/certs/Carnival.jpg",
    },
    {
      title: "Promotion Coordinator",
      org: "IEEE-CIET SB",
      date: "2025",
      img: "/certs/PromotionCoordinator.jpg",
      link: "/certs/PromotionCoordinator.jpg",
    },
    {
      title: "Communication Skills for Engineers",
      org: "RICE University",
      date: "2024",
      img: "/certs/Communication.jpg",
      link: "/certs/Communication.jpg",
    },
    {
      title: "Social Media And Digital Marketing Fundamentals",
      org: "Digital Marketing Institute",
      date: "2023",
      img: "/certs/SocialMedia.jpg",
      link: "/certs/SocialMedia.jpg",
    },
    {
      title: "The Art and Science of Relationships",
      org: "University of Toronto",
      date: "2023",
      img: "/certs/ArtOfScience.jpg",
      link: "/certs/ArtOfScience.jpg",
    },
    {
      title: "Statistics Foundation",
      org: "Meta",
      date: "2024",
      img: "/certs/Stat.jpg",
      link: "/certs/Stat.jpg",
    },
    {
      title: "Blockchain and Business",
      org: "INSEAD",
      date: "2025",
      img: "/certs/blockchain.jpg",
      link: "/certs/blockchain.jpg",
    },
    {
      title: "Introduction to Blockchain for Financial Services",
      org: "INSEAD",
      date: "2025",
      img: "/certs/blockFin.jpg",
      link: "/certs/blockFin.jpg",
    },
  ],
};

export default function Certificates() {
  const [tab, setTab] = useState("tech");
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      className="container"
      style={{
        padding: "40px 0",
        marginTop: 0, // ensure no extra margin
      }}
    >
      {/* Responsive style for mobile */}
      <style>
        {`
          @media (max-width: 600px) {
            .container { padding-top: 0 !important; margin-top: 0 !important; }
            .card { padding-top: 8px !important; margin-top: 0 !important; }
          }
          @media (max-width: 400px) {
            .container { padding-top: 0 !important; margin-top: 0 !important; }
            .card { padding-top: 4px !important; margin-top: 0 !important; }
          }
        `}
      </style>

      <div className="card" style={{ marginTop: 0 }}>
        <h2 style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12, textAlign: "center" }}>Certificates 🏅</h2>
        <p className="lead" style={{ color: "#aaa", textAlign: "center" }}>
          Explore my certifications - technical & others.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          {["tech", "other"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={tab === t ? "tab active" : "tab"}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                background: tab === t ? "#007bff" : "#333",
                color: "#fff",
                fontWeight: 500,
                transition: "0.3s",
              }}
            >
              {t === "tech" ? "Tech" : "Others"}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div
          className="certs-grid"
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          <AnimatePresence mode="wait">
            {CERTS[tab].map((c, idx) => (
              <motion.div
                key={c.title}
                className="cert card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(0, 123, 255, 0.4)",
                }}
                style={{
                  background: "#1a1a1a",
                  borderRadius: 12,
                  padding: 16,
                  color: "#fff",
                }}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  style={{
                    width: "100%",
                    height: 160,
                    borderRadius: 10,
                    objectFit: "cover",
                    marginBottom: 12,
                  }}
                />
                <strong style={{ fontSize: 16 }}>{c.title}</strong>
                <div className="muted" style={{ fontSize: 13, color: "#bbb" }}>
                  {c.org} • {c.date}
                </div>

                <div style={{ marginTop: 12 }}>
                  <button
                    className="btn"
                    onClick={() => setSelectedCert(c)}
                    style={{
                      background: "#007bff",
                      border: "none",
                      color: "white",
                      borderRadius: 6,
                      padding: "6px 14px",
                      cursor: "pointer",
                    }}
                  >
                    View Certificate
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.img
              src={selectedCert.img}
              alt={selectedCert.title}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{
                maxWidth: "90%",
                maxHeight: "85%",
                borderRadius: 10,
                boxShadow: "0 0 25px rgba(255,255,255,0.2)",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
