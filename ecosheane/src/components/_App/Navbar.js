import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

import Logo from "../../images/logo.png"

const Navbar = () => {
  const [menu, setMenu] = React.useState(true)

  const toggleNavbar = () => {
  }

  React.useEffect(() => {
    let elementId = document.getElementById("header")
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky")
      } else {
        elementId.classList.remove("is-sticky")
      }
    })
  })

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show"
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  return (
    <header id="header" className="headroom">
      <div className="startp-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link
              to="/it-startup"
              onClick={toggleNavbar}
              className="navbar-brand"
            >
              <img src={Logo} alt="logo" />
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                  <Link
                    to="/it-startup"
                    activeClassName="active"
                    onClick={toggleNavbar}
                    className="nav-link"
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/about-2"
                    activeClassName="active"
                    onClick={toggleNavbar}
                    className="nav-link"
                  >
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/projects-1"
                    activeClassName="active"
                    onClick={toggleNavbar}
                    className="nav-link"
                  >
                    Project
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/shop"
                    activeClassName="active"
                    onClick={toggleNavbar}
                    className="nav-link"
                  >
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/blog-1"
                    activeClassName="active"
                    onClick={toggleNavbar}
                    className="nav-link"
                  >
                    blogs
                  </Link>
                </li>
                
                


                <li className="nav-item">
                  <Link
                    to="/contact"
                    activeClassName="active"
                    onClick={toggleNavbar}
                    className="nav-link"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="others-option">
              <Link to="/cart" className="cart-wrapper-btn">
                <Icon.ShoppingCart />
                <span>0</span>
              </Link>

              <Link to="/contact" className="btn btn-light">
                Donate
              </Link>

              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
