import React from "react";
import CallToAction from "../CallToAction";
import BusinessNavBar from "../NavBar/BusinessNavBar";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.HomePage}>
      <BusinessNavBar />
      <div className={styles.container}>
        <div className={styles.content}>
          <CallToAction />
        </div>
        <div className={styles.feature}>
          <img
            src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
            alt="demo"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
