import React, { useState } from "react";
import "../scss/preference.css";
import Select from "react-dropdown-select";
const Preferences = () => {
  const [selectedOptions, setSelectedOptions] = useState(null);
  const [checked, setChecked] = useState(false);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const handleChange = (selectedOption) => {
    setSelectedOptions(selectedOption);
  };
  const handleCheck = () => {
    setChecked(true);
  };
  return (
    <div className="box">
      <div className="checkBox">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheck}
          className="check"
        />
        <label className="label">I am willing to relocate</label>
      </div>
      <p className="txt">Type of desired employment</p>
      <div className="rowPf">
        <div>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheck}
            className="check1"
          />
          <label className="label1">Full Time</label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheck}
            className="check1"
          />
          <label className="label1">Part Time</label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheck}
            className="check1"
          />
          <label className="label1">Remote</label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheck}
            className="check1"
          />
          <label className="label1">Freelancer</label>
        </div>
      </div>
      <p className="txt">Online Profiles:</p>
      <div className="straight">
        <Select
          valueField={selectedOptions}
          onChange={handleChange}
          options={options}
          placeholder="Platform"
          color="black"
          className = "selectInput"
          style={{
            height: "45px",
            width: "10rem",
            marginRight: "1rem",
            marginTop: "1rem"
          }}
        />
        <input
          type="text"
          name="name"
          placeholder="Paste Url here"
          className = "selectInput"
          style={{
            width: "18rem",
            padding:".5rem",
            marginTop: "1rem"
          }}
        />
        <div><button className="btnBoxx">Add</button></div>
      </div>
      <div className="btnsPf">
        <button className="btnBoxPf">Back</button>
        <button className="btnBox2Pf">Next</button>
      </div>
    </div>
  );
};
export default Preferences;
