import React from "react";
import RegistrationForm from "../components/RegistrationForm.jsx";
import LoginForm from "../components/LoginForm.jsx";

const AuthenticationPage = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gray-200">
      <div className="flex flex-row gap-4 md:flex-col sm:flex-col ">
        <RegistrationForm />
        <LoginForm />
      </div>
    </div>
  );
};

export default AuthenticationPage;
