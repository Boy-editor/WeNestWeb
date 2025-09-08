import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white pt-24 md:pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/20">LOGIN</div>
      </section>

      <Footer />
    </div>
  );
};

export default Login;