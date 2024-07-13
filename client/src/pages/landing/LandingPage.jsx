import React from "react";
import LoaderScreen from "../../components/loader/LoaderScreen";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import bot from "../../assets/bot.svg";

const LandingPage = () => {
  return (
    <main className="relative w-full h-full flex items-start justify-center isolate">
      <LoaderScreen />
      <section className="flex items-start justify-start landing-section flex-col w-full min-h-screen bg-grid">
        <Header />
        <section className="flex items-center justify-center gap-12 flex-col w-full h-full py-24">
          <div className="flex items-center justify-center gap-12 flex-col w-full h-full">
            <div className="flex items-center justify-center gap-6">
              <div className="h-[1px] w-14 bg-black"></div>
              <h6 className="text-3xl">Introducing</h6>
              <div className="h-[1px] w-14 bg-black"></div>
            </div>
            <h1 className="text-9xl flex items-center justify-center gap-2">
              Opt Auth
            </h1>
          </div>
          <div className="flex items-center justify-center gap-2 max-w-md">
            <p className="flex items-center justify-center text-3xl font-light">
              The world’s best TOTP package, powered by Optmyzr.
            </p>
          </div>
          <div className="flex items-center justify-center w-full h-full relative mt-12">
            <div className="absolute top-12 left-24">
              <div className="bg-[#f2f2f2] hover:shadow-none transition-all duration-500 rounded-full py-4 px-12 text-2xl shadow-[2px_4px_0_black]">
                User Signup
              </div>
            </div>
            <div className="absolute top-32 left-96">
              <div className="bg-[#f2f2f2] hover:shadow-none transition-all duration-500 rounded-full py-4 px-12 text-2xl shadow-[2px_4px_0_black]">
                QR Code Generation
              </div>
            </div>
            <div className="absolute top-0">
              <div className="bg-[#f2f2f2] hover:shadow-none transition-all duration-500 rounded-full py-4 px-12 text-2xl shadow-[2px_4px_0_black]">
                Authenticator Checkin
              </div>
            </div>
            <div className="absolute top-40 right-96">
              <div className="bg-[#f2f2f2] hover:shadow-none transition-all duration-500 rounded-full py-4 px-12 text-2xl shadow-[2px_4px_0_black]">
                TOTP Verification
              </div>
            </div>
            <div className="absolute top-12 right-24">
              <div className="bg-[#f2f2f2] hover:shadow-none transition-all duration-500 rounded-full py-4 px-12 text-2xl shadow-[2px_4px_0_black]">
                User Loging In
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </section>
    </main>
  );
};

export default LandingPage;
