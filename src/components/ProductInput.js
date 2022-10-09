import React from "react";
import { Link } from "react-router-dom";

const ProductInput = (props) => {
  return (
    <>
      <div className="mx-48 flex justify-end mt-4">
        <Link to="/all">
          <button className="inline-flex w-max justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
            All Products
          </button>
        </Link>
        <Link to="/calculate">
          <button className="inline-flex w-max justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
            Calculate Bill
          </button>
        </Link>

        <Link to="/coffe">
          <button className="inline-flex w-max justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
            Coffe Input
          </button>
        </Link>
        <Link to="/cake">
          <button className="inline-flex w-max justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
            Cake Input
          </button>
        </Link>
      </div>
    </>
  );
};

export default ProductInput;
