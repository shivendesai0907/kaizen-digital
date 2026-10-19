import styles from './Process.module.css';
import ScrollReveal from './ScrollReveal';

export default function Process() {
  const steps = [
    {
      label: "STEP 01",
      title: "Discovery & Requirement Mapping",
      description: "Workshops with stakeholders to align scope, KPIs, and architecture decisions.",
      align: "left"
    },
    {
      label: "STEP 02",
      title: "UI/UX Design",
      description: "High-fidelity flows, dashboards, and a design system tuned for clarity and trust.",
      align: "right"
    },
    {
      label: "STEP 03",
      title: "Development & Integrations",
      description: "Iterative builds with weekly demos. Payment, KYC, MT5, and API integrations baked in.",
      align: "left"
    },
    {
      label: "STEP 04",
      title: "Testing & Security Review",
      description: "Automated test coverage, pen-test sweeps, and compliance checks before launch.",
      align: "right"
    },
    {
      label: "STEP 05",
      title: "Deployment & Support",
      description: "Zero-downtime release on hardened cloud infra, with SLA-backed ongoing support.",
      align: "left"
    }
  ];

  return (
    <section className={styles.section}>
      <ScrollReveal blur={10} yOffset={30}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.dot}></span>
            CRM Solutions
          </div>
          <h2 className={styles.title}>
            From Idea to Deployment<br />
            — A Clear, Fast Process
          </h2>
          <p className={styles.description}>
            A repeatable five-stage workflow that we've refined across 120+ builds.
          </p>
        </div>
      </ScrollReveal>

      <div className={styles.timeline}>
        {steps.map((step, index) => (
          <ScrollReveal 
            key={index} 
            xOffset={step.align === 'left' ? -50 : 50} 
            delay={0.1}
            duration={0.8}
            className={`${styles.step} ${step.align === 'left' ? styles.stepLeft : styles.stepRight}`}
          >
            <div className={styles.stepPoint}></div>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.stepLabel}>{step.label}</span>
                  <span className={styles.phaseLabel}>PHASE</span>
                </div>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardDescription}>{step.description}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
