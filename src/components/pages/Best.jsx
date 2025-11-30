import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

function Best({monitors ,AddToCart }) {

  return (
    <div className="container">
      <div className="mt-10">
        <h2 className="text-xl text-center md:text-start md:text-3xl font-bold">
          Today <span className="text-color">Best Deals</span>
        </h2>
      </div>

      {/* Best Products */}
      <div className="overflow-x-auto py-4 scrollbar-hide">
        <div className="flex gap-4 min-w-max">
          {monitors.map((monitor) => (
            <div
              key={monitor.id}
              className="w-[300px] h-auto p-3 shadow-sm inset-shadow-sm rounded-2xl relative"
            >
              <div className="">
                <CiShoppingCart
                  onClick={() => AddToCart(monitor)}
                  className="text-3xl ml-53 rounded-full bg-[#f31a27] text-white w-8 h-5 cursor-pointer"
                />
                <img src={monitor.image} alt="" />
                <div>
                  <p>{monitor.Description}</p>
                  <div className="mt-2 flex text-[#f31a27] text-xl space-x-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="mt-3 font-bold ">{monitor.price}</p>
                  <p className="absolute right-3 text-[13px] bottom-3 text-[#f31a27] bg-red-200 p-1 rounded-3xl">
                    {monitor.dis}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10 mt-15">
        <img
          src="https://i.pinimg.com/736x/39/58/4d/39584d86237a56fa543a526189864f6b.jpg"
          className="rounded-2xl"
        />
        <img
          src="https://i.pinimg.com/736x/88/e9/3f/88e93f7a10903d298ecaa935d5cb25f0.jpg"
          alt=""
          className="rounded-2xl"
        />
        <img
          src="https://i.pinimg.com/1200x/f4/be/79/f4be7988fde7b9d2f923c85af71f271d.jpg"
          alt=""
          className="rounded-2xl"
        />
      </div>
    </div>
  );
}

export default Best;
