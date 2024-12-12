import Image from "next/image";
import locationSvg from "../../../../public/svg/location.svg";

export default function CountryText() {
  return (
    <div className="relative">
      <p className="bg-bg-accent px-3 py-2 rounded-3xl w-fit pl-10 pr-8">
        Australia
      </p>
      <Image
        src={locationSvg}
        alt="location svg"
        className="absolute top-1/2 -translate-y-1/2 left-3"
      />
    </div>
  );
}
