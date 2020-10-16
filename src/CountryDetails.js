import React from "react";

const CountryDetails = ({ fullCountry, updateFullCountry, setHomePage }) => {
  const handleClick = (event) => {
    let alphaCode = event.target.value;
    updateFullCountry(alphaCode);
  };

  return (
    <div>
      <div className="CountryDetails">
        <h2>{fullCountry.name}</h2>
        <ul>
          <li>
            <b>Native Name:</b> {fullCountry.nativeName}
          </li>
          <li>
            <b>population:</b> {fullCountry.population}
          </li>
          <li>
            <b>Region:</b> {fullCountry.region}
          </li>
          <li>
            <b>Capital:</b> {fullCountry.capital}
          </li>
          <li>
            <b>Top Level Domain:</b>
            {fullCountry.topLevelDomain}
          </li>
          <li>
            <b>Currencies:</b>{" "}
            {fullCountry.currencies.map((currency, key) => currency.name)}
          </li>
          <li>
            <b>Languages</b>{" "}
            {fullCountry.languages
              .map((language, index) => {
                return <span key={index}>{language.name}</span>;
              })
              .reduce((prev, curr) => [prev, ", ", curr])}
          </li>
        </ul>
      </div>
      <div>
        <b>Border Countries:</b>{" "}
        {fullCountry.borders.map((borderCountry, index) => {
          return (
            <button key={index} value={borderCountry} onClick={handleClick}>
              {borderCountry}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default CountryDetails;
