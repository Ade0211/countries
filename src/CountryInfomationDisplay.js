import React from "react"
import CountryFlag from "./CountryFlag.js"
import CountryDetails from "./CountryDetails.js"

const CountryInformationDisplay =({countryInfo}) => {
    console.log(countryInfo)
    return (
        <div className="CountryInformationDisplay">
                 <CountryFlag countryInfo={countryInfo} />
                 <CountryDetails countryObject ={countryInfo} />
        </div>
    )
}
export default CountryInformationDisplay;