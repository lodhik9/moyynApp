import React from "react";
import preferenceImg from "../../assets/preference.png";
import Preferences from "../Preferences";

export default function StepThree({
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
          <div className="buttons" onClick={changeStepTwo}>
            2
          </div>
          <div className="btn-1" onClick={changeStepThree}>
            3
          </div>
          <div className="buttons" onClick={changeStepFour}>
            4
          </div>
        </div>
        <div className="imgIndicators">
          <p>What are your preferences?</p>
          <img alt="img" src={preferenceImg} />
        </div>
      </div>
      <div className="data">
        <Preferences />
        {/* <Skills /> */}
      </div>
    </div>
  );
}
