/* eslint-disable react/no-unescaped-entities */
"use client";
import DefaultHeader from "@/components/DefaultHeader";
import DefaultSidebar from "@/components/DefaultSidebar";
import { useState, useEffect } from "react";

const Page = () => {
  const [isUserAgreementClicked, setIsUserAgreementClicked] = useState(false);
  const [isPrivacyPolicyClicked, setIsPrivacyPolicyClicked] = useState(false);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerDateOfBirth, setRegisterDateOfBirth] = useState("");
  const [registerPhoneNumber, setRegisterPhoneNumber] = useState("");
  const [isCheckBoxTicked, setIsCheckBoxTicked] = useState(false);

  const [showErrorMessage, setShowErrorMessage] = useState(false);

  // EMAIL VALIDATION STATES
  const [isRegisterEmailEmpty, setIsRegisterEmailEmpty] = useState(false);
  const [isRegisterEmailFormatError, setIsRegisterEmailFormatError] =
    useState(false);
  const [isRegisterEmailLengthError, setIsRegisterEmailLengthError] =
    useState(false);

  // PASSWORD VALIDATION STATE
  const [isRegisterPasswordEmpty, setIsRegisterPasswordEmpty] = useState(false);
  const [isRegisterPasswordFormatError, setIsRegisterPasswordFormatError] =
    useState(false);
  const [isRegisterPasswordLengthError, setIsRegisterPasswordLengthError] =
    useState(false);

  // DATE OF BIRTH VALIDATION STATE
  const [isRegisterDateOfBirthEmpty, setIsRegisterDateOfBirthEmpty] =
    useState(false);
  const [
    isRegisterDateOfBirthFormatError,
    setIsRegisterDateOfBirthFormatError,
  ] = useState(false);
  const [isRegisterDateOfBirthAgeError, setIsRegisterDateOfBirthAgeError] =
    useState(false);

  // PHONE NUMBER VALIDATION STATE
  const [isRegisterPhoneNumberEmpty, setIsRegisterPhoneNumberEmpty] =
    useState(false);
  const [
    isRegisterPhoneNumberFormatError,
    setIsRegisterPhoneNumberFormatError,
  ] = useState(false);
  const [
    isRegisterPhoneNumberLengthError,
    setIsRegisterPhoneNumberLengthError,
  ] = useState(false);

  const handleUserAgreementClicked = () => {
    setIsUserAgreementClicked(!isUserAgreementClicked);
  };

  const handlePrivacyPolicyClicked = () => {
    setIsPrivacyPolicyClicked(!isPrivacyPolicyClicked);
  };

  const validateRegisterEmail = (registerEmail: string) => {
    const trimmedEmail = registerEmail.trim();
    const validEmailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsRegisterEmailEmpty(false);
    setIsRegisterEmailFormatError(false);
    setIsRegisterEmailLengthError(false);
    if (!registerEmail) {
      setIsRegisterEmailEmpty(true);
      return;
    }
    if (!validEmailFormat.test(trimmedEmail)) {
      setIsRegisterEmailFormatError(true);
    }
    if (trimmedEmail.length >= 320) {
      setIsRegisterEmailLengthError(true);
    }
  };

  useEffect(() => {
    validateRegisterEmail(registerEmail);
  }, [registerEmail]);

  const validateRegisterPassword = (registerPassword: string) => {
    const trimmedPassword = registerPassword.trim();
    const validPasswordFormat = /^[a-zA-Z0-9!@#$%^&*()]+$/;
    setIsRegisterPasswordEmpty(false);
    setIsRegisterPasswordFormatError(false);
    setIsRegisterPasswordLengthError(false);
    if (!registerPassword) {
      setIsRegisterPasswordEmpty(true);
      return;
    }
    if (!validPasswordFormat.test(trimmedPassword)) {
      setIsRegisterPasswordFormatError(true);
    }
    if (trimmedPassword.length < 8 || trimmedPassword.length > 20) {
      setIsRegisterPasswordLengthError(true);
    }
  };

  useEffect(() => {
    validateRegisterPassword(registerPassword);
  }, [registerPassword]);

  const validateRegisterDateOfBirth = (registerDateOfBirth: string) => {
    const currentYear = new Date().getFullYear();
    const splittedDateOfBirth = registerDateOfBirth.split("-");
    const userBirthYear = splittedDateOfBirth[0];

    setIsRegisterDateOfBirthEmpty(false);
    setIsRegisterDateOfBirthFormatError(false);
    setIsRegisterDateOfBirthAgeError(false);

    if (!registerDateOfBirth) {
      setIsRegisterDateOfBirthEmpty(true);
      console.log(registerDateOfBirth);
      return;
    }
    if (Number(userBirthYear) > currentYear) {
      setIsRegisterDateOfBirthFormatError(true);
      return;
    }
    if (currentYear - Number(userBirthYear) < 18) {
      setIsRegisterDateOfBirthAgeError(true);
    }
  };

  useEffect(() => {
    validateRegisterDateOfBirth(registerDateOfBirth);
  }, [registerDateOfBirth]);

  const validateRegisterPhoneNumber = (registerPhoneNumber: string) => {
    const trimmedPhoneNumber = registerPhoneNumber.trim();
    setIsRegisterPhoneNumberEmpty(false);
    setIsRegisterPhoneNumberFormatError(false);
    setIsRegisterPhoneNumberLengthError(false);

    if (!registerPhoneNumber) {
      setIsRegisterPhoneNumberEmpty(true);
      return;
    }
    if (!/^[0-9]+$/.test(trimmedPhoneNumber)) {
      setIsRegisterPhoneNumberFormatError(true);
      return;
    }
    if (trimmedPhoneNumber.length !== 10) {
      setIsRegisterPhoneNumberLengthError(true);
    }
  };
  useEffect(() => {
    validateRegisterPhoneNumber(registerPhoneNumber);
  }, [registerPhoneNumber]);

  const handleCheckBoxChange = () => {
    setIsCheckBoxTicked((prev) => !prev); // สลับค่าเดิม
  };

  useEffect(() => {
    console.log(`Checkbox is now ${isCheckBoxTicked ? "ticked" : "unticked"}`);
    console.log(isCheckBoxTicked);
    // คุณสามารถเพิ่มโค้ดเพื่อปรับปรุง state หรือดำเนินการอื่นๆ ที่ต้องการทำเมื่อ checkbox ถูกติ๊กหรือถูกยกเลิกได้ที่นี่
  }, [isCheckBoxTicked]);

  const handleRegisterButton = (event: any) => {
    event.preventDefault();
    setShowErrorMessage(true);
    validateRegisterEmail(registerEmail);
    validateRegisterPassword(registerPassword);
    validateRegisterPhoneNumber(registerPhoneNumber);
    validateRegisterDateOfBirth(registerDateOfBirth);

    if (
      !isRegisterEmailEmpty &&
      !isRegisterEmailFormatError &&
      !isRegisterEmailLengthError &&
      !isRegisterEmailEmpty &&
      !isRegisterEmailFormatError &&
      !isRegisterEmailLengthError &&
      !isRegisterPasswordEmpty &&
      !isRegisterPasswordFormatError &&
      !isRegisterPasswordLengthError &&
      !isRegisterPhoneNumberEmpty &&
      !isRegisterPhoneNumberFormatError &&
      !isRegisterPhoneNumberLengthError &&
      !isRegisterDateOfBirthEmpty &&
      !isRegisterDateOfBirthFormatError &&
      !isCheckBoxTicked
    ) {
      alert(
        "In order to register, You must agree to the User Agreement and Privacy Policy"
      );
    }
    if (
      !isRegisterEmailEmpty &&
      !isRegisterEmailFormatError &&
      !isRegisterEmailLengthError &&
      !isRegisterPasswordEmpty &&
      !isRegisterPasswordFormatError &&
      !isRegisterPasswordLengthError &&
      !isRegisterPhoneNumberEmpty &&
      !isRegisterPhoneNumberFormatError &&
      !isRegisterPhoneNumberLengthError &&
      !isRegisterDateOfBirthEmpty &&
      !isRegisterDateOfBirthFormatError &&
      isCheckBoxTicked
    ) {
      alert("Successfully Registered");
    }
  };

  return (
    <div className=" bg-[#646565] w-screen h-screen flex flex-col ">
      <DefaultHeader />
      <DefaultSidebar />
      <div className="absolute bg-white h-[80%] w-[50%] rounded-xl top-24 left-1/3 border ">
        <h1
          data-cy="page-title"
          className="text-[#284446] font-bold flex text-[28px] justify-center mt-5"
        >
          REGISTER
        </h1>
        <h2 className="text-black font-bold flex text-[20px] justify-center mt-5">
          Kindly fill this form to register.
        </h2>
        <form
          onSubmit={handleRegisterButton}
          className="flex flex-col gap-4 ml-24 mt-10"
        >
          <div className="flex flex-row gap-20 ">
            <label htmlFor="register-email-input" className="text-black">
              {" "}
              E-mail:
            </label>
            <input
              data-cy="register-email-input"
              type="text"
              id="register-email-input"
              value={registerEmail}
              onChange={(event) => setRegisterEmail(event.target.value)}
              className="border text-[#284446] w-[65%] "
            />
          </div>
          <div className="ml-32 flex flex-col">
            {isRegisterEmailEmpty && showErrorMessage && (
              <b
                data-cy="empty-register-email-error"
                className="text-[#A50029] text-sm  top-48 left-48"
              >
                {" "}
                - Email can't be empty.
              </b>
            )}
            {isRegisterEmailFormatError && showErrorMessage && (
              <b
                data-cy="format-register-email-error"
                className="text-[#A50029] text-sm  top-48 left-48"
              >
                {" "}
                - Invalid E-mail format.
              </b>
            )}
            {isRegisterEmailLengthError && showErrorMessage && (
              <b
                data-cy="length-register-email-error"
                className="text-[#A50029] text-sm  top-48 left-48"
              >
                {" "}
                - Email length can't exceed 320 characters.
              </b>
            )}
          </div>
          <div className="flex flex-row gap-14 ">
            <label htmlFor="password" className="text-black">
              {" "}
              Password:
            </label>
            <input
              data-cy="register-password-input"
              type="text"
              id="register-password-input"
              value={registerPassword}
              onChange={(event) => setRegisterPassword(event.target.value)}
              className="border text-[#284446] w-[65%] "
            />
          </div>
          <div className="ml-32 flex flex-col">
            {isRegisterPasswordEmpty && showErrorMessage && (
              <b
                data-cy="empty-register-password-error"
                className="text-[#A50029] text-sm  top-48 left-48"
              >
                {" "}
                - Password can't be empty.
              </b>
            )}
            {isRegisterPasswordFormatError && showErrorMessage && (
              <b
                data-cy="format-register-password-error"
                className="text-[#A50029] text-sm  top-48 left-48"
              >
                {" "}
                - Invalid Password format.
              </b>
            )}
            {isRegisterPasswordLengthError && showErrorMessage && (
              <b
                data-cy="length-register-password-error"
                className="text-[#A50029] text-sm  top-48 left-48"
              >
                {" "}
                - Password must be at least 8 characters and can't exceed 20
                characters.
              </b>
            )}
          </div>

          <div className="flex flex-row gap-8 ">
            <label
              htmlFor="register-date-of-birth-input"
              className="text-black"
            >
              {" "}
              Date of Birth:
            </label>
            <input
              data-cy="register-date-of-birth-input"
              type="date"
              id="register-date-of-birth-input"
              value={registerDateOfBirth}
              onChange={(event) => setRegisterDateOfBirth(event.target.value)}
              className="border text-[#284446] w-[65%] "
            />
          </div>
          <div className="ml-32 flex flex-col">
            {isRegisterDateOfBirthEmpty && showErrorMessage && (
              <b
                data-cy="empty-register-date-of-birth-error"
                className="text-[#A50029] text-sm  top-48 left-48"
              >
                {" "}
                - Date of Birth can't be empty.
              </b>
            )}
            {isRegisterDateOfBirthFormatError && showErrorMessage && (
              <b
                data-cy="format-register-date-of-birth-error"
                className="text-[#A50029] text-sm  top-48 left-48"
              >
                {" "}
                - Invalid Date of Birth information.
              </b>
            )}
            {isRegisterDateOfBirthAgeError && showErrorMessage && (
              <b
                data-cy="age-register-date-of-birth-error"
                className="text-[#A50029] text-sm  top-48 left-48"
              >
                {" "}
                - You must be at least 18 years old to register.
              </b>
            )}
          </div>
          <div className="flex flex-row gap-4 ">
            <label htmlFor="register-phone-number" className="text-black">
              {" "}
              Phone Number:
            </label>
            <input
              data-cy="register-phone-number-input"
              type="text"
              id="register-phone-number-input"
              value={registerPhoneNumber}
              onChange={(event) => setRegisterPhoneNumber(event.target.value)}
              className="border text-[#284446] w-[65%] "
            />
          </div>
          <div className="ml-32 flex flex-col">
            {isRegisterPhoneNumberEmpty && showErrorMessage && (
              <b
                data-cy="empty-register-phone-number-error"
                className="text-[#A50029] text-sm  top-48 left-48"
              >
                {" "}
                - Phone Number can't be empty.
              </b>
            )}
            {isRegisterPhoneNumberFormatError && showErrorMessage && (
              <b
                data-cy="format-register-phone-number-error"
                className="text-[#A50029] text-sm  top-48 left-48"
              >
                {" "}
                - Invalid Phone Number format.
              </b>
            )}
            {isRegisterPhoneNumberLengthError && showErrorMessage && (
              <b
                data-cy="length-register-phone-number-error"
                className="text-[#A50029] text-sm  top-48 left-48"
              >
                {" "}
                - Phone number must contain 10 numbers.
              </b>
            )}
          </div>
          <div className="flex flex-row  gap-3 ml-28 ">
            <input
              data-cy="register-agreement-checkbox"
              type="checkbox"
              id="register-agreement-checkbox"
              onChange={handleCheckBoxChange}
              checked={isCheckBoxTicked}
              className="border text-[#284446] w-[10%]"
            />
            <b className="text-[#284446]">
              I agree to the{" "}
              <span
                data-cy="user-agreement"
                className="underline hover:cursor-pointer"
                onClick={handleUserAgreementClicked}
              >
                User Agreement
              </span>{" "}
              and{" "}
              <span
                data-cy="privacy-policy"
                className="underline  hover:cursor-pointer"
                onClick={handlePrivacyPolicyClicked}
              >
                {" "}
                Privacy Policy
              </span>
            </b>
          </div>
          <button
            data-cy="register-button"
            type="submit"
            className="absolute  right-[21%] bottom-12  bg-[#284446] w-[57.5%] p-3 justify-center hover:bg-[#405a6a]"
          >
            REGISTER
          </button>
          {isUserAgreementClicked && (
            <div
              data-cy="user-agreement-popup"
              className="absolute bg-white h-[100%] w-[100%] rounded-xl top-0 left-0 border text-[#284446]   "
            >
              <button
                data-cy="close-button"
                onClick={handleUserAgreementClicked}
                className="absolute left-[95%] top-0 text-white bg-[#284446] pr-2 pl-2 pt-1 pb-1 "
              >
                X
              </button>
              <div className="flex flex-col text-center mt-12">
                <b className="text-[30px]">User Agreement</b>
                <br />
                <b>By using our Services, you agree to the following:</b>
                <br />
                1. Acceptance: You agree to this User Agreement and our Privacy
                Policy.
                <br />
                2. Usage: Use our Services responsibly and comply with all laws.
                <br />
                3. Account: Keep your account details secure.
                <br />
                4. Ownership: Our content and trademarks belong to us or our
                licensors.
                <br />
                5. Liability: We are not responsible for indirect damages or
                third-party actions.
                <br />
                6. Changes: We may update this agreement; continued use means
                you accept the changes.
                <br />
                7. Governing Law: This agreement follows the laws of [Your
                Jurisdiction].
              </div>
            </div>
          )}

          {isPrivacyPolicyClicked && (
            <div
              data-cy="privacy-policy-popup"
              className="absolute bg-white h-[100%] w-[100%] rounded-xl top-0 left-0 border text-[#284446]"
            >
              <button
                data-cy="close-button"
                onClick={handlePrivacyPolicyClicked}
                className="absolute left-[95%] top-0 text-white bg-[#284446] pr-2 pl-2 pt-1 pb-1"
              >
                X
              </button>
              <div className="flex flex-col text-center mt-12">
                <b className="text-[30px]">Privacy Policy</b>
                <br />
                <b>1. Introduction</b>
                Privacy Policy. We respect your privacy and are committed to
                protecting your personal information.
                <br />
                <b>2. Information We Collect</b>
                We may collect the following types of information when you use
                our Services:
                <br />
                - Personal Information: Name, email address, etc.
                <br />
                - Usage Data: Information about how you interact with our
                Services.
                <br />
                <b>3. How We Use Your Information</b>
                We may use your information for the following purposes:
                <br />
                - To provide and maintain our Services.
                <br />
                - To improve our Services.
                <br />
                - To communicate with you.
                <br />
                <b>4. Security</b>
                We implement security measures to protect your information from
                unauthorized access, alteration, or disclosure.
                <br />
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Page;
