import React from "react";
import RegisterContainer from "../../modules/auth/containers/RegisterContainer";

function Register() {
    const testString = "string"
  return (
    <>
      <div>Registration Page</div>
      <RegisterContainer value={testString} banana="test"></RegisterContainer>
    </>
  );
}

export default Register;
