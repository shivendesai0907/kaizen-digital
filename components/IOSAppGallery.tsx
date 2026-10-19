"use client";

import React from 'react';
import styles from './IOSAppGallery.module.css';
import ScrollReveal from './ScrollReveal';
import Lightbox from './Lightbox';
import Image from 'next/image';

const IOSAppGallery = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const apps = [
    {
      id: 'thrum',
      title: 'Thrum',
      description: 'Next-generation 3D music experience and social platform.',
      image: '/images/music/home.png',
      link: '/projects/thrum'
    },
    {
      id: 'robinhood',
      title: 'Robinhood',
      description: 'Pioneering commission-free investing app.',
      image: 'https://image.thum.io/get/width/1200/crop/800/https://robinhood.com',
      link: 'https://robinhood.com'
    },
    {
      id: 'revolut',
      title: 'Revolut',
      description: 'Global financial superapp.',
      image: 'https://image.thum.io/get/width/1200/crop/800/https://www.revolut.com',
      link: 'https://www.revolut.com'
    },
    {
      id: 'cashapp',
      title: 'Cash App',
      description: 'The easiest way to send, spend, save, and invest your money.',
      image: 'https://image.thum.io/get/width/1200/crop/800/https://cash.app',
      link: 'https://cash.app'
    }
  ];

  const handleCardClick = (e: React.MouseEvent, app: any) => {
    e.preventDefault();
    setSelectedImage(app.image);
  };

  return (
    <>
      <section className={styles.section} id="ios-apps">
        <div className={styles.titleWrapper}>
          <ScrollReveal blur={10} xOffset={-20}>
            <h2 className={styles.title}>iOS Apps</h2>
          </ScrollReveal>
        </div>

        <div className={styles.grid}>
          {apps.map((app, index) => (
            <ScrollReveal 
              key={app.id} 
              delay={index * 0.1} 
              yOffset={30} 
              blur={10}
            >
              <a 
                href={app.link} 
                target={app.id === 'thrum' ? '_self' : '_blank'} 
                rel="noopener noreferrer" 
                className={styles.card}
                onClick={(e) => handleCardClick(e, app)}
              >
                <div className={styles.imageContainer}>
                  <div className={styles.badge}>iOS APPS</div>
                  <Image 
                    src={app.image} 
                    alt={app.title} 
                    fill 
                    style={{ objectFit: 'cover' }}
                    quality={app.id === 'thrum' ? 90 : 75}
                    priority={app.id === 'thrum'}
                  />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{app.title}</h3>
                  <p className={styles.cardDescription}>{app.description}</p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Lightbox 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)} 
        src={selectedImage || ''} 
      />
    </>
  );
};

export default IOSAppGallery;
