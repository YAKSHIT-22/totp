import React, { useState } from "react";
import { baseUrl } from "../../constants/BaseUrl";
import ModalContainer from "../../containers/ModalContainer";
import { GoVerified } from "react-icons/go";
import { QRCodeCanvas } from "qrcode.react";
import axios from "axios";

const Examples = () => {
  const [form, setForm] = useState({});
  const [isActionModalOpen, setIsActionModalOpen] = useState({});
  const [tForm, settForm] = useState({});
  const [isOtpVerified, setIsOtpVerified] = useState(false); // New state for OTP verification status

  const handleInputChange = (e) => {
    settForm({
      ...tForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}/signup`, {
        email: form.email,
        password: form.password,
      });

      if (res.status === 200) {
        setIsActionModalOpen({
          isOpen: true,
          qrUri: res.data.authUrl,
        });
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const handleSubmitOTP = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}/verify-otp`, {
        otp: tForm.otp,
        email: form.email,
      });

      if (res.status === 200) {
        setIsOtpVerified(true); // Set OTP verification status to true
      } else {
        settForm({ ...tForm, otp: "" });
      }
    } catch (error) {
      console.error("OTP verification error:", error);
    }
  };

  const handleActionsModalClose = () => {
    settForm({});
    setIsOtpVerified(false); // Reset OTP verification status
    setIsActionModalOpen({
      isOpen: false,
      qrUri: "",
    });
  };

  return (
    <section className="flex items-start justify-start min-h-[90dvh] w-full p-2">
      <div className="max-w-screen-2xl mx-auto w-full flex items-start mt-12 justify-start p-2 s:p-6">
        <div className="flex items-center justify-center w-full p-2">
          <div className="flex items-center justify-center lg:flex-row flex-col-reverse">
            <div className="flex items-center p-2 justify-center w-full flex-col h-full gap-3">
              <div className="flex items-center justify-center gap-1">
                <div className="h-4 w-4 bg-[#049ba2] rounded-full"></div>
                <div className="h-4 w-4 bg-[#ffffff] rounded-full"></div>
              </div>
              <div className="flex w-full items-center justify-center flex-col">
                <h1 className="text-3xl sm:text-5xl xl:text-6xl text-black font-bold text-center">
                  OPTMYZR <br />
                  TOTP Verification Demo
                </h1>
              </div>
              <form
                onSubmit={handleSubmit}
                id="signup"
                className="flex w-full items-start justify-center flex-col font-light py-2 text-[#f4f4f4] gap-2"
              >
                <div className="flex w-full items-start justify-center flex-col gap-2">
                  <label className="text-sm">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={form.email || ""}
                    onChange={handleChange}
                    placeholder="Where can we reach you!"
                    className="rounded-full border border-[#252525] text-lg bg-transparent text-[#222222] w-full focus:outline-none focus:ring-1 focus:ring-[#049ba2] focus:border-transparent py-4 px-4 transition-all"
                  />
                </div>
                <div className="flex w-full items-start justify-center flex-col gap-2">
                  <label className="text-sm">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={form.password || ""}
                    onChange={handleChange}
                    placeholder="What is your secret passcode!"
                    className="rounded-full border border-[#252525] text-lg bg-transparent text-[#222222] w-full focus:outline-none focus:ring-1 focus:ring-[#049ba2] focus:border-transparent py-4 px-4 transition-all"
                  />
                </div>
              </form>
              <div className="flex items-center justify-start w-full">
                <button
                  type="submit"
                  form="signup"
                  className="w-full focus:shadow-none shadow-[4px_4px_0px_black] px-12 sm:px-20 py-3 rounded-full bg-white border-white border border-transparent text-[#181818] transition-all duration-500"
                >
                  <p className="text-sm sm:text-base font-medium">Submit</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalContainer
        heading={isOtpVerified ? 'OTP Verified' : "Scan the QR Code with Authenticator App"}
        isOpen={isActionModalOpen.isOpen}
        onClose={handleActionsModalClose}
        cta={isOtpVerified ? '' : "Verify OTP"}
        formid={"verifyOtp"}
        isCta={isOtpVerified ? false : true}
        onSubmit={handleSubmitOTP}
        ctaClass={isOtpVerified ? '' : "primary"}
        scrollBehavior=""
        modalClass="text-[#222222] bg-white"
        enableFooter={true}
      >
        {isOtpVerified ? (
          <div className="flex flex-col items-center justify-center gap-4 py-4">
            <GoVerified className="w-24 h-24 text-green-500" />
            <h1 className="text-xl font-bold">OTP Verified</h1>
            <p className="text-md">Thank you.</p>
          </div>
        ) : (
          <>
            <div className="w-full flex items-center justify-center gap-1 flex-col py-2">
              <h1 className="capitalize text-sm font-medium">
                Scan QR and Enter OTP from App
              </h1>
              <p className="capitalize text-xs text-[#b3b3b3]">
                *All fields are required!
              </p>
            </div>
            <form
              id={"verifyOtp"}
              onSubmit={handleSubmitOTP}
              className="flex items-center justify-center gap-4 flex-col"
            >
              <div className="flex items-center justify-center gap-4 w-full flex-col">
                <div className="relative flex items-center justify-center gap-2 w-full">
                  {isActionModalOpen.qrUri && (
                    <QRCodeCanvas value={isActionModalOpen.qrUri} size={200} />
                  )}
                </div>
                <div className="relative flex items-center justify-center gap-2 w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <GoVerified className="w-6 h-6 text-[#808080]" />
                  </div>
                  <input
                    type="text"
                    className="flex bg-transparent text-sm w-full pl-10 pr-3 py-3 text-[#222222] border border-[#252525] rounded-[8px] focus:outline-none"
                    placeholder="Enter OTP"
                    name="otp"
                    required
                    onChange={handleInputChange}
                    value={tForm.otp || ""}
                  />
                </div>
              </div>
            </form>
          </>
        )}
      </ModalContainer>
    </section>
  );
};

export default Examples;
