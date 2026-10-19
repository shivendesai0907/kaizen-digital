import styles from './Services.module.css';
import ScrollReveal from './ScrollReveal';

export default function Services() {
  const cards = [
    {
      title: "CRM Development",
      description: "Custom CRMs built around your workflow, not a template.",
      icon: "/images/services/icon-crm.svg",
    },
    {
      title: "Payment Integration",
      description: "Stripe, PayPal, crypto rails, and regional PSPs — wired in cleanly.",
      icon: "/images/services/icon-payment.svg",
    },
    {
      title: "Web App Development",
      description: "Production-grade React/Next apps with SSR, auth, and dashboards.",
      icon: "/images/services/icon-web.svg",
    },
    {
      title: "Mobile App Development",
      description: "Native mobile apps with high performance and shared logic.",
      icon: "/images/services/icon-mobile.svg",
    },
    {
      isCenter: true,
    },
    {
      title: "SaaS Platform Development",
      description: "Multi-tenant architecture, billing, and admin tooling out of the box.",
      icon: "/images/services/icon-saas.svg",
    },
    {
      title: "API Integration",
      description: "MT4/MT5, KYC, AML, CRM, ERP, and any third-party you depend on.",
      icon: "/images/services/icon-api.svg",
    },
    {
      title: "UI/UX Design",
      description: "Design systems and product flows tuned for conversion and clarity.",
      icon: "/images/services/icon-uiux.svg",
    },
    {
      title: "Maintenance & Support",
      description: "SLAs, monitoring, and a team that owns uptime alongside you.",
      icon: "/images/services/icon-support.svg",
    }
  ];

  const saasItems = [
    "Multi-role dashboards",
    "User management",
    "Analytics",
    "Reports",
    "Subscription workflows",
    "Billing systems",
    "Permissions",
    "White-label"
  ];

  return (
    <section className={styles.section} id="services">
      <ScrollReveal blur={10} yOffset={30}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.dot}></span>
            CRM Solutions
          </div>
          <h2 className={styles.title}>
            Everything Your Business Needs to<br />
            Build, Launch & Scale
          </h2>
          <p className={styles.description}>
            One senior team across product, design, engineering, and DevOps — accountable for<br />
            outcomes from kickoff through launch and beyond.
          </p>
        </div>
      </ScrollReveal>

            <div className={styles.grid}>
        {cards.map((card, index) => {
          if (card.isCenter) {
            return (
              <ScrollReveal key={index} delay={index * 0.05} scale={0.9} blur={5}>
                <div className={`${styles.card} ${styles.logoCard}`}>
                  <div className={styles.logoContainer}>
                    <span style={{ fontSize: '40px', fontWeight: 600, color: '#ffffff', letterSpacing: '-1px', lineHeight: 1 }}>
                      Kaizen Digital
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          }

          return (
            <ScrollReveal key={index} delay={index * 0.05} yOffset={20} scale={0.95} blur={5}>
              <div className={styles.card}>
                <div
                  className={styles.iconWrapper}
                  style={{
                    WebkitMaskImage: `url('${card.icon}')`,
                    maskImage: `url('${card.icon}')`
                  }}
                />
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDescription}>{card.description}</p>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      <div className={styles.saasSection}>
        <ScrollReveal className={styles.saasContent} width="100%" xOffset={-50} blur={10}>
          <div className={styles.saasBadge}>
            <span className={styles.saasBadgeDot}></span>
            Custom SaaS Development
          </div>
          <h2 className={styles.saasTitle}>
            Launch Your Own<br />
            SaaS Platform Faster
          </h2>
          <p className={styles.saasDescription}>
            Kaizen Digital helps startups and enterprises build scalable SaaS products with<br />
            modern architecture, clean UX, and reliable backend systems.
          </p>

          <div className={styles.saasGrid}>
            {saasItems.map((item, index) => (
              <div key={index} className={styles.saasItem}>
                <span className={styles.saasItemDot}></span>
                {item}
              </div>
            ))}
          </div>

          <a href="https://form.typeform.com/to/Lsdf1kuG" target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>Plan your SAAS &rarr;</a>
        </ScrollReveal>

        <ScrollReveal className={styles.saasImageContainer} delay={0.2} width="100%" xOffset={50} blur={10} scale={0.95}>
          <img src="/images/services/saas-dashboard.png" alt="SaaS Dashboard" className={styles.saasImage} />
        </ScrollReveal>
      </div>
    </section>
  );
}