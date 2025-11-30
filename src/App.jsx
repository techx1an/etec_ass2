import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Categories from "./components/pages/Categories";
import Hero from "./components/pages/Hero";
import Best from "./components/pages/Best";
import Mouse from "./components/pages/Mouse";
import Monitor from "./components/pages/Monitor";
import GPU from "./components/pages/GPU";
import Arrive from "./components/pages/Arrive";
import Recommendation from "./components/pages/Recommendation";
import Footer from "./components/footer/Footer";
import { useState } from "react";

// MenuList
import M_Mouse from "./components/menulist/M_Mouse";

// Register
import Register from "./components/regis&cart/Register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);
  const AddToCart = (product) => {
    setCart([...cart, product]);
  };

  const monitors = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/1200x/5a/c5/ed/5ac5edcc3a10299549059629d72af662.jpg",
      Description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$245.00",
      dis: "20% off",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/736x/58/f1/6b/58f16b2e35bcfc177c4a1ef01cc4672e.jpg",
      Description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$245.00",
      dis: "20% off",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/1200x/37/c6/33/37c633a52008ef67cb1695bd997cbce9.jpg",
      Description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$245.00",
      dis: "20% off",
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/736x/00/ba/fd/00bafdae2071b57dc84b42647fbe30be.jpg",
      Description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$245.00",
      dis: "20% off",
    },
    {
      id: 5,
      image:
        "https://i.pinimg.com/736x/b4/c6/e5/b4c6e5e7466c8c0afc7bcc1ae0e9fdf5.jpg",
      Description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$245.00",
      dis: "20% off",
    },
    {
      id: 6,
      image:
        "https://i.pinimg.com/1200x/aa/d4/c8/aad4c860700259c7fe1793308a5f2789.jpg",
      Description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$245.00",
      dis: "20% off",
    },
    {
      id: 7,
      image:
        "https://i.pinimg.com/1200x/4c/95/82/4c95825fc7a67ef0770e6b45deaf8acb.jpg",
      Description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$245.00",
      dis: "20% off",
    },
    {
      id: 8,
      image:
        "https://i.pinimg.com/1200x/5a/2a/c5/5a2ac554aa07abda6b0174c00c77224e.jpg",
      Description: 'Z-EDGE U28I4K 28" 4K 120Hz IPS Eye-Care',
      price: "$245.00",
      dis: "20% off",
    },
  ];
  return (
    <>
      {/* NavigationBar */}
      <Header notification={cart.length} />
      <Menu />

      {/* Pages */}
      <Hero />
      <Categories />
      <Best monitors={monitors} AddToCart={AddToCart} />
      <Mouse />
      <Monitor />
      <GPU />
      <Arrive />
      <Recommendation />

      {/* Register And Cart */}

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
