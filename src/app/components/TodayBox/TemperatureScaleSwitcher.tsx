"use client";

import { useState } from "react";

export default function TemperatureScaleSwitcher() {
  const [scale, setScale] = useState("celsius");

  const handleClick = () => {
    setScale(scale === "celsius" ? "fahrenheit" : "celsius");
  };

  return (
    <button
      className="relative transition-all flex flex-row"
      onClick={handleClick}
    >
      <span
        className={`absolute ${
          scale === "celsius"
            ? "bg-bg-primary pl-4 pr-7 rounded-3xl -left-8"
            : "px-4 rounded-full bg-white text-bg-primary -right-5 z-50"
        }`}
      >
        F
      </span>
      <span
        className={`absolute ${
          scale === "celsius"
            ? "px-4 rounded-full bg-white text-bg-primary"
            : " bg-bg-primary text-white pr-4 rounded-3xl pl-7 z-10"
        }`}
      >
        C
      </span>
    </button>
  );
}
