import React from "react";
import { useAppSelector } from "../../../redux/hooks";
import { AiFillStar, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const ProductDetail = () => {
  const locationData = useAppSelector(
    ({ product: { currentProduct } }) => currentProduct
  );
  console.log("currentProductData", locationData);
  return (
    <div className="px-5 grid grid-cols-2 sm:grid-col-1 items-center justify-center">
      <div className="flex justify-center items-center mt-10  ">
        <img
          src={locationData?.image}
          alt="product image"
          className="h-[70%] w-[100%] py-2 rounded-lg lg:h-[50%] lg:w-[50%]"
        />
      </div>
      <div className="ml-5">
        <div className="flex justify-start ">
          <h5 className="text-xl lg:text-3xl">{locationData?.title}</h5>
        </div>
        <div className="mt-3 flex items-center ">
          <AiFillStar />
          <h5 className="text-sm ml-3">{locationData?.rating?.toString()}.0</h5>
        </div>
        <div>
          <h5 className="mt-3 text-2xl text-sky-600">${locationData?.price}</h5>
        </div>
        <p className="mt-3 text-sm text-gray-300">
          {locationData?.description}
        </p>
        <div className="flex mt-3 ">
          <div className="p-3 h-[44px] w-[44px] shadow-2xl bg-white border-2 border-gray-200 rounded-sm flex items-center justify-center">
            <AiOutlineMinus />
          </div>

          <div className="  h-[44px] w-[44px]  p-3 ml-2 shadow-2xl bg-white border-2 rounded-sm border-gray-200 flex items-center justify-center">
            1
          </div>
          <div className="p-3 h-[44px] w-[44px] ml-2 shadow-2xl bg-white border-2 rounded-sm border-gray-200 flex items-center justify-center">
            <AiOutlinePlus />
          </div>
        </div>
        <div className="mt-3">
          <button className="px-4 py-2 text-white bg-sky-600 shadow-md ">
            BUY NOW
          </button>
          <button className="ml-3 px-4 py-2 text-white bg-black shadow-md">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};
