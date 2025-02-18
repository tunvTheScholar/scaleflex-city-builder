"use client";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { noop } from "@/constants/fn";
import { debounce } from "@/lib/debounce";
import { CSSProperties, memo, useState } from "react";
import { PRE_DEFINED_BUILDING_COLORS } from "../../constants";
import { IBuilding } from "../../types";

interface BuildingItemProps extends IBuilding {
  onChangeColor?: (id: string, color: string) => void;
  onChangeNoOfFloors?: (id: string, floors: number) => void;
  onDeleteBuilding?: (id: string) => void;
  onDuplicateBuilding?: (id: string) => void;
  style?: CSSProperties;
}
const BuildingItem = memo(function BuildingItem({
  color = "white",
  id,
  name = "Lorem",
  noOfFloor,
  onChangeColor = noop,
  onChangeNoOfFloors = noop,
  onDeleteBuilding = noop,
  onDuplicateBuilding = noop,
  style,
}: BuildingItemProps) {
  const [floors, setFloors] = useState(noOfFloor);
  const [debounceChangeNoOfFloor] = useState(() =>
    debounce(onChangeNoOfFloors, 500)
  );

  const handleChangeFloor = (value: number) => {
    setFloors(value);
    debounceChangeNoOfFloor(id, value);
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
                type="number"
                min={1}
                max={100}
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
              max={10}
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
});

BuildingItem.displayName = "BuildingItem";

export default BuildingItem;
