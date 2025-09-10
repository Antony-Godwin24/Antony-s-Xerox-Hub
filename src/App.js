import React, { useState, useEffect } from 'react';
import {Box,Typography,Button,Grid,Paper,TextField,Link,Container,Card,CardContent,Avatar,IconButton} from'@mui/material';
import {Print,CopyAll,Scanner,Speed,MonetizationOn,Verified,AccessTime,LocationOn,Phone,Star,WhatsApp,LinkedIn,
GitHub} from '@mui/icons-material';
import Gmail from "@mui/icons-material/Email";
import styles from './style';
const heroBgImg = "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1350&q=80"; 
const testimonial1Img = "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=200&q=80";
const testimonial2Img = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80";
const testimonial3Img = "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80";
const photocopyImg = "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80";
const scanningImg = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80";
const locationImg = "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=400&q=80";
const contactImg = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80";

const services = [
  {
    icon: <Print sx={{ fontSize: '4rem', color: '#ff6b6b' }} />,
    image: locationImg,
    title: 'Premium Printing',
    description: 'High-quality B/W & color prints for documents, resumes, projects, and presentations.',
    features: ['HD Quality', 'Fast Delivery', 'All Paper Sizes']
  },
  {
    icon: <CopyAll sx={{ fontSize: '4rem', color: '#4ecdc4' }} />,
    image: photocopyImg,
    title: 'Smart Photocopying',
    description: 'Crystal clear photocopies with single/double-sided options and bulk discounts for large orders.',
    features: ['Bulk Pricing', 'Quick Service', 'Perfect Quality']
  },
  {
    icon: <Scanner sx={{ fontSize: '4rem', color: '#45b7d1' }} />,
    image: scanningImg,
    title: 'Digital Solutions',
    description: 'Professional scanning and conversion to PDF, JPG, or direct email delivery with cloud storage options.',
    features: ['Multi-Format', 'Email Direct', 'Cloud Storage']
  }
];
// Features Data (with images)
const features = [
  { icon: <Speed sx={styles.featureIcon} />, image: photocopyImg, title: 'Lightning Fast', desc: 'Quick turnaround times for urgent orders' },
  { icon: <MonetizationOn sx={styles.featureIcon} />, image: locationImg, title: 'Student Friendly', desc: 'Special affordable pricing for students' },
  { icon: <Verified sx={styles.featureIcon} />, image: photocopyImg, title: 'Premium Quality', desc: 'Professional results every time' },
  { icon: <AccessTime sx={styles.featureIcon} />, image: scanningImg, title: 'Extended Hours', desc: '6AM to 11PM daily service' }
];
// Testimonials Data (with unique images)
const testimonials = [
  {
    name: "Priya S.",
    course: "CSE Final Year",
    img: testimonial1Img,
    rating: 5,
    text: "Amazing service! Got my project printed at midnight before submission. Antony bro saved my grades! The quality was perfect and the price was so reasonable."
  },
  {
    name: "Rajesh K.",
    course: "ECE 3rd Year",
    img: testimonial2Img,
    rating: 5,
    text: "Best quality prints near campus. Very affordable and super fast delivery. The staff is so friendly and helpful. Definitely recommend to all students!"
  },
  {
    name: "Meera T.",
    course: "IT 2nd Year",
    img: testimonial3Img,
    rating: 5,
    text: "Professional service with a personal touch. Antony bro always helps with urgent requirements. The new color printing quality is amazing!"
  }
];
// Info Section Data (with images)
const infoItems = [
  {
    icon: <LocationOn sx={{ fontSize: "3rem", color: "#ff6b6b" }} />,
    image: locationImg,
    title: "Our Location",
    desc: "Outside KRCE Campus Main Gate, Trichy"
  },
  {
    icon: <AccessTime sx={{ fontSize: "3rem", color: "#4ecdc4" }} />,
    image: scanningImg,
    title: "Working Hours",
    desc: "Open daily from 6 AM to 11 PM"
  },
  {
    icon: <Phone sx={{ fontSize: "3rem", color: "#45b7d1" }} />,
    image: contactImg,
    title: "Contact Us",
    desc: "+91 9994982519 / antonygodwin08@gmail.com"
  }
];

