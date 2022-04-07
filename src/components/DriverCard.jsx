import React from "react";

const DriverCard = ({ driver }) => {
  return (
    <div class="flex mt-20 w-72 rounded-lg border-2 shadow-xl bg-white">
      <img className="relative " src={driver.driver.image} alt="" />

      <header class=" text-xl font-semibold p-4">{driver.driver.name}</header>
      <div class="px-5">
        <p class="text-gray-500 px-4">Current Position : {driver.position}</p>
      </div>

      <footer class="text-right py-3 px-8 text-gray-500"></footer>
    </div>
  );
};

export default DriverCard;
