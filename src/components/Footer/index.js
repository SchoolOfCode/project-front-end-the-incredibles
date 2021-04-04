import React from "react";
import "../../index.css";
import styles from "./Footer.module.css";

function Footer({ textContent = "made with love in birmingham" }) {
  return (
    <div className={styles.footerFlex}>
      <div className={styles.contentFlex}>
        <p>
          <i className="fas fa-heart"></i>
          {textContent}
        </p>
        <a
          className={styles.gitLink}
          href="https://github.com/orgs/SchoolOfCode/teams/the-incredibles/repositories"
        >
          <i className="fab fa-github" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
