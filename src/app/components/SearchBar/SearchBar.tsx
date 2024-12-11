import Image from "next/image";
import magnifierSvg from "../../../../public/svg/magnifier.svg";

export default function SearchBar({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className={`relative`}>
        <input
          type="search"
          className="w-[32.5rem] rounded-xl bg-bg-secondary pl-14 pr-4 py-3 text-text-primary"
          placeholder="Search city..."
        />
        <Image
          src={magnifierSvg}
          alt="magnifier SVG"
          className="absolute top-1/2 -translate-y-1/2 left-4"
        />
      </div>
    </div>
  );
}
