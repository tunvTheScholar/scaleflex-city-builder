"use client";

interface RoofProps {
  color?: string;
}
export default function Roof({ color = "lightgray" }: RoofProps) {
  return (
    <div
      style={{
        width: 0,
        height: 0,
        borderLeft: "50px solid transparent",
        borderRight: "50px solid transparent",
        borderBottom: `50px solid ${color}`,
      }}
    />
  );
}
