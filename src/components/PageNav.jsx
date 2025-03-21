import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./styles/PageNav.module.css";

export default function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Log In
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
