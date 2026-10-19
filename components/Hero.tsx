import styles from './Hero.module.css';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <ScrollReveal blur={10} yOffset={20} delay={0.1}>
            <div className={styles.badge}>
              <span className={styles.dot}></span>
              Fast-deploying CRM & software solutions
            </div>
          </ScrollReveal>

          <ScrollReveal blur={15} yOffset={40} delay={0.2} duration={1}>
            <h1 className={styles.title}>
              CRM & Software <br />
              Solutions Built for <br />
              <span className={styles.highlight}>Fast-Growing</span> <br />
              Digital Businesses
            </h1>
          </ScrollReveal>

          <ScrollReveal blur={5} yOffset={20} delay={0.4}>
            <p className={styles.description}>
              We design, develop, and deploy custom CRM platforms, fintech systems, payment integrations, mobile apps, and web solutions that help businesses launch faster and scale smarter.
            </p>
          </ScrollReveal>

          <ScrollReveal yOffset={20} delay={0.5}>
            <div className={styles.actions}>
              <a href="https://form.typeform.com/to/Lsdf1kuG" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
                Get Started <ArrowRight size={18} />
              </a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal
          yOffset={100}
          scale={0.9}
          blur={20}
          delay={0.6}
          duration={1.2}
          width="100%"
          className={styles.mockupContainer}
        >
          <img src="/images/services/saas-dashboard.png" alt="Kaizen Digital Dashboard" className={styles.heroDashboardImage} />
        </ScrollReveal>
      </div>
    </section>
  );
}