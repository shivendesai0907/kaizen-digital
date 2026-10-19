import styles from './Footer.module.css';
import { Mail, MapPin, Twitter, Linkedin, Github } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

// TODO: replace with your real Calendly link once the Kaizen Digital account exists
const BOOKING_URL = "https://calendly.com/contact-kaizendigital/30min";
// TODO: replace with your real email once the new mailbox exists
const CONTACT_EMAIL = "contact@kaizendigital.com";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ScrollReveal className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandInfo}>
            <div className={styles.logo}>
  <span style={{ fontSize: '22px', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.5px', lineHeight: 1 }}>
    Kaizen Digital
  </span>
</div>

            <p className={styles.description}>
              Your full-service technology partner — platforms, payment systems, mobile and web apps, SaaS products, automation, and enterprise software.
            </p>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <Mail size={16} color="#489afe" />
                <span>{CONTACT_EMAIL}</span>
              </div>
              <div className={styles.contactItem}>
                <MapPin size={16} color="#489afe" />
                <span>Kolhapur · Dubai · London</span>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialIcon} aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="GitHub">
                <Github size={18} />
              </a>
            </div>
          </div>

          <div className={styles.linksSection}>
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>PLATFORMS</h4>
              <div className={styles.linkList}>
                <a href="https://tradingterminal2.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.link}>Trading Terminal</a>
                <a href="https://propfirm-frontend-phi.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.link}>Demo Funded</a>
                <a href="#" className={styles.link}>PropFirm</a>
                <a href="#" className={styles.link}>Brokerage CRM</a>
                <a href="#" className={styles.link}>FinTech</a>
              </div>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>SERVICES</h4>
              <div className={styles.linkList}>
                <a href="#" className={styles.link}>CRM Development</a>
                <a href="#" className={styles.link}>Payment Integrations</a>
                <a href="#" className={styles.link}>Web App Development</a>
                <a href="#" className={styles.link}>Mobile App Development</a>
                <a href="#" className={styles.link}>SaaS Platforms</a>
              </div>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>COMPANY</h4>
              <div className={styles.linkList}>
                <a href="#" className={styles.link}>About</a>
                <a href="#" className={styles.link}>Process</a>
                <a href="#" className={styles.link}>Industries</a>
                <a href="#" className={styles.link}>Careers</a>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={styles.link}>Book a Call</a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div>© 2026 Kaizen Digital. All rights reserved.</div>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Privacy</a>
            <a href="#" className={styles.legalLink}>Terms</a>
            <a href="#" className={styles.legalLink}>Security</a>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}