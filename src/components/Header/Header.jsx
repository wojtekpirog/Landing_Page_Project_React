function Header() {
  return (
    <header>
      <nav>
        <div className="container side-to-side">
          <div className="company-name">nazwa firmy</div>
          <ul className="navbar-links">
            <li>
              <a href="#about">O nas</a>
            </li>
            <li>
              <a href="#offer">Oferta</a>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()} disabled={true}>
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
