import React, { useState } from "react";
import CountryFlag from "./CountryFlag.js";
import CountryDetails from "./CountryDetails.js";
import CountryBackButton from "./CountryBackButton.js";

const CountryInformationDisplay = ({ countryInfo, setHomePage }) => {
  let [fullCountry, setFullCountry] = useState(countryInfo);
  let CountryList = require("./data.json");

  function updateFullCountry(alphaCode) {
    let NewFullCountryObject = CountryList.filter((country) =>
      country.alpha3Code.includes(alphaCode)
    );
    console.log("i am here");
    console.log(NewFullCountryObject[0].languages);
    setFullCountry(NewFullCountryObject[0]);
  }

  return (
    <div className="CountryInformationDisplay">
      <CountryFlag fullCountry={fullCountry} />
      <CountryDetails
        fullCountry={fullCountry}
        updateFullCountry={updateFullCountry}
      />
      <CountryBackButton setHomePage={setHomePage} />
    </div>
  );
};
export default CountryInformationDisplay;
