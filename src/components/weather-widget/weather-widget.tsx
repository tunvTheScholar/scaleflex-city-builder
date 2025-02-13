"use client";

interface WeatherWidgetProps {
  tempUnit?: string;
  temperature?: number;
  icon?: string;
  position?: "top left" | "top right" | "bottom right" | "bottom left"; // add more if needed
  className?: string;
  description?: string;
}
export default function WeatherWidget({
  icon = "❓",
  tempUnit = "°C",
  temperature = 0,
  description = "",
}: WeatherWidgetProps) {
  return (
    <div
      data-cy="WeatherWidget"
      className="px-4 py-2 rounded-sm shadow w-30 flex gap-2 absolute top-4 right-4 cursor-default"
      title={description}
    >
      <p>
        {temperature} <span>{tempUnit}</span>
      </p>
      <span>{icon}</span>
    </div>
  );
}
