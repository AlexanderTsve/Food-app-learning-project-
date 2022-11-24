import styles from "./Header.module.css";
import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>React meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main - image"]}>
        <img src={mealsImage} alt="A table full of meals!" />
      </div>
    </Fragment>
  );
};
export default Header;
