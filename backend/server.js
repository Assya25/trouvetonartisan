require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: process.env.DB_HOST,
  port: 8889,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.get('/', (req, res) => {
  res.send('API OK');
});

app.get('/api/categories', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM categories');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

app.get('/api/artisans', async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT a.*, c.nom AS categorie
      FROM artisans a
      JOIN categories c ON a.categorie_id = c.id
    `);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

app.get('/api/artisans/:id', async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT a.*, c.nom AS categorie
       FROM artisans a
       JOIN categories c ON a.categorie_id = c.id
       WHERE a.id = ?`,
      [req.params.id]
    );
    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${process.env.PORT}`);
});