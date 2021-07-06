import React from "react";
import UploadCv from "../UploadCv";
import cvImg from "../../assets/cv.PNG";
export default function Cv({
  changeStepOne,
  changeStepTwo,
  changeStepThree,
  changeStepFour,
}) {
  return (
    <div className="application">
      <div className="leftPart">
        <div className="indecators">
          <div className="btn-1" onClick={changeStepOne}>
            1
          </div>
          <div className="buttons" onClick={changeStepTwo}>
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
          <p>Upload your CV</p>
          <img alt="img" src={cvImg} />
        </div>
      </div>
      <div className="data">
        <UploadCv />
      </div>
    </div>
  );
}
