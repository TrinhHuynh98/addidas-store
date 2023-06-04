import React, { useState } from "react";
import { FlagItems } from "../../../utils";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
// import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import clsx from "clsx";

type Layout = "Desktop" | "Mobile";

interface IButton {
  layout?: Layout;
}

const Language: React.FC<IButton> = ({ layout }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {layout === "Mobile" ? (
        <>
          <button
            onClick={() => setOpen(!open)}
            className={clsx(
              `
              text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 p-4 w-full flex justify-start
            `
            )}
          >
            <span className="flex items-center">
              <img
                alt="laguage"
                src={FlagItems[1].label}
                className="flex-shrink-0 h-6 w-6 rounded-md"
              />
            </span>

            <div className="ml-2 mt-1">
              {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
          </button>
          <div
            className={
              open
                ? "bg-white text-base z-10 list-none divide-y divide-gray-100  my-4 w-full"
                : "hidden"
            }
          >
            <>
              <ul className="select-items" role="listbox">
                {FlagItems.map((item) => (
                  <li
                    key={item.label}
                    className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
                    id="listbox-option-0"
                  >
                    <div className="flex items-center">
                      <img
                        src={item.label}
                        alt=""
                        className="flex-shrink-0 h-6 w-6 rounded-full"
                      />

                      <span className="text-sm ml-3 block truncate">
                        {" "}
                        {item.value}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          </div>
        </>
      ) : (
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            type="button"
            className={clsx(
              `
            relative w-[100px] bg-none border-none rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
        `
            )}
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
          >
            <span className="flex items-center">
              <img
                alt="laguage"
                src={FlagItems[1].label}
                className="flex-shrink-0 h-6 w-6 rounded-md"
              />
              {/* {layout === "Mobile" ? (
              <span className="ml-3 block truncate">
                {" "}
                {FlagItems[1].value}{" "}
              </span>
            ) : (
              <></>
            )} */}
            </span>
            <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </button>

          <div
            className={
              open
                ? "absolute bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44"
                : "hidden"
            }
          >
            <ul className="select-items" role="listbox">
              {FlagItems.map((item) => (
                <li
                  key={item.label}
                  className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
                  id="listbox-option-0"
                >
                  <div className="flex items-center">
                    <img
                      src={item.label}
                      alt=""
                      className="flex-shrink-0 h-6 w-6 rounded-full"
                    />

                    <span className="text-sm ml-3 block truncate">
                      {" "}
                      {item.value}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Language;
