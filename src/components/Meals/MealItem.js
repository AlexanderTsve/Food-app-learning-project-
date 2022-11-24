import styles from "./MealItem.module.css";
import MealItemFrom from "./MealItemForm";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const MealItem = (props) => {
  const ctx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li>
      <div className={styles.meal}>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemFrom onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
};
export default MealItem;
