import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./LoginForm.module.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8200/users").then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.emailId === email);
    if (account && account.password === password) {
      alert("Login Successful!");
      navigate("/");
    } else {
      alert("Invalid Credentails");
    }
  };

  return (
    <div>
      <h1 className={classes.heading}>Login Form</h1>
      <div className={classes.item}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <div className={classes.control}>
            <label>E-Mail ID</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className={classes.control}>
            <label>Password</label>
            <input
              type="text"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className={classes.actions}>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
