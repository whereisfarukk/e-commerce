import React, { useContext, useEffect, useState } from "react";
//sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { useProducts } from "../contexts/ProductContext";

// import searchbar
import SearchBox from "./SearchBox";
//import icons
import { BsBag } from "react-icons/bs";
import { Link } from "react-router";

// import logo image
import Logo from "../img/logo.svg";
const Header = () => {
  // header  state
  const [isActive, setIsActive] = useState(true);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const { updateSearchTerm } = useProducts();
  // event listner
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  // Handler to pass search term to context
  const handleSearch = (term) => {
    updateSearchTerm(term);
  };

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src={Logo} alt="yfvy" />
          </div>
        </Link>
        <SearchBox onSearch={handleSearch} />
        {/* {card} */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
