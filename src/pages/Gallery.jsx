import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "../CSS/Gallery.css";

const IMAGES = {
  personal: [
    {
      id: 1,
      caption: `What started as a classroom activity soon turned into one of the most memorable learning experiences of my journey at Chitkara University.

During our final Shark Tank–style session, my team and I stepped into the shoes of entrepreneurs to pitch an idea we passionately believed in — “Calories Meter Spoon.” The idea was simple yet powerful: a smart solution that helps people track their calorie intake effortlessly, making healthier choices easier in everyday life.

Standing in front of the panel, presenting our idea, answering questions, and defending our vision was both nerve-racking and exhilarating. It tested our creativity, teamwork, and communication skills — and reminded us that innovation thrives where collaboration meets courage.

This experience taught me far more than pitching an idea. It taught me how to think like a problem-solver, work like a team player, and present like an entrepreneur. A simple spoon became a symbol of learning by doing, and a reminder that impactful ideas can come from anywhere — even a classroom.`,
      photos: ["/gallery/IMG_9442.jpg"],
    },
    {
      id: 2,
      caption:
        `ROCS 2025 marked a significant milestone in my journey as it was my first event as the Secretary of the Chitkara ACM Student Chapter. Coordinating a conference of this scale, in collaboration with Chitkara University, Punjab and CRIO, was both a challenge and a rewarding learning experience. With the guidance of our mentors and the collective effort of a dedicated organizing team, ROCS 2025 was executed seamlessly. This experience strengthened my leadership, communication, and organizational skills, and reinforced my passion for building platforms that foster learning, collaboration, and innovation.`,
      photos: [ "/gallery/acm.jpg"],
    },
  ],
  achievements: [
    {
      id: 1,
      caption: "Event with Ananya Birla** 🌟I had the immense pleasure of organizing an incredible event alongside my dedicated team, welcoming the multi-talented Ananya Birla, the phenomenal Indian singer, songwriter, and entrepreneur, at Chitkara University. It was a memorable experience to curate and execute an event of such significance.Heartfelt gratitude goes to Chitkara University for providing us with this enriching opportunity. A special acknowledgment to piyush sir for his unwavering support and guidance throughout this endeavor.",
      photos: ["/gallery/ach4.jpg"],
    },
    {
      id: 2,
      caption: "Grateful for an Incredible Experience with Aman Gupta , Co-Founder, and CMO at boAt Lifestyle by CEED department of Chitkara University 🌟 It was an absolute honor to organize and be a part of an amazing event alongside my incredible team. Collaborating with Aman Gupta was truly enlightening and insightful. His expertise and vision in the industry are unparalleled, and the opportunity provided by Chitkara University and Piyush sir was a game-changer!🙏 Heartfelt gratitude to Chitkara University and Mr. Piyush sir for entrusting us with this incredible opportunity. The event was a testament to the power of collaboration and learning, and I'm immensely proud of what we achieved together..",
      photos: ["/gallery/ach3.jpg"],
    },
    {
      id: 2,
      caption: "It was an absolute pleasure to host Ghazal Alagh the Co-founder of Mamaearth, at our Explore Talks event in Chitkara University. Her insightful discussion on the integration of technology in the makeup industry 💄💅 was truly inspiring.🤝Ghazal Alagh highlighted the immense potential technology holds in revolutionizing the makeup industry, emphasizing its role in innovation, sustainability, and inclusivity. She encouraged us to embrace technological advancements to create safer, more diverse, and environmentally conscious beauty products.",
      photos: ["/gallery/ach2.jpg"],
    },
    {
      id: 2,
      caption: "I am incredibly grateful to Piyush Sir and Kaniz Fatima Di for giving me the wonderful opportunity to connect with Shobha Jagathpal through Explore Talks. Being able to meet and learn from someone of her experience during the Explore Talks session was truly inspiring and insightful. This interaction not only broadened my perspective but also motivated me to keep pushing my boundaries and grow as a developer and learner. I deeply appreciate the guidance, trust, and platform provided by my mentors via Explore Talks, which allowed me to be part of such a meaningful conversation and learning experience.",
      photos: ["/gallery/ach1.jpg"],
    },
    {
      id: 2,
      caption: "Presenting my products — handmade bracelets and custom-designed stickers — for the very first time was a proud and defining moment in my creative and entrepreneurial journey. During an Explore Talks session, I had the opportunity to showcase my handcrafted work, explaining the thought process, creativity, and effort behind each piece. Sharing bracelets I personally designed and stickers I illustrated by hand allowed me to express my passion for art, design, and product creation beyond just development. This experience helped me build confidence, improve my communication skills, and understand the importance of storytelling in product presentation. It marked the beginning of my journey in presenting ideas with authenticity, embracing feedback, and creating products that connect emotionally with people — a milestone that continues to inspire me to build and create with purpose.",
      photos: ["/gallery/ach5.jpg"],
    },
    {
      id: 2,
      caption: "As the Graphics Head of the Chitkara ACM Student Chapter, I lead the visual design and creative direction for chapter initiatives. I design digital assets, branding elements, and promotional graphics that reflect ACM’s vision of innovation, learning, and community impact. Taking ownership of the graphics domain has strengthened my design thinking, leadership, and ability to communicate ideas visually. I collaborate closely with team heads across technical and non-technical domains to create engaging visuals for events, Explore Talks, campaigns, and social outreach. This role allows me to blend creativity with purpose, crafting designs that inspire students, build community identity, and elevate the chapter’s presence across platforms — contributing to a culture of learning driven by thoughtful and impactful visual storytelling.",
      photos: ["/gallery/ach6.jpg"],
    },
    {
      id: 2,
      caption: "🌟 Thrilled to share the incredible success of ISCCSC-2024, the First International Conference on Smart Computing and Communication for Sustainable Convergence, organized by the Centre for Research Impact and Outcome! 🎉 As a proud student of Chitkara University, I’m honored to have played a role in this groundbreaking event, thanks to the unwavering support of the Chitkara ACM Student Chapter team and many dedicated individuals.",
      photos: ["/gallery/ach7.jpg"],
    },
    {
      id: 2,
      caption: "I recently had the incredible opportunity to contribute as a Student Coordinator at the BSAI Opportunity Summit—a vibrant 3-day conclave hosted by Chitkara University in association with the Boarding School Association of India and the MU20 School Of Opportunity .The event brought together 350+ brilliant students from 26 of the country's leading boarding schools, creating a melting pot of ideas, cultures, and youthful energy.From spirited hackathons and thought-provoking debates to theatrical performances, quizzes, and creative showcases—each moment reflected the limitless potential of today’s youth.",
      photos: ["/gallery/ach8.jpg"],
    },
    {
      id: 2,
      caption: "✨Grateful. Inspired. Empowered ✨.I’m beyond thrilled to share my incredible experience as part of the Organizing Committee for ILMUNC India 2025, hosted at Chitkara University and organized in collaboration with the prestigious Rishi Jalan and University of Pennsylvania.Being part of this conference was more than just an event — it was a journey of leadership, collaboration, growth, and global connection. 🌍",
      photos: ["/gallery/ach9.jpg"],
    },
    {
      id: 2,
      caption: "Officially part of the Google Gemini squad as a Google Student Ambassador – and the onboarding kit just dropped like it’s hot! 🔥Got the cap, tee, pens, and a whole lot of motivation to go with it.This isn’t just merch – it’s my *starter pack* for a journey of learning, leading, and geeking out with a global community of changemakers. 💻🚀From sharing ideas to sparking innovation on campus, I’m beyond excited to wear this role with pride (literally 😄).Big thanks to Google for the warm welcome – let’s do something epic. 💥",
      photos: ["/gallery/ach10.jpg"],
    },
    {
      id: 2,
      caption: "Being appointed as the Secretary of the ACM Student Chapter marked a significant step in my leadership and professional journey at Chitkara University. In this role, I manage chapter operations, coordinate communication between team heads, document key decisions, and ensure the smooth execution of technical and community-driven initiatives, including Explore Talks and student engagement activities. This responsibility has strengthened my organizational skills, teamwork, and ability to lead with clarity and efficiency. I actively contribute to building a collaborative environment that empowers students to learn, innovate, and grow through hackathons, events, and industry interactions. Serving as Secretary allows me to support the chapter’s mission while growing as a leader who values structure, communication, and meaningful impact in every initiative I help drive.",
      photos: ["/gallery/ach11.jpg"],
    },
  ],
};

