"use client";
import React, { useState } from "react";
import { FormEvent } from "react";

type Props = {};

function FormRegCom({}: Props) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name || !username || !email || !password || !confirmPassword) {
      setError("โปรดกรอกข้อมูลให้ครบถ้วน");
      return;
    } else if (password != confirmPassword) {
      setError("รหัสผ่านไม่ตรงกัน");
      return;
    }

    try {
      const resCheckUser = await fetch("http://localhost:3000/api/checkUsers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email }),
      });
      const { userDB } = await resCheckUser.json();

      if (userDB.email == email && userDB.username == username) {
        setError("อีเมลล์และชื่อผู้ใช้นี้ มีการใช้งานแล้ว");
        return;
      } else if (userDB.username == username) {
        setError("ชื่อผู้ใช้นี้ มีการใช้งานแล้ว");
        return;
      } else if (userDB.email == email) {
        setError("อีเมลล์นี้ มีการใช้งานแล้ว");
        return;
      }

      const resReg = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          phone,
          email,
          password,
        }),
      });

      if (resReg.ok) {
        const form = e.target as HTMLFormElement;
        setError("");
        setSuccess("ลงทะเบียนสำเร็จ");
        form.reset();
      } else {
        console.log("ลงทะเบียนล้มเหลว");
      }
    } catch (error) {
      console.log("เกิดข้อผิดพลาดขณะลงทะเบียน");
    }
  };

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit}
        className="grid place-content-center"
      >
        {error && (
          <div className="bg-red-500 p-3 text-center text-white rounded-md">
            Error : {error}
          </div>
        )}
        {success && (
          <div className="bg-green-500 p-3 text-center text-white rounded-md">
            {success}
          </div>
        )}
        <div className="flex gap-5 my-3 items-center">
          <label htmlFor="" className="text-lg md:text-2xl">
            ชื่อ
          </label>
          <input
            type="text"
            placeholder="ป้อนชื่อจริง-นามสกุล"
            className="rounded ring-1 ring-slate-500 p-2"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex gap-5 my-3 items-center">
          <label htmlFor="" className="text-lg md:text-2xl">
            ชื่อผู้ใช้งาน
          </label>
          <input
            type="text"
            placeholder="ป้อน username"
            className="rounded ring-1 ring-slate-500 p-2"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex gap-5 my-3 items-center">
          <label htmlFor="" className="text-lg md:text-2xl">
            เบอร์โทร
          </label>
          <input
            type="tel"
            placeholder="ป้อน หมายเลขโทรศัพท์"
            className="rounded ring-1 ring-slate-500 p-2"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="flex gap-5 my-3 items-center">
          <label htmlFor="" className="text-lg md:text-2xl">
            E-mail
          </label>
          <input
            type="email"
            placeholder="example@email.com"
            className="rounded ring-1 ring-slate-500 p-2"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex gap-5 my-3 items-center">
          <label htmlFor="" className="text-lg md:text-2xl">
            รหัสผ่าน
          </label>
          <input
            type="password"
            placeholder="ป้อนรหัสผ่าน 6-15 ตัวอักษร"
            className="rounded ring-1 ring-slate-500 p-2"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex gap-5 my-3 items-center">
          <label htmlFor="" className="text-lg md:text-2xl">
            ยืนยันรหัสผ่าน
          </label>
          <input
            type="password"
            placeholder="ป้อนรหัสผ่าน 6-15 ตัวอักษร"
            className="rounded ring-1 ring-slate-500 p-2"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="flex gap-5 justify-self-center">
          <button className="button-submit" type="submit">
            ลงทะเบียน
          </button>
          <button className="button-reset" type="reset">
            ล้างข้อมูล
          </button>
        </div>
      </form>
    </>
  );
}

export default FormRegCom;
