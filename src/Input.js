import React, { useState } from "react";

const Input = ({ filteredCountries }) => {
  const [inputValue, setInputValue] = useState("");
  const searchHandler = (event) => {
    setInputValue(event.target.value);
    filteredCountries(event.target.value, true);
  };

  return (
    <form>
      <input type="text" onChange={searchHandler} value={inputValue} />
    </form>
  );
};
export default Input;
