import React from "react";

const CountryFlag = ({ fullCountry }) => {
  return <img className="displayFlag" src={fullCountry.flag} alt="" />;
};
export default CountryFlag;
