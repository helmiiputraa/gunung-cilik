import { FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { siteConfig } from '../../data/content';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Kontak.module.css';

export default function Kontak() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [contentRef, contentVisible] = useScrollReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const nama = form.querySelector('#contact-name').value;
    const pesan = form.querySelector('#contact-message').value;
    const waMessage = encodeURIComponent(`Halo, saya ${nama}.\n\n${pesan}`);
    window.open(`https://wa.me/6283822744884?text=${waMessage}`, '_blank');
  };

  return (
    <section className={`section ${styles.kontak}`} id="kontak">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header reveal ${headerVisible ? 'visible' : ''}`}
        >
          <span className="section-label">Hubungi Kami</span>
          <h2 className="section-title">Apakah ada pertanyaan?</h2>
          <p className="section-subtitle">
            Jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda
          </p>
        </div>

        <div
          ref={contentRef}
          className={`${styles.kontakWrapper} reveal ${contentVisible ? 'visible' : ''}`}
        >
          {/* Contact Info */}
          <div className={styles.kontakInfo}>
            <div className={styles.kontakInfoItem}>
              <div className={styles.kontakInfoIcon}>
                <FiMapPin />
              </div>
              <div>
                <div className={styles.kontakInfoLabel}>Alamat</div>
                <div className={styles.kontakInfoValue}>{siteConfig.address}</div>
              </div>
            </div>

            <div className={styles.kontakInfoItem}>
              <div className={styles.kontakInfoIcon}>
                <FiPhone />
              </div>
              <div>
                <div className={styles.kontakInfoLabel}>WhatsApp</div>
                <div className={styles.kontakInfoValue}>{siteConfig.phone}</div>
              </div>
            </div>


            <div className={styles.kontakSocial}>
              <a
                className={styles.kontakSocialLink}
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                className={styles.kontakSocialLink}
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                className={styles.kontakSocialLink}
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className={styles.kontakForm} onSubmit={handleSubmit}>
            <h3 className={styles.formTitle}>Kirim Pesan</h3>
            <div className={styles.formGroup}>
              <label htmlFor="contact-name">Nama Lengkap</label>
              <input
                type="text"
                id="contact-name"
                placeholder="Masukkan nama Anda"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="contact-message">Pesan</label>
              <textarea
                id="contact-message"
                placeholder="Tulis pertanyaan Anda di sini..."
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.formSubmit}>
              <FiSend /> Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

