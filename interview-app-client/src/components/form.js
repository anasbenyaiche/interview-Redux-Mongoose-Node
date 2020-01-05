// import React from 'react'
// import { Field, reduxForm } from 'redux-form';
// import { Link } from "react-router-dom";

// let ContactForm = props => {
//   const { handleSubmit } = props
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="firstName">First Name</label>
//         <Field name="firstName" component="input" type="text" />
//       </div>
//       <div>
//         <label htmlFor="lastName">Last Name</label>
//         <Field name="lastName" component="input" type="text" />
//       </div>
//       <div>
//         <label htmlFor="birthYear">Birth Year</label>
//         <Field name="birthYear" component="input" type="year" />
//       </div>
//       <div>
//         <label htmlFor="birthYear">Birth Place</label>
//         <Field name="birthYear" component="input" type="text" />
//       </div>

//         <Link to="/" ><button type="submit">Submit</button></Link> 
//     </form>
//   )
// }

// ContactForm = reduxForm({
//   // a unique name for the form
//   form: 'contact'
// })(ContactForm)

// export default ContactForm

import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import  Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { addUser } from '../redux/action/action'
import { connect } from "react-redux";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const renderMembers = ({ fields, meta: { error, submitFailed } }) => (
  <ul >
    
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Add Member
      </button>
      {submitFailed && error && <span>{error}</span>}
    </li>
    {fields.map((member, index) => (
      <li key={index}>
        <button type="button" onClick={() => fields.remove(index)}>
          Remove Member
        </button>
        <h4>Member #{index + 1}</h4>
        <Field
          name={`${member}.firstName`}
          type="text"
          component={renderField}
          label="First Name"
        />
        <Field
          name={`${member}.lastName`}
          type="text"
          component={renderField}
          label="Last Name"
        />
             <Field
          name={`${member}.birthYear`}
          type="text"
          component={renderField}
          label="Birth Year"
        />
             <Field
          name={`${member}.birthPlace`}
          type="text"
          component={renderField}
          label="Birth Place"
        />
      </li>
    ))}
  </ul>
);

const MyForm = props => {
  const { addUser, handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FieldArray name="members" component={renderMembers} />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};




const form  = reduxForm({
  form: "MyForm"
})(MyForm);

export default connect(null, {addUser})(form)