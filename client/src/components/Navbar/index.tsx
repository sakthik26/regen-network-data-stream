import './Navbar.css';
import logo from '../../assets/logo.jpeg';
const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo-container">
        <img src={logo} alt="Regen Market" className="navbar-logo" />
      </div>
    </header>
  );
};

export default Navbar;
