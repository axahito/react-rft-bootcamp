import React from "react";
import GuestLayout from "../../commons/layouts/guest/GuestLayout";
import RegisterContainer from "../../modules/auth/containers/RegisterContainer";

function Register() {
  return (
    <>
      <GuestLayout>
        <RegisterContainer></RegisterContainer>
      </GuestLayout>
      {/* <RegisterContainer value={testString} banana="test"></RegisterContainer> */}
    </>
  );
}

export default Register;
