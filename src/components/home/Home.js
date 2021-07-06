import React, { useState } from "react";
import ImageC from "../../components/ImageC";
// import SignUpField from "../../components/SignUpFields";
import Switch from "react-switch";
// import Footer from "../../components/footer.jsx";
const Home = (props) => {
  const [checked, setChecked] = useState(false);
  const handleCheck = (checked) => {
    setChecked(checked);
  };
  return (
    <div className="mainContainer">
      <div className="firstComponent">
        <div className="textDesign">
          <p className="firstText">The journey to your next job starts here</p>
          <ImageC />
          <p className="secondText">
            Join our talent pool for free and let our AI find you the perfect
            job
          </p>
        </div>
        <div className="secondDiv">
          <input
            type="text"
            name="name"
            placeholder="Email"
            className="fieldDesign"
          />
          <input
            type="text"
            name="name"
            placeholder="Password"
            className="fieldDesign"
          />
          <input
            type="text"
            name="name"
            placeholder="Confirm Password"
            className="fieldDesign"
          />
          <div className="empty">
            <input
              type="text"
              name="name"
              placeholder="Confirm Password"
              className="fieldDesign2"
            />

            <input
              type="text"
              name="name"
              placeholder="Confirm Password"
              className="fieldDesign3"
            />
          </div>

          <div className="inputRow">
            <Switch
              // style={{ marginLeft: "3%" }}
              onChange={handleCheck}
              checked={checked}
              className="react-switch"
            />
            <p style={{ marginTop: "3%", marginLeft: "2%" }}>
              Currently looking for a job
            </p>
          </div>
          <div style={{ alignItems: "center", display: "flex" }}>
            <input
              style={{
                height: 20,
                width: 20,
                marginLeft: "8%",
                marginTop: "-1%",
              }}
              type="checkbox"
            />
            <p style={{ marginTop: "1%", marginLeft: "1%", fontSize: 12 }}>
              By submitting the application I confirm I have read and agreed to
              the Terms of Use and Privacy Policy.
            </p>
          </div>
          <div style={{display: "flex"}}>
            <button className="button">Next</button>
          </div>
          <p className="text">
            Already submitted an application? Check application status
            <span className="shortText"> here?</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
