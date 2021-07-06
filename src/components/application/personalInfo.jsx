import React from "react";
import personalImg from "../../assets/personalInfo.png";
import PersonalInfo from "../PersonalInfo";
export default function StepTwo({
  changeStepOne,
  changeStepTwo,
  changeStepThree,
  changeStepFour,
}) {
  return (
    <div className="application">
      <div className="leftPart">
        <div className="indecators">
          <div className="buttons" onClick={changeStepOne}>
            1
          </div>
          <div className="btn-1" onClick={changeStepTwo}>
            2
          </div>
          <div className="buttons" onClick={changeStepThree}>
            3
          </div>
          <div className="buttons" onClick={changeStepFour}>
            4
          </div>
        </div>
        <div className="imgIndicators">
          <p>Personal Information</p>
          <img alt="img" src={personalImg} />
        </div>
      </div>
      <div className="data">
        <PersonalInfo />
      </div>
    </div>
  );
}
