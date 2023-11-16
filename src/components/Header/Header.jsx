import { useState } from 'react';

function Header() {
  const [collapse, setCollapse] = useState(false);

  const toggleNavbar = () => {
    setCollapse(!collapse);
  }

  return (
    <header>
      <nav>
        <div className="container navbar-and-footer">
          <div className="company-name">My Company</div>
          <button className="navbar-toggler" onClick={toggleNavbar}>
            <div></div>
            <div></div>
            <div></div>
          </button>
          <ul className={`navbar-links ${collapse ? "collapse" : ""}`}>
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