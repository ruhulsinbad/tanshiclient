import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_CAKE } from "../gql/mutation";
import { CAKE } from "../gql/query";

const CakeInput = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});

  const [CreateCake, { loading, error }] = useMutation(CREATE_CAKE, {
    onCompleted() {
      navigate("/all");
    },
    refetchQueries: [{ query: CAKE }],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    CreateCake({
      variables: {
        cake: formData,
      },
    });
  };

  if (loading) return <h1> Loading ... </h1>;

  return (
    <>
      <div className=" mx-96 mt-16">
        {error && error.message}
        <h1 className=" text-3xl font-bold ">Create a cake</h1>
        <form className="w-max mt-16 " onSubmit={handleClick}>
          <div className="flex justify-between ">
            <label htmlFor="name"> Name of cake : </label>
            <input
              name="name"
              type="text"
              id="name"
              className=" ml-10 border-2 border-neutral-900"
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-between mt-4">
            <label htmlFor="price"> Price : </label>
            <input
              name="price"
              type="number"
              step="0.01"
              id="price"
              className=" ml-10 border-2 border-neutral-900"
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-between mt-4 mb-8">
            <label htmlFor="tag"> Tag : </label>
            <input
              type="text"
              id="tag"
              name="tag"
              className=" ml-10 border-2 border-neutral-900"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-max justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          >
            Create
          </button>
        </form>
      </div>
    </>
  );
};

export default CakeInput;
