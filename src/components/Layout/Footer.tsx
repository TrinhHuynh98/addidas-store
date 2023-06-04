import React from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGoogleCircle,
  AiFillGithub,
} from "react-icons/ai";

import { Social, UsefulLink } from "../../utils";

export const Footer = () => {
  return (
    <div className="mx-auto px-4">
      <div className="flex flex-wrap text-left lg:text-left">
        <div className="w-full lg:w-6/12 px-4">
          <h4 className="text-3xl font-semibold text-gray-500 hover:text-gray-600">
            Let's contact with us
          </h4>
          <h5 className="text-lg mt-0 mb-2 text-gray-500">
            Find us on any these platforms
          </h5>
          <div className="mt-6 lg:mb-0 mb-6">
            {Social.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  className="bg-white rounded-full h-10 w-10 items-center shadown-lg justify-center align-center outline-none focus:outline-none mr-2"
                >
                  <Icon size={30} />
                </button>
              );
            })}
          </div>
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <div className="flex flex-wrap items-top mb-6">
            <div className="w-full lg:w-4/12 px-4 ml-auto">
              <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">
                Usefull Links
              </span>

              <ul className="list-unstyled">
                {UsefulLink.map((item, index) => (
                  <li key={index}>
                    <a
                      className="text-gray-500 text-sm hober:text-gray-600"
                      href={item.link}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-500" />
      <div className="flex justify-center my-10">
        <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
            className="w-7 md:w-8"
          />
          <div className="text-left ml-3">
            <p className="text-xs text-gray-200">Download on </p>
            <p className="text-sm md:text-base"> Google Play Store </p>
          </div>
        </div>
        <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
            className="w-7 md:w-8"
          />
          <div className="text-left ml-3">
            <p className="text-xs text-gray-200">Download on </p>
            <p className="text-sm md:text-base"> Apple Store </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-blueGray-500 font-semibold py-1">
            Copyright © <span id="get-current-year">2033</span>
          </div>
        </div>
      </div>
    </div>
  );
};
