import React from "react";
import { FaStar } from "react-icons/fa";

function Arrive() {
  const newArrive = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/1200x/8a/3f/03/8a3f0367e54b904dc61e890339fc8a89.jpg",
      description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$245.00",
      dis: "20% off",
    },
    {
      id: 1,
      image:
        "https://i.pinimg.com/736x/6c/07/da/6c07daca11fb8824e3d96c80acae2b8e.jpg",
      description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$245.00",
      dis: "20% off",
    },
    {
      id: 1,
      image:
        "https://i.pinimg.com/1200x/71/a2/74/71a2741d2e14804befb2105dfdcedb8b.jpg",
      description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$245.00",
      dis: "20% off",
    },
    {
      id: 1,
      image:
        "https://i.pinimg.com/736x/81/53/ff/8153ff67f633145ce981cada5f7598d2.jpg",
      description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$245.00",
      dis: "20% off",
    },
    {
      id: 1,
      image:
        "https://i.pinimg.com/736x/4e/69/e0/4e69e040147ea2ef4a3d9cd1553c1a73.jpg",
      description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$245.00",
      dis: "20% off",
    },
    {
      id: 1,
      image:
        "https://i.pinimg.com/1200x/5a/c5/ed/5ac5edcc3a10299549059629d72af662.jpg",
      description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$245.00",
      dis: "20% off",
    },
    {
      id: 1,
      image:
        "https://i.pinimg.com/1200x/5a/c5/ed/5ac5edcc3a10299549059629d72af662.jpg",
      description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$245.00",
      dis: "20% off",
    },
    {
      id: 1,
      image:
        "https://i.pinimg.com/1200x/5a/c5/ed/5ac5edcc3a10299549059629d72af662.jpg",
      description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$245.00",
      dis: "20% off",
    },
    {
      id: 1,
      image:
        "https://i.pinimg.com/1200x/5a/c5/ed/5ac5edcc3a10299549059629d72af662.jpg",
      description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$245.00",
      dis: "20% off",
    },
  ];
  return (
    <div className="container">
      <h2 className="text-xl text-center md:text-start md:text-3xl font-bold">
        New <span className="text-color">Arrivals</span>
      </h2>

      {/* New Arrivals */}
      <div className="overflow-x-auto py-4 scrollbar-hide">
        <div className="flex gap-4 min-w-max">
         
          {newArrive.map((arrival) => (
            <div
              key={arrival.id}
              className="w-[300px] h-auto p-3 shadow-sm inset-shadow-sm rounded-2xl relative"
            >
              <div>
                <img src={arrival.image} alt="" />
                <div>
                  <p>{arrival.description}</p>
                  <div className="mt-2 flex text-[#f31a27] text-xl space-x-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="mt-3 font-bold">{arrival.price}</p>
                  <p className="absolute right-3 text-[13px] bottom-3 text-[#f31a27] bg-red-200 p-1 rounded-3xl">
                    {arrival.dis}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10 mt-8">
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

export default Arrive;
