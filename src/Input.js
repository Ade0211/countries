import React, {useState} from "react"




const Input =({setCountries, countries, Country}) => {
const [inputValue, setInputValue] = useState("")
    const searchHandler =(e) => {
        setInputValue(e.target.value)
        const filteredCountryList = Country.filter((country) => {
        return country.name.toLowerCase().includes(inputValue.toLowerCase())})
        setCountries(filteredCountryList)
          }

    return(
 <form>
      <input type="text" 
     onChange={searchHandler}
    value ={inputValue}
/>
             
</form>
    )
}
export default Input