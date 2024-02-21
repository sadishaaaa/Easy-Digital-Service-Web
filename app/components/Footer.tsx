import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-gray-400">
      <div className="px-5 max-w-[1280px] mx-auto text-white">
        <div className="flex items-start py-4 relative">
          <div className="flex">
            <div className="logo-section">
              <a href="">LOGO</a>
              <div className="icons flex gap-2">
                <FaFacebookF size="1.2rem" />
                <FaTwitter size="1.2rem" />
                <FaLinkedin size="1.2rem" />
                <FaYoutube size="1.2rem" />
              </div>
            </div>
            <div className="services">
              <h2 className="font-bold">Services</h2>
              <ul>
                <li>
                  <a href="">Bulk SMS Service</a>
                </li>
                <li>
                  <a href="">Alert SMS Service</a>
                </li>
                <li>
                  <a href="">Dynamic SMS Service</a>
                </li>
                <li>
                  <a href="">Voice Call and IVR Service</a>
                </li>

                <li>
                  <a href="">SMS Shortcode</a>
                </li>
                <li>
                  <a href="">SMS API</a>
                </li>
                <li>
                  <a href="">Web Development and Hosting</a>
                </li>
                <li>
                  <a href="">Mobile Application Development</a>
                </li>
                <li>
                  <a href="">Digital Marketing</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex">
            <div className="industries">
              <h2 className="font-bold">Industries</h2>
              <ul>
                <li>
                  <a href="">Banking</a>
                </li>
                <li>
                  <a href="">Insurance</a>
                </li>
                <li>
                  <a href="">Financial Services</a>
                </li>
                <li>
                  <a href="">Healthcare</a>
                </li>
                <li>
                  <a href="">Ed Tech</a>
                </li>
              </ul>
            </div>
            <div className="company">
              <h2 className="font-bold">Company</h2>
              <ul>
                <li>
                  <a href="">About us</a>
                </li>
                <li>
                  <a href="">Team</a>
                </li>
                <li>
                  <a href="">News Room</a>
                </li>
                <li>
                  <a href="">Events & Talk</a>
                </li>
                <li>
                  <a href="">Career</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="connect">
            <h2 className="font-bold">Let&apos;s Connect</h2>
            <span>Budhhanagar-10,Kathmandu,Nepal</span> <br />
            <span>Contact: +977-1-5242098</span>
            <br />
            <span>Email: info@easyservice.com.np</span>
            <br />
            <span>Web: www.easydigital.com.np</span>
          </div>
        </div>
        <div className="copyright flex justify-between border-t border-b border-white py-4 mt-2 mb-2">
          <div>
            &#169;Copyright 2024 Easy Digital Service All rights reserved.
          </div>
          <div className="flex flex-wrap">
            <div className="border-r border-black px-3">Contact Us</div>
            <div className="border-r border-black px-3">Term of Use</div>
            <div className="px-3">Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
