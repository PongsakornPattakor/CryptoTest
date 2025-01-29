import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

type Props = {};

function WelcomePage({}: Props) {
  return (
    <>
      <Navbar />
      <main>
        <div>Welcome</div>
      </main>
      <Footer />
    </>
  );
}

export default WelcomePage;
