import React from "react";
import { useState, useEffect } from "react";
import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";

function CarCarousel() {
  const images = [
    "/images/benz.jpeg",
    "/images/corolla.jpeg",
    "/images/grandeur.jpeg",
    "/images/highlander.jpeg",
    "/images/hyundaiindia.jpeg",
    "/images/kona.jpeg",
    "/images/landcruiserturbo.png",
    "/images/lander.jpeg",
    "/images/toyotacamry.png",
    "/images/venza.jpeg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            className="w-full shrink-0 object-cover h-[73vh] md:h-[83vh]"
            alt=""
          />
        ))}
      </div>
      <button
        type="button"
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
      >
        <TfiAngleLeft />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
      >
        <TfiAngleRight />
      </button>
    </div>
  );
}

export default CarCarousel;
