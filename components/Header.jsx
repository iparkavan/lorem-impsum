import React from "react";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <nav className={classes.header}>
        <div className={classes["header-logo"]}>
          <img src="images/Logo.png" alt="#Logo" />
          <p>LOGO</p>
        </div>
        <div className={classes.hamburger_menu}>
          <img src="/images/hamburger menu.png" alt="" />
        </div>
        <div className={classes["header-list-container"]}>
          <ul className={classes["header-pages"]}>
            <li>
              <a href="Home">Home</a>
            </li>
            <li>
              <a href="Home">Page 1</a>
            </li>
            <li>
              <a href="Home">Page 2</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
