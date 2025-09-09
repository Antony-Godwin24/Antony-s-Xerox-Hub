const styles = {
  container: {
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#f8f9fa',
  },
  hero: {
    background: 'linear-gradient(to right, #667eea, #764ba2)',
    color: 'white',
    textAlign: 'center',
    padding: '80px 20px',
  },
  heroTitle: {
    fontWeight: 'bold',
    mb: 2,
  },
  heroSubtitle: {
    mb: 3,
  },
  heroText: {
    maxWidth: '600px',
    margin: '0 auto 30px',
    fontSize: '18px',
    opacity: 0.9,
  },
  ctaBtn: {
    backgroundColor: '#ff6b6b',
    padding: '12px 30px',
    fontSize: '16px',
    textTransform: 'none',
    transition: 'all 0.3s',
    '&:hover': {
      backgroundColor: '#ff4c4c',
      transform: 'scale(1.05)',
    },
  },
  section: {
    padding: '60px 20px',
    textAlign: 'center',
  },
  sectionTitle: {
    mb: 4,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  servicesGrid: {
    marginTop: '20px',
  },
  serviceCard: {
    padding: '30px',
    borderRadius: '16px',
    transition: 'all 0.3s',
    textAlign: 'center',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    },
  },
  icon: {
    fontSize: '50px',
    color: '#667eea',
    marginBottom: '15px',
  },
  serviceTitle: {
    mb: 1,
    fontWeight: 'bold',
    color: '#34495e',
  },
  serviceDesc: {
    color: '#7f8c8d',
  },
  about: {
    padding: '60px 20px',
    backgroundColor: 'white',
    textAlign: 'center',
  },
  aboutText: {
    maxWidth: '800px',
    margin: '0 auto',
    fontSize: '18px',
    color: '#555',
    lineHeight: 1.7,
  },
  statCard: {
    padding: '20px',
    borderRadius: '12px',
    textAlign: 'center',
    backgroundColor: '#f1f1f1',
  },
  statNumber: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#667eea',
  },
  statLabel: {
    fontSize: '16px',
    marginTop: '10px',
    color: '#555',
  },
  statIcon: {
    fontSize: '36px',
    color: '#667eea',
  },
  contact: {
    background: 'linear-gradient(to right, #2c3e50, #34495e)',
    padding: '60px 20px',
    color: 'white',
    textAlign: 'center',
  },
  contactItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    fontSize: '18px',
  },
  contactIcon: {
    fontSize: '40px',
    color: '#ff6b6b',
  },
};

export default styles;
