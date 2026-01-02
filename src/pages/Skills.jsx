import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const SKILLS = [
  { name: "Python", logo: "/logos/python.png" },
  { name: "C++", logo: "/logos/cpp.png" },
  { name: "Java", logo: "/logos/java.png" },
  { name: "JavaScript", logo: "/logos/javascript-original.png" },
  { name: "React.js", logo: "/logos/react-original.png" },
  { name: "Node.js", logo: "/logos/node.png" },
  { name: "Express.js", logo: "/logos/express.png" },
  { name: "MySQL", logo: "/logos/mysql-original.png" },
  { name: "MongoDB", logo: "/logos/mongodb-original.png" },
  { name: "GitHub", logo: "/logos/github.png" },
  { name: "Docker", logo: "/logos/docker-original.png" },
  { name: "Linux CLI", logo: "/logos/linux.png" },
  { name: "Postman", logo: "/logos/postman.png" },
  { name: "VS Code", logo: "/logos/vscode.png" },
  { name: "IntelliJ IDEA", logo: "/logos/intellij.png" },
  { name: "Pandas", logo: "/logos/pandas-img.png" },
  { name: "NumPy", logo: "/logos/numpy.png" },
  { name: "Matplotlib", logo: "/logos/matplotlib.png" },
  { name: "Power BI", logo: "/logos/powerbi.png" },
  { name: "Tableau", logo: "/logos/Tableau.png" },
  { name: "Excel", logo: "/logos/excel.png" },
  { name: "Google Suite", logo: "/logos/google.png" },
];

const ROWS = [
  [
    { title: "Languages", items: ["Python", "Java", "C++", "JavaScript", "SQL"] },
    {
      title: "Databases & Tools",
      items: ["MySQL", "MongoDB", "Git & GitHub", "Postman", "Power BI", "Tableau", "Excel"],
    },
    {
      title: "Development Environment",
      items: ["PyCharm", "Jupyter Notebook", "Visual Studio Code", "IntelliJ IDEA"],
    },
  ],
  [
    {
      title: "DevOps & Backend",
      items: ["Node.js", "Express.js", "REST APIs", "JWT/Session Authentication", "Docker", "Linux CLI"],
    },
    {
      title: "DSA & Software Engineering",
      items: ["Linked Lists", "Stacks", "Queues", "Trees", "Graphs", "Backtracking", "Code Optimization", "Debugging", "SDLC"],
    },
    {
      title: "Soft Skills",
      items: ["Storytelling", "Teamwork", "Problem Solving", "Creativity", "Adaptability", "Leadership", "Communication (EN & FR)"],
    },
  ],
];

export default function Skills() {
  const stageRef = useRef();
  const [showOrbs, setShowOrbs] = useState(window.innerWidth > 786);

  useEffect(() => {
    const handleResize = () => setShowOrbs(window.innerWidth > 786);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!showOrbs) return;
    const stage = stageRef.current;
    if (!stage) return;
    const circles = Array.from(stage.querySelectorAll(".skill-circle"));
    const rect = stage.getBoundingClientRect();
    const placed = [];

    const isOverlapping = (x, y, size) =>
      placed.some((p) => {
        const dx = p.x - x;
        const dy = p.y - y;
        return Math.sqrt(dx * dx + dy * dy) < p.size / 2 + size / 2 + 40;
      });

    circles.forEach((circle, i) => {
      const size = circle.offsetWidth;
      let x, y, tries = 0;
      do {
        x = Math.random() * (rect.width - size - 20);
        y = Math.random() * (rect.height - size - 20);
        tries++;
      } while (isOverlapping(x, y, size) && tries < 150);

      placed.push({ x, y, size });
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      const dx = (Math.random() - 0.5) * 100;
      const dy = (Math.random() - 0.5) * 100;
      circle.animate(
        [
          { transform: "translate(0,0)" },
          { transform: `translate(${dx}px, ${dy}px)` },
        ],
        {
          duration: 5000 + Math.random() * 2000,
          direction: "alternate",
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
    });
  }, [showOrbs]);

  return (
    <section className="skills-container" id="skills">
      <motion.div className="skills-header" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h2>My Skills</h2>
        <p>✨ Technical expertise blended with creativity - explore my core competencies below.</p>
      </motion.div>

      {showOrbs && (
        <motion.div className="skills-stage" ref={stageRef} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }} style={{ width: "100%", height: "550px", position: "relative" }}>
          {SKILLS.map((s, i) => (
            <motion.div key={s.name} className="skill-circle" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.08, duration: 0.6 }} whileHover={{ scale: 1.3, boxShadow: "0 0 35px 10px rgba(0,255,255,0.6)", background: "rgba(0,255,255,0.12)" }}>
              <img src={s.logo} alt={s.name} />
              <span>{s.name}</span>
            </motion.div>
          ))}
        </motion.div>
      )}

      <div className="skills-table">
        {ROWS.map((row, rowIndex) => (
          <div key={rowIndex} className="skills-row">
            {row.map((col, colIndex) => (
              <motion.div key={col.title} className="skill-box" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.6, delay: (rowIndex + colIndex) * 0.1 }}>
                <h3>{col.title}</h3>
                <ul>
                  {col.items.map((item, i) => (
                    <motion.li key={i} whileHover={{ x: 6, color: "#00ffc8" }}>{item}</motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      {/* Achievements */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} style={{ marginTop: 40 }}>
        <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>🏆 Achievements</h4>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: 1.7, fontSize: 14 }}>
          <li>✔ Top 10 Team – HackIndia Hackathon 2024</li>
          <li>✔ Finalist – Lady Ada Hackathon (ACM India)</li>
          <li>✔ Rank 45 – GeeksforGeeks Coding Challenge</li>
          <li>✔ Solved 200+ DSA Problems</li>
          <li>✔ Built & deployed 6+ full-stack apps for startups & student communities</li>
          <li>✔ Best Debugging Award in internship (fixed 20+ production issues)</li>
          <li>✔ Led backend API development in a 3-member engineering team</li>
          <li>✔ Organized 5+ major technical events as ACM Secretary at Chitkara</li>
          <li>✔ Ranked Top 10% in university competitive coding leaderboard</li>
          <li>✔ Collaborated with 50+ students & faculty to grow coding culture</li>
        </ul>
      </motion.div>
    </section>
  );
}
