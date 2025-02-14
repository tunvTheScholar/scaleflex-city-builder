"use client";

import { Button } from "@/components/ui/button";
import { IBuilding } from "../../types";
import { noop } from "@/constants/fn";
import { Slider } from "@/components/ui/slider";
import { CSSProperties, useState } from "react";
import { PRE_DEFINED_BUILDING_COLORS } from "../../constants";

interface BuildingItemProps extends IBuilding {
  onChangeColor?: (id: string, color: string) => void;
  onDeleteBuilding?: (id: string) => void;
  onDuplicateBuilding?: (id: string) => void;
  style?: CSSProperties;
}
export default function BuildingItem({
  color = "white",
  id,
  name = "Lorem",
  noOfFloor,
  onChangeColor = noop,
  onDeleteBuilding = noop,
  onDuplicateBuilding = noop,
  style,
}: BuildingItemProps) {
  const [floors, setFloors] = useState(noOfFloor);

  const handleChangeFloor = (value: number) => {
    setFloors(value);
  };

  return (
    <div data-cy="BuildingItem" className="my-2" style={style} data-id={id}>
      <div className="flex justify-between align-center">
        <p>{name}</p>
        <div className="flex gap-2">
          <Button
            onClick={() => onDeleteBuilding(id)}
            size="sm"
            title={`Delete ${name}`}
            variant="ghost"
          >
            🗑️
          </Button>
          <Button
            onClick={() => onDuplicateBuilding(id)}
            size="sm"
            title={`Duplicate ${name}`}
            variant="secondary"
          >
            📑
          </Button>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 pr-2">
          <div className="flex gap-2 mb-2">
            <span>Floors:</span>
            <div className="w-fit">
              <input
                inputMode="decimal"
                value={floors}
                className="border w-full rounded-sm px-2"
                onChange={(evt) =>
                  handleChangeFloor(
                    Boolean(+evt.currentTarget.value)
                      ? +evt.currentTarget.value
                      : 1
                  )
                }
              />
            </div>
          </div>
          <div>
            <Slider
              defaultValue={[noOfFloor]}
              step={1}
              min={1}
              max={100}
              onValueChange={(v) => handleChangeFloor(v[0])}
              value={[floors]}
            />
          </div>
        </div>
        <div className="w-1/2">
          <span>Colors: </span>
          <div className="w-fit">
            <select
              className="border rounded-sm w-full"
              onChange={(e) => onChangeColor(id, e.target.value)}
              value={color}
            >
              {PRE_DEFINED_BUILDING_COLORS.map(({ label, value }) => (
                <option value={value} key={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
