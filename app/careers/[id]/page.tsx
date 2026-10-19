import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import { jobs } from '@/lib/jobs';

export async function generateStaticParams() {
  return jobs.map((job) => ({
    id: job.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);
  if (!job) return { title: 'Job Not Found | Koraxis' };

  return {
    title: `${job.title} | Koraxis Careers`,
    description: job.shortDescription,
    alternates: {
      canonical: `https://koraxis.com/careers/${job.id}`,
    },
  };
}

export default async function JobDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return (
      <main className={styles.main}>
        <Navbar />
        <div className={styles.notFound}>
          <h1>Position Not Found</h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '32px' }}>The role you are looking for does not exist or has been filled.</p>
          <Link href="/careers" className={styles.btn}>Back to Careers</Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <Navbar />
      
      <div className={styles.jobHeader}>
        <div className={styles.bgGlow} />
        <div className={styles.container}>
          <Link href="/careers" className={styles.backLink}>
            &larr; Back to all open positions
          </Link>
          
          <h1 className={styles.title}>{job.title}</h1>
          
          <div className={styles.metaTags}>
            <span className={styles.tag}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
              {job.department}
            </span>
            <span className={styles.tag}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              {job.location}
            </span>
            <span className={styles.tag}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              {job.type}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.jobBody}>
        <div className={styles.container}>
          <div className={styles.section}>
            <h2>About the Role</h2>
            <p>{job.shortDescription}</p>
          </div>

          <div className={styles.section}>
            <h2>Key Responsibilities</h2>
            <ul className={styles.list}>
              {job.responsibilities.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <h2>Requirements</h2>
            <ul className={styles.list}>
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div id="apply-form" className={styles.formSection}>
        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h2>Apply for {job.title}</h2>
            <p>Take the next step in your career. Fill out the form below and our team will get back to you.</p>
          </div>
          
          <form className={styles.applyForm}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className={styles.formGroup}>
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" required />
              </div>
            </div>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Position</label>
                <select required defaultValue={job.title}>
                  <option value="Full Stack Developer">Full Stack Developer</option>
                  <option value="Mobile Developer">Mobile Developer</option>
                  <option value="Data Analyst">Data Analyst</option>
                  <option value="Support Team">Support Team</option>
                  <option value="Other">Other / Open Application</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Portfolio / LinkedIn URL</label>
                <input type="url" placeholder="https://linkedin.com/in/..." />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Cover Letter or Message</label>
              <textarea rows={5} placeholder="Tell us why you're a great fit for this role..." required></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Submit Application
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
}
