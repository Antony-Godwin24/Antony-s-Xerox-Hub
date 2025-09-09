import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-scroll';
import styles from './style.js'
const sections = ['home', 'services', 'about', 'mission', 'contact'];

const Navbar = () => {
  return (
    <AppBar sx={styles.navbar}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', cursor: 'pointer' }}>
          Antony's Xerox Hub
        </Typography>
        <Box>
          {sections.map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Button sx={{ color: 'white', textTransform: 'none', fontWeight: 500 }}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
