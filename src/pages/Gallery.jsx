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
      caption: "I am deeply honored and thrilled to announce my appointment as the Chairperson of the IEEE-CIET Student Branch at Chitkara University for the academic year 2025-26. This esteemed position is a recognition of the collective hard work, dedication, and collaborative spirit that defines our branch. I am eager to lead our dedicated team, guiding impactful initiatives that will continue to advance the mission and vision of IEEE WIE within our university community.",
      photos: ["/gallery/Chair2.JPG"],
    },
    {
      id: 2,
      caption: "I have been selected as the IEEEXtreme 19.0 Student Ambassador for the IEEE-CIET Student Branch! This incredible opportunity allows me to proudly represent our branch on a global stage by promoting IEEEXtreme, the highly prestigious international 24-hour coding competition.",
      photos: ["/gallery/IEEE-Xtreme.jpg"],
    },
    {
      id: 2,
      caption: "\"Automatic Car Wash System\" - Our 1st Prize Winner! This is the innovative project model that clinched the top spot at DICE TECHNOVISION 2.0. A testament to teamwork and technical ingenuity!",
      photos: ["/gallery/DICE.jpg"],
    },
    {
      id: 2,
      caption: "\"E-Waste Creations\" - Our 1st Prize Innovation! This gallery showcases the unique creations- like photo frames and décor- made from repurposed e-waste for the National Science Day 2024 Carnival. A powerful display of creativity, sustainability, and commitment to a Viksit Bharat!",
      photos: ["/gallery/Carnival2.jpg"],
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
