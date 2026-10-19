import styles from './Portfolio.module.css';
import ScrollReveal from './ScrollReveal';

export default function Portfolio() {
  const projects = [
    {
      title: "Demo Funded",
      description: "Prop firm management system handling thousands of daily evaluations with automated risk management and trader dashboard.",
      tags: ["Next.js", "PostgreSQL", "Prop Firm"],
      image: "/images/crm/dashboard-2.png",
      link: "https://propfirm-frontend-phi.vercel.app"
    },
    {
      title: "Trading Terminal",
      description: "High-performance trading interface featuring real-time market data via WebSockets, TradingView integration, and professional order management.",
      tags: ["React", "TypeScript", "WebSockets", "TradingView"],
      image: "/images/trading-terminal-mockup.png",
      link: "https://tradingterminal2.vercel.app"
    },
    {
      title: "Zenvestt Journaling",
      description: "Comprehensive trading journal and analytics platform for retail and institutional traders.",
      tags: ["Next.js", "Auth", "Analytics"],
      image: "/images/crm/dashboard-3.png",
      link: "https://zenvestt.com"
    },
    {
      title: "Sharpay Payments",
      description: "Next-generation payment processing and automated settlement system for global prop firms.",
      tags: ["Node.js", "Fintech", "Payments"],
      image: "/images/crm/dashboard-1.png",
      link: "https://payments.sharkfunded.com"
    }
  ];

  return (
    <section className={styles.section} id="portfolio">
      <ScrollReveal blur={10} yOffset={30}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.dot}></span>
            Our Portfolio
          </div>
          <h2 className={styles.title}>
            Proven Success,<br />
            Built for Scale
          </h2>
          <p className={styles.description}>
            Explore our track record of delivering high-performance platforms,<br />
            custom CRMs, and robust fintech solutions.
          </p>
        </div>
      </ScrollReveal>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ScrollReveal
            key={index}
            delay={index * 0.1}
            yOffset={40}
            blur={10}
            className={styles.boxWrapper}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.box}>
              <div className={styles.arrowButton}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>

              <div className={styles.imageContainer}>
                {project.image ? (
                  <img src={project.image} alt={project.title} className={styles.boxImage} />
                ) : (
                  <div className={styles.imagePlaceholder}></div>
                )}
              </div>

              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
