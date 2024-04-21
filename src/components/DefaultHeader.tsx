/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import Link from "next/link";

const DefaultHeader = () => {
  const [isLoginButtonTriggered, setIsLoginButtonTriggered] = useState(false);
  const [showPasswords, setShowPasswords] = useState(false);
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  //  email validation states
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  //  password validation states
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);

  const handleLoginButtonClick = () => {
    setIsLoginButtonTriggered(!isLoginButtonTriggered);
  };

  const handlePasswordReveal = () => {
    setShowPasswords(!showPasswords);
  };

  const validateInputEmail = () => {
    if (!inputEmail) {
      setIsEmailEmpty(true);
      console.log("email validated");
      return;
    }
    setIsEmailEmpty(false);
  };

  const validateInputPassword = () => {
    if (!inputPassword) {
      setIsPasswordEmpty(true);
      console.log("password validated");
      return;
    }
    setIsPasswordEmpty(false);
  };

  const handleLogin = (event: any) => {
    event.preventDefault();
    validateInputEmail();
    validateInputPassword();
  };

  return (
    <header
      data-cy="homepage-title"
      className="h-[10%] w-screen bg-[#284446] flex flex-row justify-between"
    >
      <h1 className="text-white text-[40px] font-bold mt-3 ml-14 ">
        CYPRESS PRACTICES
      </h1>
      <div className="flex flex-row gap-10 align-center mr-16 text-[18px]">
        <button
          data-cy="login-button"
          onClick={handleLoginButtonClick}
          className="bg-white text-[#284446] h-10 p-7 font-bold rounded-b-lg"
        >
          LOGIN
        </button>
      </div>
      {isLoginButtonTriggered && (
        <form
          data-cy="login-form"
          className="absolute bg-white h-[40%] w-[30%] rounded-xl top-18 right-16 z-10 border "
          onSubmit={handleLogin}
        >
          <b className="flex mt-6 justify-center text-[#284446] text-[20px] font-semibold ">
            Please enter your login details below.
          </b>
          <button
            data-cy="close-login-popup"
            onClick={handleLoginButtonClick}
            className="relative left-[90%] -top-14 text-white bg-[#284446] pr-2 pl-2 pt-1 pb-1 "
          >
            X
          </button>
          <div className="flex flex-col mt-3 ml-11 gap-8 ">
            <div className="flex flex-row gap-11 ">
              <label htmlFor="login-email-input" className="text-black">
                {" "}
                E-mail:
              </label>
              <input
                data-cy="login-email-input"
                type="text"
                id="login-email-input"
                value={inputEmail}
                onChange={(event) => setInputEmail(event.target.value)}
                className="border text-[#284446] w-[65%] "
              />
            </div>

            {isEmailEmpty && (
              <b
                data-cy="empty-email-error"
                className="text-[#A50029] text-sm absolute top-32 left-48 "
              >
                {" "}
                Email can't be empty
              </b>
            )}

            <div className="flex flex-row gap-4 ">
              <label htmlFor="login-password-input" className="text-[#284446] ">
                {" "}
                Password:
              </label>
              <input
                data-cy="login-password-input"
                type={showPasswords ? "text" : "password"}
                id="login-password-input"
                value={inputPassword}
                onChange={(event) => setInputPassword(event.target.value)}
                className="border text-[#284446] w-[65%]"
              />
              <img
                data-cy="reveal-password-icon"
                onClick={handlePasswordReveal}
                src="/assets/icons/6684701.png"
                alt="reveal-password-icon"
                height="30"
                width="30"
                className={
                  showPasswords
                    ? "flex top-2 border-[1px] border-[#284446] rounded-full hover:cursor-pointer "
                    : "flex top-2 filter invert border-[1px] border-[#284446] rounded-full hover:cursor-pointer "
                }
              />
            </div>
            {isPasswordEmpty && (
              <b
                data-cy="empty-password-error"
                className="text-[#A50029] text-sm absolute top-48 left-48"
              >
                {" "}
                Password can't be empty
              </b>
            )}
            <b className="text-[#284446] font-light ">
              If you're not yet a member, please{" "}
              <Link
                href="/register"
                data-cy="register-button"
                className="underline font-bold"
              >
                Register
              </Link>{" "}
              before logging in.
            </b>
            <button
              data-cy="submit-login"
              type="submit"
              className="flex ml-24 bg-[#284446] p-3  justify-center w-[65%] hover:bg-[#405a6a]"
            >
              LOGIN
            </button>
          </div>
        </form>
      )}
    </header>
  );
};

export default DefaultHeader;
