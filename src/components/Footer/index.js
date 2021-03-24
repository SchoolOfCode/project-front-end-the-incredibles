import React from "react";
import styles from "./Footer.module.css";
import "../../index.css";

function Footer({ textContent = "made with love in birmingham" }) {
  return (
    <div className={styles.footerFlex}>
      <div className={styles.contentFlex}>
        <p>{textContent}</p>
        <p>github icon</p>
      </div>
    </div>
  );
}

export default Footer;
