import { Link } from 'react-router-dom';

function PageEnConstruction() {
  return (
    <main className="construction-page">
      <section className="construction-wrapper">
        <img
          src="/images/page_en_construction.png"
          alt="Page en construction"
          className="construction-image"
        />

        <div className="construction-actions">
          <Link to="/" className="construction-home-btn">
            Retour à l&apos;accueil
          </Link>
        </div>
      </section>
    </main>
  );
}

export default PageEnConstruction;