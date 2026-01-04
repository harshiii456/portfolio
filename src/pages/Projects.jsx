import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
	{
		title: '🤖 Code Meet - Let us code together',
		desc: 'CodeMeet is a modern web application built on the MERN stack, designed to provide seamless virtual collaboration through real-time video meetings and collaborative coding environments. It integrates video conferencing, live chat, and a shared online compiler into a single platform.',
		ss: '/codeMeet.png',
		tech: ['React', 'Vite', 'Express', 'Socket.IO'],
		live: 'https://codemeet-x50a.onrender.com',
		code: 'https://github.com/harshiii456/Codemeet',
	},
	{
		title: 'CPU Scheduling Simulator',
		desc: 'This project simulates various CPU scheduling algorithms to demonstrate how different algorithms impact system performance. The goal is to help understand and compare the efficiency of different scheduling strategies used by operating systems for CPU resource allocation.',
		ss: '/CPU.png',
		tech: ['React', 'Vite', 'DOM', 'Framer Motion', 'Lucide React', 'D3.js', 'Tailwind CSS'],
		live: 'https://cpu-schedular-q2mg.onrender.com',
		code: 'https://github.com/harshiii456/CPU-Schedular-',
	},
	{
		title: '💼 Portfolio Website',
		desc: 'A modern and responsive portfolio built with React and Framer Motion, showcasing projects, skills, and achievements with smooth animations and interactive UI.',
		ss: '/portfolio.jpg',
		tech: ['React', 'Framer Motion', 'Tailwind CSS'],
		live: 'https://portfolio-ibgw.onrender.com/',
		code: 'https://github.com/harshiii456/portfolio',
	},
]

