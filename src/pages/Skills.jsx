import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const SKILLS = [
	{
		name: "Python",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
	},
	// { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
	// { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
	{
		name: "Java",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
	},
	// { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
	// { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
	// { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
	// { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
	{
		name: "MySQL",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
	},
	{
		name: "MongoDB",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
	},
	{
		name: "Git",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
	},
	{
		name: "TensorFlow",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
	},
	{ name: "Pandas", logo: "/logos/pandas-img.png" },
	{ name: "DataBricks", logo: "/logos/DataBricks.png" },
	{ name: "Numpy", logo: "/logos/numpy.png" },
	{ name: "Matplotlib", logo: "/logos/matplotlib.png" },
	{ name: "GitHub", logo: "/logos/github.png" },
	{ name: "PowerBI", logo: "/logos/powerbi.png" },
	{ name: "Tableau", logo: "/logos/Tableau.png" },
	{ name: "Excel", logo: "/logos/excel.png" },
	{ name: "Visualization", logo: "/logos/dataVis.png" },
	{ name: "Google Suits", logo: "/logos/google.png" },
	// { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
	// { name: "OpenCV", logo: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg" },
];

const ROWS = [
	[
		{ title: "Languages", items: ["Python", "Java", "SQL"] },
		// { title: "Web Technologies", items: ["HTML", "CSS", "JavaScript", "React"] },
		{
			title: "Databases & Tools",
			items: [
				"MySQL",
				"MongoDB",
				"PowerBI",
				"Tableau",
				"Excel",
				"Power Point",
				"Git-GitHub",
				"DataBricks",
			],
		},
		{
			title: "Development Environment",
			items: ["PyCharm", "Jupyter Notebook", "Visual Studio Code", "IntelliJ IDEA"],
		},
	],
	[
		{
			title: "Data Analysis Libraries",
			items: ["Pandas", "Numpy", "Matplotlib", "Seaborn", "Scikit-Learn"],
		},
		{
			title: "Soft Skills",
			items: [
				"Story Telling",
				"Teamwork",
				"Problem Solving",
				"Creativity",
				"Adaptability",
				"Communication",
				"Leadership",
			],
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
				return (
					Math.sqrt(dx * dx + dy * dy) < p.size / 2 + size / 2 + 40
				);
			});

		circles.forEach((circle) => {
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
					{ transform: "translate(0, 0)" },
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
		<section
			className="skills-container"
			id="skills"
			style={{ marginLeft: "8px", marginRight: "8px" }}
		>
			{/* Header */}
			<motion.div
				className="skills-header"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<h2
					style={{
						fontSize: '1.5rem',
						fontWeight: 600,
						color: '#06b6d4',
						marginBottom: '0.3rem',
						textAlign: 'center',
						marginTop: 40, // <-- add this line for top margin
						
					}}
				>
					My Skills
				</h2>
				<div
					// style={{
					// 	width: 112,
					// 	height: 2,
					// 	background: "#00b4ff",
					// 	margin: "0 auto 24px auto",
					// 	borderRadius: 2,
					// }}
				></div>
				<p
					style={{
						fontSize: '0.88rem',
						marginBottom: '1.5rem',
						color: '#9aa0a6',
						textAlign: 'center', // center subtitle
					}}
				>
					✨ Technical expertise blended with creativity - explore my core
					competencies below.
				</p>
			</motion.div>

			{/* Floating Orbs with page-load + hover highlight animation */}
			{showOrbs && (
				<motion.div
					className="skills-stage relative mx-auto mb-20"
					ref={stageRef}
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1.2, ease: "easeOut" }}
					style={{
						width: "100%",
						height: window.innerWidth <= 400 ? "120px" : "550px",
						borderRadius: "25px",
						background:
							"radial-gradient(circle at 50% 50%, #0a0a0a, #101010)",
						overflow: "hidden",
						boxShadow: "inset 0 0 60px rgba(0,255,255,0.07)",
						position: "relative",
					}}
				>
					{SKILLS.map((s, i) => (
						<motion.div
							key={s.name}
							className="skill-circle"
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								delay: i * 0.08,
								duration: 0.6,
								ease: "easeOut",
							}}
							whileHover={{
								scale: 1.3,
								boxShadow: "0 0 35px 10px rgba(0,255,255,0.6)",
								background: "rgba(0,255,255,0.12)",
							}}
							style={{
								width: window.innerWidth <= 400 ? "32px" : "110px",
								height: window.innerWidth <= 400 ? "32px" : "110px",
								borderRadius: "50%",
								position: "absolute",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								background: "rgba(0,255,255,0.06)",
								border: "1px solid rgba(0,255,255,0.25)",
								backdropFilter: "blur(8px)",
								cursor: "pointer",
								transition:
									"box-shadow 0.4s ease, background 0.4s ease",
							}}
						>
							<motion.img
								src={s.logo}
								alt={s.name}
								style={{
									width: window.innerWidth <= 400 ? "12px" : "50px",
									height: window.innerWidth <= 400 ? "12px" : "50px",
									objectFit: "contain",
									filter:
										"drop-shadow(0 0 8px rgba(0,255,255,0.4)) brightness(1.2)",
									marginBottom: "5px",
								}}
								whileHover={{
									filter:
										"drop-shadow(0 0 12px rgba(0,255,255,0.9)) brightness(1.6)",
									rotate: [0, 6, -6, 0],
									transition: { duration: 0.5 },
								}}
							/>
							<span
								style={{
									color: "rgba(180,255,255,0.9)",
									fontSize: window.innerWidth <= 400 ? "7px" : "13px",
									fontWeight: 500,
									letterSpacing: "0.3px",
								}}
							>
								{s.name}
							</span>
						</motion.div>
					))}
				</motion.div>
			)}

			{/* Skills Table (Text Section) */}
			<div className="skills-table">
				{ROWS.map((row, rowIndex) => (
					<div key={rowIndex} className="skills-row">
						{row.map((col, colIndex) => (
							<motion.div
								key={col.title}
								className="skill-box"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								whileHover={{ scale: 1.05 }}
								transition={{
									duration: 0.6,
									delay: (rowIndex + colIndex) * 0.1,
								}}
							>
								<h3>{col.title}</h3>
								<ul>
									{col.items.map((item, i) => (
										<motion.li
											key={i}
											whileHover={{ x: 6, color: "#00ffc8" }}
										>
											{item}
										</motion.li>
									))}
								</ul>
							</motion.div>
						))}
					</div>
				))}
			</div>
		</section>
	);
}
