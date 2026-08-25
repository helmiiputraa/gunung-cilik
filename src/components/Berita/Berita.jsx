import { FiCalendar, FiArrowRight } from 'react-icons/fi';
import { HiOutlineNewspaper } from 'react-icons/hi2';
import { beritaList } from '../../data/content';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Berita.module.css';

export default function Berita() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal();

  return (
    <section className={`section ${styles.berita}`} id="berita">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header reveal ${headerVisible ? 'visible' : ''}`}
        >
          <span className="section-label">Berita Terkini</span>
          <h2 className="section-title">Kabar Terbaru Gunung Cilik</h2>
          <p className="section-subtitle">
            Informasi terbaru seputar kegiatan wisata dan event di Gunung Cilik
          </p>
        </div>

        <div
          ref={gridRef}
          className={`${styles.beritaGrid} reveal-stagger ${gridVisible ? 'visible' : ''}`}
        >
          {beritaList.map((item) => (
            <article className={styles.beritaCard} key={item.id}>
              <div className={styles.beritaThumb}>
                <HiOutlineNewspaper className={styles.beritaThumbIcon} />
                <span className={styles.beritaCategory}>{item.category}</span>
              </div>
              <div className={styles.beritaBody}>
                <div className={styles.beritaDate}>
                  <FiCalendar size={14} />
                  {item.date}
                </div>
                <h3 className={styles.beritaTitle}>{item.title}</h3>
                <p className={styles.beritaExcerpt}>{item.excerpt}</p>
                <span className={styles.beritaReadMore}>
                  Baca Selengkapnya <FiArrowRight />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
