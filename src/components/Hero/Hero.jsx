import { FiArrowDown } from 'react-icons/fi';
import { siteConfig } from '../../data/content';
import heroBg from '../../assets/images/Hero_image.png';
import styles from './Hero.module.css';

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroBg}>
        <img src={heroBg} alt="Pemandangan Gunung Cilik" loading="eager" />
        <div className={styles.heroOverlay}></div>
      </div>

      <div className={styles.heroContent}>
        <div className={styles.heroLabel}>
          🏔️ Desa Damarkasiyan
        </div>

        <h1 className={styles.heroTitle}>
          Jelajahi Keindahan{' '}
          <span className={styles.heroTitleAccent}>Gunung Cilik</span>
        </h1>

        <p className={styles.heroSubtitle}>{siteConfig.description}</p>

        <button className={styles.heroCta} onClick={() => scrollTo('fasilitas')}>
          Jelajahi Sekarang <FiArrowDown />
        </button>

        <div className={styles.heroStats}>
          <div className={styles.heroStat}>
            <div className={styles.heroStatNumber}>500+</div>
            <div className={styles.heroStatLabel}>Pengunjung / Bulan</div>
          </div>
          <div className={styles.heroStat}>
            <div className={styles.heroStatNumber}>4.7</div>
            <div className={styles.heroStatLabel}>Rating dari 1100+ Penilaian</div>
          </div>
          <div className={styles.heroStat}>
            <div className={styles.heroStatNumber}>10+</div>
            <div className={styles.heroStatLabel}>Spot Foto</div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        Scroll
        <span></span>
      </div>
    </section>
  );
}
