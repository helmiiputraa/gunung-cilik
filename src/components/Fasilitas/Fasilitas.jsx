import { FiMapPin, FiCamera, FiStar } from 'react-icons/fi';
import { GiCampingTent, GiMeal } from 'react-icons/gi';
import { FaParking, FaRestroom, FaMosque } from 'react-icons/fa';
import { hargaTiket, fasilitasList } from '../../data/content';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Fasilitas.module.css';

const iconMap = {
  parking: <FaParking />,
  camping: <GiCampingTent />,
  toilet: <FaRestroom />,
  food: <GiMeal />,
  photo: <FiCamera />,
  mosque: <FaMosque />,
};

export default function Fasilitas() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [pricingRef, pricingVisible] = useScrollReveal();
  const [facilRef, facilVisible] = useScrollReveal();

  return (
    <section className={`section ${styles.fasilitas}`} id="fasilitas">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header reveal ${headerVisible ? 'visible' : ''}`}
        >
          <span className="section-label">Harga & Fasilitas</span>
          <h2 className="section-title">Harga Tiket & Fasilitas Lengkap</h2>
          <p className="section-subtitle">
            Nikmati berbagai fasilitas wisata Gunung Cilik dengan harga yang terjangkau
          </p>
        </div>

        {/* Pricing Cards */}
        <div
          ref={pricingRef}
          className={`${styles.pricingGrid} reveal-stagger ${pricingVisible ? 'visible' : ''}`}
        >
          {hargaTiket.map((item) => (
            <div className={styles.pricingCard} key={item.id}>
              <span className={styles.pricingIcon}>{item.icon}</span>
              <div className={styles.pricingKategori}>{item.kategori}</div>
              <div className={styles.pricingHarga}>{item.harga}</div>
              <div className={styles.pricingKeterangan}>{item.keterangan}</div>
            </div>
          ))}
        </div>

        {/* Facilities */}
        <div className={styles.facilitiesLabel}>
          <span className={styles.facilitiesLabelText}>Fasilitas Tersedia</span>
        </div>
        <div
          ref={facilRef}
          className={`${styles.facilitiesGrid} reveal-stagger ${facilVisible ? 'visible' : ''}`}
        >
          {fasilitasList.map((f) => (
            <div className={styles.facilityCard} key={f.id}>
              <div className={styles.facilityIconWrapper}>
                {iconMap[f.icon] || <FiStar />}
              </div>
              <h3 className={styles.facilityTitle}>{f.title}</h3>
              <p className={styles.facilityDesc}>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
