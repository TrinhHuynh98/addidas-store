import React from "react";
import { ICartItem } from "../../../Types";
import { BsFillTrashFill } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

interface ICartItems {
  data: ICartItem;
}

export const CartItems: React.FC<ICartItems> = ({ data }) => {
  return (
    <div className="flex items-center justify-between">
      <img
        className="lg:h-30 lg:w-30 h-20 w-20 rounded-xl shadow-lg"
        src={data.image}
        alt="cart item"
      />
      <div className="flex items-end justify-center">
        <p className="lg:text-medium text-sm items-center text-center ml-3">
          {data.name}
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex items-center mr-2">
          <AiOutlinePlus
            size={20}
            className="mr-1 ml-2 p-1 hover:bg-blue-500 bg-sky-300 text-white rounded-full cursor-pointer"
          />

          <span className="mr-1 ml-2">{data.quanlity}</span>

          <AiOutlineMinus
            size={20}
            className="mr-1 ml-2 p-1 hover:bg-blue-500 bg-sky-300 text-white rounded-full cursor-pointer"
          />
        </div>
        <BsFillTrashFill
          size={30}
          className="hover:bg-red-300 p-2 hover:text-white text-red-500 bg-red-200 rounded-full"
        />
      </div>
    </div>
  );
};
