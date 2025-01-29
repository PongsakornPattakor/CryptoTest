import React, { FC } from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black/80 backdrop-blur-lg py-5 px-4 flex flex-col md:flex-row justify-evenly text-white sticky top-0 z-50">
      <div className="md:text-6xl text-3xl self-center">
        <h1 className="text-center md:text-6xl">Crypt1st</h1>
      </div>
      <div className="hidden md:flex self-center">
        <div className="md:flex md:gap-5 md:text-xl">
          <Link href="/" className="menu-link">
            Home
          </Link>
          <Link href="/welcome" className="menu-link">
            Welcome
          </Link>
          <Link href="/login" className="menu-link">
            Sign In
          </Link>
          <Link href="/register" className="menu-link">
            Sign Up
          </Link>
          <a className="font-semibold md:px-2 md:py-1 md:transition-all ease-in-out duration-500 text-white hover:scale-[1.25] bg-red-500 rounded-md hover:flex-shrink hover:cursor-pointer">
            Sign out
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
