import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm";
import WebsiteNavigation from "./components/WebsiteNavigation";
import Home from "./components/Home";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import SellProperty from "./components/SellProperty/SellProperty";
import ForSale from "./components/ForSale/ForSale";
import ToRent from "./components/ToRent/ToRent";
import ContactUs from "./components/ContactUs/ContactUs";
import ResolveQuery from "./components/ContactUs/ResolveQuery";
import PropertyDetails from "./components/PropertyDetails/PropertyDetails";
import Properties from "./components/Properties/Properties";
import video from "./realestatevideo.mp4";

function App() {
  return (
    <div className="App">
      <WebsiteNavigation />
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="/property/:propertyId" element={<PropertyDetails />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/sell-property" element={<SellProperty />} />
        <Route path="/for-sale" element={<ForSale />} />
        <Route path="/to-rent" element={<ToRent />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/resolve-query" element={<ResolveQuery />} />
      </Routes>
    </div>
  );
}

export default App;
