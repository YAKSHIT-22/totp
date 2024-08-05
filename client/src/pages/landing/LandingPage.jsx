import React from "react";
import LoaderScreen from "../../components/loader/LoaderScreen";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import buttonData from "../../constants/componenData";

const FeatureButtonsSection = () => {
  return (
    <div className="flex items-center justify-center w-full h-full relative mt-12">
      {buttonData.map((button, index) => (
        <div
          key={index}
          className={`absolute ${button.top} ${button.left ? button.left : ''} ${button.right ? button.right : ''} 
          sm:${button.top} sm:${button.left ? button.left : ''} sm:${button.right ? button.right : ''}`}
        >
          <div className="bg-[#f2f2f2] hover:shadow-none transition-all duration-500 rounded-full py-4 px-12 text-2xl shadow-[2px_4px_0_black]">
            {button.text}
          </div>
        </div>
      ))}
    </div>
  );
};

const LandingPage = () => {
  return (
    <main className="relative w-full h-full flex items-start justify-center isolate overflow-hidden">
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
              The world’s best TOTP package, made with Love.
            </p>
          </div>
          <FeatureButtonsSection/>
        </section>
        <Footer />
      </section>
    </main>
  );
};

export default LandingPage;
