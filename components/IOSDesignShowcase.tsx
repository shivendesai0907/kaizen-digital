"use client";

import React, { useRef, useState, useEffect } from 'react';
import styles from './IOSDesignShowcase.module.css';
import { iosScreenshots } from '@/lib/iosData';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import Lightbox from './Lightbox';

const IOSDesignShowcase = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-500, 500], [10, -10]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-500, 500], [-10, 10]), { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX - innerWidth / 2);
      mouseY.set(clientY - innerHeight / 2);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.header}>
        <h2 className={styles.title}>Design Ecosystem</h2>
        <p className={styles.subtitle}>Navigate through our visual library of {iosScreenshots.length} premium interfaces.</p>
      </div>

      <motion.div 
        className={styles.perspectiveContainer}
        style={{ rotateX, rotateY }}
      >
        <div className={styles.interactiveGrid}>
          {iosScreenshots.map((src, index) => (
            <motion.div 
              key={index} 
              className={styles.gridItem}
              whileHover={{ 
                scale: 1.1, 
                z: 100,
                boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
              }}
              onClick={() => setSelectedImage(src)}
              initial={{ opacity: 0, scale: 0.8, z: -100 }}
              whileInView={{ opacity: 1, scale: 1, z: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 15) * 0.05 }}
              style={{
                translateZ: (index % 3) * 20
              }}
            >
              <Image 
                src={src} 
                alt={`iOS Screenshot ${index + 1}`} 
                width={300}
                height={600}
                className={styles.image}
                quality={60}
              />
              <div className={styles.cardGlow} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Lightbox 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)} 
        src={selectedImage || ''} 
      />
    </section>
  );
};

export default IOSDesignShowcase;
