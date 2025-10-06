import React from "react";
import LoginForm from "../Components/LoginForm/LoginForm";
import Images from "../utilits/Images/Images";
function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 overflow-x-hidden">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-10 lg:px-20 w-full mx-auto">

        <div className="flex flex-col justify-center text-center md:text-left">
          <div className="login-side-logo m-auto md:m-0">
                <img className="max-w-30 " src={Images.Logo} alt="" />
          </div>
         
          <p className="mt-5 text-slate-500 hidden sm:block">
            ZMbook helps you connect and share with the people in your life.
          </p>
        </div>

        <div className="flex justify-center md:justify-end items-center">
          <LoginForm />
        </div>

      </div>
    </div>
  );
}

export default LoginPage;

