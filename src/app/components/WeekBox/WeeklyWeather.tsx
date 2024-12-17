import WeatherTimeBox from "./WeatherTimeBox";

export default function WeeklyWeather() {
  return (
    <div
      className="w-full flex flex-row justify-between px-4 py-4"
      style={{
        backgroundColor: "#0e1421",
        background:
          "linear-gradient(90deg, rgba(14,20,33,1) 0%, rgba(18,31,59,1) 50%, rgba(14,20,33,1) 100%)",
      }}
    >
      <WeatherTimeBox />
      <WeatherTimeBox />
      <WeatherTimeBox />
      <WeatherTimeBox />
      <WeatherTimeBox />
      <WeatherTimeBox />
      <WeatherTimeBox />
    </div>
  );
}
