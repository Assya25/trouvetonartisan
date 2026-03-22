# Trouve ton artisan

Projet web réalisé avec React, Vite, Node.js, Express et MySQL.

## Présentation

**Trouve ton artisan** est un site permettant de rechercher des artisans par catégorie :
- Alimentation
- Services
- Fabrication
- Bâtiment

Le site propose :
- une page d’accueil
- des pages listes par catégorie
- une fiche artisan
- des pages légales
- une page 404

## Technologies utilisées

### Frontend
- React
- Vite
- React Router
- CSS

### Backend
- Node.js
- Express

### Base de données
- MySQL
- phpMyAdmin

## Arborescence du projet

trouve-ton-artisan/
├── backend/
├── frontend/
├── create_and_seed.sql
└── README.md

## Installation

### 1. Cloner le projet

git clone https://github.com/Assya25/trouvetonartisan.git
cd trouvetonartisan

### 2. Installer le frontend

cd frontend
npm install
npm run dev

### 3. Installer le backend

cd ../backend
npm install
node server.js

## Base de données

Le fichier SQL fourni permet de créer et alimenter la base :

create_and_seed.sql

Il contient :
- la création des tables
- l’insertion des catégories
- l’insertion des artisans de test

## Fonctionnalités

- Navigation entre les catégories
- Recherche par activité
- Filtrage par code postal
- Consultation des fiches artisans
- Onglets profil / avis sur la fiche artisan
- Pages mentions légales, accessibilité, cookies et données personnelles
- Page 404 personnalisée

## Auteur

Projet réalisé par **Assya Adaidi**.

## Lien du dépôt

GitHub : https://github.com/Assya25/trouvetonartisan