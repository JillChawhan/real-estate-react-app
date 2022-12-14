import axios from "axios";
import { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import classes from "./PropertyItems.module.css";

function PropertyItems() {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8900/properties").then((res) => {
      setProperties(res.data);
      console.log("Properties", res.data);
    });
  }, [setProperties]);
  return (
    <div className={classes.cardContainer}>
      {properties.map((property) => {
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
              <Button className={classes.button}>
                <Link
                  className={classes.link}
                  to={`/property/${property.propertyId}`}
                >
                  Explore{" "}
                </Link>
              </Button>{" "}
              <Badge as="a" variant="warning" className={classes.badge}>
                {property.sellType}
              </Badge>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default PropertyItems;
