import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="head-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <h1 className="title">Wave</h1>
    </div>
    <ul className="links-container">
      <li className="li">
        <Link className="link-styles" to="/">
          Home
        </Link>
      </li>
      <li className="li">
        <Link className="link-styles" to="/about">
          About
        </Link>
      </li>
      <li className="li">
        <Link className="link-styles" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
