import styles from "./Checkout.module.css";
import { useRef, useState } from "react";

const isEmptyString = (value) => value.trim() === "";

const checkFirstLetter = (value) => value[0] === value[0].toUpperCase();

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();
  const confirmHandler = (e) => {
    e.preventDefault();

    const nameRegex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
    const postalCodeRegex = /(^\d{4}$)/;

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const nameIsValid =
      nameRegex.test(enteredName) &&
      !isEmptyString(enteredName) &&
      checkFirstLetter(enteredName);
    const streetIsValid = !isEmptyString(enteredStreet);
    const postalCodeIsValid =
      postalCodeRegex.test(enteredPostalCode) &&
      !isEmptyString(enteredPostalCode);
    const cityIsValid =
      nameRegex.test(enteredCity) &&
      !isEmptyString(enteredCity) &&
      checkFirstLetter(enteredCity);

    setFormInputsValidity({
      name: nameIsValid,
      street: streetIsValid,
      city: cityIsValid,
      postalCode: postalCodeIsValid,
    });
    const formIsValid =
      nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid;
    if (!formIsValid) {
      return;
    }
  };

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div
        className={`${styles.control} ${
          !formInputsValidity.name && styles.invalid
        }`}
      >
        <label htmlFor="username">Your Name</label>
        <input ref={nameInputRef} id="username" type="text" />
        {!formInputsValidity.name && <p>Please, enter a valid name!</p>}
      </div>
      <div
        className={`${styles.control} ${
          !formInputsValidity.street && styles.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input ref={streetInputRef} id="street" type="text" />
        {!formInputsValidity.street && <p>Please, enter a valid street!</p>}
      </div>
      <div
        className={`${styles.control} ${
          !formInputsValidity.postalCode && styles.invalid
        }`}
      >
        <label htmlFor="postal-code">Postal Code</label>
        <input ref={postalInputRef} id="postal-code" type="text" />
        {!formInputsValidity.postalCode && (
          <p>Please, enter a valid postal code(4 characters long)!</p>
        )}
      </div>
      <div
        className={`${styles.control} ${
          !formInputsValidity.city && styles.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} id="city" type="text" />
        {!formInputsValidity.city && <p>Please, enter a valid city!</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
