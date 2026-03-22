import { useEffect, useState } from 'react';

function renderStars(note) {
  const fullStars = Math.floor(note);
  const emptyStars = 5 - fullStars;

  return (
    <div className="stars">
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} className="star filled">★</span>
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className="star empty">★</span>
      ))}
    </div>
  );
}

function Home() {
  const [topArtisans, setTopArtisans] = useState([]);

  const avatars = [
    '/images/avatar_accueil/avatar_accueil1.png',
    '/images/avatar_accueil/avatar_accueil2.png',
    '/images/avatar_accueil/avatar_accueil3.png',
  ];

  useEffect(() => {
    fetch('http://localhost:3000/api/artisans')
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((artisan) => artisan.top_artisan === 1);
        setTopArtisans(filtered);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="home">
      <section className="hero">
        <div className="hero-overlay">
          <h2 className="hero-title">COMMENT TROUVER MON ARTISAN :</h2>

          <div className="steps">
            <div className="step-card">
              <span className="step-number">1</span>
              <p>Sélectionner la catégorie d’artisanat dans le menu</p>
            </div>

            <div className="step-card">
              <span className="step-number">2</span>
              <p>Sélectionner votre artisan</p>
            </div>

            <div className="step-card">
              <span className="step-number">3</span>
              <p>Le contacter via le formulaire de contact</p>
            </div>

            <div className="step-card">
              <span className="step-number">4</span>
              <p>Une réponse sera apportée sous 48h</p>
            </div>
          </div>
        </div>
      </section>

      <section className="top-artisans">
        <h2 className="top-title">ARTISANS DU MOIS</h2>
        <img src="/images/underline.png" alt="" className="underline" />

        <div className="top-grid">
          {topArtisans.map((artisan, index) => (
            <article key={artisan.id} className="artisan-card">
              <div className="artisan-card-top">
                <h3>{artisan.nom}</h3>
                <p className="artisan-job">{artisan.specialite}</p>
              </div>

              <div className="artisan-card-middle">
                <div className="artisan-avatar">
                  <img
                    src={avatars[index % avatars.length]}
                    alt={`Avatar de ${artisan.nom}`}
                  />
                </div>

                <div className="artisan-location">
                  <span>{artisan.ville}</span>
                  <span className="postal-code">{artisan.code_postal}</span>
                </div>
              </div>

              <div className="artisan-card-bottom">
                {renderStars(artisan.note)}
                <button>Voir fiche</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;