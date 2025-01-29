import Navbar from "@/components/Navbar";
import React from "react";
import FormRegCom from "./FormRegCom";
import Footer from "@/components/Footer";

type Props = {};

function RegisterPage({}: Props) {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="flex justify-self-center mb-3 p-3 bg-white rounded-md">
          ลงทะเบียนผู้ใช้งานในระบบ
        </h1>
        <article className="mb-3 p-3 bg-white/60 backdrop-blur-md rounded-md w-full md:w-[50vw] justify-self-center">
          <FormRegCom />
        </article>
      </main>
      <Footer />
    </>
  );
}

export default RegisterPage;
