"use client";

import CountryText from "./CountryText";
import HeadingWithDescription from "./HeadingWithDescription";
import TemperatureScaleSwitcher from "./TemperatureScaleSwitcher";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function TodayBox() {
  return (
    <div className="text-text-primary bg-bg-secondary w-[42rem] h-[23rem] flex flex-row justify-between items-center rounded-3xl">
      <div className="pl-14 flex flex-col gap-6">
        <CountryText />
        <div className="flex flex-col gap-2">
          <HeadingWithDescription
            headingText="Monday"
            paragraphText="12 Dec, 2024"
            headingSize="text-4xl"
            paragraphSize="text-base"
          />
        </div>
        <div className="flex flex-col gap-2">
          <HeadingWithDescription
            headingText="26°C"
            paragraphText="High: 27  Low: 10"
            headingSize="text-6xl"
            paragraphSize="text-base"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-24 pr-14">
        <TemperatureScaleSwitcher />
        {/* <DotLottieReact
          src="https://lottie.host/63ee35e8-4832-441c-8e6b-668d4173a6b9/ggiDcDJeF0.lottie"
          loop
          autoplay
          className="w-52"
        /> */}
        <div>Weather icon</div>
        <div className="flex flex-col gap-2">
          <HeadingWithDescription
            headingText="Cloudy"
            paragraphText="Feels like 26"
            headingSize="text-3xl"
            paragraphSize="text-base"
          />
        </div>
      </div>
    </div>
  );
}
