import React, { useEffect } from "react";
import { getProducts } from "../apiService/productApi";

const Category = () => {
  useEffect(() => {
    const fetchProduct = async () => {
      const result = await getProducts();
    };
    fetchProduct();
  }, []);
  return <div>category</div>;
};

export default Category;
