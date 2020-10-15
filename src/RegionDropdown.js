import React from "react";
import "./App.css";

const RegionDropdown = ({ filteredCountries }) => {
  const handleChange = (event) => {
    filteredCountries(event.target.value, false);
  };
  return (
    <div>
      <select onChange={handleChange}>
        <option value="">All Region</option>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Oceania">Oceania</option>
        <option value="Polar">Polar</option>
      </select>
    </div>
  );
};
export default RegionDropdown;
