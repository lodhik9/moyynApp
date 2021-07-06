import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-dropdown-select";
import "react-datepicker/dist/react-datepicker.css";
import "../scss/personal.css";
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
const PersonalInfo = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedOptions, setSelectedOptions] = useState(null);
  const [checked, setChecked] = useState(false);
  const handleChange = (selectedOption) => {
    setSelectedOptions(selectedOption);
  };
  const handleCheck = () => {
    setChecked(true);
  };
  return (
    <div className="boxpersonalInfo">
      <div className="personalRow">
        <Select
          valueField={selectedOptions}
          onChange={handleChange}
          options={options}
          placeholder="Country of Residence"
          color="black"
          className="selectInput"
          style={{
            height: "55px",
            marginRight: "1rem",
            width: "calc(15ch + 200px)",
            marginTop: "1rem",
          }}
        />
        <Select
          valueField={selectedOptions}
          onChange={handleChange}
          options={options}
          placeholder="City of Residence"
          color="black"
          className="selectInput"
          style={{
            height: "55px",
            marginBottom: "1rem",
            width: "calc(15ch + 200px)",
            marginTop: "1rem",
          }}
        />
      </div>
      <div className="personalRow">
        <Select
          options={options}
          onChange={handleChange}
          valueField={selectedOptions}
          placeholder="Visa Status"
          color="black"
          className="selectInput"
          style={{
            height: "55px",
            marginTop: "1rem",
            width: "calc(15ch + 200px)",
          }}
        />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="date"
        />
      </div>
      <div className="row2">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheck}
          className="checkP"
        />
        <label className="labelP">Currently Employed</label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheck}
          className="check1P"
        />
        <label className="label1P">EU Driver's License</label>
      </div>
      <div className="personalRow">
        <Select
          valueField={selectedOptions}
          onChange={handleChange}
          options={options}
          placeholder="Phone Number"
          color="black"
          className="selectInput"
          style={{
            height: "55px",
            width: "calc(15ch + 200px)",
            marginTop: "1rem",
          }}
        />
        <Select
          valueField={selectedOptions}
          onChange={handleChange}
          options={options}
          placeholder="Notice Periods (in months)"
          color="black"
          className="selectInput"
          style={{
            height: "55px",
            width: "calc(15ch + 200px)",
            marginTop: "1rem",
          }}
        />
      </div>
      <div className="btnsP">
        <button className="btnBoxP">Back</button>
        <button className="btnBox2P">Next</button>
      </div>
    </div>
  );
};
export default PersonalInfo;
