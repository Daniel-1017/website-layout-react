import React from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={classes["section-4"]}>
      <h1 className={`${classes["section-4-heading"]} section-heading`}>
        Contact Me
      </h1>
      <form className={`${classes["contact-form"]} center`}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="E-mail" />
        <textarea placeholder="Message"></textarea>
        <input
          type="submit"
          value="submit"
          className={classes["contact-form-btn"]}
        />
      </form>
    </section>
  );
};

export default Contact;
