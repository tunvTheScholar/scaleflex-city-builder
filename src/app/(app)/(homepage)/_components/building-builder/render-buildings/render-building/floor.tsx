"use client";

interface FloorProps {
  color?: string;
}
export default function Floor({ color }: FloorProps) {
  return (
    <div
      style={{ width: 100, height: 50, backgroundColor: color }}
      className="border"
    ></div>
  );
}
