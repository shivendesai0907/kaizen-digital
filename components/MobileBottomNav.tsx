"use client";

import React from 'react';
import styles from './MobileBottomNav.module.css';
import { Home, LayoutGrid, Cpu, Calendar, Users } from 'lucide-react';
import { motion } from 'framer-motion';

// TODO: replace with your new Calendly link once the Kaizen account exists
const BOOKING_URL = "https://calendly.com/contact-kaizen/30min";

const MobileBottomNav = () => {
  return (
    <nav className={styles.bottomNav}>
      <a href="/" className={styles.navItem}>
        <Home size={20} />
        <span>Home</span>
      </a>
      <a href="/#crm" className={styles.navItem}>
        <LayoutGrid size={20} />
        <span>CRM</span>
      </a>
      <a href="/#services" className={styles.navItem}>
        <Cpu size={20} />
        <span>Services</span>
      </a>
      <a href="/careers" className={styles.navItem}>
        <Users size={20} />
        <span>Careers</span>
      </a>
      <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={styles.navItem}>
        <Calendar size={20} />
        <span>Book</span>
      </a>
      
      <motion.div 
        layoutId="activeTab"
        className={styles.activeIndicator}
      />
    </nav>
  );
};

export default MobileBottomNav;