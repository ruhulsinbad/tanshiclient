import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_COFFE } from "../gql/mutation";
import { COFFE } from "../gql/query";

const CoffeInput = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const [CreateCoffe, { loading, error }] = useMutation(CREATE_COFFE, {
    onCompleted(data) {
      navigate("/all");
    },
    refetchQueries: [{ query: COFFE }],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    CreateCoffe({
      variables: {
        coffe: formData,
      },
    });
  };

  if (loading) return <h1> Loading</h1>;

  return (
    <>
      <div className=" mx-96 mt-16">
        {error && error.name + error.message}
        <h1 className=" text-3xl font-bold ">Create a Coffe</h1>

        <form className="w-max mt-16" onSubmit={handleSubmit}>
          <div className="flex justify-between ">
            <label htmlFor="name"> Name of coffe : </label>
            <input
              type="text"
              id="name"
              name="name"
              className=" ml-10 border-2 border-neutral-900"
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-between mt-4">
            <label htmlFor="price"> Price : </label>
            <input
              type="text"
              id="price"
              name="price"
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

export default CoffeInput;
