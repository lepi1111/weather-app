import HighlightCards from "./HighlightCards";

export default function TodayHighlights() {
  return (
    <div
      className="text-text-primary w-[530px] h-[440px] rounded-3xl"
      style={{
        backgroundColor: "#0e1421",
        background:
          "radial-gradient(circle, rgba(22,40,80,1) 0%, rgba(14,20,33,1) 100%)",
      }}
    >
      <h2 className="text-xl pl-5 pt-4">Today{"'"}s Highlights</h2>
      <HighlightCards />
    </div>
  );
}
