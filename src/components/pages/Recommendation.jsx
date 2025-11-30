import React from "react";
import Recommend from "../recom_product/Recommend"; 
function Recommendation() {


  // Brand Name
  const brands = [
    {
      id: 1,
      name: "All brands",
      link: "#",
    },
    {
      id: 2,
      name: "Samsung",
      link: "#samsung",
    },
    {
      id: 3,
      name: "Walton",
      link: "#walton",
    },
    {
      id: 4,
      name: "Xiaomi",
      link: "#xiaomi",
    },
    {
      id: 5,
      name: "Dell",
      link: "#dell",
    },
    {
      id: 6,
      name: "All brands",
      link: "#",
    },
    {
      id: 7,
      name: "Google",
      link: "#google",
    },
    {
      id: 8,
      name: "Sony",
      link: "#sony",
    },
    {
      id: 9,
      name: "Microsoft",
      link: "#microsoft",
    },
    {
      id: 10,
      name: "Lenovo",
      link: "#lenovo",
    },
    {
      id: 11,
      name: "GoPro",
      link: "#gopro",
    },
    {
      id: 12,
      name: "OnePlus",
      link: "#oneplus",
    },
  ];

  return (
    <div className="container">
      {/* Title */}
      <div>
        <h2 className="text-xl text-center md:text-start md:text-3xl font-bold">
          Recommendation <span className="text-color">For You</span>
        </h2>
      </div>

      {/* Brands */}
      <div className="overflow-x-auto py-4 scrollbar-hide">
        <div className="flex gap-4 min-w-max">
          {brands.map((brand) => (
            <ul
              key={brand.id}
              className="border-[#f31a27] rounded-3xl w-[120px] border text-center hover:bg-[#f31a27] duration-300 ease-in hover:text-white"
            >
              <li>
                <a href={brand.link}>{brand.name}</a>
              </li>
            </ul>
          ))}
        </div>
      </div>

      <Recommend />
    </div>
  );
}

export default Recommendation;
