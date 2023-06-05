import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getInitialProducts } from "../../../redux/reducers/getInitialProducts";
import { ProductItem } from "./ProductItem";

export const ListProduct = () => {
  const dispatch = useAppDispatch();
  const { allProducts } = useAppSelector(({ product }) => product);
  useEffect(() => {
    dispatch(getInitialProducts());
  }, [dispatch]);

  console.log("allProducts", allProducts);

  return (
    <div className="">
      <div className=" flex justify-center items-center align-center bg-[#EDF1F3] h-[300px] w-full">
        <div className="">
          <h1 className="text-5xl text-gray-900">Products</h1>
          <h5 className="mt-5 flex justify-center items-center text-medium text-gray-500">
            Pages&nbsp; / &nbsp; <span className="text-sky-500">Product</span>
          </h5>
        </div>
      </div>
      <div>
        <div className="p-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 lg:gap-5 mt-5">
          {allProducts?.map((item, index) => (
            <ProductItem data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
