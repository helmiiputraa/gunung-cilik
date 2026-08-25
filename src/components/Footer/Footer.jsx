import { GiMountainRoad } from 'react-icons/gi';
import { navLinks, siteConfig } from '../../data/content';
import styles from './Footer.module.css';

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <GiMountainRoad className={styles.footerLogoIcon} />
              <span>{siteConfig.name}</span>
            </div>
            <p className={styles.footerDesc}>
              Destinasi wisata alam terbaik di Desa Damarkasiyan. Nikmati keindahan
              pemandangan, udara sejuk, dan berbagai aktivitas wisata seru bersama
              keluarga dan teman-teman.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4>Navigasi</h4>
            <div className={styles.footerLinks}>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  className={styles.footerLink}
                  onClick={() => scrollTo(link.id)}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4>Kontak</h4>
            <div className={styles.footerLinks}>
              <span className={styles.footerLink}>{siteConfig.phone}</span>
              <span className={styles.footerLink}>{siteConfig.instagram}</span>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerCopyright}>
            © 2026 <a href="#">{siteConfig.name}</a>. Desa Damarkasiyan. Hak Cipta Dilindungi.
          </div>
          <div className={styles.footerCredit}>
            Dibuat dengan <span>❤</span> dari KKN GIAT 16 UNNES
          </div>
        </div>
      </div>
    </footer>
  );
}
