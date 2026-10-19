import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import { jobs } from '@/lib/jobs';

export const metadata: Metadata = {
  title: 'Careers | Kaizen Digital',
  description: 'Join the Kaizen Digital team and help us build the future of CRM and fintech solutions.',
  alternates: {
    canonical: '/careers',
  },
};

export default function Careers() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.heroSection}>
        <div className={styles.bgGlow} />
        <div className={styles.container}>
          <div className={styles.badge}>
            <span className={styles.dot}></span>
            We're Hiring
          </div>
          <h1 className={styles.title}>
            Join the team building the future of <span>Fintech</span> & CRM
          </h1>
          <p className={styles.description}>
            We're looking for passionate engineers, designers, and innovators to join us in shaping the digital solutions of tomorrow.
          </p>
          <div className={styles.positionsGrid}>
            {jobs.map((job) => (
              <div key={job.id} className={styles.positionCard}>
                <div className={styles.positionHeader}>
                  <div className={styles.titleWrapper}>
                    <span className={styles.deptTag}>{job.department}</span>
                    <h3>{job.title}</h3>
                  </div>
                  <span className={styles.positionType}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    {job.location}
                  </span>
                </div>
                <p>{job.shortDescription}</p>
                <Link href={`/careers/${job.id}`} className={styles.applyBtn}>
                  View Details & Apply &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}