import React, {useState} from "react"
import Country from "./Country.js"
import SearchBox from "./SearchBox.js"

const CountryList =({term}) => {
    return (
        <div>

<div className="describe">
        {Country.filter(SearchBox(term)).map((item, key) => (
          <div className ="Country" key={key}>
            <h2>{item.name}</h2>
             <img src = {item.flag} alt = "country-flag"/>
             <p>Top Level Domain: {item.topLevelDomain}</p>
             <p>population: {item.population}</p>
             <p>Region: {item.region}</p>
             <p>Currency: {item.currencies.map((currency) => <div>{currency.name}</div>)}</p> 
          </div>
        ))}
      </div>
        </div>
    )
}
export default CountryList;