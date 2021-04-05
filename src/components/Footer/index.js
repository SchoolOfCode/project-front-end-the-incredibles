import React from "react";
import "../../index.css";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerFlex}>
      <div className={styles.contentFlex}>
        <p>
          made with<i className="fas fa-heart footerHeart"></i>in Birmingham
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