export default function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    try {
      const response = await fetch('https://formspree.io/f/mgvldyja', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        alert("🎉 Message sent successfully! We'll get back to you soon.");
        form.reset();
      } else {
        alert("❌ Something went wrong. Please try again or call us directly.");
      }
    } catch (error) {
      alert("❌ Network error. Please check your connection and try again.");
    }
  };
  return (
    <Box sx={styles.root}>
      {/* HERO SECTION: Man at Print Shop as BG, Overlay for Contrast */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: `url(${heroBgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right top',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: '40%',
            bottom: 0,
            background: 'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%, transparent 100%)',
          },
          '@media (max-width: 900px)': {
            backgroundPosition: 'center',
            '&::before': { right: 0, background: 'rgba(0,0,0,0.6)' }
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={styles.heroContent}>
            <Typography variant="h1" sx={styles.heroTitle}>
              🖨️ Antony's Xerox Hub
            </Typography>
            <Typography variant="h4" sx={styles.heroSubtitle}>
              Your Campus Printing Partner 🎓
            </Typography>
            <Typography sx={styles.heroDescription}>
              Built with passion by a CSE student & entrepreneur to serve 
              students and businesses with <Box component="span" sx={{ color: '#ffd700', fontWeight: 700 }}>top-notch</Box> document services.
              <br />
              <Box component="span" sx={{ fontSize: '1.1rem', color: '#ffd700' }}>
                "Where Quality Meets Affordability" ✨
              </Box>
            </Typography>
            <Box sx={styles.heroStats}>
              <Box sx={styles.statBadge}>
                <Typography sx={styles.statNumber}>3000+</Typography>
                <Typography sx={styles.statLabel}>Happy Students</Typography>
              </Box>
              <Box sx={styles.statBadge}>
                <Typography sx={styles.statNumber}>4.9★</Typography>
                <Typography sx={styles.statLabel}>Google Rating</Typography>
              </Box>
              <Box sx={styles.statBadge}>
                <Typography sx={styles.statNumber}>24/7</Typography>
                <Typography sx={styles.statLabel}>WhatsApp Support</Typography>
              </Box>
            </Box>
            <Box sx={styles.heroButtons}>
              <Button variant="contained" sx={styles.primaryButton}>
                🚀 Get Started Now!
              </Button>
              <Button variant="outlined" sx={styles.secondaryButton} target="_blank" href="tel:+919994982519">
                📞 Call: +91 9994982519
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* FEATURES STRIP WITH SMALL IMAGES */}
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap', margin: '80px 0' }}>
          {features.map((feature, index) => (
            <Paper key={index} sx={{ ...styles.featureItem, width: 220, overflow: 'hidden' }}>
              <img src={feature.image} alt="feature" style={{ width: '100%', height: '120px', objectFit: 'cover', marginBottom: '15px' }} />
              {feature.icon}
              <Typography sx={styles.featureTitle}>{feature.title}</Typography>
              <Typography sx={styles.featureDesc}>{feature.desc}</Typography>
            </Paper>
          ))}
        </Box>
      </Container>

      {/* SERVICES SECTION: EACH CARD HAS A REAL PHOTO */}
      <Box id="services" sx={styles.servicesSection}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={styles.sectionTitle}>
            🌟 Our Premium Services
          </Typography>
          <Typography sx={styles.sectionSubtitle}>
            Everything you need for your academic and professional printing needs – from basic copies to premium presentations
          </Typography>
          <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={styles.serviceCard}>
                  <img src={service.image} alt={service.title} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '15px 15px 0 0' }} />
                  <CardContent>
                    {service.icon}
                    <Typography variant="h5" sx={styles.serviceTitle}>
                      {service.title}
                    </Typography>
                    <Typography sx={styles.serviceDescription}>
                      {service.description}
                    </Typography>
                    <Box sx={styles.serviceFeatures}>
                      {service.features.map((feature, idx) => (
                        <Box key={idx} sx={styles.featureBadge}>
                          ✨ {feature}
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* TESTIMONIALS: THREE DIFFERENT, REAL STUDENT FACES */}
      <Box sx={styles.testimonialsSection}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={styles.sectionTitle}>
            💬 What Students Say About Us
          </Typography>
          <Card sx={styles.testimonialCard}>
            <CardContent sx={{ textAlign: 'center', p: 4 }}>
              <Avatar src={testimonials[currentTestimonial].img} sx={{ width: 100, height: 100, margin: '0 auto 15px', objectFit: 'cover' }} />
              <Box sx={styles.starsContainer}>
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} sx={{ color: '#ffd700', fontSize: '2rem' }} />
                ))}
              </Box>
              <Typography sx={styles.testimonialText}>
                "{testimonials[currentTestimonial].text}"
              </Typography>
              <Typography sx={styles.testimonialAuthor}>
                – {testimonials[currentTestimonial].name}, {testimonials[currentTestimonial].course}
              </Typography>
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 1 }}>
                {testimonials.map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      backgroundColor: index === currentTestimonial ? '#667eea' : '#ccc',
                      transition: 'all 0.3s ease',
                    }}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* INFO SECTION: CAMPUS GATE, WORKING HOURS, CONTACT, ALL WITH PHOTOS */}
      <Box sx={styles.infoSection}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={styles.sectionTitle}>
            📍 Find Us & Quick Info
          </Typography>
          <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
            {infoItems.map((item, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card sx={styles.infoCard}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '12px 12px 0 0' }} />
                  <CardContent>
                    {item.icon}
                    <Typography variant="h6" sx={{ mt: 2 }}>{item.title}</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>{item.desc}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
            <Grid item xs={12} md={6}>
              <Card sx={styles.infoCard}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" sx={styles.infoTitle}>
                    🎯 Our Achievements
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <Grid container spacing={2} justifyContent="center" sx={{ maxWidth: '600px' }}>
                      <Grid item xs={6}>
                        <Paper sx={styles.quickStat}>
                          <Typography sx={styles.quickStatNumber}>125K+</Typography>
                          <Typography sx={styles.quickStatLabel}>Documents Printed</Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={6}>
                        <Paper sx={styles.quickStat}>
                          <Typography sx={styles.quickStatNumber}>8.5K+</Typography>
                          <Typography sx={styles.quickStatLabel}>Happy Customers</Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={6}>
                        <Paper sx={styles.quickStat}>
                          <Typography sx={styles.quickStatNumber}>99.9%</Typography>
                          <Typography sx={styles.quickStatLabel}>Success Rate</Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={6}>
                        <Paper sx={styles.quickStat}>
                          <Typography sx={styles.quickStatNumber}>2min</Typography>
                          <Typography sx={styles.quickStatLabel}>Avg Wait Time</Typography>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box sx={{ mt: 3, p: 3, borderRadius: '15px', background: 'linear-gradient(45deg, #667eea, #764ba2)', color: 'white', textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>🏆 Special Recognition</Typography>
                    <Typography sx={{ fontSize: '0.95rem' }}>
                      "Best Student Services" – KRCE Student Council 2024
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* PRICING & OFFERS SECTION */}
      <Box sx={{ py: 8, background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={styles.sectionTitle}>
            💰 Student-Friendly Pricing
          </Typography>
          <Typography sx={styles.sectionSubtitle}>
            Special rates for students with bulk discounts and loyalty rewards
          </Typography>
          <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', flexWrap: { xs: 'wrap', md: 'nowrap' }, mt: 4 }}>
            <Card sx={{ ...styles.serviceCard, flex: 1, textAlign: 'center' }}>
              <CardContent sx={{ p: 4 }}>
                <img src={locationImg} alt="B/W Printing" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '10px', marginBottom: '15px' }} />
                <Typography variant="h4" sx={{ color: '#ff6b6b', fontWeight: 700, mb: 1 }}>
                  B/W Printing
                </Typography>
                <Typography variant="h6" sx={{ color: '#333', mb: 2 }}>
                  Starting from
                </Typography>
                <Typography variant="h3" sx={{ color: '#667eea', fontWeight: 700, mb: 2 }}>
                  ₹2
                </Typography>
                <Typography sx={{ color: '#666', mb: 3 }}>per page</Typography>
                <Box sx={{ textAlign: 'left' }}>
                  <Typography sx={{ mb: 1 }}>✅ High-quality paper</Typography>
                  <Typography sx={{ mb: 1 }}>✅ Both-side printing available</Typography>
                  <Typography sx={{ mb: 1 }}>✅ Bulk discounts from 50+ pages</Typography>
                </Box>
              </CardContent>
            </Card>
            <Card sx={{ ...styles.serviceCard, flex: 1, textAlign: 'center', border: '3px solid #ffd700', position: 'relative', zIndex: 2,overflow:'visible' }}>
              <Box sx={{ position: 'absolute', top: -15, left: '50%', transform: 'translateX(-50%)', background: '#ffd700', color: '#333', px: 2, py: 0.5, borderRadius: '20px', fontSize: '0.9rem', fontWeight: 700, boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
                MOST POPULAR
              </Box>
              <CardContent sx={{ p: 4, pt: 5 }}>
                <img src={photocopyImg} alt="Color Printing" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '10px', marginBottom: '15px' }} />
                <Typography variant="h4" sx={{ color: '#4ecdc4', fontWeight: 700, mb: 1 }}>
                  Color Printing
                </Typography>
                <Typography variant="h6" sx={{ color: '#333', mb: 2 }}>
                  Starting from
                </Typography>
                <Typography variant="h3" sx={{ color: '#667eea', fontWeight: 700, mb: 2 }}>
                  ₹5
                </Typography>
                <Typography sx={{ color: '#666', mb: 3 }}>per page</Typography>
                <Box sx={{ textAlign: 'left' }}>
                  <Typography sx={{ mb: 1 }}>✅ Vibrant color reproduction</Typography>
                  <Typography sx={{ mb: 1 }}>✅ Premium glossy/matte options</Typography>
                  <Typography sx={{ mb: 1 }}>✅ Perfect for presentations</Typography>
                </Box>
              </CardContent>
            </Card>
            <Card sx={{ ...styles.serviceCard, flex: 1, textAlign: 'center' }}>
              <CardContent sx={{ p: 4 }}>
                <img src={scanningImg} alt="Scanning" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '10px', marginBottom: '15px' }} />
                <Typography variant="h4" sx={{ color: '#45b7d1', fontWeight: 700, mb: 1 }}>
                  Scanning
                </Typography>
                <Typography variant="h6" sx={{ color: '#333', mb: 2 }}>
                  Starting from
                </Typography>
                <Typography variant="h3" sx={{ color: '#667eea', fontWeight: 700, mb: 2 }}>
                  ₹2
                </Typography>
                <Typography sx={{ color: '#666', mb: 3 }}>per page</Typography>
                <Box sx={{ textAlign: 'left' }}>
                  <Typography sx={{ mb: 1 }}>✅ High-resolution scanning</Typography>
                  <Typography sx={{ mb: 1 }}>✅ Multiple format options</Typography>
                  <Typography sx={{ mb: 1 }}>✅ Direct email delivery</Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Paper sx={{ display: 'inline-block', p: 3, borderRadius: '25px', background: 'linear-gradient(45deg, #667eea, #764ba2)', color: 'white', boxShadow: '0 10px 25px rgba(0,0,0,0.15)' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                🎉 Special Student Offer
              </Typography>
              <Typography sx={{ fontSize: '1.1rem' }}>
                Get 10% discount on orders above ₹100 + Free home delivery within 2km radius!
              </Typography>
            </Paper>
          </Box>
        </Container>
      </Box>

      {/* CONTACT SECTION */}
      <Box id="contact" sx={styles.contactSection}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={styles.sectionTitle}>
            📞 Get In Touch With Us
          </Typography>
          <Typography sx={styles.sectionSubtitle}>
            Have questions? Need a quote? Want to place an urgent order? We're here to help!
          </Typography>
          <Card sx={styles.contactCard}>
            <CardContent sx={{ p: 5 }}>
              <Box component="form" onSubmit={handleSubmit} method="POST" sx={styles.contactForm}>
                <TextField name="name" label="Your Full Name" fullWidth required variant="outlined" sx={styles.textField} />
                <TextField name="email" label="Your Email Address" type="email" fullWidth required variant="outlined" sx={styles.textField} />
                <TextField name="phone" label="Your Phone Number" type="tel" fullWidth variant="outlined" sx={styles.textField} />
                <TextField name="service" label="Service Required (Printing/Scanning/Copying)" fullWidth variant="outlined" sx={styles.textField} />
                <TextField name="message" label="Your Message or Requirements" multiline rows={4} fullWidth required variant="outlined" sx={styles.textField} placeholder="Tell us about your requirements, quantity, urgency, etc..." />
                <Button type="submit" variant="contained" sx={styles.submitButton}>
                  🚀 Send Message & Get Quote
                </Button>
              </Box>
              <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#667eea', fontWeight: 700 }}>
                  Or Contact Us Directly
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Button variant="contained" startIcon={<WhatsApp />} sx={{ background: '#25D366', '&:hover': { background: '#20b954' }, borderRadius: '25px', px: 3 }} target="_blank" href="https://wa.me/919994982519">
                    WhatsApp
                  </Button>
                  <Button variant="contained" startIcon={<Phone />} sx={{ background: '#007bff', '&:hover': { background: '#0056b3' }, borderRadius: '25px', px: 3 }} target="_blank" href="tel:+919994982519">
                    Call Now
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* FOOTER */}
      <Box sx={styles.footer}>
        <Container maxWidth="lg">
          <Grid container spacing={6} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: "#ffd700" }}>
                🖨️ Antony's Xerox Hub
              </Typography>
              <Typography sx={{ mb: 2, fontSize: "0.95rem", lineHeight: 1.7 }}>
                Your trusted printing partner since 2024. Serving students and businesses with excellence, quality, and affordable pricing. <br />
                Built by students, for students!
              </Typography>
              <Typography sx={{ fontSize: "0.9rem", lineHeight: 1.7 }}>
                📍 Location: Just outside KRCE Campus Main Gate <br />
                🕐 Hours: 6:00 AM - 11:00 PM (Daily) <br />
                📞 Phone: +91 9994982519 <br />
                ✉️ Email: antonygodwin08@gmail.com
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "right" }, display: "flex", flexDirection: "column", alignItems: { xs: "center", md: "flex-end" }, gap: 2 }}>
              <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", mb: 2 }}>
                <Link href="#home" style={{ color: "white", textDecoration: "none" }}>🏠 Home</Link>
                <Link href="#services" style={{ color: "white", textDecoration: "none" }}>🛠️ Services</Link>
                <Link href="#contact" style={{ color: "white", textDecoration: "none" }}>📞 Contact</Link>
                <Link href="https://www.google.com/maps/place/Chennai+-+Theni+Hwy,+Samayapuram,+Tamil+Nadu+621112/@10.9280675,78.7411634,18z/data=!3m1!4b1!4m6!3m5!1s0x3baaf735d88ee477:0x891f268c4de7a518!8m2!3d10.9280675!4d78.7420738!16s%2Fg%2F11gj3cv08h?entry=ttu&g_ep=EgoyMDI1MDkwNy4wIKXMDSoASAFQAw%3D%3D" style={{ color: "white", textDecoration: "none" }}>📍 Directions</Link>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <IconButton sx={{ color: "white" }} target="_blank" href="https://wa.me/919994982519"><WhatsApp /></IconButton>
                <IconButton sx={{ color: "white" }} target="_blank" href="mailto:antonygodwin08@gmail.com"><Gmail /></IconButton>
                <IconButton sx={{ color: "white" }} target="_blank" href="https://www.linkedin.com/in/antony-godwin-s-7143ab2a4/"><LinkedIn /></IconButton>
                <IconButton sx={{ color: "white" }} target="_blank" href="https://github.com/Antony-Godwin24"><GitHub /></IconButton>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: "center", mt: 6, pt: 3, borderTop: "1px solid rgba(255,255,255,0.2)" }}>
            <Typography sx={{ fontSize: "0.85rem", color: "#f1f1f1" }}>
              © {new Date().getFullYear()} Antony's Xerox Hub — All Rights Reserved | Made with ❤️ by a CSE Student Entrepreneur | 🌟 "Printing Dreams, One Page at a Time" 🌟
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

// Global keyframe for shimmer effect (add to your global CSS or MUI theme)
// @keyframes textShimmer {
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// }
