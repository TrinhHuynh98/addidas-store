import React, { useEffect, useState } from "react";
import { ListMenu } from "../../utils";
import logo from "../../assets/images/Adidas_Logo.png";
import { Button } from "../UI";

import { BiMenu } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";

import clsx from "clsx";
import Language from "../UI/Buttons/Language";
import { CartBar, CartBarDesktop } from "../UI/Carts";
import DropdownButton from "../UI/Buttons/DropdownButton";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [collage, setCollage] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [dropdrownMenu, setDropdownMenu] = useState(false);

  const handleCollage = () => {
    setCollage(!collage);
  };
  const handleOpenCart = () => {
    setOpenCart(!openCart);
  };
  const handleOpenDropdown = () => {
    setDropdownMenu(!dropdrownMenu);
  };

  const location = useLocation();

  return (
    <>
      <nav className="relative px-4 py-4 flex justify-between items-center">
        <img
          className="h-10 cursor-pointer leading-none"
          src={logo}
          alt="logo"
        />
        <div className="lg:hidden">
          <div className="flex flex-row">
            <div className="relative mr-10">
              <div className="t-0 absolute left-4 top-[-50%]">
                <p className="flex h-2 w-2 items-center justify-center rounded-full bg-green-500 text-white p-3">
                  3
                </p>
              </div>
              <div className="h-6 w-6 cursor-pointer">
                <AiOutlineShoppingCart
                  size={30}
                  onClick={() => {
                    handleOpenCart();
                  }}
                />
              </div>
            </div>
            <BiMenu
              className="text-3xl cursor-pointer md:hidden"
              onClick={handleCollage}
            />
          </div>
        </div>

        <ul
          className="
              hidden
              absolute
              top-1/2
              left-1/2
              transform
              -translate-y-1/2
              -translate-x-1/2
              lg:flex 
              lg:mx-auto
              lg:items-center
              lg:w-auto
              lg:space-x-6
              md:flex-row
              md:space-x-8
              md:mt-0
          "
        >
          {ListMenu.map((item, index) => {
            const active = location.pathname.includes(item.link);
            if (item.type === "dropdown") {
              return (
                <>
                  <Link key={index} to={item.link}>
                    <li
                      className={
                        active ? `hover:text-black active` : `hover:text-black`
                      }
                    >
                      <DropdownButton
                        name={item.name}
                        open={dropdrownMenu}
                        onClick={handleOpenDropdown}
                        data={item.subMenu}
                        layout="Website"
                      />
                    </li>
                  </Link>
                </>
              );
            } else {
              return (
                <li
                  key={index}
                  className={
                    active ? `hover:text-black active` : `hover:text-black`
                  }
                >
                  <a href={item.link}> {item.name}</a>
                </li>
              );
            }
          })}
        </ul>

        <div className="hidden lg:inline-block lg:ml-auto lg:mr-1">
          <Button>Sign In</Button>
        </div>

        <div className="hidden lg:inline-block lg:mr-2">
          <Language layout="Desktop" />
        </div>

        <div className=" hidden lg:inline-block relative lg:mr-3">
          <div className="t-0 absolute left-4 top-[-50%]">
            <p className="flex h-2 w-2 items-center justify-center rounded-full bg-green-500 text-white p-3">
              3
            </p>
          </div>
          <div className="h-6 w-6 cursor-pointer">
            <AiOutlineShoppingCart
              size={30}
              onClick={() => {
                handleOpenCart();
              }}
            />
          </div>
        </div>
      </nav>

      <div className={clsx(collage ? "" : "relative z-50 hidden ")}>
        <>
          <div className="fixed inset-0 bg-gray-800 opacity-25 lg:opacity-0"></div>
          <nav
            className="
            lg:hidden
            fixed
            top-0
            left-0
            bottom-0
            flex
            flex-col
            w-5/6
            max-w-sm
            py-6 px-6
            bg-white
            border-r
            overflow-y-auto
            "
          >
            <div className="flex justify-between items-center mb-8">
              <img
                className="h-10 cursor-pointer leading-none"
                src={logo}
                alt="logo"
              />
              <GrFormClose
                className="text-3xl cursor-pointer lg:hidden"
                onClick={handleCollage}
              />
            </div>
            <div>
              <ul className="flex flex-col gap-4 ">
                {ListMenu.map((item, index) => {
                  if (item.type === "dropdown") {
                    return (
                      <li>
                        <DropdownButton
                          name={item.name}
                          open={dropdrownMenu}
                          onClick={handleOpenDropdown}
                          data={item.subMenu}
                          layout="Mobile"
                        />
                      </li>
                    );
                  } else {
                    return (
                      <li
                        key={index}
                        className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                      >
                        <a href={item.link}> {item.name}</a>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>

            <div className="mt-auto">
              <div className="pt-6">
                <Button layout="Mobile">Sign In</Button>
              </div>
              <div className="pt-6">
                <Language layout="Mobile" />
              </div>
              <p className="my-4 text-xs text-center text-gray-400">
                <span>Copyright © 2023</span>
              </p>
            </div>
          </nav>
        </>
      </div>

      {openCart ? (
        <>
          <div className="lg:hidden">
            <CartBar open={openCart} onClose={handleOpenCart} />
          </div>

          <div className="hidden lg:flex lg:justify-end">
            <CartBarDesktop open={openCart} onClose={handleOpenCart} />
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
