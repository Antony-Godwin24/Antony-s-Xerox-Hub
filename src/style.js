const styles = {
  root: {
    overflowX: "hidden",
  },

  /* ===== HERO SECTION ===== */
  hero: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    opacity: 1,
    transform: "translateY(0)",
    transition: "opacity 0.6s, transform 0.6s",
    willChange: "opacity, transform",
  },
  heroBg: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
    transition: "opacity 0.5s",
  },
  // More shade only on left, fade to transparent on right!
  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    // deep black on left, fades out to right
    background:
      "linear-gradient(90deg, rgba(15,20,35,0.88) 0%, rgba(44,53,100,0.67) 35%, rgba(0,0,0,0.18) 65%, rgba(0,0,0,0.00) 100%)",
    pointerEvents: "none",
    transition: "background 0.3s",
  },
  // Stylish heroContent
  heroContent: {
    color: "white",
    maxWidth: "600px",
    position: "relative",
    zIndex: 2,
    p: 4,
    transition: "opacity 0.6s, transform 0.6s",
    "@media (max-width: 900px)": {
      maxWidth: "100%",
      textAlign: "center",
      mx: "auto",
    },
  },
  // Title: bold, gradient, spaced
  heroTitle: {
    fontSize: { xs: "3rem", md: "4.5rem" },
    fontWeight: 800,
    letterSpacing: "1.5px",
    mb: 3,
    lineHeight: 1.0,
    background: "linear-gradient(270deg, #ffd700, #fff, #ffb84f)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "2px 2px 12px rgba(0,0,0,0.30)",
    transition: "color 0.3s",
  },
  // Subtitle: bold, spaced, accent color
  heroSubtitle: {
    fontSize: { xs: "1.3rem", md: "2.2rem" },
    fontWeight: 700,
    mb: 3,
    opacity: 1,
    color: "#ffd700",
    letterSpacing: "1px",
    textShadow: "1px 2px 9px rgba(0,0,0,0.21)",
  },
  // Description: clear, animated, support grad text and highlight spans
  heroDescription: {
    fontSize: { xs: "1.05rem", md: "1.25rem" },
    fontWeight: 500,
    maxWidth: "560px",
    lineHeight: 1.5,
    marginBottom: "2.2rem",
    color: "#fff",
    opacity: 0.98,
    textShadow: "1px 2px 8px rgba(0,0,0,0.16)",
    transition: "all 0.3s",
    "& span": {
      fontWeight: 700,
      color: "#ffd700",
      fontSize: "1.12rem",
    },
  },
  heroStats: {
    display: "flex",
    justifyContent: "flex-start",
    gap: 3,
    mb: 4,
    flexWrap: "wrap",
    transition: "all 0.3s",
    "@media (max-width: 900px)": {
      justifyContent: "center",
    },
  },
  statBadge: {
    background: "rgba(36,36,36,0.44)",
    borderRadius: "16px",
    padding: "1rem 1.7rem",
    border: "1px solid rgba(255,255,255,0.13)",
    textAlign: "center",
    minWidth: "120px",
    color: "#fff",
    fontWeight: 700,
    fontSize: "1.08rem",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "scale(1.03) translateY(-5px)",
      boxShadow: "0 8px 20px rgba(15,20,35,0.20)",
    },
  },
  statNumber: {
    fontSize: "1.6rem",
    fontWeight: 900,
    display: "block",
    color: "#ffd700",
    letterSpacing: "0.5px",
    transition: "all 0.3s",
  },
  statLabel: {
    fontSize: "0.9rem",
    color: "#eee",
    opacity: 0.94,
    fontWeight: 500,
    letterSpacing: "0.3px",
  },
  heroButtons: {
    display: "flex",
    gap: 2,
    justifyContent: "flex-start",
    flexWrap: "wrap",
    mt: 2,
    transition: "all 0.3s",
    "@media (max-width: 900px)": {
      justifyContent: "center",
    },
  },
  primaryButton: {
    background: "linear-gradient(45deg, #ff6b6b, #ffa726)",
    color: "white",
    padding: "1rem 2rem",
    fontSize: "1.12rem",
    fontWeight: 700,
    borderRadius: "50px",
    textTransform: "none",
    letterSpacing: "1px",
    boxShadow: "0 8px 25px rgba(255,107,107,0.22)",
    transition: "all 0.3s",
    "&:hover": {
      background: "linear-gradient(45deg, #ff5252, #ff9800)",
      transform: "translateY(-2px) scale(1.04)",
      boxShadow: "0 14px 31px rgba(255, 107, 107, 0.33)",
    },
  },
  secondaryButton: {
    borderColor: "white",
    color: "white",
    padding: "1rem 2rem",
    fontSize: "1.12rem",
    fontWeight: 700,
    borderRadius: "50px",
    textTransform: "none",
    letterSpacing: "1px",
    boxShadow: "none",
    border: "2px solid white",
    transition: "all 0.3s",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.08)",
      transform: "translateY(-2px) scale(1.04)",
    },
  },
  /* ========== FEATURES ========== */
  featureItem: {
    textAlign: "center",
    p: 3,
    borderRadius: "15px",
    background: "rgba(255, 255, 255, 0.9)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    },
  },
  featureIcon: {
    fontSize: "3rem",
    mb: 1,
    transition: "transform 0.3s ease, color 0.3s ease",
    "&:hover": {
      transform: "scale(1.1)",
      color: "#ff6b6b",
    },
  },
  featureTitle: {
    fontWeight: 700,
    mb: 1,
    color: "#2c3e50",
  },
  featureDesc: {
    color: "#7f8c8d",
    fontSize: "0.9rem",
  },

  /* ========== SERVICES SECTION ========== */
  servicesSection: {
    py: 10,
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    position: "relative",
    opacity: 1, // visible
    transform: "translateY(0)",
    transition: "opacity 0.6s ease, transform 0.6s ease",
  },
  sectionTitle: {
    textAlign: "center",
    fontWeight: 700,
    mb: 3,
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
    fontSize: { xs: "2rem", md: "3rem" },
  },
  sectionSubtitle: {
    textAlign: "center",
    fontSize: { xs: "1rem", md: "1.2rem" },
    opacity: 0.9,
    maxWidth: "600px",
    mx: "auto",
    mb: 4,
  },
  serviceCard: {
    borderRadius: "20px",
    background: "white",
    textAlign: "center",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
    },
  },
  serviceTitle: {
    fontWeight: 700,
    mb: 2,
    color: "#2c3e50",
    fontSize: "1.5rem",
  },
  serviceDescription: {
    color: "#7f8c8d",
    mb: 3,
    lineHeight: 1.6,
  },
  serviceFeatures: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },
  featureBadge: {
    background: "linear-gradient(45deg, #667eea, #764ba2)",
    color: "white",
    padding: "8px 16px",
    borderRadius: "25px",
    fontSize: "0.9rem",
    textAlign: "center",
    fontWeight: 600,
    transition: "background 0.3s ease, transform 0.3s ease",
    "&:hover": { transform: "scale(1.05)", background: "#667eea" },
  },

  /* ========== TESTIMONIALS ========== */
  testimonialsSection: {
    py: 10,
    background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    position: "relative",
    opacity: 1, // visible
    transform: "translateY(0)",
    transition: "opacity 0.6s ease, transform 0.6s ease",
  },
  testimonialCard: {
    maxWidth: "700px",
    mx: "auto",
    borderRadius: "25px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    mt: 4,
    background: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(10px)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
    },
  },
  starsContainer: {
    display: "flex",
    justifyContent: "center",
    mb: 2,
    gap: 0.5,
  },
  testimonialText: {
    fontSize: { xs: "1rem", md: "1.2rem" },
    fontStyle: "italic",
    mb: 3,
    color: "#2c3e50",
    lineHeight: 1.6,
  },
  testimonialAuthor: {
    fontWeight: 700,
    color: "#667eea",
    fontSize: "1.1rem",
  },

  /* ========== INFO SECTION ========== */
  infoSection: {
    py: 10,
    background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    opacity: 1,
    transform: "translateY(0)",
    transition: "opacity 0.6s ease, transform 0.6s ease",
  },
  infoCard: {
    background: "rgba(255, 255, 255, 0.9)",
    borderRadius: "20px",
    width: "100%",
    maxWidth: "500px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    overflow: "hidden",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    },
  },
  infoTitle: {
    fontWeight: 700,
    mb: 3,
    color: "#2c3e50",
    fontSize: { xs: "1.5rem", md: "2rem" },
    textAlign: "center",
  },
  quickStat: {
    textAlign: "center",
    p: 3,
    borderRadius: "20px",
    background: "linear-gradient(45deg, #667eea, #764ba2)",
    color: "white",
    transition: "transform 0.3s ease",
    "&:hover": { transform: "scale(1.05)" },
  },
  quickStatNumber: {
    fontSize: { xs: "1.5rem", md: "2rem" },
    fontWeight: 700,
    display: "block",
  },
  quickStatLabel: {
    fontSize: "0.9rem",
    opacity: 0.9,
  },

  /* ========== CONTACT SECTION ========== */
  contactSection: {
    py: 10,
    background: "linear-gradient(135deg, #e0f7fa, #ffffff)",
    color: "black",
    position: "relative",
    opacity: 1,
    transform: "translateY(0)",
    transition: "opacity 0.6s ease, transform 0.6s ease",
  },
  contactCard: {
    borderRadius: "25px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
    mt: 4,
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(15px)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
    },
  },
  contactForm: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  textField: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "15px",
      background: "rgba(255, 255, 255, 0.8)",
      transition: "border-color 0.3s ease, background 0.3s ease",
      "& fieldset": {
        borderColor: "rgba(102, 126, 234, 0.3)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(102, 126, 234, 0.6)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#667eea",
      },
    },
    "& .MuiInputLabel-root": {
      color: "#667eea",
    },
  },
  submitButton: {
    background: "linear-gradient(45deg, #ff6b6b, #ffa726)",
    color: "white",
    padding: "1rem",
    fontSize: "1.2rem",
    fontWeight: 700,
    borderRadius: "15px",
    textTransform: "none",
    boxShadow: "0 8px 25px rgba(255, 107, 107, 0.4)",
    transition:
      "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
    "&:hover": {
      background: "linear-gradient(45deg, #ff5252, #ff9800)",
      transform: "translateY(-3px)",
      boxShadow: "0 12px 30px rgba(255, 107, 107, 0.6)",
    },
  },

  /* ========== FOOTER ========== */
  footer: {
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    color: "white",
    py: 6,
    opacity: 1,
    transform: "translateY(0)",
    transition: "opacity 0.6s ease, transform 0.6s ease",
  },
};

export default styles;
