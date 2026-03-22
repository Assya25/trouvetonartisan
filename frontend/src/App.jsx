import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import ArtisansAlimentaire from './pages/artisansalimentaire';
import ArtisansServices from './pages/artisansservices';
import ArtisansFabrication from './pages/artisansfabrication';
import ArtisansBatiment from './pages/artisansbatiment';
import FicheArtisan from './pages/ficheartisan';
import MentionsLegales from './pages/mentionlegal';
import Cookies from './pages/cookies';
import Accessibilite from './pages/accessibilite';
import DonneesPersonnelles from './pages/donneespersonnel';
import NotFound from './pages/notfound';

function App() {
  return (
    <div className="page">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alimentation" element={<ArtisansAlimentaire />} />
        <Route path="/services" element={<ArtisansServices />} />
        <Route path="/fabrication" element={<ArtisansFabrication />} />
        <Route path="/batiment" element={<ArtisansBatiment />} />
        <Route path="/artisan/:id" element={<FicheArtisan />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/accessibilite" element={<Accessibilite />} />
        <Route path="/donnees-personnelles" element={<DonneesPersonnelles />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;