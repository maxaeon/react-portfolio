import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  // Hook that manages form data
  //   initialize values of state, clear input fields on loading component
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Hook that manages email error message
  const [errorMessage, setErrorMessage] = useState("");
  // destructure formState obj into its properties
  const { name, email, message } = formState;

  function handleSubmit(e) {
    e.preventDefault();

    // state only updates if form data passed quality tests(no err message)
    if (!errorMessage) {
      //   async setFormState updates formState value for name
      //   assign input field value to formState.name
      // spread operator ...formState retains other key-value pairs in obj
      // e.target.name is name attribute of form element, matches prop names of formState(name, email, message)
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  }

  //   sync internal state of component formState with user input from DOM
  // onBlur or onChange event listener ensures this fires everytime keystroke typed into name field
  // function handleChange(e) {
  //   // if <input> is email, validate value with validateEmail, assign to isValid
  //   if (e.target.name === "email") {
  //     const isValid = validateEmail(e.target.value);
  //     console.log(isValid);
  //     // isValid conditional statement
  //     if (!isValid) {
  //       setErrorMessage("Your email is invalid.");
  //     } else {
  //       setErrorMessage("");
  //     }
  //     // if <input> is message and name form elements
  //   } else {
  //     // if blank, error message
  //     if (!e.target.value.length) {
  //       setErrorMessage(`${e.target.name} is required.`);
  //     } else {
  //       setErrorMessage("");
  //     }
  //   }

  //   // console.log("errorMessage", errorMessage);
  // }

  // JSX DOM elements
  return (
    <section>
      <h1 data-testid="h1tag">Reach me</h1>
      <a href="mailto:maxaeonparks@gmail.com">@maxaeonparks@gmail.com</a>
      {/* <br></br>
      <h1 data-testid="h1tag">Leave a Message</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div> */}
        {/* if(errorMessage) {
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
        } */}
        {/* {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">
          Submit
        </button>
      </form> */}
    </section>
  );
}

export default ContactForm;
