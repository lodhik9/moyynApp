import React, { useState } from "react";
import Cv from "./uploadCv";
import StepTwo from "./personalInfo";
import StepThree from "./preference";
import StepFour from "./skills";
export default function Application() {
  const [stepOne, setStepOne] = useState(true);
  const [stepTwo, setStepTwo] = useState(false);
  const [stepThree, setStepThree] = useState(false);
  const [stepFour, setStepFour] = useState(false);
  const changeStepOne = () => {
    setStepOne(true);
    setStepTwo(false);
    setStepThree(false);
    setStepFour(false);
  };
  const changeStepTwo = () => {
    setStepOne(false);
    setStepTwo(true);
    setStepThree(false);
    setStepFour(false);
  };
  const changeStepThree = () => {
    setStepOne(false);
    setStepTwo(false);
    setStepThree(true);
    setStepFour(false);
  };
  const changeStepFour = () => {
    setStepOne(false);
    setStepTwo(false);
    setStepThree(false);
    setStepFour(true);
  };
  return (
    <div className="container">
      {stepOne && (
        <Cv
          changeStepOne={changeStepOne}
          changeStepTwo={changeStepTwo}
          changeStepThree={changeStepThree}
          changeStepFour={changeStepFour}
        />
      )}
      {stepTwo && (
        <StepTwo
          changeStepOne={changeStepOne}
          changeStepTwo={changeStepTwo}
          changeStepThree={changeStepThree}
          changeStepFour={changeStepFour}
        />
      )}
      {stepThree && (
        <StepThree
          changeStepOne={changeStepOne}
          changeStepTwo={changeStepTwo}
          changeStepThree={changeStepThree}
          changeStepFour={changeStepFour}
        />
      )}
      {stepFour && (
        <StepFour
          changeStepOne={changeStepOne}
          changeStepTwo={changeStepTwo}
          changeStepThree={changeStepThree}
          changeStepFour={changeStepFour}
        />
      )}
    </div>
  );
}
