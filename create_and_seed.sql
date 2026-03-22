-- =====================================================
-- CREATE AND SEED - TROUVE TON ARTISAN
-- =====================================================

CREATE DATABASE IF NOT EXISTS trouve_ton_artisan
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE trouve_ton_artisan;

-- =====================================================
-- SUPPRESSION DES TABLES SI ELLES EXISTENT
-- =====================================================

DROP TABLE IF EXISTS artisans;
DROP TABLE IF EXISTS categories;

-- =====================================================
-- TABLE CATEGORIES
-- =====================================================

CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100) NOT NULL
);

-- =====================================================
-- TABLE ARTISANS
-- =====================================================

CREATE TABLE artisans (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(150) NOT NULL,
  specialite VARCHAR(150) NOT NULL,
  note DECIMAL(2,1) NOT NULL,
  ville VARCHAR(100) NOT NULL,
  code_postal VARCHAR(10) NOT NULL,
  a_propos TEXT NOT NULL,
  email VARCHAR(150) NOT NULL,
  site_web VARCHAR(255),
  top_artisan TINYINT(1) NOT NULL DEFAULT 0,
  categorie_id INT NOT NULL,
  FOREIGN KEY (categorie_id) REFERENCES categories(id)
);

-- =====================================================
-- INSERTION DES CATEGORIES
-- =====================================================

INSERT INTO categories (nom) VALUES
('Alimentation'),
('Services'),
('Fabrication'),
('Bâtiment');

-- =====================================================
-- INSERTION DES ARTISANS
-- =====================================================

INSERT INTO artisans (
  nom,
  specialite,
  note,
  ville,
  code_postal,
  a_propos,
  email,
  site_web,
  top_artisan,
  categorie_id
) VALUES
-- ALIMENTATION
(
  'Boucherie Dumont',
  'Boucher',
  4.5,
  'Lyon',
  '69000',
  'Boucher artisanal proposant des produits de qualité et un service de proximité.',
  'boucherie.dumont@gmail.com',
  'https://boucherie-dumont.fr',
  0,
  1
),
(
  'Au pain chaud',
  'Boulanger',
  4.8,
  'Montélimar',
  '26200',
  'Boulangerie artisanale spécialisée dans les pains traditionnels et les viennoiseries.',
  'aupainchaud@hotmail.com',
  'https://au-pain-chaud.fr',
  1,
  1
),
(
  'Chocolaterie Labbé',
  'Chocolatier',
  4.9,
  'Lyon',
  '69000',
  'Chocolatier artisanal proposant des créations maison et des spécialités originales.',
  'chocolaterie-labbe@gmail.com',
  'https://chocolaterie-labbe.fr',
  1,
  1
),
(
  'Traiteur Truchon',
  'Traiteur',
  4.1,
  'Lyon',
  '69000',
  'Traiteur pour événements privés et professionnels avec une cuisine maison.',
  'contact@truchon.fr',
  'https://truchon.fr',
  0,
  1
),

-- SERVICES
(
  'Royden Charbonneau',
  'Coiffeur',
  3.8,
  'Saint-Priest',
  '69800',
  'Coiffeur spécialisé dans les coupes modernes et l’accompagnement personnalisé.',
  'royden-charbonneau@gmail.com',
  'https://royden-charbonneau.fr',
  0,
  2
),
(
  'Leela Dennis',
  'Coiffeur',
  4.5,
  'Chambéry',
  '73000',
  'Coiffeuse spécialisée dans les colorations, les soins et les coupes actuelles.',
  'leela-dennis@gmail.com',
  'https://leela-dennis.fr',
  0,
  2
),
(
  'Le monde des fleurs',
  'Fleuriste',
  4.6,
  'Valence',
  '26000',
  'Fleuriste proposant bouquets, compositions et décoration florale pour événements.',
  'lemondedesfleurs@gmail.com',
  'https://lemondedesfleurs.fr',
  0,
  2
),
(
  'Valérie Laderoute',
  'Toiletteur',
  4.0,
  'Valence',
  '26000',
  'Toiletteuse pour animaux avec prise en charge douce et prestations personnalisées.',
  'valerie-laderoute@gmail.com',
  'https://valerie-laderoute.fr',
  0,
  2
),
(
  'CM Graphisme',
  'Webdesigner',
  4.4,
  'Valence',
  '26000',
  'Webdesigner spécialisé dans les identités visuelles, interfaces et supports web.',
  'contact@cmgraphisme.fr',
  'https://cmgraphisme.fr',
  0,
  2
),

-- FABRICATION
(
  'Boutot & fils',
  'Menuisier',
  4.7,
  'Bourg-en-Bresse',
  '01000',
  'Atelier de menuiserie artisanale spécialisé dans le sur-mesure et l’aménagement intérieur.',
  'boutot-et-fils@gmail.com',
  'https://boutot-menuiserie.fr',
  0,
  3
),
(
  'Claude Quinn',
  'Bijoutier',
  4.2,
  'Aix-les-Bains',
  '73100',
  'Bijoutier créateur proposant fabrication, transformation et réparation de bijoux.',
  'claude-quinn@gmail.com',
  'https://claude-quinn.fr',
  0,
  3
),
(
  'Amitee Lécuyer',
  'Couturier',
  4.5,
  'Annecy',
  '74000',
  'Couturière spécialisée dans les retouches, le sur-mesure, la customisation et les pièces uniques.',
  'contact@amitee-couture.com',
  'https://amitee-couture.com',
  0,
  3
),
(
  'Ernest Carignan',
  'Ferronnier',
  5.0,
  'Le Puy-en-Velay',
  '43000',
  'Ferronnier réalisant ouvrages métalliques décoratifs et pièces sur mesure.',
  'contact@carignan-ferronnerie.com',
  'https://carignan-ferronnerie.com',
  0,
  3
),

-- BÂTIMENT
(
  'Orville Salmons',
  'Chauffagiste',
  5.0,
  'Échirolles',
  '38130',
  'Chauffagiste spécialisé dans l’installation, l’entretien et le dépannage de systèmes thermiques.',
  'orville@gmail.com',
  'https://orvillesalmons.fr',
  1,
  4
),
(
  'Mont Blanc Électricité',
  'Electricien',
  4.5,
  'Chamonix',
  '74400',
  'Electricien pour installations, mises aux normes et dépannages électriques.',
  'contact@montblanc-electricite.com',
  'https://montblanc-electricite.com',
  0,
  4
),
(
  'Vallis Bellemare',
  'Plombier',
  4.8,
  'Vienne',
  '38200',
  'Plombier intervenant sur installation, rénovation et dépannage.',
  'contact@vallis-plomberie.com',
  'https://vallis-plomberie.com',
  0,
  4
);