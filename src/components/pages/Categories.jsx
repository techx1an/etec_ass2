import React from "react";

function Categories() {
  const products = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/736x/58/f1/6b/58f16b2e35bcfc177c4a1ef01cc4672e.jpg",
      name: "Monitor",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/1200x/d4/e1/50/d4e150be9e4599a2be673edb57ee5069.jpg",
      name: "Keyboard",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/1200x/cc/76/5b/cc765b34857eeea62b7d5aa24993cd49.jpg",
      name: "Mouse",
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/736x/81/53/ff/8153ff67f633145ce981cada5f7598d2.jpg",
      name: "Casing",
    },
    {
      id: 5,
      image:
        "https://i.pinimg.com/736x/44/5c/59/445c5913f1eb2b55087bc1614d81f201.jpg",
      name: "Headset",
    },
    {
      id: 6,
      image:
        "https://i.pinimg.com/1200x/e0/05/50/e005502b5d35c1bd1612e5d192ade3de.jpg",
      name: "Speaker",
    },
    {
      id: 7,
      image:
        "https://i.pinimg.com/736x/6a/f3/ca/6af3ca1edc7bfa9e5a6a70d92d5286d2.jpg",
      name: "Webcam",
    },
    {
      id: 8,
      image:
        "https://i.pinimg.com/736x/a7/d6/32/a7d6322e044943d9665ad192d036031a.jpg",
      name: "RAM",
    },
    {
      id: 9,
      image:
        "https://i.pinimg.com/1200x/43/3b/30/433b30bc4c4558bf16f5ea9265b550d6.jpg",
      name: "SSD",
    },
    {
      id: 10,
      image:
        "https://i.pinimg.com/1200x/ca/be/71/cabe71d7397103b02615759b24295372.jpg",
      name: "Power Supply",
    },
    {
      id: 11,
      image:
        "https://i.pinimg.com/1200x/1e/12/8f/1e128f2538c85aeefb7ac4072fd34a36.jpg",
      name: "Cable",
    },
    {
      id: 12,
      image:
        "https://i.pinimg.com/736x/c7/15/c0/c715c008bb5acd2e3283e33495dbbf7d.jpg",
      name: "Controller",
    },
  ];
  return (
    <div className="mt-25">
      <div className="container mt-10">
        <h2 className="text-xl text-center md:text-start md:ml-0 md:text-3xl font-bold">
          Feature <span className="text-color">Categories</span>
        </h2>
        <div className="mt-6">
          <ul className="grid grid-cols-2 md:grid-cols-6 gap-10 md:gap-25">
            {products.map((p) => (
              <li className=" items-center" key={p.id}>
                <img
                  className="  duration-300 ease-in-out rounded-[50%] mx-auto w-5/10 md:w-full shadow-xl hover:shadow-[#f31a27]/50 "
                  src={p.image}
                  alt="Category"
                />
                <p className="mt-4 font-bold text-center text-sm">{p.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Categories;
