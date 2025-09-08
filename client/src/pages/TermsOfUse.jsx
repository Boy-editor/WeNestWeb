import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TermsOfUse = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <section>
        <div className="absolute inset-0 bg-black/20">TermsOfUse</div>
      </section>
      <Footer />
    </div>
  );
};
export default TermsOfUse;