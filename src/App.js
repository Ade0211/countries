import React, {useState, useEffect} from 'react';
import Country from "./Country.js"
import RegionDropdown from "./RegionDropdown"
import Input from "./Input.js"
import './App.css';
import CountryList from './CountryList.js';

const App = () => {
  const [countries, setCountries] = useState([])
  useEffect(()=>{
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then((response) =>
    response.json())
    .then((data) =>
    setCountries(data))
  }) 
 
return (
  <div>
    <Input setCountries ={setCountries}  countries = {countries} Country ={Country}/>
    <RegionDropdown  countries = {countries} setCountries ={setCountries} Country ={Country} />
    <CountryList countries= {countries} />
  </div>
)
};

export default App;
