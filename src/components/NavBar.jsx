import { NavLink } from "react-router-dom";

import Logo from "./Logo";

import styles from "./NavBar.module.css";
import Button from "./reusables/Button";

function NavBar() {
  return (
    <div className={styles.nav}>
      <Logo />

      <ul className={styles.navItems}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <Button color="#000000">Download CV</Button>
      </ul>
    </div>
  );
}

export default NavBar;
