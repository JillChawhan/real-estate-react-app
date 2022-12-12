import axios from "axios";
import { useState } from "react";
import classes from "./SignUpForm.module.css";

function SignUpForm() {
  const [user, setUser] = useState(
    {
      firstName: "",
      lastName: "",
      emailId: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    []
  );

  function checkPassword(e) {
    e.preventDefault();
    if (user.password === user.confirmPassword) {
      signUp();
    } else {
      alert("Password Mismatch!");
    }
  }

  function signUp() {
    let requestBody = {
      firstName: user.firstName,
      lastName: user.lastName,
      emailId: user.emailId,
      phoneNumber: user.phoneNumber,
      password: user.password,
    };

    axios.post("http://localhost:8200/user", requestBody).then((response) => {
      console.log(response.data);
      alert("Sign Up Sucessful");
    });
  }

  return (
    <div>
      <h1 className={classes.heading}>SignUp Form</h1>
      <div className={classes.item}>
        <form className={classes.form}>
          <div className={classes.control}>
            <label>Firstname</label>
            <input
              type="text"
              required
              value={user.firstName}
              onChange={(e) => {
                setUser({ ...user, firstName: e.target.value });
              }}
            />
          </div>
          <div className={classes.control}>
            <label>Lastname</label>
            <input
              type="text"
              required
              value={user.lastName}
              onChange={(e) => {
                setUser({ ...user, lastName: e.target.value });
              }}
            />
          </div>
          <div className={classes.control}>
            <label>E-Mail ID</label>
            <input
              type="email"
              required
              value={user.emailId}
              onChange={(e) => {
                setUser({ ...user, emailId: e.target.value });
              }}
            />
          </div>
          <div className={classes.control}>
            <label>Mobile</label>
            <input
              type="text"
              required
              value={user.phoneNumber}
              onChange={(e) => {
                setUser({ ...user, phoneNumber: e.target.value });
              }}
            />
          </div>
          <div className={classes.control}>
            <label>Password</label>
            <input
              type="password"
              required
              pattern=".{8,}"
              value={user.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
          </div>
          <div className={classes.control}>
            <label>Confirm Password</label>
            <input
              type="password"
              required
              pattern=".{8,}"
              value={user.confirmPassword}
              onChange={(e) => {
                setUser({ ...user, confirmPassword: e.target.value });
              }}
            />
          </div>
          <div className={classes.actions}>
            <button onClick={(e) => checkPassword(e)}>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
