import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { portfolioItems } from '@/components/portfolioData';
import styles from './portfolio.module.css';

export default function PortfolioPage() {
  return (
    <main className={styles.main}>
      <Navbar showAnnouncement={false} />
      
      <div className={styles.container}>
        <ScrollReveal blur={10} yOffset={30}>
          <div className={styles.header}>
            <h1 className={styles.title}>Our Complete Portfolio</h1>
            <p className={styles.description}>
              Explore our comprehensive track record of delivering high-performance platforms,
              custom CRMs, AI solutions, and robust mobile applications.
            </p>
          </div>
        </ScrollReveal>

        {["Trading Terminal", "Demo Funded", "Payments & Fintech", "CRM", "AI Related"].map((category) => (
          <div key={category} className={styles.categorySection}>
            <ScrollReveal blur={10} yOffset={20}>
              <h2 className={styles.categoryTitle}>{category}</h2>
            </ScrollReveal>
            <div className={styles.grid}>
              {portfolioItems
                .filter((item) => item.category === category)
                .map((project, index) => (
                  <ScrollReveal 
                    key={project.id} 
                    delay={(index % 4) * 0.1} 
                    yOffset={40} 
                    blur={10}
                    className={styles.boxWrapper}
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.box}>
                      <div className={styles.imageContainer}>
                        <img src={project.imageUrl} alt={project.title} className={styles.boxImage} />
                        <div className={styles.categoryBadge}>{project.category}</div>
                      </div>
                      
                      <div className={styles.content}>
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        <p className={styles.projectDescription}>{project.description}</p>
                      </div>
                    </a>
                  </ScrollReveal>
                ))}
            </div>
          </div>
        ))}
      </div>
      
      <Footer />
    </main>
  );
}
