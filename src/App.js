import React, { useState, useEffect } from "react";
import Country from "./Country.js";
import RegionDropdown from "./RegionDropdown";
import Input from "./Input.js";
import "./App.css";
import CountryList from "./CountryList.js";
import CountryInformationDisplay from "./CountryInfomationDisplay.js";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchedCountry, setSearchedCountry] = useState("");
  const [region, setRegion] = useState("");
  const [homePage, setHomePage] = useState (true);
  const[countryInfo, setCountryInfo]  = useState({})

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      });
  }, [setCountries]);

  const filteredCountries = (searchValue, search) => {
    console.log(searchValue, search);
    const CountryFilter = Country.filter((country) => {
      if (search) {
        setSearchedCountry(searchValue.toLowerCase());
        return (
          country.name.toLowerCase().includes(searchValue.toLowerCase()) &&
          (region ? country.region === region : true)
        );
      } else {
        console.log(country.region, searchValue);
        setRegion(searchValue);
        return (
          (searchedCountry
            ? country.name.toLowerCase().includes(searchedCountry.toLowerCase())
            : true) && (searchValue ? country.region === searchValue : true)
        );
      }
    });
    setCountries(CountryFilter);
    console.log(CountryFilter);
  };

  return (
    <div>
    {homePage? <><div className="Header">
        <Input
          setCountries={setCountries}
          countries={countries}
          Country={Country}
          setSearchedCountry={setSearchedCountry}
          filteredCountries={filteredCountries}
        />

        <RegionDropdown
          filteredCountries={filteredCountries}
        />
      </div>
      <CountryList countries={countries} setHomePage={setHomePage} setCountryInfo={setCountryInfo}/>
     
  </>:<CountryInformationDisplay   countryInfo={countryInfo}/>}
    </div>
  );
};

export default App;
