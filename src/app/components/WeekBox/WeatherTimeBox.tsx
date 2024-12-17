export default function WeatherTimeBox() {
  return (
    <div
      className="border border-white rounded-xl py-[11px] px-[8px] flex flex-col gap-4 items-center shadow"
      style={{ filter: "drop-shadow(0 0 rem white)" }}
    >
      <h3 className="text-sm">1PM</h3>
      <p>Img</p>
      <p className="text-sm ">20°</p>
    </div>
  );
}
