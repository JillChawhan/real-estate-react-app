import { Link } from "react-router-dom";
import classes from "./WebsiteNavigation.module.css";

function WebsiteNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <h1>Real Estate App</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/sign-up"}>Sign Up</Link>
          </li>
          <li>
            <Link to={"/sell-property"}>Sell Property</Link>
          </li>
          <li>
            <Link to={"/for-sale"}>For Sale</Link>
          </li>
          <li>
            <Link to={"/to-rent"}>To Rent</Link>
          </li>
          <li>
            <Link to={"/contact-us"}>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default WebsiteNavigation;
