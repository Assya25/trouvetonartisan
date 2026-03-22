function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <input
          type="text"
          placeholder="Rechercher"
          className="search"
        />

        <div className="brand">
          <div className="brand-text">
            <h1>Trouve ton artisan !</h1>
            <p>Avec la région Auvergne-Rhône-Alpes</p>
          </div>

          <img
            src="/images/favicon.png"
            alt="Icône artisan"
            className="favicon"
          />
        </div>
      </div>

      <nav className="navbar">
        <a href="/alimentation">Alimentation</a>
        <a href="/services">Services</a>
        <a href="/fabrication">Fabrication</a>
        <a href="/batiment">Bâtiment</a>
      </nav>
    </header>
  );
}

export default Header;