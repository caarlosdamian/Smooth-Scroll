import React from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link
          className="navbar-container-link"
          activeClass="active"
          to="main"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Main
        </Link>
        <Link
          className="navbar-container-link"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          About
        </Link>
        <Link
          className="navbar-container-link"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
