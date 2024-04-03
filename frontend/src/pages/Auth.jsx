import React, { useState } from "react";
import RegistrationForm from "../components/RegistrationForm.jsx";
import LoginForm from "../components/LoginForm.jsx";

const AuthenticationPage = () => {
  const [flag, setFlag] = useState(false);
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gray-200">
      <div className="flex flex-row gap-4 md:flex-col sm:flex-col ">
        <div className="flex gap-4">
          <button onClick={() => setFlag(false)} className={`${flag=== false ? "bg-orange-300 font-semibold rounded-md py-2 px-4":"bg-slate-300 font-semibold rounded-md py-2 px-4"}`} >Registration Form</button>
          <button onClick={() => setFlag(true)} className={`${flag ? "bg-orange-300 font-semibold rounded-md py-2 px-4":"bg-slate-300 font-semibold rounded-md py-2 px-4"}`} >Login Form</button>
        </div>
        {flag ? <LoginForm /> : <RegistrationForm />}
      </div>
    </div>
  );
};

export default AuthenticationPage;
