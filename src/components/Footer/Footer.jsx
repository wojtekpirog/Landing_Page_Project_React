import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="container side-to-side">
        <div>
          <span>Nazwa firmy - wszelkie prawa zastrzeżone, 2019</span>
        </div>
        <ul className="social-links">
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} className="fa-brands" />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faFacebookSquare} className="fa-brands" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
