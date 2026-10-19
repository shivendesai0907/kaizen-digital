import styles from './CTA.module.css';
import ScrollReveal from './ScrollReveal';

// TODO: replace with your real Calendly link once the Kaizen Digital account exists
const BOOKING_URL = "https://calendly.com/contact-kaizendigital/30min";

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ScrollReveal className={styles.content}>
          <h2 className={styles.title}>
            Need a CRM or Software<br />
            Platform Built Fast?
          </h2>
          <p className={styles.description}>
            Launch your custom CRM, fintech platform, app, or web solution with a team that understands speed, security, and scalability.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>
            Book a Free Consultation &rarr;
          </a>
        </ScrollReveal>
        <ScrollReveal delay={0.2} className={styles.imageContainer}>
          <img src="/images/services/saas-dashboard.png" alt="Platform Dashboard" className={styles.dashboardImage} />
        </ScrollReveal>
      </div>
    </section>
  );
}