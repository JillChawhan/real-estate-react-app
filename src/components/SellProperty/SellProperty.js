import axios from "axios";
import { useState } from "react";
import classes from "./SellProperty.module.css";

function SellProperty() {
  const [property, setProperty] = useState(
    {
      sellType: "",
      daysOnMarket: "",
      type: "",
      yearBuilt: 0,
      bathroom: 0,
      bed: 0,
      livingRoom: 0,
      price: 0,
      squareFeet: 0,
      plotNumber: "",
      streetName: "",
      city: "",
      state: "",
      country: "",
      pinCode: 0,
      images: "",
    },
    []
  );

  function postProperty(e) {
    e.preventDefault();
    let requestBody = property;
    axios
      .post("http://localhost:8900/property", requestBody)
      .then((response) => {
        console.log(response.data);
        alert("Property added successfully!");
      });
  }

  return (
    <div>
      <h1 className={classes.heading}>Sell Property</h1>
      <div className={classes.item}>
        <form className={classes.form}>
          <div className={classes.control}>
            <label>Sell Type</label>
            <input
              type="text"
              required
              placeholder="For Sale/ For Rent"
              value={property.sellType}
              onChange={(e) => {
                setProperty({ ...property, sellType: e.target.value });
              }}
            />
          </div>
          <div className={classes.control}>
            <label>Days On Market</label>
            <input
              type="number"
              required
              value={property.daysOnMarket}
              onChange={(e) => {
                setProperty({ ...property, daysOnMarket: e.target.value });
              }}
            />
          </div>
          <div className={classes.control}>
            <label>Type of Property</label>
            <select
              required
              value={property.type}
              onChange={(e) => {
                setProperty({ ...property, type: e.target.value });
              }}
            >
              <option value="Flat">Flat</option>
              <option value="Bungalow">Bungalow</option>
              <option value="Plot">Plot</option>
              <option value="Shop">Shop</option>
            </select>
          </div>
          <div className={classes.control}>
            <label>Year Built</label>
            <input
              type="number"
              required
              value={property.yearBuilt}
              onChange={(e) => {
                setProperty({ ...property, yearBuilt: e.target.value });
              }}
            />
          </div>
          <div className={classes.control}>
            <label>Number of Bathrooms</label>
            <input
              type="number"
              required
              value={property.bathroom}
              onChange={(e) => {
                setProperty({ ...property, bathroom: e.target.value });
              }}
            />
          </div>
          <div className={classes.control}>
            <label>Number of Bedrooms</label>
            <input
              type="number"
              required
              value={property.bed}
              onChange={(e) => {
                setProperty({ ...property, bed: e.target.value });
              }}
            />
          </div>
          <div className={classes.control}>
            <label>Number of Living Rooms</label>
            <input
              type="number"
              required
              value={property.livingRoom}
              onChange={(e) => {
                setProperty({ ...property, livingRoom: e.target.value });
              }}
            />
          </div>
          <div className={classes.control}>
            <label>Price</label>
            <input
              type="number"
              required
              value={property.price}
              onChange={(e) => {
                setProperty({ ...property, price: e.target.value });
              }}
            />
          </div>
          <div className={classes.control}>
            <label>Area (in Square Feet)</label>
            <input
              type="number"
              required
              value={property.squareFeet}
              onChange={(e) => {
                setProperty({ ...property, squareFeet: e.target.value });
              }}
            />
          </div>
          <div className={classes.control}>
            <label>Plot Number</label>
            <input
              type="text"
              required
              value={property.plotNumber}
              onChange={(e) => {
                setProperty({ ...property, plotNumber: e.target.value });
              }}
            />
          </div>
          <div className={classes.control}>
            <label>Street Name</label>
            <input
              type="text"
              required
              value={property.streetName}
              onChange={(e) => {
                setProperty({ ...property, streetName: e.target.value });
              }}
            />
          </div>
          <div className={classes.control}>
            <label>City</label>
            <input
              type="text"
              required
              value={property.city}
              onChange={(e) => {
                setProperty({ ...property, city: e.target.value });
              }}
            />
          </div>
          <div className={classes.control}>
            <label>State</label>
            <input
              type="text"
              required
              value={property.state}
              onChange={(e) => {
                setProperty({ ...property, state: e.target.value });
              }}
            />
          </div>
          <div className={classes.control}>
            <label>Country</label>
            <input
              type="text"
              required
              value={property.country}
              onChange={(e) => {
                setProperty({ ...property, country: e.target.value });
              }}
            />
          </div>
          <div className={classes.control}>
            <label>Pincode</label>
            <input
              type="number"
              required
              value={property.pinCode}
              onChange={(e) => {
                setProperty({ ...property, pinCode: e.target.value });
              }}
            />
          </div>
          <div className={classes.control}>
            <label>Property Image Link</label>
            <textarea
              className={classes.control}
              rows="3"
              required
              value={property.images}
              onChange={(e) => {
                setProperty({ ...property, images: e.target.value });
              }}
              placeholder="Provide Property Image Links"
            />
          </div>
          <div className={classes.actions}>
            <button onClick={(e) => postProperty(e)}>Add Your Property</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SellProperty;
