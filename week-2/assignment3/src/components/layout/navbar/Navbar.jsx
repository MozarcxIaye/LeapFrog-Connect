import { FaSearch, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import './style.css'

const Navbar = () => {
  return (
    <header>
      <nav className="nav-main">
        <div className="nav-left">
          <div className="logo">
            <Link to="/" className="logo-link">
              <img src="/tmdb.svg" alt="TMDB Logo" height="30px" width="150px" />
            </Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/movie">Movies</Link></li>
            <li><Link to="/tv">TV Shows</Link></li>
            <li><Link to="/person">People</Link></li>
            <li><Link to="/more">More</Link></li>
          </ul>
        </div>
        <div className="nav-right">
          <ul className="nav-actions">
            <li><button><FaPlus /></button></li>
            <li><button className="lang-btn">EN</button></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Join TMDB</Link></li>
            <li className="search-icon"><FaSearch color="#01b4e4" /></li>
          </ul>
        </div>
      </nav>
    </header>


  )
}

export default Navbar