import React from "react";
import { genericProductType } from "../../../utils/Types";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineShareAlt,
  AiFillStar,
} from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setCurrentProduct } from "../../../redux/slices/ProductsSlice";
import { useNavigate } from "react-router-dom";

interface IProductItem {
  data: genericProductType;
}

export const ProductItem: React.FC<IProductItem> = ({ data }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentProduct = useAppSelector(
    ({ product: { currentProduct } }) => currentProduct
  );
  const handleProductDetail = () => {
    dispatch(setCurrentProduct(data));
  };
  return (
    <div className="mb-5">
      <div
        style={{
          backgroundImage: `url(${data.image})`,
          height: 457,
          width: "100%",
          backgroundSize: "cover",
          borderRadius: 32,
        }}
        className="relative hover:scale-105"
        onClick={() => {
          handleProductDetail();
          navigate(`/product/${data._id}`);
        }}
      >
        <div className="absolute top-5 left-5 flex flex-col bg-black/20 rounded-xl p-4">
          <AiOutlineShareAlt
            style={{ color: "white" }}
            size={30}
            className="hover:-rotate-12 cursor-pointer"
          />
          <AiOutlineHeart
            style={{ color: "white" }}
            className="mt-3 hover:-rotate-12 cursor-pointer"
            size={30}
          />
          <AiOutlineShoppingCart
            style={{ color: "white" }}
            className="mt-3 hover:-rotate-12 cursor-pointer"
            size={30}
          />
        </div>
      </div>

      <div className="mt-3 flex flex-cols justify-center items-center">
        {Array(Number(data.rating))
          .fill({})
          .map(function (v, i) {
            return <AiFillStar className="ml-1" />;
          })}
      </div>

      <div className="flex flex-cols justify-center items-center">
        <div className=" mt-3 ">
          <h5 className="text-gray-900 text-medium lg:text-2xl md:text-xl font-bold ">
            {data.title}
          </h5>
          <div className="mt-3">
            <span className="text-decoration-line: line-through text-sky-400 mr-3">
              ${data.oldPrice}
            </span>
            ${data.price}
          </div>
        </div>
      </div>
    </div>
  );
};
