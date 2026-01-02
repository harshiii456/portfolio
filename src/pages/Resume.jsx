import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0", marginTop: 0 }}>
      <style>{`
        @media (max-width: 600px) {
          .container { padding-top: 0 !important; margin-top: 0 !important; }
          .card { padding-top: 8px !important; margin-top: 0 !important; }
        }
        @media (max-width: 400px) {
          .container { padding-top: 0 !important; margin-top: 0 !important; }
          .card { padding-top: 4px !important; margin-top: 0 !important; }
        }
      `}</style>

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
              👩‍💻 Harshita Gupta
            </h3>
            <p style={{ marginTop: 10, fontSize: 15, color: "#ccc", textAlign: "justify" }}>
              Computer Science Undergraduate | Chitkara University (CSE)
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📍 Patiala, Punjab, India
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              ✉️ harshita.g.2k@gmail.com
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📞 +91 99883 21773
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
            <p style={{ marginTop: 6, color: "#ccc" }}>
              Computer Science undergraduate with a strong foundation in programming, data structures, and software engineering principles. 
              Experienced in developing, debugging, and optimizing software through internships and academic projects. Skilled in building 
              efficient and scalable client–server and backend systems in a collaborative engineering environment.
            </p>
          </motion.div>
        </motion.div>

        {/* Education Section */}
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
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>🎓 Education</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>B.E. Computer Science and Engineering</strong> – Chitkara University (2023–2027) <br />
              <span style={{ color: "#aaa" }}>CGPA: 8.9</span>
            </li>
          </ul>
        </motion.div>

        {/* Experience */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} style={{ marginTop: 40 }}>
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>💼 Experience</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8, textAlign: "justify" }}>
            <li>🔹 <strong>Software Development Intern – Labmentix</strong> (Sep 2025 – Oct 2025) <br />
              Developed 5+ backend features and REST APIs, resolved 20+ logical/runtime/performance bugs, collaborated in a 3-member team using Git & structured reviews.
            </li>
            <li style={{ marginTop: 10 }}>🔹 <strong>Web Development Team Member – Conceptou</strong> (Oct 2023 – Jun 2024) <br />
              Built responsive UI components, fixed 15+ cross-browser/UI issues improving usability and layout consistency.
            </li>
            <li style={{ marginTop: 10 }}>🔹 <strong>Secretary – ACM Student Chapter</strong> (Jun 2024 – Jul 2026) <br />
              Coordinated 5+ technical events, workshops & hackathons fostering problem-solving and collaboration among 50+ students.
            </li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} style={{ marginTop: 40 }}>
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>📌 Projects</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8, textAlign: "justify" }}>
            <li>1️⃣ <strong>CPU Scheduling Simulator (C++)</strong> – Implemented FCFS, SJF, Priority & Round Robin and analyzed OS performance metrics.</li>
            <li>2️⃣ <strong>CodeMeet (JavaScript, Client–Server)</strong> – Built real-time collaborative coding with live sync & session-based communication.</li>
            <li>3️⃣ <strong>Employee Payroll System (Java)</strong> – Modular OOP-based payroll system handling salary computation, validation & edge cases.</li>
            <li>4️⃣ <strong>Money Tracker (MERN Stack)</strong> – Full-stack expense tracking app with authentication and interactive financial insights.</li>
            <li>5️⃣ <strong>Code Editor (C++)</strong> – CLI-based custom code editor supporting file operations with optimized buffer handling.</li>
            <li>6️⃣ <strong>Library Management System (C++)</strong> – Console app managing books, users, and issue/return logs with search and structured storage.</li>
            <li>7️⃣ <strong>FootFlex E-Commerce (Node.js, Express)</strong> – Responsive footwear store with product pages, cart, filters, and backend APIs.</li>
            <li>8️⃣ <strong>AI Chat UI (React)</strong> – Interactive chatbot interface built using animations and reusable components.</li>
            <li>9️⃣ <strong>Browser Chatbot (JavaScript)</strong> – DOM-based chatbot with dynamic message handling and instant responses.</li>
            <li>🔟 <strong>Sudoku Solver (C++)</strong> – Backtracking-based puzzle solver validating and solving board states efficiently.</li>
            <li>1️⃣1️⃣ <strong>Pharma Sales Dashboard (Power BI/Tableau)</strong> – BI dashboard analyzing pharma sales trends and performance metrics.</li>
            <li>1️⃣2️⃣ <strong>Calculator (React/C++)</strong> – Multi-mode calculator supporting basic and scientific operations with clean logic handling.</li>
            <li>1️⃣3️⃣ <strong>Code Review AI Tool</strong> – AI-powered code analyzer providing error detection and optimization suggestions.</li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} style={{ marginTop: 40 }}>
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>⚙️ Skills</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "C++",
              "Java",
              "Python",
              "JavaScript",
              "React.js",
              "Node.js",
              "Express.js",
              "MySQL",
              "MongoDB",
              "C++ STL",
              "Postman",
              "Git",
              "GitHub",
              "Docker",
              "Linux CLI",
              "DSA: Linked List, Stack, Queue, Trees, Graphs, Hashing, Backtracking",
              "RESTful APIs",
              "Authentication (JWT, session-based)",
              "Operating Systems",
              "DBMS",
              "Computer Networks",
              "Debugging",
              "Code Optimization",
              "Responsive UI",
              "DAX (Power BI)",
              "Tableau",
              "Excel",
              "Google Suite",
              "IoT (8051 Beginner Level, API Integration, Sensors Basics)",
              "Problem Solving",
              "Teamwork",
              "Adaptability",
              "Creativity",
              "Leadership",
              "Communication (English & French)",
            ].map(skill => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,180,255,0.3)" }}
                style={{ background: "rgba(255,255,255,0.05)", padding: "6px 12px", borderRadius: 8, fontSize: 13, color: "#ccc" }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} style={{ marginTop: 40 }}>
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>🏆 Achievements</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: 1.7, fontSize: 14 }}>
            <li>✔ Top 10 Team – HackIndia Hackathon 2024</li>
            <li>✔ Finalist – Lady Ada Hackathon (ACM India)</li>
            <li>✔ Solved 300+ DSA problems</li>
            <li>✔ Winner/Top Performer in 3+ University Coding Contests</li>
            <li>✔ Participated in 8+ Hackathons (Women-in-Tech & Open Innovation Categories)</li>
            <li>✔ Best Debugging Award during Internship for fixing 20+ production issues</li>
            <li>✔ Built 6+ Full-Stack Web Apps for Startups & Student Communities</li>
            <li>✔ Led a 3-Member Backend Team for REST API Development</li>
            <li>✔ Ranked Top 10% in University DSA Competitive Leaderboard</li>
            <li>✔ Finalist in 2+ National Women-Focused Hackathons</li>
          </ul>
        </motion.div>


        {/* Additional */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} style={{ marginTop: 40 }}>
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>🧾 Additional</h4>
          <p style={{ fontSize: 14, color: "#ccc", textAlign: "justify" }}>
            Available for full-time internship (10–12 weeks) between <strong>May – August 2026</strong>.
            Fluent in <strong>English and French</strong> for technical discussions.
          </p>
        </motion.div>

        {/* Links */}
        <motion.div style={{ display: "flex", justifyContent: "center", gap: 30, marginTop: 40 }}>
          {[
            { name: "💻 GitHub", link: "https://github.com/harshiii456" },
            { name: "💼 LinkedIn", link: "https://www.linkedin.com/in/harshita-gupta-090028290/" },
            { name: "🌐 Portfolio", link: "https://www.instagram.com/_.hxrshuuu._/" },
          ].map(site => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#00b4ff" }}
              style={{ color: "#ccc", textDecoration: "none", fontSize: 15, fontWeight: 500 }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Download */}
        <motion.div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
          <motion.a
            href="/Resume.pdf"
            download="Resume.pdf"
            whileHover={{ scale: 1.08 }}
            style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '14px 32px', borderRadius: 12, fontSize: '1.15rem',
              textDecoration: 'none', cursor: 'pointer', background: '#181818', color: '#06b6d4',
              border: '2px solid #06b6d4', fontWeight: 700, transition: 'background 0.2s, color 0.2s'
            }}
          >
            ⬇️ Download Resume (PDF)
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
