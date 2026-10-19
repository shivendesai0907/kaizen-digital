import MusicShowcase from '@/components/MusicShowcase';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ThrumProjectPage() {
  return (
    <main style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>
      <Navbar showAnnouncement={false} />
      
      <div style={{ padding: '120px 5% 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <Link 
          href="/" 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            color: '#888', 
            textDecoration: 'none',
            fontSize: '0.9rem',
            marginBottom: '40px'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Projects
        </Link>
        
        <h1 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '20px', letterSpacing: '-2px' }}>
          THRUM <span style={{ color: '#0070f3' }}>MUSIC</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#888', maxWidth: '700px', lineHeight: '1.6', marginBottom: '60px' }}>
          A revolutionary 3D music exploration platform designed for the next generation of listeners. 
          Built with high-fidelity interactions, adaptive design, and a premium aesthetic that pushes 
          the boundaries of mobile application UI.
        </p>
      </div>

      <MusicShowcase />

      <div style={{ padding: '80px 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>The Vision</h3>
            <p style={{ color: '#888', lineHeight: '1.8' }}>
              Our goal was to create a music app that felt "alive." By utilizing advanced CSS 3D transforms 
              and smooth animation engines, we developed an interface that responds to user intent 
              with visceral depth and motion.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Core Tech</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {["React", "Next.js", "Framer Motion", "WebGL", "Three.js", "Glassmorphism"].map(tech => (
                <span key={tech} style={{ 
                  padding: '6px 16px', 
                  background: 'rgba(255,255,255,0.05)', 
                  borderRadius: '20px', 
                  fontSize: '0.8rem',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
