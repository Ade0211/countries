import React from "react";


const CountryDetails = ({ fullCountry, updateFullCountry, setHomePage}) => {
  const handleClick = (event) => {
    let alphaCode = event.target.value;
    updateFullCountry(alphaCode);
  };

  return (
    <div>
      <div className="CountryDetails" >
        <h2>{fullCountry.name}</h2>
        <ul>
          <li>Native Name</li>
          <li>population = {fullCountry.population}</li>
          <li>Region= {fullCountry.region}</li>
          <li>Capital= {fullCountry.capital}</li>
          <li>Top Level Domain={fullCountry.topLevelDomain}</li>
          <li>
            Currencies ={" "}
            {fullCountry.currencies.map((currency, key) => currency.name)}
          </li>
          <li>
            Languages{" "}
            {fullCountry.languages.map((language, index) => {
              return <span key={index}>{language.name}</span>;
            }).reduce((prev, curr) => [prev, ', ', curr])}
          </li>
        </ul>
      </div>
      <div>
        Border Countries{" "}
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
