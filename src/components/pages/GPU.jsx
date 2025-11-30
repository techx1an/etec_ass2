import React from "react";
import { FaStar } from "react-icons/fa";

function GPU() {
  const gpu = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/736x/0b/3d/b0/0b3db02919aad17e891087b45d3285a6.jpg",
      description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$200.00",
      dis: "20% off",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/736x/87/9a/24/879a2435920f50dba41e36144b6e1d33.jpg",
      description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$200.00",
      dis: "20% off",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/1200x/78/8f/f1/788ff1026d4f7ec3516ea617f4eba5ee.jpg",
      description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$200.00",
      dis: "20% off",
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/1200x/75/63/28/756328e0c6885f23aad85ccdc7404c69.jpg",
      description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$200.00",
      dis: "20% off",
    },
    {
      id: 5,
      image:
        "https://i.pinimg.com/1200x/e6/00/84/e60084e257a9ace82b5bd88e313c100c.jpg",
      description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$200.00",
      dis: "20% off",
    },
    {
      id: 6,
      image:
        "https://i.pinimg.com/736x/ab/a3/cb/aba3cbbf0289c2c14f0f504283a0af36.jpg",
      description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$200.00",
      dis: "20% off",
    },
    {
      id: 7,
      image:
        "https://i.pinimg.com/1200x/4e/f0/44/4ef0442585c792d6b1f04f9ce7d8b7b1.jpg",
      description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$200.00",
      dis: "20% off",
    },
    {
      id: 8,
      image:
        "https://i.pinimg.com/1200x/a5/12/2b/a5122b8fb14a0d7878d7735a01d4348d.jpg",
      description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$200.00",
      dis: "20% off",
    },

  ];
  return (
    <div className="container">
      <div>
        <h2 className="text-xl text-center md:text-start md:text-3xl font-bold">
          Best <span className="text-color">GPU</span>
        </h2>
      </div>

      {/* GPU Products */}
      <div className="overflow-x-auto py-4 scrollbar-hide">
        <div className="flex gap-4 min-w-max">         
          {gpu.map((g) => (
            <div
              key={g.id}
              className="w-[300px] h-auto p-3 shadow-sm inset-shadow-sm rounded-2xl relative"
            >
              <div>
                <img src={g.image} alt="" />
                <div>
                  <p>{g.description}</p>
                  <div className="flex mt-2 text-[#f31a27] text-xl space-x-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="mt-3 font-bold ">{g.price}</p>
                  <p className="absolute right-3 text-[13px] bottom-3 text-[#f31a27] bg-red-200 p-1 rounded-3xl">
                    {g.dis}
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

export default GPU;
