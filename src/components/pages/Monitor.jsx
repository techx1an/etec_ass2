import React from "react";
import { FaStar } from "react-icons/fa";

function Monitor() {
  const monitors = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/1200x/5a/c5/ed/5ac5edcc3a10299549059629d72af662.jpg",
      description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$245.00",
      dis: "25% off",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/1200x/5a/c5/ed/5ac5edcc3a10299549059629d72af662.jpg",
      description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$245.00",
      dis: "25% off",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/1200x/5a/c5/ed/5ac5edcc3a10299549059629d72af662.jpg",
      description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$245.00",
      dis: "25% off",
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/1200x/5a/c5/ed/5ac5edcc3a10299549059629d72af662.jpg",
      description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$245.00",
      dis: "25% off",
    },
    {
      id: 5,
      image:
        "https://i.pinimg.com/1200x/5a/c5/ed/5ac5edcc3a10299549059629d72af662.jpg",
      description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$245.00",
      dis: "25% off",
    },
    {
      id: 6,
      image:
        "https://i.pinimg.com/1200x/5a/c5/ed/5ac5edcc3a10299549059629d72af662.jpg",
      description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$245.00",
      dis: "25% off",
    },
    {
      id: 7,
      image:
        "https://i.pinimg.com/1200x/5a/c5/ed/5ac5edcc3a10299549059629d72af662.jpg",
      description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$245.00",
      dis: "25% off",
    },
    {
      id: 8,
      image:
        "https://i.pinimg.com/1200x/5a/c5/ed/5ac5edcc3a10299549059629d72af662.jpg",
      description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$245.00",
      dis: "25% off",
    },
    {
      id: 9,
      image:
        "https://i.pinimg.com/1200x/5a/c5/ed/5ac5edcc3a10299549059629d72af662.jpg",
      description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$245.00",
      dis: "25% off",
    },
  ];
  return (
    <div className="container">
      <div>
        <h2 className="text-xl text-center md:text-start md:text-3xl font-bold">
          Best <span className="text-color">Monitor</span>
        </h2>
      </div>

      {/* Monitor Products */}
      <div className="overflow-x-auto py-4 scrollbar-hide">
        <div className="flex gap-4 min-w-max">
          {monitors.map((monitor) => (
            <div
              key={monitor.id}
              className="w-[300px] h-auto p-3 shadow-sm inset-shadow-sm rounded-2xl relative"
            >
              <div>
                <img src={monitor.image} alt="" />
                <div>
                  <p>{monitor.description}</p>
                  <div className="flex mt-2 text-[#f31a27] text-xl space-x-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="mt-3 font-bold">{monitor.price}</p>
                  <p className="absolute right-3 text-[13px] bottom-3 text-[#f31a27] bg-red-200 p-1 rounded-3xl">
                    {monitor.dis}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Monitor;
