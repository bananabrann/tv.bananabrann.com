import React, { FC } from "react";
import styles from "./logo.module.css";

const Logo: FC = ({}) => {
  return (
    <div>
      <h1>
        <span className={styles.t}>t</span>
        <span className={styles.v}>v</span>
        <span className={styles.bananabrann}>.bananabrann</span>
      </h1>
    </div>
  );
};

export default Logo;
