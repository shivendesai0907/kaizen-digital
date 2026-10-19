"use client";

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import styles from './MusicShowcase.module.css';
import Image from 'next/image';

const MusicShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Animation values for the 3D stack
  const x1 = useTransform(smoothProgress, [0, 0.3, 0.6], [500, 0, -500]);
  const rotateY1 = useTransform(smoothProgress, [0, 0.3, 0.6], [45, 0, -45]);
  const z1 = useTransform(smoothProgress, [0, 0.3, 0.6], [-400, 100, -400]);
  const opacity1 = useTransform(smoothProgress, [0, 0.1, 0.5, 0.6], [0, 1, 1, 0]);

  const x2 = useTransform(smoothProgress, [0.2, 0.5, 0.8], [500, 0, -500]);
  const rotateY2 = useTransform(smoothProgress, [0.2, 0.5, 0.8], [45, 0, -45]);
  const z2 = useTransform(smoothProgress, [0.2, 0.5, 0.8], [-400, 100, -400]);
  const opacity2 = useTransform(smoothProgress, [0.2, 0.3, 0.7, 0.8], [0, 1, 1, 0]);

  const x3 = useTransform(smoothProgress, [0.4, 0.7, 1], [500, 0, -500]);
  const rotateY3 = useTransform(smoothProgress, [0.4, 0.7, 1], [45, 0, -45]);
  const z3 = useTransform(smoothProgress, [0.4, 0.7, 1], [-400, 100, -400]);
  const opacity3 = useTransform(smoothProgress, [0.4, 0.5, 0.9, 1], [0, 1, 1, 0]);

  const cards = [
    { id: 1, img: '/images/music/split.png', x: x1, rotateY: rotateY1, z: z1, opacity: opacity1, title: 'Adaptive Design' },
    { id: 2, img: '/images/music/mockups.png', x: x2, rotateY: rotateY2, z: z2, opacity: opacity2, title: 'Multi-Device Support' },
    { id: 3, img: '/images/music/plastic.png', x: x3, rotateY: rotateY3, z: z3, opacity: opacity3, title: 'Premium Branding' },
  ];

  return (
    <section ref={containerRef} className={styles.section} id="music-app">
      <div className={styles.stickyContainer}>
        <div className={styles.backgroundGlow} />
        
        <div className={styles.contentOverlay}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={styles.textStack}
          >
            <h2 className={styles.mainTitle}>
              {activeId ? cards.find(c => c.id === activeId)?.title : "THRUM EXPERIENCE"}
            </h2>
            <p className={styles.subTitle}>Scroll to navigate through the vision</p>
          </motion.div>
        </div>

        <div className={styles.phoneStack}>
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className={`${styles.showcaseCard} ${activeId === card.id ? styles.activeCard : ''}`}
              onClick={() => setActiveId(activeId === card.id ? null : card.id)}
              style={{
                x: activeId === card.id ? 0 : card.x,
                rotateY: activeId === card.id ? 0 : card.rotateY,
                z: activeId === card.id ? 500 : card.z,
                opacity: activeId === card.id ? 1 : card.opacity,
                scale: activeId === card.id ? 1.1 : 1,
                zIndex: activeId === card.id ? 2000 : (100 - card.id),
              }}
            >
              <Image 
                src={card.img} 
                alt={card.title} 
                fill 
                sizes="100vw"
                quality={90}
                priority
                className={styles.img}
              />
              <div className={styles.cardOverlay}>
                <h3>{card.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {!activeId && (
          <div className={styles.scrollIndicator}>
            <span>Deep Dive</span>
            <div className={styles.indicatorLine} />
          </div>
        )}
      </div>
    </section>
  );
};

export default MusicShowcase;
