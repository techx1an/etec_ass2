import React, { useEffect } from "react";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { RiCloseLargeLine, RiMenu2Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
function Menu() {
  // No-scroll
  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  });

  // menuIcons
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const menuList = [
    {
      name: "Mouse",
      arrow: <IoIosArrowDown />,
      link: "#mouse",
    },
    {
      name: "Keyboard",
      arrow: <IoIosArrowDown />,
      link: "#keyboard",
    },
    {
      name: "Headset",
      arrow: <IoIosArrowDown />,
      link: "#headset",
    },
    {
      name: "Monitor",
      arrow: <IoIosArrowDown />,
      link: "#monitor",
    },
    {
      name: "RAM",
      arrow: <IoIosArrowDown />,
      link: "#ram",
    },
    {
      name: "Laptops",
      arrow: <IoIosArrowDown />,
      link: "#laptops",
    },
    {
      name: "SSD",
      arrow: <IoIosArrowDown />,
      link: "#ssd",
    },
    {
      name: "Speaker",
      arrow: <IoIosArrowDown />,
      link: "#speaker",
    },
    {
      name: "Webcam",
      arrow: <IoIosArrowDown />,
      link: "#webcam",
    },
    {
      name: "Accessories",
      arrow: <IoIosArrowDown />,
      link: "#accessories",
    },
  ];
  return (
    <div>
      <nav className="">
        {/* desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex gap-5 pl-6 pt-1">
            {menuList.map((menuItem) => (
              <li
                className="flex items-center mx-2 text-sm text-gray-500"
                key={menuItem.name}
              >
                <a className="uppercase " href={menuItem.link}>
                  {menuItem.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Moblie Menu */}
        {!showMenu && (
          <div className="block md:hidden text-3xl ml-5 mt-2">
            <RiMenu2Fill onClick={toggleMenu} />
          </div>
        )}
        {showMenu && (
          <div className="block md:hidden text-3xl ml-5 mt-2">
            <RiCloseLargeLine onClick={toggleMenu} />
          </div>
        )}
        {showMenu ? (
          <div className="md:hidden uppercase bg-[#e4e6f3] shadow-lg overflow-y-hidden fixed left-4 top-19 w-1/2 min-h-full z-10 ml-40 gap-10 flex flex-col duration-300 ease-in text-center">
            <ul className="inline-block gap-10 text-xl font-bold">
              {menuList.map((menuItem) => (
                <li className="hover:bg-[#f5941d] p-2" key={menuItem.name}>
                  <a href={menuItem.link}>{menuItem.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="md:hidden bg-gray-400 overflow-y-hidden fixed left-[140%] top-19 w-full min-h-full z-10 ml-40 gap-10 flex flex-col duration-300 ease-in"></div>
        )}
      </nav>
    </div>
  );
}

export default Menu;
