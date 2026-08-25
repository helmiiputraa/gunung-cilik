import { FiMapPin, FiClock, FiExternalLink } from 'react-icons/fi';
import { siteConfig } from '../../data/content';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Lokasi.module.css';

export default function Lokasi() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [contentRef, contentVisible] = useScrollReveal();

  return (
    <section className={`section ${styles.lokasi}`} id="lokasi">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header reveal ${headerVisible ? 'visible' : ''}`}
        >
          <span className="section-label">Temukan Kami</span>
          <h2 className="section-title">Lokasi Gunung Cilik</h2>
          <p className="section-subtitle">
            Terletak di Desa Damarkasiyan, Kecamatan Kertek, Kabupaten Wonosobo, Jawa Tengah
          </p>
        </div>

        <div
          ref={contentRef}
          className={`${styles.lokasiContent} reveal ${contentVisible ? 'visible' : ''}`}
        >
          {/* Map Embed */}
          <div className={styles.lokasiMap}>
            <iframe
              src={siteConfig.mapEmbedUrl}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Gunung Cilik"
            ></iframe>
          </div>

          {/* Info Panel */}
          <div className={styles.lokasiInfo}>
            <div className={styles.lokasiInfoCard}>
              <div className={styles.lokasiInfoCardHeader}>
                <div className={styles.lokasiInfoCardIcon}>
                  <FiMapPin />
                </div>
                <h3 className={styles.lokasiInfoCardTitle}>Alamat</h3>
              </div>
              <p className={styles.lokasiInfoCardText}>
                {siteConfig.address}
              </p>
            </div>

            <div className={styles.lokasiInfoCard}>
              <div className={styles.lokasiInfoCardHeader}>
                <div className={styles.lokasiInfoCardIcon}>
                  <FiClock />
                </div>
                <h3 className={styles.lokasiInfoCardTitle}>Jam Operasional</h3>
              </div>
              <p className={styles.lokasiInfoCardText}>
                Buka setiap hari, 24 jam. Area camping tersedia untuk menginap dan bermalam.
              </p>
            </div>

            <a
              className={styles.lokasiCta}
              href="https://maps.app.goo.gl/RjSt4gAe6ec5m3kv8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink /> Buka di Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
