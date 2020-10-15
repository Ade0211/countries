import React from "react";


const CountryDetails = ({countryObject}) => {

  return (
    <div>
    <div>
      <h2>{countryObject.name}</h2>
      <ul>
        <li>Native Name</li>
        <li>population = {countryObject.population}</li>
        <li>Region= {countryObject.region}</li>
        <li>Capital= {countryObject.capital}</li>
        <li>Top Level Domain={countryObject.topLevelDomain}</li>
        <li>Currencies = {countryObject.currencies.map((currency, key)=> currency.name)}</li>
        <li>Languages {countryObject.languages.map((language, index) =>{
            return <span key ={index}>{language.name}</span>
        })}</li>
      </ul>
    </div>
    <div>Border Countries {countryObject.borders.map((borderCountry, index) => {
        return <button key={index}>{borderCountry}</button>
    })}</div>
  </div>
  )
 
}
export default CountryDetails;
