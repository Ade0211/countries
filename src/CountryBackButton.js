import React from "react";

const CountryBackButton = ({ setHomePage }) => {
  const backClick = () => {
    setHomePage(true);
  };

  return (
    <div>
      <button className="back-button" onClick={backClick}>
        Back
      </button>
    </div>
  );
};
export default CountryBackButton;
