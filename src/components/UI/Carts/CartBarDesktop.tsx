import React from "react";
import { ListCart } from "../../../utils";
import { CartItems } from "./CartItem";

import { GrFormClose } from "react-icons/gr";
import { Button } from "../Buttons/Button";

interface ICartDesktop {
  open?: boolean;
  onClose?: () => void;
}

export const CartBarDesktop: React.FC<ICartDesktop> = ({ open, onClose }) => {
  return (
    <div>
      {/* {open ? <p>CartBarDesktop on </p> : <p>CartBarDesktop off </p>} */}
      <div
        className={`
          absolute
          right-5
          w-100
          h-full
          flex-col 
          overflow-y-scroll 
          bg-white shadow-xl
          p-3
          rounded-lg
          mt-[-10px]
          border-2 
          border-gray-200 
          `}
      >
        <>
          <div className="flex justify-between items-center mb-8">
            <p className="text-2xl font-bold">Cart</p>
            <GrFormClose
              className="text-3xl cursor-pointer"
              onClick={onClose}
            />
          </div>
          <ul className="flex flex-col gap-4 ">
            {ListCart.map((item, index) => (
              <CartItems data={item} />
            ))}
          </ul>

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
        </>
      </div>
    </div>
  );
};
