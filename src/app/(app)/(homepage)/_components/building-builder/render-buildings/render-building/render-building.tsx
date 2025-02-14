"use client";

import { CSSProperties } from "react";
import { IBuilding } from "../../types";
import Roof from "./roof";
import Floor from "./floor";

interface RenderBuildingProps extends IBuilding {
  style?: CSSProperties;
}
export default function RenderBuilding({
  id,
  noOfFloor,
  color,
  name,
  style,
}: RenderBuildingProps) {
  return (
    <div
      data-cy="RenderBuilding"
      style={style}
      className="flex flex-1 items-end h-full"
    >
      <div className="flex flex-col justify-end items-center">
        <Roof color={color} />
        {Array.from({ length: noOfFloor }).map((_, idx) => (
          <Floor key={idx} color={color} />
        ))}
        <div>
          <p className="line-clamp-1">{name}</p>
        </div>
      </div>
    </div>
  );
}
