import { useState, useCallback, useEffect } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { galeriImages } from '../../data/content';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Galeri.module.css';

// Dynamically import all gallery images
const imageModules = import.meta.glob('../../assets/images/*.{png,PNG,jpg,jpeg,JPG,JPEG}', { eager: true });

function getImageSrc(filename) {
  const key = Object.keys(imageModules).find((k) => k.endsWith(filename));
  return key ? imageModules[key].default : '';
}

export default function Galeri() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % galeriImages.length);
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + galeriImages.length) % galeriImages.length);
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [lightboxIndex, goNext, goPrev]);

  return (
    <section className={`section ${styles.galeri}`} id="galeri">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header reveal ${headerVisible ? 'visible' : ''}`}
        >
          <span className="section-label">Galeri Foto</span>
          <h2 className="section-title">Momen Indah di Gunung Cilik</h2>
          <p className="section-subtitle">
            Kumpulan foto-foto keindahan alam dan aktivitas wisata di Gunung Cilik
          </p>
        </div>

        <div
          ref={gridRef}
          className={`${styles.galeriGrid} reveal-stagger ${gridVisible ? 'visible' : ''}`}
        >
          {galeriImages.map((img, index) => (
            <div
              className={styles.galeriItem}
              key={img.id}
              onClick={() => openLightbox(index)}
            >
              <img src={getImageSrc(img.src)} alt={img.alt} loading="lazy" />
              <div className={styles.galeriOverlay}>
                <span className={styles.galeriCaption}>{img.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.lightboxClose} onClick={closeLightbox}>
              <FiX />
            </button>
            <button
              className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
              onClick={goPrev}
            >
              <FiChevronLeft />
            </button>
            <button
              className={`${styles.lightboxNav} ${styles.lightboxNext}`}
              onClick={goNext}
            >
              <FiChevronRight />
            </button>
            <img
              src={getImageSrc(galeriImages[lightboxIndex].src)}
              alt={galeriImages[lightboxIndex].alt}
            />
            <div className={styles.lightboxCaption}>
              {galeriImages[lightboxIndex].caption}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
