import React, { useContext } from "react";

// Import custom hook and context
import { useProducts } from "../contexts/ProductContext";

// Import components
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  // Get filtered products via custom hook
  const { products } = useProducts();

  // Optional: filter by category (e.g., clothing)
  const filteredProducts = products.filter(
    (item) =>
      item.category === "men's clothing" || item.category === "women's clothing"
  );

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Product product={product} key={product.id} />
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
