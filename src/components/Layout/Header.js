import styles from "./Header.module.css";
import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>React meals</h1>
        <button>Cart</button>
      </header>
      <div className={styles["main - image"]}>
        <img src={mealsImage} alt="A table full of meals!" />
      </div>
    </Fragment>
  );
};
export default Header;
