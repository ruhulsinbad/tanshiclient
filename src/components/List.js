import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { CAKE, COFFE } from "../gql/query";
import { useMutation } from "@apollo/client";
import { CREATE_BILL } from "../gql/mutation";

const List = () => {
  const navigate = useNavigate();
  const [createBill, { error: billError }] = useMutation(CREATE_BILL, {
    onCompleted(data) {
      console.log(data);
      navigate("/all");
    },
  });

  const [formData, setFormData] = useState();

  const {
    loading: cakeLoading,
    error: cakeError,
    data: cakeData,
  } = useQuery(CAKE);
  const {
    loading: coffeLoading,
    error: coffeError,
    data: coffeData,
  } = useQuery(COFFE);

  if (cakeLoading || coffeLoading) return <h1> Loading...</h1>;

  // const handleChange = (e) => {
  //   setFormData(
  //     cakeData.cake.map((hi) => {
  //       return {
  //         name: hi.name,
  //         price: hi.price,
  //         [e.target.name]: e.currentTarget.value,
  //       };
  //     })
  //   );

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBill({
      variables: [
        {
          input: formData,
        },
      ],
    });
  };

  var allCoffe = coffeData.coffe;
  var allCake = cakeData.cake;

  var allProduct = allCoffe.concat(allCake);
  console.log(allProduct);

  return (
    <div>
      {billError && billError.message}
      {cakeError && cakeError.message}
      {coffeError && coffeError.message}

      <form onSubmit={handleSubmit}>
        <div className=" flex justify-between px-48 mt-16">
          <div className=" flex flex-col  flex-1 mr-16">
            {coffeData &&
              coffeData.coffe &&
              coffeData.coffe.map((coffe, i) => {
                return (
                  <div key={i} className=" flex flex-grow-1 justify-between ">
                    <label htmlFor={coffe.tag} className=" ">
                      {coffe.name} :
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      id={coffe.tag}
                      className=" border-2 self-end"
                      onChange={handleChange}
                    />
                  </div>
                );
              })}
          </div>

          <div className=" flex flex-col flex-1 ml-16 ">
            {cakeData &&
              cakeData.cake &&
              cakeData.cake.map((cake, i) => {
                return (
                  <div className=" flex justify-between" key={i}>
                    <label htmlFor={cake.tag} className=" ">
                      {cake.name} :
                    </label>
                    <input
                      name="quantity"
                      type="text"
                      id={cake.tag}
                      className=" border-2 self-end"
                      onChange={handleChange}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className=" mx-48 mt-10 border-b-8 border-violet-900 w-auto "></div>

        <div className=" mx-48 mt-8">
          <button
            type="submit"
            className="inline-flex w-max justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          >
            Recipt
          </button>
        </div>
      </form>
    </div>
  );
};

export default List;
