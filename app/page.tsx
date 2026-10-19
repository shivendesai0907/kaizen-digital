import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import CrmSolutions from '@/components/CrmSolutions';
import Services from '@/components/Services';
import Process from '@/components/Process';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Portfolio from '@/components/Portfolio';
import MusicShowcase from '@/components/MusicShowcase';
import MobileBottomNav from '@/components/MobileBottomNav';
import styles from './page.module.css';

import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <div className={styles.featuresBar}>
        {[
          "Fast Deployment",
          "Custom CRM Architecture",
          "Payment Integrations",
          "Scalable Software Systems",
          "Dedicated Tech Support"
        ].map((text, i) => (
          <ScrollReveal key={i} delay={i * 0.1} yOffset={10} width="auto" scale={0.9} blur={5}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span>{text}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <CrmSolutions />
      <Services />
      <Portfolio />
      <Process />
      <CTA />
      <Footer />
      <MobileBottomNav />
    </main>
  );
}
