import React from "react";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoInstagram, IoLogoTwitter, IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
function Footer() {
  // Information
  const info = [
    {
      id: 1,
      name: "About Us",
    },
    {
      id: 1,
      name: "Brand List",
    },
    {
      id: 1,
      name: "Shop Address",
    },
    {
      id: 1,
      name: "Careers",
    },
    {
      id: 1,
      name: "Blog",
    },
    {
      id: 1,
      name: "Press Coverage",
    },
    {
      id: 1,
      name: "Order Tracking",
    },
    {
      id: 1,
      name: "Complain / Advice",
    },
  ];

  // Help
  const help = [
    {
      id: 1,
      name: "Contact Us",
    },
    {
      id: 1,
      name: "Corporate",
    },
    {
      id: 1,
      name: "FAQS",
    },
    {
      id: 1,
      name: "EMI Policy",
    },
    {
      id: 1,
      name: "Privacy Policy",
    },
    {
      id: 1,
      name: "Warranty Policy",
    },
    {
      id: 1,
      name: "Exchange Any Device",
    },
    {
      id: 1,
      name: "Delivery Terms & Conditions",
    },
  ];

  //   Footer Row2

  return (
    <div className="container bg-black h-full text-white p-8">
      {/* Footer Row1   */}
      <div className="grid grid-cols-1 md:grid-cols-8">
        {/* Page */}
        <div className="col-span-2">
          <div className=" font-bold">
            {/* <img src={logoImg} alt="Logo" /> */}
            <h2 className="text-gradient-#f5941d] fugaz text-md md:text-3xl pt-2 md:pt-0">
              CamCompu
            </h2>
          </div>

          {/* Phone Number */}
          <div className="flex gap-2 mt-9">
            <FaPhoneAlt className="mt-1 text-[#f31a27]" size={16} />
            <p>
              Phone Number <br />
              <span className="text-[#6a6a6a] text-[14px]">085 533 599</span>
            </p>
          </div>

          {/* Page Email */}
          <div className=" flex gap-2 mt-4">
            <MdOutlineMailOutline className="mt-1 text-[#f31a27]" />
            <p>
              Email Address <br />
              <span className="text-[#6a6a6a] text-[14px]">
                company@x1n.com
              </span>
            </p>
          </div>

          {/* Application */}
          <div>
            {/* <img src="https://i.pinimg.com/1200x/fd/75/c0/fd75c0b874a3b2278a234befb8abc283.jpg" alt="" /> */}
          </div>
        </div>

        {/* Information */}
        <div className="col-span-2 mt-7 md:mt-0">
          <p className="text-[#6a6a6a] uppercase">information</p>
          <ul className=" mt-2 md:mt-6">
            {info.map((i) => (
              <li key={i.id} className="py-1">
                {i.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div className="col-span-2 mt-7 md:mt-0">
          <p className="text-[#6a6a6a] uppercase">Help</p>
          <ul className=" mt-2 md:mt-6">
            {help.map((h) => (
              <li key={h.id} className="py-1">
                {h.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Store Location */}
        <div className="col-span-2 mt-7 md:mt-0">
          <p className="text-[#6a6a6a] uppercase">Location</p>
          <div className="flex mt-4 md:mt-6 gap-2">
            <FaLocationDot className="text-[#f31a27] mt-1" />
            <p>
              CamCompu <br />
              <span className="text-[#6a6a6a] text-[14px]">TK 22,</span>
            </p>
          </div>
          <div className="flex mt-4 gap-2">
            <FaLocationDot className="text-[#f31a27] mt-1" />
            <p>
              CamCompu <br />
              <span className="text-[#6a6a6a] text-[14px]">TK 22,</span>
            </p>
          </div>
          <div className="flex mt-4 gap-2">
            <FaLocationDot className="text-[#f31a27] mt-1" />
            <p>
              CamCompu <br />
              <span className="text-[#6a6a6a] text-[14px]">TK 22,</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Row2   */}
      <div className="grid grid-cols-1 md:grid-cols-12 mt-5 md:mt-8">
        <div className="col-span-2">
          <p className="uppercase font-bold">monitor</p>
          <ul className="text-[#6a6a6a] mt-4">
            <li className="py-1">
              <a href="#"></a>Samsung
            </li>
            <li className="py-1">
              <a href="#"></a>LG{" "}
            </li>
            <li className="py-1">
              <a href="#"></a>Sony
            </li>
            <li className="py-1">
              <a href="#"></a>Xiaomi
            </li>
            <li className="py-1">
              <a href="#"></a>TCL
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <p className="uppercase font-bold">monitor</p>
          <ul className="text-[#6a6a6a] mt-4">
            <li className="py-1">
              <a href="#"></a>Samsung
            </li>
            <li className="py-1">
              <a href="#"></a>LG{" "}
            </li>
            <li className="py-1">
              <a href="#"></a>Sony
            </li>
            <li className="py-1">
              <a href="#"></a>Xiaomi
            </li>
            <li className="py-1">
              <a href="#"></a>TCL
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <p className="uppercase font-bold">monitor</p>
          <ul className="text-[#6a6a6a] mt-4">
            <li className="py-1">
              <a href="#"></a>Samsung
            </li>
            <li className="py-1">
              <a href="#"></a>LG{" "}
            </li>
            <li className="py-1">
              <a href="#"></a>Sony
            </li>
            <li className="py-1">
              <a href="#"></a>Xiaomi
            </li>
            <li className="py-1">
              <a href="#"></a>TCL
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <p className="uppercase font-bold">monitor</p>
          <ul className="text-[#6a6a6a] mt-4">
            <li className="py-1">
              <a href="#"></a>Samsung
            </li>
            <li className="py-1">
              <a href="#"></a>LG{" "}
            </li>
            <li className="py-1">
              <a href="#"></a>Sony
            </li>
            <li className="py-1">
              <a href="#"></a>Xiaomi
            </li>
            <li className="py-1">
              <a href="#"></a>TCL
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <p className="uppercase font-bold">monitor</p>
          <ul className="text-[#6a6a6a] mt-4">
            <li className="py-1">
              <a href="#"></a>Samsung
            </li>
            <li className="py-1">
              <a href="#"></a>LG{" "}
            </li>
            <li className="py-1">
              <a href="#"></a>Sony
            </li>
            <li className="py-1">
              <a href="#"></a>Xiaomi
            </li>
            <li className="py-1">
              <a href="#"></a>TCL
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <p className="uppercase font-bold">monitor</p>
          <ul className="text-[#6a6a6a] mt-4">
            <li className="py-1">
              <a href="#"></a>Samsung
            </li>
            <li className="py-1">
              <a href="#"></a>LG
            </li>
            <li className="py-1">
              <a href="#"></a>Sony
            </li>
            <li className="py-1">
              <a href="#"></a>Xiaomi
            </li>
            <li className="py-1">
              <a href="#"></a>TCL
            </li>
          </ul>
        </div>
      </div>

      <hr className="text-[#3a3a3a] mt-10" />

      <div className="md:flex justify-between mt-2">
        <div className="py-4">
          <p>2025.Tech2 etc - ReactJs TailWind ElecStore</p>
        </div>
        <div className="flex justify-center items-center text-3xl gap-3">
          <div className="flex w-[200px] justify-center gap-1 rounded-4xl bg-[#1dbf58] hover:bg-transparent hover:border duration-50">
            <IoLogoWhatsapp className="mt-1 p-1" />
            <p className="text-[18px] py-2">WhatsApp</p>
          </div>
          <FaFacebookF className="text-2xl rounded-4xl border h-9 p-2 w-10 hover:bg-[#f31a27] hover:border-0  ease-out" />
          <IoLogoInstagram className="rounded-4xl border h-9 p-1 w-10 hover:bg-[#f31a27] hover:border-0  ease-out" />
          <IoLogoTwitter className="rounded-4xl border h-9 p-2 w-10 hover:bg-[#f31a27] hover:border-0  ease-out" />
        </div>
      </div>
      <hr className="text-[#3a3a3a] mt-2" />
    </div>
  );
}

export default Footer;
