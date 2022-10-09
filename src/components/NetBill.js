import React from "react";

const products = [
  { name: "White Cake/ Vanilla", price: 7.8 },
  { name: "CHocolate Cake", price: 8.3 },
  { name: "Cream Cake", price: 7.3 },
  { name: "Espresso", price: 3.3 },
  { name: "Americano", price: 3.3 },
  { name: "Cappuccino ", price: 3.3 },
];

const NetBill = () => {
  return (
    <div>
      <form>
        <div className=" flex justify-between px-48 mt-16">
          <div className=" px-48 flex flex-col  flex-1 mr-16">
            <div className=" flex flex-grow-1 justify-between  ">
              <label htmlFor="first" className=" ">
                {products[0].name} :
              </label>
              <p> Price: {products[0].price} </p>
              <input
                type="text"
                name="quantity"
                id="first"
                className=" border-2 self-end"
              />
            </div>

            <div className=" flex flex-grow-1 justify-between  ">
              <label htmlFor="first" className=" ">
                {products[1].name}
              </label>
              <p> Price : {products[1].price}</p>
              <input
                type="text"
                name="quantity"
                id="first"
                className=" border-2 self-end"
              />
            </div>

            <div className=" flex flex-grow-1 justify-between ">
              <label htmlFor="first" className=" ">
                {products[2].name}
              </label>
              <p> Price : {products[2].price}</p>
              <input
                type="text"
                name="quantity"
                id="first"
                className=" border-2 self-end"
              />
            </div>

            <div className=" flex flex-grow-1 justify-between ">
              <label htmlFor="first" className=" ">
                {products[3].name}
              </label>
              <p> Price : {products[3].price}</p>
              <input
                type="text"
                name="quantity"
                id="first"
                className=" border-2 self-end"
              />
            </div>

            <div className=" flex flex-grow-1 justify-between ">
              <label htmlFor="first" className=" ">
                {products[4].name}
              </label>
              <p> Price : {products[4].price}</p>
              <input
                type="text"
                name="quantity"
                id="first"
                className=" border-2 self-end"
              />
            </div>

            <div className=" flex flex-grow-1 justify-between  ">
              <label htmlFor="first" className=" ">
                {products[5].name}
              </label>
              <p> Price : {products[5].price}</p>
              <input
                type="text"
                name="quantity"
                id="first"
                className=" border-2 self-end"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NetBill;
