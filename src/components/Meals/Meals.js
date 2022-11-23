import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import React, { Fragment } from "react";

const Meals = (props) => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
