import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-black">
      <div className="px-5 max-w-[1280px] mx-auto text-white">
        <div className="flex items-start py-4 relative  gap-[20px] w-full flex-wrap md:flex-nowrap flex-col sm:flex-row">
          <div className="flex flex-col logo-section gap-5 w-[40%] h-[5rem]">
            <a href="">LOGO</a>
            <div className="icons flex gap-4">
              <FaFacebookF size="1.5rem" />
              <FaTwitter size="1.5rem" />
              <FaLinkedin size="1.5rem" />
              <FaYoutube size="1.8rem" />
            </div>
          </div>
          <div className="services w-[100%] ">
            <h2 className="font-bold">Services</h2>
            <ul>
              <li className="py-2">
                <a href="">Bulk SMS Service</a>
              </li>
              <li className="py-2">
                <a href="">Alert SMS Service</a>
              </li>
              <li className="py-2">
                <a href="">Dynamic SMS Service</a>
              </li>
              <li className="py-2">
                <a href="">Voice Call and IVR Service</a>
              </li>

              <li className="py-2">
                <a href="">SMS Shortcode</a>
              </li>
              <li className="py-2">
                <a href="">SMS API</a>
              </li>
              <li className="py-2">
                <a href="">Web Development and Hosting</a>
              </li>
              <li className="py-2">
                <a href="">Mobile Application Development</a>
              </li>
              <li className="py-2">
                <a href="">Digital Marketing</a>
              </li>
            </ul>
          </div>

          <div className="industries w-[100%] ">
            <h2 className="font-bold">Industries</h2>
            <ul>
              <li className="py-2">
                <a href="">Banking</a>
              </li>
              <li className="py-2">
                <a href="">Insurance</a>
              </li>
              <li className="py-2">
                <a href="">Financial Services</a>
              </li>
              <li className="py-2">
                <a href="">Healthcare</a>
              </li>
              <li className="py-2">
                <a href="">Ed Tech</a>
              </li>
            </ul>
          </div>
          <div className="company w-[100%] ">
            <h2 className="font-bold">Company</h2>
            <ul>
              <li className="py-2">
                <a href="">About us</a>
              </li>
              <li className="py-2">
                <a href="">Team</a>
              </li>
              <li className="py-2">
                <a href="">News Room</a>
              </li>
              <li className="py-2">
                <a href="">Events & Talk</a>
              </li>
              <li className="py-2">
                <a href="">Career</a>
              </li>
            </ul>
          </div>

          <div className="connect w-[100%]">
            <h2 className="font-bold">Let&apos;s Connect</h2>
            <ul>
              <li className="py-2">Budhhanagar-10,Kathmandu,Nepal</li>
              <li className="py-2">Contact: +977-1-5242098</li>
              <li className="py-2">Email:info@easyservice.com.np</li>
              <li className="py-2">Web: www.easydigital.com.np</li>
            </ul>
          </div>
        </div>
        <div className="copyright flex justify-between border-t border-b border-white py-4 mt-2 mb-2">
          <div>
            &#169;Copyright 2024 Easy Digital Service All rights reserved.
          </div>
          <div className="flex flex-wrap">
            <div className="border-r border-gray-dark px-3">Contact Us</div>
            <div className="border-r border-gray-dark px-3">Term of Use</div>
            <div className="px-3">Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
