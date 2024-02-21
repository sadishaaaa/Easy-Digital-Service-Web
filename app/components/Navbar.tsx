"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";
import MenuList from "./MenuList";
type Props = {};

const Navbar = (props: Props) => {
  const serviceList = [
    "Bulk SMS Service",
    "Alert SMS Service",
    "Dynamic SMS Service",
    "Voice Call and IVR Service",
    "SMS Shortcode",
    "SMS API",
    "Web Developement and Hosting",
  ];
  const industriesList = [
    "Banking",
    "Insurance",
    "Financial Services",
    "Healthcare",
    "Ed Tech",
  ];
  const companyList = [
    "About Us",
    "Team",
    "Awards",
    "News Room",
    "Events",
    "Archives",
    "Governance",
    "Events",
  ];
  const [isServiceHovered, setIsServiceHovered] = useState(false);
  const [isIndustryHovered, setIsIndustryHovered] = useState(false);
  const [isCompanyHovered, setIsCompanyHovered] = useState(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="bg-white shadow-md">
      <div className="flex  px-5 max-w-[1280px] mx-auto items-center justify-between py-4 relative">
        <div className="flex items-center md:space-x-10 lg:space-x-20">
          <div className="font-semibold text-2xl">
            <a href="">LOGO</a>
          </div>
          <nav className="max-lg:hidden">
            <ul className="flex items-center lg:space-x-10 space-x-7 opacity-70 text-[1rem]">
              <li
                className="cursor-pointer relative hover:underline "
                onMouseEnter={() => setIsServiceHovered(true)}
                onMouseLeave={() => setIsServiceHovered(false)}
              >
                <a href="services" className="flex items-center py-3 w-full">
                  Services
                  <RiArrowDropDownLine size="1.5rem" />
                </a>
                {isServiceHovered && <MenuList menus={serviceList} />}
              </li>
              <li
                className="cursor-pointer relative hover:underline"
                onMouseEnter={() => setIsIndustryHovered(true)}
                onMouseLeave={() => setIsIndustryHovered(false)}
              >
                <a href="industries" className="flex items-center  py-3 w-full">
                  Industries
                  <RiArrowDropDownLine size="1.5rem" />
                </a>
                {isIndustryHovered && <MenuList menus={industriesList} />}
              </li>
              <li
                className="cursor-pointer relative hover:underline"
                onMouseEnter={() => setIsCompanyHovered(true)}
                onMouseLeave={() => setIsCompanyHovered(false)}
              >
                <a href="company" className="flex items-center  py-3 w-full">
                  Company
                  <RiArrowDropDownLine size="1.5rem" />
                </a>
                {isCompanyHovered && <MenuList menus={companyList} />}
              </li>
              <li className="hover:underline">
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
            <GiHamburgerMenu size="2rem" onClick={toggleModal} />
          </div>
        </div>
        {/* Modal */}
        {showModal && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="flex flex-col justify-start  h-[70vh] z-50 ">
              <AiOutlineClose
                size="1.5rem"
                className="cursor-pointer"
                color="white"
                onClick={toggleModal}
              />
            </div>
            <div className="bg-white w-[20rem] p-8 rounded-lg ">
              <ul className="space-y-4 text-left">
                <li>
                  <a href="services" onClick={toggleModal}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="industries" onClick={toggleModal}>
                    Industries
                  </a>
                </li>
                <li>
                  <a href="company" onClick={toggleModal}>
                    Company
                  </a>
                </li>
                <li>
                  <a href="company" onClick={toggleModal}>
                    Career
                  </a>
                </li>
                <li>
                  <a href="company" onClick={toggleModal}>
                    Sucess Stories
                  </a>
                </li>
                <li>
                  <a href="contactus" onClick={toggleModal}>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
