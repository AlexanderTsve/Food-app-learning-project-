import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    setErrorMessage(null);
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-requests-81638-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const arrOfMeals = Object.entries(data).map((meal) => {
        return {
          id: meal[0],
          name: meal[1].name,
          description: meal[1].description,
          price: meal[1].price,
        };
      });
      setMeals(arrOfMeals);
      setLoading(false);
    };
    fetchMeals().catch((err) => {
      setLoading(false);
      setErrorMessage(err.message);
    });
  }, []);

  if (loading) {
    return (
      <section className={styles["meals-loading"]}>
        <p>Loading...</p>
      </section>
    );
  }
  if (errorMessage) {
    return (
      <section className={styles["meals-error"]}>
        <p>{errorMessage}</p>
      </section>
    );
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
