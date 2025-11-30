import React from "react";
import { FaStar } from "react-icons/fa";
function Mouse() {
  const mouses = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/736x/84/08/06/8408063f2505c3130f438d02f32abdff.jpg",
      description: "Gaming Mice, wireless Gaming Mouse| Logitech G",
      price: "$49.99",
      dis: "15% off",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/1200x/a8/82/68/a88268be8d8a788194c5245af8f876bf.jpg",
      description: "Gaming Mice, wireless Gaming Mouse| Logitech G",
      price: "$49.99",
      dis: "15% off",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/736x/86/47/17/86471783895f4e788f4fa1b30a1391b1.jpg",
      description: "Gaming Mice, wireless Gaming Mouse| Logitech G",
      price: "$49.99",
      dis: "15% off",
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/1200x/e0/23/89/e02389790a27c9a5ad11c72c901335b4.jpg",
      description: "Gaming Mice, wireless Gaming Mouse| Logitech G",
      price: "$49.99",
      dis: "15% off",
    },
    {
      id: 5,
      image:
        "https://i.pinimg.com/736x/bc/ed/d3/bcedd36d06e8d2c4f01107c69a7830b5.jpg",
      description: "Gaming Mice, wireless Gaming Mouse| Logitech G",
      price: "$49.99",
      dis: "15% off",
    },
    {
      id: 6,
      image:
        "https://i.pinimg.com/1200x/7b/36/70/7b3670dabd0bc57ee9506a3724ea2e81.jpg",
      description: "Gaming Mice, wireless Gaming Mouse| Logitech G",
      price: "$49.99",
      dis: "15% off",
    },
    {
      id: 7,
      image:
        "https://i.pinimg.com/1200x/b6/85/8a/b6858af346cf59c165db1b3082bef355.jpg",
      description: "Gaming Mice, wireless Gaming Mouse| Logitech G",
      price: "$49.99",
      dis: "15% off",
    },
    {
      id: 8,
      image:
        "https://i.pinimg.com/736x/9a/11/9f/9a119f9f8176e4cee0f2dd5c3d40916d.jpg",
      description: "Gaming Mice, wireless Gaming Mouse| Logitech G",
      price: "$49.99",
      dis: "15% off",
    },

  ];
  return (
    <div className="container">
      <div>
        <h2 className="text-xl text-center md:text-start md:text-3xl font-bold">
          Best <span className="text-color">Mouse</span>
        </h2>
      </div>

      {/* Mouse Features  */}
      <div className="overflow-x-auto py-4 scrollbar-hide">
        <div className="flex gap-4 min-w-max">
          
          {mouses.map((mouse) => (
            <div
              key={mouse.id}
              className="w-[300px] h-auto p-3 shadow-sm inset-shadow-sm rounded-2xl relative"
            >
              <div>
                <img src={mouse.image} alt="" />
                <div>
                  <p>{mouse.description}</p>
                  <div className="flex mt-2 text-[#f31a27] text-xl space-x-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="mt-3 font-bold">{mouse.price}</p>
                  <p className="absolute right-3 text-[13px] bottom-3 text-[#f31a27] bg-red-200 p-1 rounded-3xl">
                    {mouse.dis}
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

export default Mouse;