export default function Projects() {
	return (
		<motion.section
			className="container"
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			id="projects"
			style={{
				display: 'flex',
				justifyContent: 'center', // center align the section
				alignItems: 'flex-start',
				width: '100%',
			}}
		>
			<div
				className="card"
				style={{
					background: '#1A1A1A',
					borderRadius: 16,
					padding: 24,
					boxShadow: '0 0 20px rgba(0,255,255,0.04)',
					width: '100%',
					maxWidth: 1100, // wider for better centering
					margin: '0 auto',
				}}
			>
				<motion.h2
					className="projects-title"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.1 }}
					style={{
						fontSize: '1.5rem',
						fontWeight: 600,
						color: '#06b6d4',
						marginBottom: '0.3rem',
						textAlign: 'center', // center headline
					}}
				>
					🚀 Projects
				</motion.h2>
				<p
					className="projects-subtitle"
					style={{
						fontSize: '0.88rem',
						marginBottom: '1.5rem',
						color: '#9aa0a6',
						textAlign: 'center', // center subtitle
					}}
				>
					A collection of my major works-blending research, AI innovation, and real-world business impact.
				</p>

				<div className="projects-grid" style={{ justifyItems: 'center', alignItems: 'stretch' }}>
					{PROJECTS.map((p, idx) => (
						<motion.div
							key={idx}
							className="project-card"
							initial={{ opacity: 0, y: 20, scale: 0.95 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							transition={{ duration: 0.4, delay: idx * 0.15 }}
							whileHover={{ scale: 1.03 }}
							viewport={{ once: true }}
							style={{
								background: '#181818',
								border: '1px solid rgba(6,182,212,0.18)',
								borderRadius: 16,
								padding: 14,
								fontSize: '0.88rem',
								boxShadow: '0 0 12px rgba(6,182,212,0.07)',
								width: '100%',
								maxWidth: 370,
								margin: '0 auto',
								alignSelf: 'stretch',
							}}
						>
							<motion.div
								className="project-ss"
								whileHover={{ scale: 1.05 }}
								style={{ borderRadius: 12, overflow: 'hidden' }}
							>
								<img
									src={p.ss}
									alt={p.title + " screenshot"}
									style={{
										width: '100%',
										height: '200px',
										objectFit: 'cover',
										borderRadius: 12,
									}}
								/>
							</motion.div>

							<div className="project-content" style={{ marginTop: 10 }}>
								<h3 className="project-title" style={{
									fontSize: '1rem',
									color: '#0ea5e9',
									marginBottom: 4,
									fontWeight: 500,
									textAlign: 'left'
								}}>
									{p.title}
								</h3>
								<p className="project-desc" style={{
									fontSize: '0.9rem',
									color: '#bbb',
									marginBottom: 7,
									lineHeight: 1.5,
									textAlign: 'justify'
								}}>
									{/* Proofread and clarify for impact/results */}
									{p.title.includes('Code Review AI') && (
										<>
											Developed an AI-powered platform that reviews code in real-time, providing actionable suggestions to improve performance, security, and code quality. Helped developers reduce review time and increase code reliability.
										</>
									)}
									{p.title.includes('E-Commerce Sales') && (
										<>
											Built a Power BI dashboard analyzing Amazon sales data to uncover trends, top products, and customer behavior. Enabled business users to make data-driven decisions, resulting in improved sales strategies.
										</>
									)}
									{p.title.includes('Uber Ride Analysis') && (
										<>
											Created an interactive dashboard for Uber ride data, revealing booking trends and operational performance. Supported management in optimizing routes and increasing revenue.
										</>
									)}
									{p.title.includes('Pharmaceutical Sales') && (
										<>
											Analyzed global pharma sales data to deliver insights on regional and team performance. Helped leadership identify growth opportunities and optimize distribution.
										</>
									)}
									{p.title.includes('ProfileX') && (
										<>
											Engineered a web app for smart data profiling and preprocessing of CSV datasets, streamlining feature analysis and visualization for data scientists.
										</>
									)}
									{p.title.includes('Loan Status Prediction') && (
										<>
											Developed a machine learning model to predict loan approvals, improving risk assessment and decision-making for financial institutions.
										</>
									)}
									{p.title.includes('Netflix Content Library') && (
										<>
											Analyzed Netflix's catalog to extract content trends and viewer preferences, presenting findings via interactive Power BI reports for business insights.
										</>
									)}
									{p.title.includes('Bengaluru Rides Analysis') && (
										<>
											Explored ride data from Bengaluru to identify urban mobility patterns, supporting data-driven improvements in city transportation.
										</>
									)}
									{p.title.includes('Portfolio Website') && (
										<>
											Designed and built a modern, responsive portfolio to showcase projects, skills, and achievements, enhancing personal branding and outreach.
										</>
									)}
									{/* fallback for any new projects */}
									{![
										'Code Review AI - Intelligent Code Analysis Tool',
										'E-Commerce Sales Performance & Profitability Analysis',
										'Uber Ride Analysis - End-to-End Business Intelligence Dashboard',
										'Pharmaceutical Sales Analysis Dashboard',
										'ProfileX – Data Profiler',
										'Loan Status Prediction',
										'Netflix Content Library',
										'Bengaluru Rides Analysis (OLA)',
										'Portfolio Website'
									].some(title => p.title.includes(title)) && p.desc}
								</p>
								<div className="project-tech" style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
									{p.tech.map((t) => (
										<span
											key={t}
											className="tech-badge"
											style={{
												background: 'rgba(6,182,212,0.08)',
												border: '1px solid #06b6d4',
												padding: '2px 8px',
												borderRadius: 6,
												fontSize: '0.73rem',
												color: '#06b6d4',
												fontWeight: 500,
											}}
										>
											{t}
										</span>
									))}
								</div>
								<div className="project-links" style={{
									display: 'flex',
									justifyContent: 'flex-end',
									gap: 8,
									marginTop: 18,
								}}>
									<motion.a
										href={p.code}
										target="_blank"
										rel="noreferrer"
										className="btn code-btn"
										whileHover={{ scale: 1.08 }}
										style={{
											display: 'flex',
											alignItems: 'center',
											gap: 4,
											padding: '4px 10px',
											borderRadius: 6,
											fontSize: '0.78rem',
											textDecoration: 'none',
											cursor: 'pointer',
											background: '#181818',
											color: '#06b6d4',
											border: '1px solid #06b6d4',
											fontWeight: 500,
											transition: 'background 0.2s, color 0.2s',
										}}
									>
										<Github size={14} /> Source
									</motion.a>
									<motion.a
										href={p.live}
										target="_blank"
										rel="noreferrer"
										className="btn live-btn"
										whileHover={{ scale: 1.08 }}
										style={{
											display: 'flex',
											alignItems: 'center',
											gap: 4,
											padding: '4px 10px',
											borderRadius: 6,
											fontSize: '0.78rem',
											textDecoration: 'none',
											cursor: 'pointer',
											background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
											color: '#fff',
											border: 'none',
											fontWeight: 500,
											transition: 'background 0.2s, color 0.2s',
										}}
									>
										<ExternalLink size={14} /> Live
									</motion.a>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	)
}
