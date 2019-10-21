import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [newRegister, setNewRegister] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = event => {
    setNewRegister({
      ...newRegister,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`https://nbapredictor-backend.herokuapp.com/signup`, newRegister)
      .then(response => {
        localStorage.setItem("token", res.data.access_token);
        localStorage.setItem("token_type", res.data.token_type);
        localStorage.setItem("expires_in", res.data.expires_in);
      })
      .catch(error => console.log(error.response));

    setNewRegister({ username: "", password: "", email: "" });
  };
  return (
    <div className="register-main">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"></label>
        <input
          name="username"
          id="username"
          type="text"
          placeholder="Name"
          onChange={changeHandler}
          value={newRegister.username}
        />
        <label htmlFor="password"></label>
        <input
          name="password"
          id="password"
          type="text"
          placeholder="Password"
          onChange={changeHandler}
          value={newRegister.password}
        />
        <label htmlFor="email"></label>
        <input
          name="email"
          id="email"
          type="text"
          placeholder="Email"
          onChange={changeHandler}
          value={newRegister.email}
        />

        <button className="button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};
export default Register;

// const Register = ({ values, touched, errors, status }) => {
//   const [member, setMember] = useState([]);
//   useEffect(() => {
//     status && setMember(member => [...member, status]);
//   }, [status]);
//   return (
//     <div className="register-main">
//       <Form className="Form">
//         <Field type="text" name="name" placeholder="Name" className="entry" />
//         {touched.name && errors.name && <p className="error">{errors.name}</p>}
//         <Field type="text" name="email" placeholder="Email" className="entry" />
//         {touched.email && errors.email && (
//           <p className="error">{errors.email}</p>
//         )}
//         <Field
//           type="text"
//           name="password"
//           placeholder="Password"
//           className="entry"
//         />
//         {touched.password && errors.password && (
//           <p className="error">{errors.password}</p>
//         )}

//         <button type="submit">Submit</button>
//       </Form>
//     </div>
//   );
// };

// const FormikForm = withFormik({
//   mapPropsToValues({ username, password, email }) {
//     return {
//       username: username || "",
//       password: password || "",
//       email: email || ""
//     };
//   },

//   validationSchema: Yup.object().shape({
//     username: Yup.string().required("*You must enter your name"),
//     password: Yup.string().required("*You must create a password"),
//     email: Yup.string().required("*You must enter your email address")
//   }),

//   handleSubmit(values, { setStatus }) {
//     console.log("running");
//     axios
//       .post(`https://nbapredictor-backend.herokuapp.com/signup`, values)
//       .then(response => {
//         console.log(response.data);
//         setStatus(response.data);
//       })
//       .catch(error => console.log(error.response));
//     // console.log(JSON.stringify(values));
//   }
// })(Register);
// console.log("this is HOC", FormikForm);
// export default FormikForm;
