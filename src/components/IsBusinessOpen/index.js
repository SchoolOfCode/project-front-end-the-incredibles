import React from "react";
import styles from "./IsTrading.module.css";
import "../../index.css";

function IsBusinessOpen({ IsTrading = true }) {
  return (
    <div className={styles.main}>
      {IsTrading ? (
        <div className={styles.open}>
          <p className={styles.content}>Trading</p>
        </div>
      ) : (
        <div className={styles.closed}>
          <p className={styles.content}>Closed</p>
        </div>
      )}
    </div>
  );
}

export default IsBusinessOpen;
