import React from "react";
import classes from "./NavBar.module.css";

export default function NavBar() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <a href="/">Cryptontrack</a>
      </h1>
      <ul className={classes["main-nav"]}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Portfolio</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </header>
  );
}
