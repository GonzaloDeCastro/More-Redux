import React, { useState } from "react";

const Selector = () => {
  const [selectedOption, setSelectedOption] = useState("");

  console.log("selectedOption ", selectedOption);

  return (
    <>
      <h4 style={{ marginBottom: "0px" }}>Select an option</h4>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="option0"></option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </>
  );
};

export default Selector;
