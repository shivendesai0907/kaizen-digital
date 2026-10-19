"use client";

import styles from './Navbar.module.css';

// TODO: replace with your real Calendly link once the Kaizen Digital account exists
const BOOKING_URL = "https://calendly.com/contact-kaizendigital/30min";

interface NavbarProps {
  showAnnouncement?: boolean;
}

export default function Navbar({ showAnnouncement = false }: NavbarProps) {
  return (
    <header className={styles.header}>
      {showAnnouncement && (
        <div className={styles.announcement}>
          New: Institutional-grade PropFirm & Brokerage CRMs now available | <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book a Demo &rarr;</a>
        </div>
      )}
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <a href="/" className={styles.logo}>
            <img
              src="/images/services/logo.png"
              alt="Kaizen Digital"
              style={{ height: '68px', width: 'auto', display: 'block' }}
            />
          </a>

          <div className={styles.links}>
            <a href="/" className={styles.link}>Home</a>
            <a href="/#services" className={styles.link}>Services</a>
            <a href="https://tradingterminal2.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.link}>Terminal</a>
            <a href="/careers" className={styles.link}>Careers</a>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={styles.bookButton}>Book a Call</a>
          </div>
        </div>
      </nav>
    </header>
  );
}