import React from 'react';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import {
  Print, CopyAll, Scanner, Email, Phone, Room, AccessTime, Star
} from '@mui/icons-material';
import styles from './styles';

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
    <Box sx={styles.container}>
      {/* Hero Section */}
      <Box sx={styles.hero}>
        <Typography variant="h2" sx={styles.heroTitle}>Antony’s Xerox Hub</Typography>
        <Typography variant="h5" sx={styles.heroSubtitle}>
          Student-Run Printing & Copy Center
        </Typography>
        <Typography sx={styles.heroText}>
          As a 3rd-year CSE student and entrepreneur, I started this shop to serve students and professionals with affordable and reliable services.
        </Typography>
        <Button variant="contained" sx={styles.ctaBtn}>
          Get Started
        </Button>
      </Box>

      {/* Services Section */}
      <Box sx={styles.section}>
        <Typography variant="h4" sx={styles.sectionTitle}>Our Services</Typography>
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

      {/* About Section */}
      <Box sx={styles.about}>
        <Typography variant="h4" sx={styles.sectionTitle}>About Antony’s Xerox Hub</Typography>
        <Typography sx={styles.aboutText}>
          Founded in 2022, our shop is located just outside the college campus and has helped over 3,000 students with day-to-day academic document needs. From simple black-and-white photocopies to urgent project printing, we deliver with precision, speed, and care.
        </Typography>
        <Grid container spacing={4} sx={{ marginTop: '30px' }}>
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
              <AccessTime sx={styles.statIcon} />
              <Typography sx={styles.statLabel}>Open: 9AM – 9PM</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} md={3}>
            <Paper sx={styles.statCard}>
              <Star sx={styles.statIcon} />
              <Typography sx={styles.statLabel}>4.9★ Rated by students</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Contact Section */}
      <Box sx={styles.contact}>
        <Typography variant="h4" sx={{ color: 'white', marginBottom: '30px' }}>Contact Us</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={styles.contactItem}>
              <Phone sx={styles.contactIcon} />
              <Typography>+91 98765 43210</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={styles.contactItem}>
              <Email sx={styles.contactIcon} />
              <Typography>antonyxerox@gmail.com</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={styles.contactItem}>
              <Room sx={styles.contactIcon} />
              <Typography>Near A-Block, CSE Dept Gate, Your College</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
