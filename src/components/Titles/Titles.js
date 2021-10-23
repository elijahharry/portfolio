import React from "react";
import styles from "../../../styles/Titles.module.css";

const Titles = ({ title, subtitle }) => {
  return (
    <>
      <img src="/img/eh.png" className={styles.logo} />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{subtitle}</p>
    </>
  );
};

export default Titles;
