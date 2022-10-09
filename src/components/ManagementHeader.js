import React from "react";

const ManagementHeader = () => {
  return (
    <div className=" bg-yellow-900 flex flex-col items-center py-4 mt-10">
      <h1 className=" text-3xl font-bold text-white"> Cafe Management </h1>
      <p className=" text-white">
        Powered by <span className=" text-2xl font-bold"> TANSHI </span>
      </p>
    </div>
  );
};

export default ManagementHeader;
