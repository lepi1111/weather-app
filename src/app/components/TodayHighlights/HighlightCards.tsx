"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Lottie from "react-lottie";
import windAnimation from "../../../../public/lotties/Animation - 1734459198608.json";
import humidityAnimation from "../../../../public/lotties/whiteHumidity.json";

export default function HighlightCards() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: windAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex flex-wrap justify-center gap-5 pt-3">
      <div className="w-[235px] h-[170px] bg-bg-secondary rounded-xl">
        <p className="pl-5 pt-3">Chance of Rain</p>
        <div className="flex flex-row items-center pt-5">
          <DotLottieReact
            src="https://lottie.host/9615d5c6-1c99-49e7-8c39-fa5e3f4bd865/Jfc6u1cvAE.lottie"
            loop
            autoplay
            className="p-0 w-40"
          />
          <p>0%</p>
        </div>
      </div>
      <div className="w-[235px] h-[170px] bg-bg-secondary rounded-xl">
        <p className="pl-5 pt-3">UV Index</p>
        <div className="flex flex-row items-center pt-5">
          <DotLottieReact
            src="https://lottie.host/7bb01d69-cb07-4541-8d60-12641059d569/CjY04FW6rK.lottie"
            loop
            autoplay
            className="p-0 w-40"
          />
          <p>0.0</p>
        </div>
      </div>
      <div className="w-[235px] h-[170px] bg-bg-secondary rounded-xl">
        <p className="pl-5 pt-3">Wind Status</p>
        <div className="flex flex-row items-center pt-2 pr-10">
          <Lottie options={defaultOptions} style={{ width: "100px" }} />
          <p>12 km/h</p>
        </div>
      </div>
      <div className="w-[235px] h-[170px] bg-bg-secondary rounded-xl">
        <p className="pl-5 pt-3">Humidity</p>
        <div className="flex flex-row items-center pt-2 pr-14">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: humidityAnimation,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            style={{ width: "120px" }}
          />
          <p>0.0</p>
        </div>
      </div>
    </div>
  );
}
