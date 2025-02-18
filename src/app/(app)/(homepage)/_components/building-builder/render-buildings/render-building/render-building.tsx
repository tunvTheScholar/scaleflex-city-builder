"use client";

import { CSSProperties, memo } from "react";
import { areEqual } from "react-window";
import { IBuilding } from "../../types";
import Floor from "./floor";
import Roof from "./roof";

interface RenderBuildingProps {
  style?: CSSProperties;
  index: number;
  data: IBuilding[];
}

const RenderBuilding = memo(({ data, index, style }: RenderBuildingProps) => {
  const { noOfFloor, color, name } = data[index];

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
}, areEqual);

RenderBuilding.displayName = "RenderBuilding";
export default RenderBuilding;
