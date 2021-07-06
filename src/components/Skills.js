import React, { useState } from "react";
import Select from "react-dropdown-select";
import "../scss/skills.css";
const Skills = () => {
  const [selectedOptions, setSelectedOptions] = useState(null);
  const options = [
    { value: "student", label: "Student" },
    { value: "graduate", label: "Graduate" },
    { value: "young", label: "Young Professional" },
    { value: "senior", label: "Senior" },
    { value: "exe", label: "Executive" },
  ];
  const handleChange = (selectedOption) => {
    setSelectedOptions(selectedOption);
  };
  return (
    <div className="box">
      <div>
        <Select
          valueField={selectedOptions}
          onChange={handleChange}
          options={options}
          placeholder="Career Level"
          color="black"
          style={{
            height: "55px",
          }}
        />
        <Select
          valueField={selectedOptions}
          onChange={handleChange}
          options={options}
          placeholder="Industries"
          color="black"
          style={{
            height: "55px",
            marginTop: "2%",
          }}
        />
        <input
          type="text"
          name="name"
          placeholder="Skills"
          style={{
            width: "100%",
            paddingBottom: "2rem",
            padding: 10,
            marginTop: "2%",
          }}
        />
      </div>
      <p className="txt">Work Experience (Add your Experience)</p>
      <div className="straight">
        <Select
          valueField={selectedOptions}
          onChange={handleChange}
          options={options}
          placeholder="Category"
          color="black"
          style={{
            height: "55px",
            marginTop: "2%",
          }}
        />
        <Select
          valueField={selectedOptions}
          onChange={handleChange}
          options={options}
          placeholder="Role"
          color="black"
          style={{
            height: "55px",
            marginTop: "2%",
          }}
        />
        <Select
          valueField={selectedOptions}
          onChange={handleChange}
          options={options}
          placeholder="Experience"
          color="black"
          style={{
            height: "55px",
            marginTop: "2%",
          }}
        />
      </div>
      <div className="straight">
        <Select
          valueField={selectedOptions}
          onChange={handleChange}
          options={options}
          placeholder="Languages"
          color="black"
          style={{
            height: "55px",
            marginTop: "4%",
          }}
        />
        <Select
          valueField={selectedOptions}
          onChange={handleChange}
          options={options}
          placeholder="Level"
          color="black"
          style={{
            height: "55px",
            marginTop: "7%",
          }}
        />
      </div>
      <div className="btns">
        <button className="btnBoxP">Back</button>
        <button className="btnBox2P">Next</button>
      </div>
    </div>
  );
};
export default Skills;
