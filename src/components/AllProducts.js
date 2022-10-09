import React from "react";
import AllCakes from "./AllCakes";
import AllCoffes from "./AllCoffes";

const AllProducts = () => {
  return (
    <>
      <div className=" mx-48 mt-16 mb-96">
        <h1 className=" text-3xl font-bold mb-8">Cake List</h1>
        <AllCakes />

        <div className=" border-b-8 my-16 border-violet-900 w-auto"> </div>

        <h1 className=" text-3xl font-bold mb-8">Coffe List</h1>
        <AllCoffes />
      </div>
    </>
  );
};

export default AllProducts;
