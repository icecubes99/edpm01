import React from "react";
import AddContact from "@/components/shared/AddContact";

const Home = () => {
  return (
    <div className="flex w-screen py-20 flex-col justify-center items-center ">
      <span className=" text-3xl  font-extrabold uppercase">CRUD FOR EDP</span>
      <h1 className="text-3xl font-extrabold uppercase mb-5">
        Next.js 14
        <span className="text-orange-700 ml-2 ">Server Actions </span>
      </h1>

      <div className="flex flex-col justify-center items-center w-[1000px] ">
        <AddContact />
      </div>
    </div>
  );
};

export default Home;
