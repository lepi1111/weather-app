import React from "react";

interface TodayAndWeekContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function TodayAndWeekContainer({
  children,
  className,
}: TodayAndWeekContainerProps) {
  return (
    <div
      className={`text-text-primary bg-bg-secondary w-[42rem] h-[23rem] rounded-3xl ${className}`}
    >
      {children}
    </div>
  );
}
