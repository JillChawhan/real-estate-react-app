import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./PropertyDetails.module.css";

const PropertyDetails = () => {
  const [property, setProperty] = useState({});
  const params = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8900/property/${params.propertyId}`)
      .then((res) => {
        console.log("Property By Id", res.data);
        setProperty(res.data);
      });
  }, [setProperty]);
  return (
    <div>
      <h1 className={classes.heading}>Property Details</h1>
      <div className={classes.content}>
        <table className={classes.tableContainer}>
          <thead>
            <tr>
              <th>Type of Property :</th>
              <td className={classes.data}> {property.type}</td>
            </tr>
            <tr>
              <th>Plot No:</th>
              <td className={classes.data}> {property.plotNumber}</td>
            </tr>
            <tr>
              <th>Street Name:</th>
              <td className={classes.data}> {property.streetName}</td>
            </tr>
            <tr>
              <th>City:</th>
              <td className={classes.data}> {property.city}</td>
            </tr>
            <tr>
              <th>Country:</th>
              <td className={classes.data}> {property.country}</td>
            </tr>
            <tr>
              <th>Pin Code:</th>
              <td className={classes.data}>{property.pinCode}</td>
            </tr>
            <tr>
              <th>Street Name:</th>
              <td className={classes.data}> {property.streetName}</td>
            </tr>
            <tr>
              <th>Price:</th>
              <td className={classes.data}> Rs {property.price}</td>
            </tr>
            <tr>
              <th>Year Built:</th>
              <td className={classes.data}>{property.yearBuilt}</td>
            </tr>

            <tr>
              <th>Carpet Area:</th>
              <td className={classes.data}>{property.squareFeet} sq. Ft.</td>
            </tr>
            <tr>
              <th>Living Room:</th>
              <td className={classes.data}>{property.livingRoom}</td>
            </tr>
            <tr>
              <th>Bed Room:</th>
              <td className={classes.data}>{property.bed}</td>
            </tr>
            <tr>
              <th>Bath Room:</th>
              <td className={classes.data}>{property.bathroom}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default PropertyDetails;
