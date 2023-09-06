import React, { useState } from "react";

const Nav = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Pricing", link: "/" },
    { name: "Features", link: "/" },
    { name: "Templates", link: "/" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <header className="p-7 md:flex items-center justify-between md:justify-around">
        <div className="text-left">
          <button className="border-black border-2 text-lg px-3 py-1 font-semibold cursor-pointer items-center">
            Logo
          </button>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="w-6 h-6 text-3xl items-center cursor-pointer md:hidden absolute right-8 top-6"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <nav
          className={`
           md:flex md:justify-around md:w-2/3 md:bg-white bg-white bg-opacity-100 md:bg-opacity-0 md:items-center md:pb-0 pb-20 absolute  md:static left-0 w-full md-pl-0 pl-9 transition-all  duration-200 ease-in-out md:z-auto z-[-1] 
           ${
             open
               ? "top-20 opacity-100"
               : "top-[-490px] md:opacity-100 opacity-0"
           }
        `}
        >
          <ul
            className={`flex my-7 md:my-0 md:flex-row flex-col md:gap-6 font-semibold text-lg text-left`}
          >
            {Links.map((link) => (
              <li key={link.name}>
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>

          <div className="text-left">
            <button className=" sign-in px-8 py-2.5 rounded-md ">
              Sign In
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
