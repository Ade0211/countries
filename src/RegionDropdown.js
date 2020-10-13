import React, {useState, useEffect} from "react"
import Country from "./Country"
import './App.css';


const RegionDropdown = () => {
const [value, setValue] = useState("")
const [region, setRegion] = useState([])
    
    const handleSelect =(e) => {
        console.log(e.target.value)
        setValue(e.target.value)
    }
   
    
    return (
        <div>
      <select value={value} onChange={handleSelect}>
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