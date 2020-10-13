import React, {useState, useEffect} from "react"
import './App.css';


const RegionDropdown = ({countries, setCountries, Country}) => {
const [value, setValue] = useState("All")
// const [region, setRegion] = useState([]) 
    const handleSelect =(e) => {
        console.log("target",e.target.value)
        setValue(e.target.value)
        setCountries(Country)
       
    }

   useEffect(()=>{
    const filteredCountries = countries.filter((country) => {
      return country.region.toLowerCase() === value.toLowerCase();
      
     })
     value === "All"? setCountries(Country):setCountries(filteredCountries)
   }, [value])
     
    return (
        <div>
      <select onChange={handleSelect}>
        <option value='All'>All</option>
       <option value='Europe'>Europe</option>
        <option value='Asia'>Asia</option>
        <option value='Africa'>Africa</option>
        <option value='Americas'>Americas</option>
        <option value='Oceania'>Oceania</option>
      </select>
        </div>
    )
}
export default RegionDropdown;