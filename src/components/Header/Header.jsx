function Header() {
  return (
    <header>
      <nav>
        <div className="container navbar-and-footer">
          <div className="company-name">My Company</div>
          <button className="navbar-toggler">
            <div></div>
            <div></div>
            <div></div>
          </button>
          <ul className="navbar-links">
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#offer">Offer</a>
            </li>
            <li>
              <a href="#" onClick={e => e.preventDefault()} disabled>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;