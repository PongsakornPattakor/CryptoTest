import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer
      className="container-fluid bg-black z-50 grid grid-cols-3"
      id="contacts"
    >
      <article className="mt-3 flex flex-col place-items-center col-span-3 md:col-span-2">
        <h2 className="text-center text-lg md:text-2xl font-bold text-white">
          Please! Contact Me
        </h2>
        <div className="md:flex items-center my-2">
          <div className=" text-white flex items-center rounded-2xl ring-1 ring-white my-2 md:mx-2 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=" size-6 md:size-8 m-2 text-white"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <p className="text-base md:text-xl ">pattakor.f@gmail.com</p>
          </div>
          <div className=" text-white flex items-center rounded-2xl ring-1 ring-white my-2 md:mx-2 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=" size-6 md:size-8 m-2 text-white"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <p className="text-base md:text-xl ">(+66)92-3839351</p>
          </div>
          <div className=" text-white flex items-center rounded-2xl ring-1 ring-white my-2 md:mx-2 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=" size-6 md:size-8 m-2 text-white"
            >
              <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
            </svg>
            <p className="text-base md:text-xl ">Karon , Phuket 83100</p>
          </div>
        </div>
      </article>
      <article className="mt-3 flex flex-col place-items-center col-span-3 md:col-span-1">
        <h2 className="text-center text-lg md:text-2xl font-bold text-white">
          Other sites
        </h2>
        <div className="h-full gap-5 flex place-items-center">
          <a
            href="https://github.com/PongsakornPattakor"
            target="_blank"
            className="p-2"
          >
            <button className="ring-2 ring-white rounded-md p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white size-8 md:size-12"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/pongsakorn-pattakor/"
            target="_blank"
            className="p-2"
          >
            <button className="ring-2 ring-white rounded-md p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white size-8 md:size-12"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </button>
          </a>
        </div>
      </article>
      <div className="mb-2 place-items-center col-span-3 ">
        <h2 className="text-white text-base md:text-lg text-center">
          &#169; 2024 Pongsakorn Pattakor. All Right Reserved.
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
