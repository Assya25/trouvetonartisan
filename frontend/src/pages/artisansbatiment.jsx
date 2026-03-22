import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function renderStars(note) {
  const fullStars = Math.floor(note);
  const emptyStars = 5 - fullStars;

  return (
    <div className="stars-list">
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} className="star filled">★</span>
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className="star empty">★</span>
      ))}
    </div>
  );
}

function ArtisansBatiment() {
  const [artisans, setArtisans] = useState([]);
  const [codePostal, setCodePostal] = useState('');
  const [activite, setActivite] = useState('');
  const [sousCategorie, setSousCategorie] = useState('');

  const avatars = [
    '/images/avatar_accueil/avatar_accueil1.png',
    '/images/avatar_accueil/avatar_accueil2.png',
    '/images/avatar_accueil/avatar_accueil3.png',
  ];

  useEffect(() => {
    fetch('http://localhost:3000/api/artisans')
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (artisan) => artisan.categorie === 'Bâtiment'
        );
        setArtisans(filtered);
      })
      .catch((err) => console.error(err));
  }, []);

  const artisansFiltres = artisans.filter((artisan) => {
    const matchActivite =
      activite === '' ||
      artisan.specialite.toLowerCase().includes(activite.toLowerCase()) ||
      artisan.nom.toLowerCase().includes(activite.toLowerCase());

    const matchSousCategorie =
      sousCategorie === '' ||
      artisan.specialite.toLowerCase().includes(sousCategorie.toLowerCase());

    const matchCodePostal =
      codePostal === '' ||
      (artisan.code_postal && artisan.code_postal.includes(codePostal));

    return matchActivite && matchSousCategorie && matchCodePostal;
  });

  return (
    <main className="artisan-list-page">
      <section className="artisan-list-top">
        <div className="breadcrumb">
          <Link to="/">Accueil</Link>
          <span>/</span>
          <Link to="/batiment">Bâtiment</Link>
          <span>/</span>
          <span className="active">Artisans</span>
        </div>

        <h2 className="project-title">Quel est votre projet ?</h2>

        <div className="activity-search">
          <span className="search-icon">⌕</span>
          <input
            type="text"
            placeholder="Sélectionnez votre activité"
            value={activite}
            onChange={(e) => setActivite(e.target.value)}
            className="activity-input"
          />
        </div>
      </section>

      <section className="category-banner batiment-banner">
        <h1 className="category-title">ARTISANS DU BATIMENT</h1>
      </section>

      <section className="artisan-filters">
        <div className="postal-bar">
          <span className="postal-icon">⌖</span>
          <input
            type="text"
            placeholder="Votre code postal"
            value={codePostal}
            onChange={(e) => setCodePostal(e.target.value)}
            className="postal-input"
          />
          <button
            type="button"
            className="postal-arrow-btn"
            onClick={() => console.log('Recherche code postal :', codePostal)}
          >
            →
          </button>
        </div>

        <div className="subfilters">
          <button
            className="filter-btn filter-dark"
            onClick={() => setSousCategorie('elect')}
          >
            Electricien
          </button>

          <button
            className="filter-btn filter-blue"
            onClick={() => setSousCategorie('plomb')}
          >
            Plombier
          </button>

          <button
            className="filter-btn filter-grey"
            onClick={() => setSousCategorie('chauff')}
          >
            Chauffagiste
          </button>
        </div>
      </section>

      <section className="artisan-cards-grid">
        {artisansFiltres.map((artisan, index) => (
          <article key={artisan.id} className="artisan-list-card">
            <div className="artisan-list-stars">
              {renderStars(artisan.note)}
            </div>

            <h3>{artisan.nom}</h3>
            <p className="artisan-list-job">{artisan.specialite}</p>

            <div className="artisan-list-location-row">
              <div className="artisan-list-avatar">
                <img
                  src={avatars[index % avatars.length]}
                  alt={`Avatar de ${artisan.nom}`}
                />
              </div>

              <div className="artisan-list-location-text">
                <span>{artisan.ville}</span>
                <span className="postal-code">
                  {artisan.code_postal || '69000'}
                </span>
              </div>
            </div>

            <button className="arrow-btn">➜</button>
          </article>
        ))}
      </section>
    </main>
  );
}

export default ArtisansBatiment;