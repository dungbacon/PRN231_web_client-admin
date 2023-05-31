import React from "react";
import SignUpComponent from "../../components/Login/signup";
import Header from "../../components/Login/Header";

const SignUp = () => {
  return (
    <div className="min-h-full h-auto flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 ">
        <Header
          heading="Signup to create an account"
          paragraph="Already have an account? "
          linkName="Login"
          linkUrl="/login"
        />
        <SignUpComponent />
      </div>
    </div>
  );
};

export default SignUp;
