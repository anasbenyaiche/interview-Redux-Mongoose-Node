
import React from "react";
import { Field, reduxForm } from "redux-form";

const ContactForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="firstName">First Name</label>
      <Field name="firstName" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="lastName">Last Name</label>
      <Field name="lastName" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="birthYear">BithYear</label>
      <Field name="birthYear" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="birthPlace">Email</label>
      <Field name="birthPlace" component="input" type="text" />
    </div>

    <button type="submit">Submit</button>
  </form>
);

export default reduxForm({
  form: "contact"
})(ContactForm);