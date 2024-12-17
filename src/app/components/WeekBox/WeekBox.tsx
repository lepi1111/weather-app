import TodayAndWeekContainer from "../TodayAndWeekContainer";
import TommorowWeather from "./TommorowWeather";
import WeeklyWeather from "./WeeklyWeather";

export default function WeekBox() {
  return (
    <TodayAndWeekContainer className="pb-[36px] pt-8 px-[27px] flex flex-col justify-center">
      <h2 className="text-xl pb-5">Tommorow / Week</h2>
      <WeeklyWeather />
      <TommorowWeather />
    </TodayAndWeekContainer>
  );
}
