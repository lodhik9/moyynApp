import React from "react";

import "../../scss/login.scss";
// import Footer from "../footer";

const Login = () => {
  return (
    <>
      <div className="fullPage">
        <div className="innerPage">
          <div className="credentialsBox">
            <p className="textSty">Check for new jobs matches</p>
            <div
              style={{
                marginTop: " 12%",
                height: "30%",
                width: "100%", //   backgroundColor: "red",
              }}
            >
              <form>
                <input
                  type="text"
                  name="name"
                  placeholder="Email"
                  style={{
                    width: "90%",
                    paddingBottom: "2rem",
                    padding: 10,
                    marginTop: "2%",
                    border: "1px solid gray",
                    outline: "none",
                    borderRadius: "5px"
                  }}
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Password"
                  style={{
                    width: "90%",
                    paddingBottom: "2rem",
                    padding: 10,
                    marginTop: "2%",
                    outline: "none",
                    border: "1px solid gray",
                    borderRadius: "5px"
                  }}
                />
              </form>
            </div>
            <p style={{ marginTop: "2%", cursor: "pointer", color: "#6c757d" }}>
              Forgot your password? click
              <span className="hereD"> here</span>
            </p>
            <button className="btnLog">Next</button>
            <p style={{ marginTop: "2%" }}>
              New candidate? Click
              <span className="hereD"> here</span>
            </p>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};
export default Login;
