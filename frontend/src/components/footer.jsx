import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-contact-block">
          <span className="footer-icon">⌖</span>
          <div>
            <p>101 cours Charlemagne</p>
            <p>CS 20233</p>
            <p>69269 LYON CEDEX 02</p>
          </div>
        </div>

        <div className="footer-contact-block">
          <span className="footer-icon">⌕</span>
          <p>+33 (0)4 26 73 40 00</p>
        </div>

        <div className="footer-contact-block">
          <span className="footer-icon">✉</span>
          <p>contact@artisant.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-legal-title">
          <h3>INFORMATION LEGALE</h3>
        </div>

        <div className="footer-links">
          <div className="footer-links-col">
            <Link to="/mentions-legales">Mentions légales</Link>
            <Link to="/donnees-personnelles">Données personnelles</Link>
          </div>

          <div className="footer-links-col">
            <Link to="/accessibilite">Accessibilité</Link>
            <Link to="/cookies">Cookies</Link>
          </div>
        </div>

        <div className="footer-brand">
          <h3>Trouve ton artisan !</h3>
          <p>Avec la région</p>
          <p>Auvergne-Rhône-Alpes</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;