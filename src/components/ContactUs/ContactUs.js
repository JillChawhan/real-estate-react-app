import { useNavigate } from "react-router-dom";
import classes from "./ContactUs.module.css";

function ContactUs() {
  const navigate = useNavigate();

  function queryReceived() {
    navigate("/resolve-query");
  }

  return (
    <div>
      <h1 className={classes.heading}>Submit Your Queries Here</h1>
      <div className={classes.item}>
        <form onSubmit={queryReceived} className={classes.form}>
          <div className={classes.control}>
            <label>Name</label>
            <input type="text" name="name" required />
          </div>
          <div className={classes.control}>
            <label>Email ID</label>
            <input type="email" name="emailId" required />
          </div>
          <div className={classes.control}>
            <label>Phone Number</label>
            <input type="text" name="phoneNo" required />
          </div>
          <div className={classes.control}>
            <label>Query Description</label>
            <textarea
              rows="8"
              required
              placeholder="Write your query here..."
            />
          </div>
          <div className={classes.actions}>
            <button type="submit">Submit Query</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
