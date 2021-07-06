import React from "react";
const SignUpField = (props) => {
  return (
    <>
      <form>
        <input
          type="text"
          name="name"
          placeholder={props.name}
          style={{
            padding: 25,
            height: props.h,
            width: props.w,
            marginLeft: props.ml,
            marginTop: props.mt,
            paddingRight: props.pa,
            paddingBottom: props.pb,
          }}
        />
      </form>
    </>
  );
};
export default SignUpField;
