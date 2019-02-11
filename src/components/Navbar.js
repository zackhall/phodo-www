import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/phodo-logo.svg'

const Navbar = (props) => (
  <nav className="navbar">
    <div className="container">
      <div className="row middle-xs">
        <div className="col-xs-12">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Phodo" style={{ height: '36px' }} />
          </Link>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
