import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./styles/Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={`${styles.sidebar}`}>
      <Logo />
      <AppNav />

      <Outlet />

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
      </p>
    </footer>
  );
}
