require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mysql = require('mysql2/promise');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(helmet());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET'],
    credentials: false,
  })
);

app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: 'Trop de requêtes, réessayez plus tard.' },
});

app.use('/api', limiter);

const db = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.get('/', (req, res) => {
  res.send('API OK');
});

app.get('/api/categories', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM categories ORDER BY nom ASC');
    res.json(rows);
  } catch (error) {
    console.error('Erreur récupération catégories :', error.message);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

app.get('/api/artisans', async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT 
        artisans.id,
        artisans.nom,
        artisans.specialite,
        artisans.note,
        artisans.ville,
        artisans.code_postal,
        artisans.a_propos,
        artisans.email,
        artisans.site_web,
        artisans.top_artisan,
        categories.nom AS categorie
      FROM artisans
      JOIN categories ON artisans.categorie_id = categories.id
      ORDER BY artisans.nom ASC
    `);

    res.json(rows);
  } catch (error) {
    console.error('Erreur récupération artisans :', error.message);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

app.get('/api/artisans/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!/^\d+$/.test(id)) {
      return res.status(400).json({ error: 'Identifiant invalide' });
    }

    const [rows] = await db.query(
      `
      SELECT 
        artisans.id,
        artisans.nom,
        artisans.specialite,
        artisans.note,
        artisans.ville,
        artisans.code_postal,
        artisans.a_propos,
        artisans.email,
        artisans.site_web,
        artisans.top_artisan,
        categories.nom AS categorie
      FROM artisans
      JOIN categories ON artisans.categorie_id = categories.id
      WHERE artisans.id = ?
      `,
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Artisan introuvable' });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error('Erreur récupération artisan :', error.message);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route introuvable' });
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});