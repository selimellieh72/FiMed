import React from "react";
import styles from "./Header.module.scss";
export default function Header() {
  return (
    <header className={styles.main_header}>
      <a href="#" className={styles.main_brand}>
        FiMeds
      </a>
      <nav className={styles.main_nav}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Our App</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
