import { Link } from "react-router-dom";
import classes from "./WebsiteNavigation.module.css";
import { logOut } from "./CheckLogin";

function WebsiteNavigation() {
  function handleClick() {
    logOut();
    window.location.reload();
  }
  return (
    <header className={classes.header}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>
                <img
                  src={"https://www.houzeo.com/images/new-logo.svg"}
                  alt="logo"
                  className={classes.logo}
                  width="80%"
                />
              </Link>
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
            <li>
              <Link
                to={"/login"}
                onClick={() => {
                  handleClick();
                }}
              >
                LogOut
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default WebsiteNavigation;
