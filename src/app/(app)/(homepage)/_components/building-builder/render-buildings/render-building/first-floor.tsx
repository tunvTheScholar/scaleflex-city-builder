"use client";

interface FirstFloorProps {
  color?: string;
}
export default function FirstFloor({ color = "white" }: FirstFloorProps) {
  return (
    <div className="w-[180px] h-[120px]" style={{ backgroundColor: color }}>
      FirstFloor
    </div>
  );
}
