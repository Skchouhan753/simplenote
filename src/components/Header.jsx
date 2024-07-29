import "./Header.css";
import logo from "../assets/logo.png";

const Header = () => (
  <header>
    <div className="App">
      <nav className="navbar">
        <div className="menu">
          <div className="logo">
            <img src={logo} alt="Logo" />
            <a className="logo-link" href="/#simplenote">Simplenote</a>
          </div>
          <div className="nav-links">
            <a className="menu-links" href="/#contact">Contact Us</a>
            <a className="menu-links" href="/#help">Help</a>
            <a className="menu-links" href="/#support">Support Forum</a>
            <a className="menu-links" href="/#blog">Blog</a>
            <a className="menu-links" href="/#login">Login</a>
            <a className="menu-links" href="/#signup">Sign Up</a>
          </div>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
