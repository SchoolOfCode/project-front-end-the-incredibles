import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LandingPage from "../LandingPage";
import styles from "./HomePage.module.css";
import BusinessPage from "../BusinessPage";

function HomePage() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className={styles.HomePage}>
      {isAuthenticated ? <BusinessPage /> : <LandingPage />}
    </div>
  );
}

export default HomePage;
