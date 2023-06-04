import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";
import clsx from "clsx";
import { ListCart } from "../../../utils";
import { Button } from "../Buttons/Button";
import { CartItems } from "./CartItem";

interface ICartBar {
  open?: boolean;
  onClose?: () => void;
}

export const CartBar: React.FC<ICartBar> = ({ open, onClose }) => {
  console.log("open cart", open);

  return (
    <>
      <div className={clsx(open ? "" : "relative z-50")}>
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
            <p className="text-2xl font-bold">Cart</p>
            <GrFormClose
              className="text-3xl cursor-pointer lg:hidden"
              onClick={onClose}
            />
          </div>
          <div>
            <ul className="flex flex-col gap-4 ">
              {ListCart.map((item, index) => (
                <CartItems data={item} />
              ))}
            </ul>
          </div>

          <div className="mt-10 border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>$262.00</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>

            <div className="mt-6">
              <Button layout="Mobile">Checkout</Button>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or
                <button
                  type="button"
                  className="font-medium text-sky-400 hover:text-sky-600 ml-2"
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </p>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
