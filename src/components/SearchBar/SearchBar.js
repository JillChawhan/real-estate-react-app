import { useState } from "react";
import classes from "./SearchBar.module.css";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchType, setSearchType] = useState("");
  function handleChange(e) {
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  console.log();
  return (
    <div>
      <div className={classes.searchBarContainer}>
        <div>
          <input
            className={classes.input}
            type="text"
            placeholder="Enter Value Here"
            onChange={(e) => handleChange(e)}
            value={searchInput}
          />
        </div>
        <div>
          <button
            className={classes.button}
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className={classes.filterContainer}>
        <label>Search By:</label>
        <select
          className={classes.select}
          required
          placeholder="For Sale/ Rent"
          value={searchType}
          onChange={(e) => {
            setSearchType(e.target.value);
          }}
        >
          <option value="">...</option>
          <option value="bed">Number Of Bedrooms</option>
          <option value="squareFeet">Carpet Area</option>
          <option value="state">State</option>
          <option value="propertyType">Property Type</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
