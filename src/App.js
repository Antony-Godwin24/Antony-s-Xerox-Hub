import React from 'react';
import { Box, Typography, Button, Grid, Paper, TextField , Link} from '@mui/material';
import {
  Print, CopyAll, Scanner
} from '@mui/icons-material';
import styles from './style';


const services = [
  {
    icon: <Print sx={styles.icon} />,
    title: 'Printing (B/W & Color)',
    description: 'High-quality prints for documents, resumes, projects, and more.',
  },
  {
    icon: <CopyAll sx={styles.icon} />,
    title: 'Photocopying',
    description: 'Fast and clear photocopies with both single and double-sided options.',
  },
  {
    icon: <Scanner sx={styles.icon} />,
    title: 'Scanning & Digital',
    description: 'Document scanning and conversion to PDF, JPG, or email formats.',
  }
];

export default function App() {
  return (
      <>
        
        <Box id='home' sx={styles.container}>
          {/* Hero Section */}
          {/* <NavBar /> */}
          <Box sx={styles.hero}>
            <Typography variant="h2" sx={styles.heroTitle}>Antony’s Xerox Hub</Typography>
            <Typography variant="h5" sx={styles.heroSubtitle}>
              Student-Run Printing & Copy Center
            </Typography>
            <Typography sx={styles.heroText}>
              Built with passion by a 3rd-year CSE student & entrepreneur to serve students and businesses with top-notch document services.
            </Typography>
            <Button variant="contained" sx={styles.ctaBtn}>
              Get Started!
            </Button>
          </Box>

          {/* Services Section */}
          <Box id='services' sx={styles.section}>
            <Typography variant="h4" sx={styles.sectionTitle}>Our Services</Typography>
            <Box sx={{ maxWidth: '1200px', width: '100%' }}>
              <Grid container spacing={4} sx={styles.servicesGrid}>
                {services.map((item, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <Paper sx={styles.serviceCard} elevation={4}>
                      {item.icon}
                      <Typography variant="h6" sx={styles.serviceTitle}>{item.title}</Typography>
                      <Typography sx={styles.serviceDesc}>{item.description}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>

          {/* About Section */}
          <Box id='about' sx={styles.about}>
            <Typography variant="h4" sx={styles.sectionTitle}>About Antony’s Xerox Hub</Typography>
            <Typography sx={styles.aboutText}>
              Founded in 2024 and located just outside KRCE campus, we've helped over 3,000+ students and local businesses with their printing needs — from basic copies to urgent project documentation.
            </Typography>
            <Box sx={{ maxWidth: '1200px', width: '100%', marginTop: '30px' }}>
              <Grid container spacing={4} justifyContent="center">
                <Grid item xs={6} md={3}>
                  <Paper sx={styles.statCard}>
                    <Typography sx={styles.statNumber}>3,000+</Typography>
                    <Typography sx={styles.statLabel}>Happy Students</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Paper sx={styles.statCard}>
                    <Typography sx={styles.statNumber}>10,000+</Typography>
                    <Typography sx={styles.statLabel}>Pages Printed</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Paper sx={styles.statCard}>
                    <Typography sx={styles.statNumber}>6AM – 11PM</Typography>
                    <Typography sx={styles.statLabel}>Working Hours</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Paper sx={styles.statCard}>
                    <Typography sx={styles.statNumber}>4.9★</Typography>
                    <Typography sx={styles.statLabel}>Student Rating</Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Box>

          {/* Mission Section */}
          <Box id='mission' sx={styles.mission}>
            <Typography variant="h4" sx={styles.sectionTitle}>Our Mission</Typography>
            <Typography sx={styles.missionText}>
              To provide world-class printing solutions that empower businesses and individuals to communicate effectively,
              while building lasting relationships through exceptional service and competitive pricing.
            </Typography>

            <Box sx={{ maxWidth: '1100px', width: '100%', marginTop: '40px' }}>
              <Grid container spacing={4} justifyContent="center">
                <Grid item xs={6} md={3}>
                  <Paper sx={styles.statCard}>
                    <Typography sx={styles.statNumber}>8,500+</Typography>
                    <Typography sx={styles.statLabel}>Happy Customers</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Paper sx={styles.statCard}>
                    <Typography sx={styles.statNumber}>125K+</Typography>
                    <Typography sx={styles.statLabel}>Documents Printed</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Paper sx={styles.statCard}>
                    <Typography sx={styles.statNumber}>9+</Typography>
                    <Typography sx={styles.statLabel}>Years of Excellence</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Paper sx={styles.statCard}>
                    <Typography sx={styles.statNumber}>24/7</Typography>
                    <Typography sx={styles.statLabel}>Customer Support</Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Box>

          {/* Why Choose Section */}
          <Box sx={styles.whyChoose}>
            <Typography variant="h4" sx={styles.sectionTitle}>Why Choose PrintCraft?</Typography>
            <Typography sx={styles.aboutText}>
              We're not just a copy center – we're your academic and business partner. Whether it's an urgent print job or bulk document support, we've got you covered with speed, affordability, and care.
            </Typography>
          </Box>

        {/* Contact Section */}
        <Box id='contact' sx={styles.contact}>
          <Typography variant="h4" sx={{ color: 'white', marginBottom: '30px' }}>
            Contact Us
          </Typography>
          <Box
            component="form"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target;
              const data = new FormData(form);
              const response = await fetch('https://formspree.io/f/mgvldyja', {
                method: 'POST',
                body: data,
                headers: { Accept: 'application/json' },
              });
              if (response.ok) {
                alert("Message sent successfully!");
                form.reset();
              } else {
                alert("Something went wrong. Please try again.");
              }
            }}
            method="POST"
            sx={styles.contactForm}
          >
            <TextField
              name="name"
              label="Your Name"
              fullWidth
              required
              variant="outlined"
              sx={styles.contactTextField}
            />
            <TextField
              name="email"
              label="Your Email"
              type="email"
              fullWidth
              required
              variant="outlined"
              sx={styles.contactTextField}
            />
            <TextField
              name="message"
              label="Your Message"
              multiline
              rows={4}
              fullWidth
              required
              variant="outlined"
              sx={styles.contactTextField}
            />
            <Button type="submit" variant="contained" sx={styles.contactButton}>
              Send Message
            </Button>
          </Box>
        </Box>

        {/* Footer */}
        <Box sx={styles.footer}>
          <Typography variant="body2" sx={styles.footerText}>
            © {new Date().getFullYear()} Antony’s Xerox Hub — All Rights Reserved.
          </Typography>
          <Box sx={styles.footerLinks}>
            <Link href="#home" underline="hover" color="inherit">Home</Link>
            <Link href="#services" underline="hover" color="inherit">Services</Link>
            <Link href="#contact" underline="hover" color="inherit">Contact</Link>
          </Box>
        </Box>

      </Box>
    </>
  );
}
