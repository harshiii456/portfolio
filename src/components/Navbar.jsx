import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom"; // add useLocation
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Gallery", to: "/gallery" },
  { label: "Skills", to: "/skills" },
  { label: "Certificates", to: "/certificates" },
  { label: "Blog", to: "/blog" },
  { label: "Resume", to: "/resume" },
  { label: "About Me", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const navRef = useRef(null);
  const linksRef = useRef(null);

  // breakpoint to force mobile layout on narrow screens
  const MOBILE_BREAKPOINT = 920;

  // Check if links overflow nav width (to show hamburger) OR small screen
  const checkOverflow = () => {
    if (!navRef.current || !linksRef.current) return;
    const navWidth = navRef.current.offsetWidth;
    const linksWidth = linksRef.current.scrollWidth;
    const shouldShow =
      window.innerWidth <= MOBILE_BREAKPOINT ||
      linksWidth > navWidth - 120;
    setShowButton(shouldShow);
    if (!shouldShow) setIsOpen(false); // close mobile menu when switching to desktop
  };

  useEffect(() => {
    checkOverflow();
    const onResize = () => checkOverflow();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // close mobile menu on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // simple click-outside close when mobile menu open
  useEffect(() => {
    const onClick = (e) => {
      if (!isOpen) return;
      if (navRef.current && !navRef.current.contains(e.target)) {
        // allow clicks inside mobile menu (it is fixed overlay), so also check
        const mobileMenu = document.getElementById("mobile-menu-overlay");
        if (mobileMenu && !mobileMenu.contains(e.target)) {
          setIsOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [isOpen]);

  return (
    <>
      {/* --- Navbar --- */}
      <nav
        ref={navRef}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "clamp(0.6rem, 1.8vw, 1rem) clamp(1rem, 3.5vw, 2rem)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(10px)",
          fontFamily: "inherit",
          gap: 12,
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            minWidth: 0,
          }}
        >
          <motion.div
            className="logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{
              fontWeight: "bold",
              fontSize: "clamp(1rem, 3.5vw, 1.4rem)",
              color: "var(--accent)",
              flexShrink: 0,
            }}
          >
            KG
          </motion.div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minWidth: 0,
            }}
          >
            <h1
              style={{
                margin: 0,
                fontSize: "clamp(12px, 1.6vw, 14px)",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Harshita
            </h1>
            <div
              style={{
                fontSize: "clamp(10px,1.2vw,12px)",
                color: "var(--muted)",
                whiteSpace: "nowrap",
                opacity: 0.95,
              }}
            >
              Software Engineer | Graphic Designer
            </div>
          </div>
        </div>

        {/* Desktop links */}
        <div
          ref={linksRef}
          style={{
            display: showButton ? "none" : "flex",
            justifyContent: "center",
            gap: "2rem",
            alignItems: "center",
            flexGrow: 1,
            overflow: "hidden",
            paddingLeft: "1rem",
          }}
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              style={{
                position: "relative",
                fontSize: "0.95rem",
                textDecoration: "none",
                color: "white",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              {({ isActive }) => (
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    color: "var(--accent)",
                    textShadow: "0 0 8px var(--accent)",
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minWidth: 0,
                  }}
                >
                  <motion.span
                    animate={{ color: isActive ? "var(--accent)" : "white" }}
                    transition={{ duration: 0.3 }}
                    style={{ textOverflow: "ellipsis", overflow: "hidden" }}
                  >
                    {l.label}
                  </motion.span>
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        width: "70%",
                        height: "2px",
                        marginTop: "4px",
                        borderRadius: "1px",
                        backgroundColor: "var(--accent)",
                        boxShadow: "0 0 6px var(--accent)",
                      }}
                    />
                  )}
                </motion.div>
              )}
            </NavLink>
          ))}
        </div>

        {/* Hamburger */}
        {showButton && (
          <div className="mobile-btn" style={{ marginLeft: "auto" }}>
            <button
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu-overlay"
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: "1.8rem",
                cursor: "pointer",
                zIndex: 10000,
                padding: "6px 8px",
              }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        )}
      </nav>

      {/* --- Mobile Dropdown Menu --- */}
      <AnimatePresence>
        {isOpen && showButton && (
          <motion.div
            id="mobile-menu-overlay"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              background: "rgba(0,0,0,0.95)",
              backdropFilter: "blur(12px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              paddingTop: "calc(env(safe-area-inset-top, 0px) + 1.6rem)",
              overflowY: "auto",
              zIndex: 9999,
            }}
          >
            <button
              aria-label="Close menu"
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                fontSize: "2rem",
                color: "#fff",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                marginTop: "0.8rem",
              }}
            >
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setIsOpen(false)}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    padding: "1.1rem 1rem",
                    width: "100%",
                    textAlign: "center",
                    fontSize: "clamp(16px, 3.5vw, 18px)",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
