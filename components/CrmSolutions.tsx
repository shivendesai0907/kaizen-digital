import styles from './CrmSolutions.module.css';
import ScrollReveal from './ScrollReveal';

// TODO: replace with your real Calendly link once the Kaizen Digital account exists
const BOOKING_URL = "https://calendly.com/contact-kaizendigital/30min";

export default function CrmSolutions() {
  const cards = [
    {
      subtitle: "PROP TRADING OPERATIONS",
      title: "PropFirm CRM",
      description: "Run challenges, evaluations, KYC, and payouts on a single white- labeled trader experience built for scale.",
      tags: ["Trader dashboard", "Challenge stages", "KYC", "Payouts", "Admin panel"],
      image: "/images/crm/dashboard-1.png",
      reverse: false
    },
    {
      subtitle: "BROKERAGE SUITE",
      title: "Broker CRM",
      description: "End-to-end broker operations — leads, IB hierarchy, MT4/MT5 sync, Deposits, Withdrawals, and Affiliate Reporting.",
      tags: ["Lead routing", "IB Module", "MT4/MT5", "Deposits", "Withdrawals"],
      image: "/images/crm/dashboard-2.png",
      reverse: true
    },
    {
      subtitle: "COMPLIANCE-READY PLATFORM",
      title: "FinTech CRM",
      description: "Onboarding, wallets, transaction monitoring, payment processing controls, and risk scoring — production-ready out of the box.",
      tags: ["Onboarding", "Compliance", "Wallets", "Transactions", "Risk Monitoring"],
      image: "/images/crm/dashboard-3.png",
      reverse: false
    },
    {
      subtitle: "TAILORED SALES OS",
      title: "Custom Business CRM",
      description: "Pipelines, workflows, role-based access, and reporting — designed around the way your operators actually work.",
      tags: ["Sales pipeline", "Automation", "Reporting", "Roles & Teams"],
      image: "/images/crm/dashboard-3.png",
      reverse: true
    }
  ];

  return (
    <section className={styles.section} id="crm">
      <ScrollReveal blur={10} yOffset={30}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.dot}></span>
            CRM Solutions
          </div>
          <h2 className={styles.title}>
            CRM Solutions Designed for<br />
            High-Performance Businesses
          </h2>
          <p className={styles.description}>
            Production-ready platforms with white-label theming, deep integrations,<br />
            and the workflows your operators actually use every day.
          </p>
        </div>
      </ScrollReveal>

      <div className={styles.cardsContainer}>
        {cards.map((card, index) => (
          <div key={index} className={`${styles.card} ${card.reverse ? styles.cardReverse : ''}`}>
            <div className={styles.glow}></div>

            <ScrollReveal
              xOffset={card.reverse ? 50 : -50}
              className={styles.content}
              width="auto"
              blur={5}
            >
              <div className={styles.subtitle}>{card.subtitle}</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>

              <div className={styles.tags}>
                {card.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={styles.tag}>{tag}</span>
                ))}
              </div>

              <div className={styles.actions}>
                <a href="https://form.typeform.com/to/Lsdf1kuG" target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>View Solution</a>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>Book a Demo →</a>
              </div>
            </ScrollReveal>

            <ScrollReveal
              xOffset={card.reverse ? -50 : 50}
              delay={0.2}
              className={styles.imageContainer}
              width="auto"
              scale={0.95}
              blur={10}
            >
              <div className={styles.glassWrapper}>
                <img src={card.image} alt={card.title} className={styles.dashboardImage} />
              </div>
            </ScrollReveal>
          </div>
        ))}
      </div>
    </section>
  );
}