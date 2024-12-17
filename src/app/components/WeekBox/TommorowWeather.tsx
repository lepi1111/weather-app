export default function TommorowWeather() {
  return (
    <div
      className="w-full flex flex-row justify-between items-center mt-12 px-4 py-5"
      style={{
        backgroundColor: "#0e1421",
        background:
          "linear-gradient(90deg, rgba(14,20,33,1) 0%, rgba(18,31,59,1) 50%, rgba(14,20,33,1) 100%)",
      }}
    >
      <div className="flex flex-row gap-2">
        <div className="text-sm">
          <h3>Tomorrow</h3>
          <p className="text-text-secondary">Thunder storm</p>
        </div>
        <p className="text-4xl">14°</p>
      </div>
      <div>
        <p>Weather Image</p>
      </div>
    </div>
  );
}
