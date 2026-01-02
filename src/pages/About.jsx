import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

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
      {/* --- About Me + Education Section --- */}
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
          Hi, I’m <strong>Harshita</strong> - an aspiring{" "}
          <strong>Data Analyst</strong> and{" "}
          <strong></strong> with a passion for turning
          data into actionable insights.
        </p>
        <p className="text-gray-700 mb-4" style={{textAlign: "justify" }}>
          As a pre-final year
          <strong> B.E. Computer Science and Engineering</strong> student at
          <strong> Chitkara University</strong>, I combine academic learning with
          hands-on projects and leadership experience.
        </p>


        <div className="mb-4">
          <h2 className="text-xl font-medium mb-2">What I do</h2>
          <ul className="list-disc list-inside text-gray-700" style={{textAlign: "justify" }}>
          <li>
          <strong>Data Analysis & Visualization</strong> (Excel, Power BI, DAX, SQL, Python)
          </li>
          <li>
          <strong>Business Insights & Reporting</strong> : turning data into
          action
          </li>
          <li>
          <strong>Generative AI & Prompt Engineering</strong> : exploring real
          business applications
          </li>
          <li>
          <strong>Leadership & Collaboration</strong> through IEEE WIE initiatives
          </li>
          </ul>
          </div>


          <div className="mb-4">
          <h2 className="text-xl font-medium mb-2">My approach</h2>
          <p className="text-gray-700" style={{textAlign: "justify" }}>
          I believe technology should be people-centered. I focus on building
          solutions that are insightful, easy to understand, and useful for
          decision-making. Leading IEEE WIE, organizing events, and collaborating
          with diverse teams has sharpened my communication, project
          management, and problem-solving skills.
          </p>
          </div>


          <div>
          <h2 className="text-xl font-medium mb-2">Open to</h2>
          <p className="text-gray-700" style={{textAlign: "justify" }}>
          Internships or projects in <strong>Data Analysis</strong> /{' '}
          <strong>Business Analysis</strong>, semi-technical roles bridging
          technology and business, and collaborations in <strong>AI</strong>,
          analytics, and innovation-driven projects.
          </p>
          </div>


          <footer className="mt-6 text-sm text-gray-600" style={{textAlign: "justify" }}>
          <p>
          Let’s connect if you’re looking for an enthusiastic learner who combines
          <strong> technical skills</strong> with <strong>analytical thinking</strong> and
          an eagerness to contribute to data-driven decision making.
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
              background:
                "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Education
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            {/* --- Education Card 1 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
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
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.05rem",
                  }}
                >
                  Bachelor of Engineering in Computer Science and Engineering
                </h4>
                <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "0.2rem" }}>
                  <strong>Chitkara University</strong> - Rajpura, Punjab
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  3rd Year (Pursuing) | GPA: 8.98
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>2023 – 2027</p>
              </div>
            </motion.div>

            {/* --- Education Card 2 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
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
                  <strong>Lord's Convent School</strong> - Sarkaghat, Mandi, Himachal Pradesh
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Himachal Pradesh Board | Percentage: 89.8%
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Completed in 2023</p>
              </div>
            </motion.div>

            {/* --- Education Card 3 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
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
                  <strong>Lord's Convent School</strong> - Sarkaghat, Mandi, Himachal Pradesh,
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Himachal Pradesh Board | Percentage: 88.9%
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Completed in 2021</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
