import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap, FaAward, FaUsers } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        color: "white",
        padding: "clamp(1rem, 4vw, 3rem) 1rem",
      }}
    >
      {/* --- About Me + Achievements Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "left",
          marginTop: "1rem",
          lineHeight: 1.7,
          background: "rgba(255,255,255,0.04)",
          padding: "clamp(1.5rem, 3vw, 3.5rem)",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0,255,200,0.08)",
          backdropFilter: "blur(10px)",
          boxSizing: "border-box",
        }}
      >
        {/* --- Header --- */}
        <h2
          style={{
            fontSize: "clamp(1.2rem, 2.5vw, 1.9rem)",
            marginBottom: "1.2rem",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Me
        </h2>

        {/* --- Description --- */}
        <p
          style={{
            fontSize: "clamp(1rem, 1.6vw, 1.1rem)",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "1rem",
            textAlign: "justify",
          }}
        >
          Hi, I’m <strong>Harshu Gupta</strong> — a passionate <strong>Computer Science Engineering student</strong> and <strong>tech & design enthusiast</strong> who loves transforming ideas into impactful projects. I specialize in <strong>data analysis, UI/UX design, and technology-driven innovation</strong>, combining analytical thinking with creative execution.
        </p>

        <p style={{ textAlign: "justify", color: "rgba(255,255,255,0.85)", marginBottom: "1rem" }}>
          Currently a <strong>3rd-year B.E. Computer Science student</strong> at <strong>Chitkara University</strong>, I actively participate in technical communities, lead student initiatives, and contribute to real-world projects that enhance both my skills and impact.
        </p>

        {/* --- Achievements & Roles --- */}
        <div className="mb-4">
          <h2 className="text-xl font-medium mb-2" style={{ color: "var(--accent)" }}>Key Achievements & Roles</h2>
          <ul className="list-disc list-inside text-gray-300" style={{ textAlign: "justify" }}>
            <li><strong>Graphic Head</strong> — Designed posters, certificates, and branding for major ACM Student Chapter events including <strong>Design-o-tech</strong> and ROCS 2025.</li>
            <li><strong>Event Coordination</strong> — Assisted in organizing national-level conferences and workshops, collaborating with speakers from premier institutions.</li>
            <li><strong>Leadership & Collaboration</strong> — Led IEEE WIE initiatives, managed student teams, and conducted workshops to enhance peer learning.</li>
            <li><strong>Data & Technical Projects</strong> — Experience in <strong>Excel, Power BI, SQL, Python</strong> for data analysis, visualization, and generating actionable business insights.</li>
            <li><strong>Innovation & Presentations</strong> — Participated in engineering-thinking competitions and group presentations on topics like <strong>“Waste to Wonder”</strong> and other creative solutions.</li>
            <li><strong>Continuous Learning</strong> — Exploring <strong>Generative AI, prompt engineering, and analytics-driven problem-solving</strong> to bridge technology and real-world applications.</li>
          </ul>
        </div>

        {/* --- Approach & Mindset --- */}
        <div className="mb-4">
          <h2 className="text-xl font-medium mb-2" style={{ color: "var(--accent)" }}>My Approach</h2>
          <p style={{ textAlign: "justify", color: "rgba(255,255,255,0.85)" }}>
            I believe in building <strong>solutions that are people-centered, insightful, and easy to understand</strong>. Leading student initiatives and collaborating on projects has sharpened my <strong>communication, problem-solving, and project management skills</strong>. I thrive in environments that challenge me to grow technically and creatively.
          </p>
        </div>

        {/* --- Open To --- */}
        <div className="mb-4">
          <h2 className="text-xl font-medium mb-2" style={{ color: "var(--accent)" }}>Open To</h2>
          <p style={{ textAlign: "justify", color: "rgba(255,255,255,0.85)" }}>
            Internships or projects in <strong>Data Analysis</strong>, <strong>Business Analysis</strong>, semi-technical roles bridging technology and business, and collaborations in <strong>AI, analytics, and innovation-driven projects</strong>.
          </p>
        </div>

        {/* --- Footer --- */}
        <footer className="mt-6 text-sm" style={{ textAlign: "justify", color: "rgba(255,255,255,0.7)" }}>
          <p>
            Let’s connect if you’re looking for an enthusiastic learner who combines <strong>technical skills</strong> with <strong>analytical thinking</strong> and a passion for contributing to impactful projects.
          </p>
        </footer>

        {/* --- Education Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "clamp(1.1rem, 2.2vw, 1.6rem)",
              marginBottom: "1.5rem",
              background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Education
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {/* --- Bachelor --- */}
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(0,255,200,0.15)" }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.2rem 1.4rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <FaUniversity size={40} color="var(--accent)" />
              <div style={{ flex: 1, minWidth: "200px" }}>
                <h4 style={{ color: "var(--accent)", marginBottom: "0.4rem", fontSize: "1.05rem" }}>
                  Bachelor of Engineering in Computer Science
                </h4>
                <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "0.2rem" }}>
                  <strong>Chitkara University</strong> - Rajpura, Punjab
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>3rd Year (Pursuing) | GPA: 8.98</p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>2023 – 2027</p>
              </div>
            </motion.div>

            {/* --- 12th Grade --- */}
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(0,255,200,0.15)" }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.2rem 1.4rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <FaGraduationCap size={38} color="var(--accent)" />
              <div style={{ flex: 1, minWidth: "200px" }}>
                <h4 style={{ color: "var(--accent)", marginBottom: "0.4rem", fontSize: "1.05rem" }}>
                  Higher Secondary Education (12th Grade)
                </h4>
                <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "0.2rem" }}>
                  <strong>Baba Aapo Aap Guru Nanak Public School</strong> - Nabha, Punjab
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>CBSE Board | 86.8% | Completed 2023</p>
              </div>
            </motion.div>

            {/* --- 10th Grade --- */}
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(0,255,200,0.15)" }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.2rem 1.4rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <FaSchool size={36} color="var(--accent)" />
              <div style={{ flex: 1, minWidth: "200px" }}>
                <h4 style={{ color: "var(--accent)", marginBottom: "0.4rem", fontSize: "1.05rem" }}>
                  Secondary Education (10th Grade)
                </h4>
                <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "0.2rem" }}>
                  <strong>Dayanand Public School</strong> - Pandusar, Nabha
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>CBSE Board | 85% | Completed 2021</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
