import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const nextIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(nextIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const nextIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Slides
  const slides = [
    {
      url: "https://i.pinimg.com/736x/57/1c/e7/571ce7e7f8fa68c7803d6e4e0b9fb89b.jpg",
    },
    {
      url: "https://i.pinimg.com/736x/a2/d3/0a/a2d30ac46ce8a353f4ec6404f92fb407.jpg",
    },
    {
      url: "https://i.pinimg.com/736x/4c/82/41/4c8241a495d208d759cfab78a81a3a51.jpg",
    },
    {
      url: "https://i.pinimg.com/1200x/36/86/96/368696f98ca7b3772fe68689297da02b.jpg",
    },
    {
      url: "https://i.pinimg.com/1200x/a0/a8/43/a0a8439cd77040636198912e6066a493.jpg",
    },
  ];
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-5 mt-10 md:mt-0">
        {/* Caroucel Left */}
        <div className="relative group col-span-0 md:col-span-2">
          <div
            className="md:w-full mx-auto md:mx-0 md:h-full rounded-2xl bg-center bg-cover aspect-video duration-300"
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          ></div>
          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <MdOutlineKeyboardArrowLeft size={50} onClick={prevSlide} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <MdOutlineKeyboardArrowRight size={50} onClick={nextSlide} />
          </div>

          {/* Dots */}
          <div className="flex top-4 justify-center py-2 sm:m-auto">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer text-[#f31a27]"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>

        {/* Banner Right  */}
        <div>
          <img
            src="https://i.pinimg.com/736x/0e/38/af/0e38af1b03c84673fffd8607cd349cee.jpg"
            alt="" className="mx-auto md:mx-0  md:w-full min-h-full rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
