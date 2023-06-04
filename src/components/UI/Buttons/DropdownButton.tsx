import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export interface ISubItem {
  name: string;
  link: string;
  id: number;
}

interface IDropdownButton {
  open?: boolean;
  onClick?: () => void;
  data?: ISubItem[];
  layout?: string;
  name?: string;
}

export const DropdownButton: React.FC<IDropdownButton> = ({
  open,
  onClick,
  data,
  layout,
  name,
}) => {
  const ref = useRef<any>();
  const [onClose, setOnClose] = useState(false);

  useEffect(() => {
    const checkClickedOutside = (e: any) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOnClose(true);
      }
    };
    document.addEventListener("mousedown", checkClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkClickedOutside);
    };
  }, [open]);

  return (
    <>
      {layout === "Mobile" ? (
        <>
          <button
            onClick={onClick}
            className={clsx(
              `
              text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 p-4 w-full flex justify-start
            `
            )}
          >
            {name}
            <div className="ml-2 mt-1">
              {open ? <BsChevronUp /> : <BsChevronDown />}
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
              <ul
                ref={ref}
                className="py-1"
                aria-labelledby="dropdownLargeButton"
              >
                {data?.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          </div>
        </>
      ) : (
        <>
          <div className="relative">
            <button
              onClick={onClick}
              className={`
                text-gray-700
                hover:bg-gray-50
                border-b
                border-gray-100
                md:hover:bg-transparent
                md:border-0
                pl-3
                pr-4
                py-2
                md:hover:text-blue-700
                md:p-0
                font-medium
                flex
                items-center
                justify-between
                w-full
                md:w-auto
                `}
            >
              {name}
              <span className="ml-2">
                {open ? <BsChevronUp /> : <BsChevronDown />}
              </span>
            </button>

            <div
              className={
                open
                  ? "absolute bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44"
                  : "hidden"
              }
            >
              <>
                <ul
                  ref={ref}
                  className="py-1"
                  aria-labelledby="dropdownLargeButton"
                >
                  {data?.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.link}
                        className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DropdownButton;
