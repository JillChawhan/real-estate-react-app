import Properties from "./Properties/Properties";
import classes from "./Home.module.css";

function Home() {
  return (
    <div>
      <h1 className={classes.heading}>Properties</h1>
      <Properties />
    </div>
  );
}

export default Home;
