import classes from "./ResolveQuery.module.css";

function ResolveQuery() {
  return (
    <div>
      <p className={classes.para}>
        Your query has been received successfully...
      </p>
      <hr className={classes.line} />
      <p className={classes.para}>We will contact you in some time...</p>
    </div>
  );
}

export default ResolveQuery;
