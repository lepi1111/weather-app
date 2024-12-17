import SingleCity from "./SingleCity";

export default function OtherCities() {
  return (
    <div className="text-text-primary w-[530px] pt-11">
      <h2 className="text-xl pl-2">Other Cities</h2>
      <div className="flex flex-wrap justify-center gap-8 pt-5">
        <SingleCity />
        <SingleCity />
        <SingleCity />
        <SingleCity />
      </div>
    </div>
  );
}
