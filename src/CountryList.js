import React from "react";

const CountryList = ({ countries, setHomePage, setCountryInfo }) => {
  const handleClick = (country) => {
    setHomePage(false);
    // setCountryInfo(country);
    setCountryInfo(country);
  };
  return (
    <div>
      <div className="describe">
        {countries.map((item, key) => (
          <div className="Country" key={key} onClick={() => handleClick(item)}>
            <h2>{item.name}</h2>
            <img src={item.flag} alt="country-flag" />
            <p>Top Level Domain: {item.topLevelDomain}</p>
            <p>population: {item.population}</p>
            <p>Region: {item.region}</p>
            <p>
              Currency:{""}
              {item.currencies.map((currency) => (
                <div>{currency.name}</div>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CountryList;
