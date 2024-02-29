import React from "react";
import styles from "./HomePanel.module.css";
import HomePanelBackground from "../HomePanelBackground/HomePanelBackground";

const HomePanel = () => {
  return (
    <section className={styles.container}>
      <HomePanelBackground />
    </section>
  );
};

export default HomePanel;