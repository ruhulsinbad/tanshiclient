import React from "react";
import { useQuery } from "@apollo/client";
import { COFFE } from "../gql/query";

const AllCoffes = () => {
  const { loading, data, error } = useQuery(COFFE);
  if (loading) return <h1> Loading </h1>;
  return (
    <div className=" flex flex-wrap">
      {error && error.message}

      {data &&
        data.coffe &&
        data.coffe.map((piece, id) => {
          return (
            <div
              key={id}
              className=" mx-2 my-2 px-8 py-4 w-max h-max bg-white shadow-md rounded-md"
            >
              <p> Name: {piece.name} </p>
              <p> Price: {piece.price} </p>
            </div>
          );
        })}
    </div>
  );
};

export default AllCoffes;