// ✨ Animation Variants
const pageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }, // reduced from 0.6 to 0.3
};

// ✨ Tab Switching Animations
const tabContentVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -30, scale: 0.98, transition: { duration: 0.4 } },
};

export default function Gallery() {
  const [tab, setTab] = useState("personal");
  const [zoom, setZoom] = useState({ img: null, post: null, index: 0 });

  const openZoom = (post, index) =>
    setZoom({ img: post.photos[index], post, index });

  const closeZoom = () => setZoom({ img: null, post: null, index: 0 });

  const nextImage = () => {
    if (!zoom.post) return;
    const nextIndex = (zoom.index + 1) % zoom.post.photos.length;
    setZoom({ ...zoom, img: zoom.post.photos[nextIndex], index: nextIndex });
  };

  const prevImage = () => {
    if (!zoom.post) return;
    const prevIndex =
      (zoom.index - 1 + zoom.post.photos.length) % zoom.post.photos.length;
    setZoom({ ...zoom, img: zoom.post.photos[prevIndex], index: prevIndex });
  };

  // Add a tab config that maps internal keys to display labels.
  const TABS = [
    { key: "personal", label: "Grow" },
    { key: "achievements", label: "Achievements" },
  ];

  // Safe posts fallback to avoid mapping undefined
  const posts = IMAGES[tab] || [];

  // Responsive: 2 columns for achievements on desktop, 1 on mobile
  const isAchievements = tab === "achievements";

  return (
    <motion.section
      className="gallery-container"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      style={{ marginLeft: "10px", marginRight: "10px" }}
    >
      {/* 🌟 Title */}
      <motion.h2 className="gallery-title" variants={childVariants} style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12, textAlign: "center" }}>
        Gallery
      </motion.h2>

      {/* 🧭 Tabs */}
      <motion.div className="tab-buttons" variants={childVariants}>
        {TABS.map((t) => (
          <motion.button
            key={t.key}
            className={`tab ${tab === t.key ? "active" : ""}`}
            onClick={() => setTab(t.key)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.label}
          </motion.button>
        ))}
      </motion.div>

      {/* 🖼️ Posts with Animation on Tab Switch */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          className={`post-feed${isAchievements ? " achievements-feed" : ""}`}
          variants={tabContentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {posts.map((post, postIdx) => (
            <React.Fragment key={`${post.id}-${postIdx}`}>
              <motion.div
                className="post-card"
                variants={childVariants}
                whileHover={{ y: -4 }}
                style={{ marginLeft: "8px", marginRight: "8px" }}
              >
                {/* Title above text content */}
                <div className="post-title">
                  {isAchievements ? `Achievement #${postIdx + 1}` : `Story #${postIdx + 1}`}
                </div>
                <p className="caption" style={{ textAlign: "justify" }}>{post.caption}</p>
                <div
                  className={`photo-grid ${
                    post.photos.length > 1 ? "multi" : "single"
                  }`}
                >
                  {post.photos.map((src, i) => (
                    <motion.div
                      key={i}
                      className="photo-item"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 250 }}
                      onClick={() => openZoom(post, i)}
                    >
                      <img src={src} alt="gallery" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              {/* Divider for mobile only */}
              <div className="post-divider"></div>
            </React.Fragment>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* 🔍 Zoom Overlay */}
      <AnimatePresence>
        {zoom.img && (
          <motion.div
            className="zoom-overlay"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(6px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
          >
            <motion.img
              key={zoom.img}
              src={zoom.img}
              alt="zoom"
              className="zoom-img"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {zoom.post?.photos.length > 1 && (
              <>
                <button className="nav-btn left" onClick={prevImage}>
                  <ChevronLeft size={32} />
                </button>
                <button className="nav-btn right" onClick={nextImage}>
                  <ChevronRight size={32} />
                </button>
              </>
            )}
            <button className="close-btn" onClick={closeZoom}>
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
