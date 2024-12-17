import React from "react";

export default function TodayAndWeekContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-text-primary bg-bg-secondary w-[42rem] h-[23rem]">
      {children}
    </div>
  );
}
