import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
// import CountryList from "./CountryList.js"
import Country from "./Country.js"
import SearchBox from "./SearchBox"
import RegionDropdown from "./RegionDropdown"
import Input from "./Input.js"
import './App.css';
import CountryList from './CountryList.js';

const App = () => {
  const [term, setTerm] =useState("")
  const [searchedCountry, setSearchedCountry] = useState('');
  const [countries, setCountries] = useState([Country])
  
  

  // const handleSearch = (event) => {
  //   setSearchedCountry(event.target.value);
  // };
  // const handleSelect = (event) => {
  //   setRegion(event.target.value);
  // };
  // const filteredCountries = Country.filter(
   
  //   country =>
  //     country.name.toLowerCase().includes(searchedCountry.toLowerCase()) 
  //     // &&
  //     // country.region.toLowerCase().includes(region.toLocaleLowerCase())
  // );

return (
  <div>
    <Input setTerm ={setTerm}  term = {term}/>
    <RegionDropdown  />
    <CountryList term= {term} />
  </div>
)
};

export default App;
