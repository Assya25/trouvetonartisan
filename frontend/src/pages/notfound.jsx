import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="notfound-page">
      <section className="notfound-wrapper">
        <img
          src="/images/404.png"
          alt="404 page introuvable"
          className="notfound-image"
        />

        <h1 className="notfound-title">404 PAGE INTROUVABLE</h1>
        <p className="notfound-text">
          La page que vous recherchez n’existe pas ou n’est plus disponible.
        </p>

        <Link to="/" className="notfound-button">
          Retour à l&apos;accueil
        </Link>
      </section>
    </main>
  );
}

export default NotFound;