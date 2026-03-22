import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Instagram, Twitter } from 'lucide-react';

function renderStars(note) {
  const fullStars = Math.floor(note);
  const emptyStars = 5 - fullStars;

  return (
    <div className="fiche-stars">
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} className="star filled">★</span>
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className="star empty">★</span>
      ))}
    </div>
  );
}

function FicheArtisan() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [activeTab, setActiveTab] = useState('profil');
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/api/artisans/${id}`)
      .then((res) => res.json())
      .then((data) => setArtisan(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!artisan) {
    return (
      <main className="fiche-page">
        <p>Chargement...</p>
      </main>
    );
  }

  const realisations = [
    '/images/fiche_artisan/realisation1.jpg',
    '/images/fiche_artisan/realisation2.jpg',
    '/images/fiche_artisan/realisation3.jpg',
    '/images/fiche_artisan/realisation4.jpg',
  ];

  const tags = ['Retouches', 'Atelier couture', 'Pièces sur mesure', 'Customisation'];

  const avis = [
    {
      nom: 'Camille D.',
      note: 5,
      texte:
        'Travail très soigné, retouches impeccables et super communication du début à la fin.',
    },
    {
      nom: 'Sonia L.',
      note: 4,
      texte:
        'Très contente du résultat. La pièce sur mesure est belle et les finitions sont propres.',
    },
    {
      nom: 'Nadia R.',
      note: 5,
      texte:
        'Rapide, attentive et créative. Je repasserai clairement par lui pour mes prochains projets.',
    },
  ];

  return (
    <main className="fiche-page">
      <section className="fiche-wrapper">
        <div className="fiche-layout">
          <div className="fiche-left">
            <Link to="/fabrication" className="fiche-back">
              ← Retour à la liste d’artisans
            </Link>

            <section className="fiche-top">
              <div className="fiche-identite">
                <div className="fiche-avatar">
                  <img
                    src="/images/fiche_artisan/avatar_artisan.png"
                    alt={`Portrait de ${artisan.nom}`}
                  />
                </div>

                <div className="fiche-main-info">
                  <h1>{artisan.nom}</h1>
                  <p className="fiche-job">{artisan.specialite}</p>

                  <div className="fiche-note-row">
                    {renderStars(artisan.note)}
                    <span className="fiche-note-text">
                      {artisan.note}/5 (232 Avis)
                    </span>
                  </div>

                  <p className="fiche-ville">📍 {artisan.ville}</p>

                  <div className="fiche-socials">
                    <span className="social-link">
                      <Instagram size={16} />
                      @amiteecouture
                    </span>

                    <span className="social-separator">/</span>

                    <span className="social-link">
                      <Twitter size={16} />
                      @couturebyA
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className="fiche-banner">
              <img
                src="/images/fiche_artisan/banniere_artisan.png"
                alt="Bannière artisan"
              />
            </section>

            <section className="fiche-tabs">
  <button
    type="button"
    className={`fiche-tab-btn ${activeTab === 'profil' ? 'active' : ''}`}
    onClick={() => setActiveTab('profil')}
  >
    Profil
  </button>

  <button
    type="button"
    className={`fiche-tab-btn ${activeTab === 'avis' ? 'active' : ''}`}
    onClick={() => setActiveTab('avis')}
  >
    Avis
  </button>
</section>

            {activeTab === 'profil' ? (
              <section className="fiche-content">
                <article className="fiche-about">
                  <h2>A propos de l’artisan</h2>

                  <p className="fiche-site">
                    {artisan.site_web || 'https://amitee-couture.com'}
                  </p>

                  <p
                    className={`fiche-description ${
                      showMore ? 'expanded' : 'collapsed'
                    }`}
                  >
                    {artisan.a_propos}
                  </p>

                  <button
                    type="button"
                    className="fiche-more"
                    onClick={() => setShowMore(!showMore)}
                  >
                    •••
                  </button>
                </article>

                <article className="fiche-realisations">
                  <h2>Réalisations</h2>

                  <div className="fiche-gallery">
                    {realisations.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Réalisation ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="fiche-tags">
                    {tags.map((tag) => (
                      <span key={tag} className="fiche-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </section>
            ) : (
              <section className="fiche-avis-section">
                {avis.map((avisItem, index) => (
                  <article key={index} className="avis-card">
                    <div className="avis-header">
                      <h3>{avisItem.nom}</h3>
                      <div className="avis-stars">
                        {renderStars(avisItem.note)}
                      </div>
                    </div>
                    <p>{avisItem.texte}</p>
                  </article>
                ))}
              </section>
            )}
          </div>

          <aside className="fiche-form">
            <label>
              Nom
              <input type="text" placeholder="votre nom" />
            </label>

            <label>
              Email
              <input type="email" placeholder="votre email" />
            </label>

            <label>
              Objet
              <input type="text" placeholder="objet de la demande" />
            </label>

            <label>
              Message
              <textarea placeholder="votre message" rows="4"></textarea>
            </label>

            <button type="button">Envoyer</button>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default FicheArtisan;