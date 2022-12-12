import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm";
import WebsiteNavigation from "./components/WebsiteNavigation";
import Home from "./components/Home";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import SellProperty from "./components/SellProperty/SellProperty";
import ForSale from "./components/ForSale/ForSale";
import ToRent from "./components/ToRent/ToRent";

function App() {
  return (
    <div className="App">
      <WebsiteNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/sell-property" element={<SellProperty />} />
        <Route path="/for-sale" element={<ForSale />} />
        <Route path="/to-rent" element={<ToRent />} />
      </Routes>
    </div>
  );
}

export default App;
