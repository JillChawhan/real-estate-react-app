import { Navigate } from "react-router-dom";
import { isLogIn } from "./CheckLogin";

const PrivateRoute = ({ children }) => {
  if (isLogIn) {
    return children;
  }
  return (
    <>
      {alert("Please Log- In to acess this page")}
      <Navigate to="/log-in" />
    </>
  );
};

export default PrivateRoute;
