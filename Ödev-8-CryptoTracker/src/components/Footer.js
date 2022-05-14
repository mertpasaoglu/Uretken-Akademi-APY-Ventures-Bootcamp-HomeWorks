import React from "react";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <div>
      <footer className={classes["footer-distributed"]}>
        <div className={classes["footer-left"]}>
          <h3>
            Crypton<span>Track</span>
          </h3>

          <p className={classes["footer-links"]}>
            <a href="/">Home</a> · <a href="/">Blog</a> ·{" "}
            <a href="/">Pricing</a> · <a href="/">About</a> ·{" "}
            <a href="/">Faq</a>
          </p>

          <p className={classes["footer-company-name"]}>Crypton Track © 2022</p>
        </div>

        <div className={classes["footer-right"]}>
          <p>Contact Us</p>
        </div>
      </footer>
    </div>
  );
}
