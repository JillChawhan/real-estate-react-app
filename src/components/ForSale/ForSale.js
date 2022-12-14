import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./ForSale.module.css";

function ForSale() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8900/properties").then((res) => {
      setProperties(res.data);
      console.log("Properties", res.data);
    });
  }, [setProperties]);

  return (
    <div>
      <h1 className={classes.heading}>For Sale</h1>
      <div className={classes.cardContainer}>
        {properties
          .filter((property) => property.sellType === "For Sale")
          .map((property) => {
            return (
              <Card style={{ width: "18rem" }} className={classes.card}>
                <Card.Img
                  variant="top"
                  src={property.images}
                  className={classes.image}
                />
                <Card.Body>
                  <Card.Title
                    className={classes.title}
                  >{`${property.city}, ${property.state}`}</Card.Title>
                  <Card.Text className={classes.text}>
                    {`Living Room: ${property.livingRoom} Bathroom: ${property.bathroom} Bedroom: ${property.bed}`}
                  </Card.Text>
                  <Link to={`/property/${property.propertyId}`}>
                    <Button className={classes.button}>Explore</Button>
                  </Link>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </div>
  );
}

export default ForSale;
