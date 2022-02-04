import React from "react";
import classes from "./Contact.module.css";
import useInput from "../../hooks/use-input";

const Contact = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredText,
    isValid: enteredTextIsValid,
    hasError: textInputHasError,
    valueChangeHandler: textChangedHandler,
    inputBlurHandler: textBlurHandler,
    reset: resetTextInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredTextIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
    resetTextInput();
  };

  const nameInputClasses = nameInputHasError
    ? `${classes["contact-form"]} ${classes.invalid}`
    : classes["contact-form"];

  const emailInputClasses = emailInputHasError
    ? `${classes["contact-form"]} ${classes.invalid}`
    : classes["contact-form"];

  const textInputClasses = textInputHasError
    ? `${classes["contact-form"]} ${classes.invalid}`
    : classes["contact-form"];

  return (
    <section className={classes["section-4"]}>
      <h1 className={`${classes["section-4-heading"]} section-heading`}>
        Contact Me
      </h1>
      <form onSubmit={submitHandler} className={classes["contact-form"]}>
        <input
          type="text"
          placeholder="Name"
          onBlur={nameBlurHandler}
          value={enteredName}
          onChange={nameChangedHandler}
          className={nameInputClasses}
        />
        <input
          type="email"
          placeholder="E-mail"
          onBlur={emailBlurHandler}
          value={enteredEmail}
          onChange={emailChangedHandler}
          className={emailInputClasses}
        />
        <textarea
          placeholder="Message"
          onChange={textChangedHandler}
          onBlur={textBlurHandler}
          value={enteredText}
          className={textInputClasses}
        ></textarea>
        {(nameInputHasError || emailInputHasError || textInputHasError) && (
          <p style={{ color: "#7c7c7c", fontSize: "18px" }}>Invalid Form</p>
        )}
        <button disabled={!formIsValid}>
          {!formIsValid ? "can't submit" : "submit"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
