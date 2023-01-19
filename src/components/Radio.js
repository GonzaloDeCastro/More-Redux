import React, { useState } from "react";

const Radio = () => {
  const [selectedOption, setSelectedOption] = useState("");

  console.log("selectedOption ", selectedOption);

  return (
    <div>
      <fieldset>
        <legend>Select an option:</legend>
        <div>
          <input
            type="radio"
            name="sameName"
            value="opcion 1"
            onClick={() => {
              setSelectedOption("opcion 1");
            }}
          />
          <label>opcion 1</label>
        </div>
        <div>
          <input
            type="radio"
            name="sameName"
            value="opcion 2"
            onClick={() => {
              setSelectedOption("opcion 2");
            }}
          />
          <label>opcion 2</label>
        </div>
        <div>
          <input
            type="radio"
            name="sameName"
            value="opcion 3"
            onClick={() => {
              setSelectedOption("opcion 3");
            }}
          />
          <label>opcion 3</label>
        </div>
      </fieldset>
    </div>
  );
};

export default Radio;
