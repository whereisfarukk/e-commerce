import React, { createContext, useContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products ");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const updateSearchTerm = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  // Filter products based on search term
  const filteredProducts = searchTerm
    ? products.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm) ||
          product.category.toLowerCase().includes(searchTerm)
      )
    : products;

  return (
    <ProductContext.Provider
      value={{
        products: filteredProducts, //  Show filtered results
        allProducts: products, //  Full list for reference
        updateSearchTerm, //  Update search term
        loading: false,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

export const useProducts = () => useContext(ProductContext);
