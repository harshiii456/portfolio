import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section
      className="container"
      style={{
        padding: "60px 0",
        marginTop: 0,
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
      <motion.div
        className="card"
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
          marginTop: 0,
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12, textAlign: "center" }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25, textAlign: "center" }}
        >
          A quick glance at my journey, skills, and achievements.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#00b4ff", marginBottom: 4 }}>
              👩‍💻 Harshita
            </h3>
            <p style={{ marginTop: 10, fontSize: 15, color: "#ccc", textAlign: "justify" }}>
              3rd year Computer Science and Engineering Student | Chitkara University
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📍 Patiala, Punjab, India
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              ✉️ Harshita.g.2k@gmail.com
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, #00b4ff44, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 560,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00b4ff"}}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#ccc"  }}>
              Highly motivated and results-oriented Computer Science and Engineering student with a strong foundation in data
              analysis and business intelligence. Proficient in Python, SQL, and tools like Power BI and Tableau. Proven ability to create
              insightful dashboards, analyze complex datasets, and deliver data-driven solutions to improve business efficiency and
              decision-making.
            </p>
          </motion.div>
        </motion.div>

        {/* Education Section with Border Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            🎓 Education
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>B.E. Computer Science and Engineering</strong> - Chitkara University, 2023–2027 <br />
              <span style={{ color: "#aaa" }}>GPA: 9.0</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>12th Board - Lord's Convent School</strong> (Himachal Pradesh Board, 2023) <br />
              <span style={{ color: "#aaa" }}>Percentage: 89.8%</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>10th Board - Lord's Convent School</strong> (Himachal Pradesh Board, 2020)
              <br />
              <span style={{ color: "#aaa" }}>Percentage: 88.9%</span>
            </li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>💼 Projects</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8, textAlign: "justify" }}>
            <li>1️⃣ Financial Data Analysis: Google Stock Performance and Market Volatility</li>
            <li>2️⃣ E-commerce Sales Performance & Profitability Analysis (Amazon Store Data)</li>
            <li>3️⃣ Transportation & Operations Data Analysis: Uber Ride Performance</li>
            <li>4️⃣ Pharma Insights: A Complete Sales Analysis Dashboard</li>
            <li>5️⃣ Codereview.ai: An intelligent code analysis tool that provides instant feedback on your code using AI-powered suggestions.</li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>⚙️ Skills</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "Python",
              "Java",
              "TensorFlow",
              "Numpy",
              "Pandas",
              "Matplotlib",
              "Seaborn",
              "Power BI",
              "Data Visualization",
              "MySQL",
              "MongoDB",
              "Git",
              "GitHub",
              "DAX",
              "Problem Solving",
              "Teamwork",
              "Adaptability",
              "Creativity",
              "Google Suite",
              "Excel",
              "Tableau",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,180,255,0.3)" }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            { name: "🏆 LeetCode", link: "https://leetcode.com/u/karunyagupta" },
            { name: "💻 GitHub", link: "https://github.com/karunyagupta" },
            { name: "💼 LinkedIn", link: "https://www.linkedin.com/in/karunyagupta" },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#00b4ff" }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 32,
          }}
        >
          <motion.a
            href="/Resume.pdf"
            download="Harshita_Resume.pdf"
            className="btn code-btn"
            whileHover={{ scale: 1.08 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 32px',
              borderRadius: 12,
              fontSize: '1.15rem',
              textDecoration: 'none',
              cursor: 'pointer',
              background: '#181818',
              color: '#06b6d4',
              border: '2px solid #06b6d4',
              fontWeight: 700,
              transition: 'background 0.2s, color 0.2s',
            }}
          >
            <span style={{ fontSize: "1.3em" }}>⬇️</span> Download Resume (PDF)
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
