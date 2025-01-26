import React, { ReactElement } from "react";

export const Banner: React.FC = (): ReactElement => {
  return (
    <div className="max-w-7xl bg-[#D0DDD0] p-4 mx-auto mt-16 rounded-2xl">
      <div className="container mx-auto flex justify-center items-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#727D73]">
          Welcome to Our Website!
        </h1>
      </div>
      <div className="container mx-auto text-center mt-4 sm:mt-2">
        <p className="text-lg sm:text-xl md:text-2xl text-[#578E7E]">
          Your one-stop solution for everything amazing.
        </p>
      </div>
    </div>
  );
};
