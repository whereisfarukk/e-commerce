import React, { useState } from "react";

export default function SearchBox({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Notify parent if onSearch is provided
    if (onSearch) onSearch(term);
  };

  return (
    <div className="mb-0 xl:w-96">
      <div className="relative flex w-full flex-wrap items-stretch">
        {/* Search Icon */}
        <span
          className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
          id="basic-addon2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5 text-gray-400"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </span>

        {/* Input Field */}
        <input
          type="search"
          className="block w-full rounded border border-solid border-[#e1e1e1] bg-transparent py-[0.37rem] px-10 text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:border-primary focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] dark:border-[#e1e1e1] dark:text-black"
          placeholder="Search products"
          aria-label="Search"
          aria-describedby="button-addon2"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
