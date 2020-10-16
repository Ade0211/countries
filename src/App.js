import React, { useState, useEffect } from "react";
import Country from "./Country.js";
import RegionDropdown from "./RegionDropdown";
import Input from "./Input.js";
import "./App.css";
import CountryList from "./CountryList.js";
import CountryInformationDisplay from "./CountryInfomationDisplay.js";
import Header from "./Header.js";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchedCountry, setSearchedCountry] = useState("");
  const [region, setRegion] = useState("");
  const [homePage, setHomePage] = useState(true);
  const [countryInfo, setCountryInfo] = useState({});
  const [theme, setTheme] = useState("light");

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
  const changeTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };
  return (
    <div className={theme}>
      {homePage ? (
        <>
          <div>
            <Header />
          </div>
          <div className="header">
            <Input
              setCountries={setCountries}
              countries={countries}
              Country={Country}
              setSearchedCountry={setSearchedCountry}
              filteredCountries={filteredCountries}
            />

            <RegionDropdown filteredCountries={filteredCountries} />
            <button onClick={changeTheme}>Change Theme</button>
          </div>
          <CountryList
            countries={countries}
            setHomePage={setHomePage}
            setCountryInfo={setCountryInfo}
          />
        </>
      ) : (
        <>
          <button onClick={changeTheme}>Change Theme</button>
          <CountryInformationDisplay
            countryInfo={countryInfo}
            countries={countries}
            setHomePage={setHomePage}
          />
        </>
      )}
    </div>
  );
};

export default App;
