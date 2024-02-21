"use client";
import React, { useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  const [showProfile, setshowProfile] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);
  return (
    <div>
      <div className="flex items-center justify-between py-4 relative">
        <div className="flex items-center md:space-x-10 lg:space-x-20">
          <div className="font-semibold text-2xl">
            <a href="">LOGO</a>
          </div>
          <nav className="max-lg:hidden">
            <ul className="flex items-center lg:space-x-10 space-x-7 opacity-70 text-[1rem]">
              <li>
                <a href="services" className="py-3 inline-block w-full">
                  Services
                </a>
              </li>
              <li>
                <a href="industries" className="py-3 inline-block w-full">
                  Industries
                </a>
              </li>
              <li>
                <a href="company" className="py-3 inline-block w-full">
                  Company
                </a>
              </li>
              <li>
                <a href="contactus" className="py-3 inline-block w-full">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="border-2 p-4 border-grey-900 rounded-xl">
            SMS Login
          </button>
          <button className="border-2 p-4 border-grey-900 rounded-xl">
            Book a Call
          </button>
          <div className="lg:hidden">
            <span className="material-symbols-outlined">menu</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
