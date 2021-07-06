import React, { useState } from "react";
import "../scss/upload.css";
import Select from "react-select";

import cloud from "../assets/cloud.png";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const UploadCv = () => {
  const [selectedOptions, setSelectedOptions] = useState(null);
  const handleChange = (selectedOption) => {
    setSelectedOptions(selectedOption);
  };
  return (
    <div className="uploadBox">
      <div className="box1">
        <label htmlFor="file-input" className="dottedborderbox">
          {/* <input type="file" id="file-input" accept="image/, video/" /> */}
          <p className="textStyle">
            Upload your English CV as pdf file (Max file size 3MB)*
          </p>
          <img src={cloud} alt="submitupload" className="submitupload" />
        </label>
        <label htmlFor="file-input" className="dottedborderbox">
          {/* <input type="file" id="file-input" accept="image/, video/" /> */}
          <p className="textStyle">
            Upload your English CV as pdf file (Max file size 3MB)*
          </p>
          <img src={cloud} alt="submitupload" className="submitupload" />
        </label>
      </div>
      <p className="bottomTxt">Positions applying for</p>
      <Select
        value={selectedOptions}
        onChange={handleChange}
        options={options}
        className="dropDown1"
      />
      <div className="btns1">
        <button className="btnBack">Back</button>
        <button className="btnNext">Next</button>
      </div>
    </div>
  );
};
export default UploadCv;
