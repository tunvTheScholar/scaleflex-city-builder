"use client";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { debounce } from "@/lib/debounce";
import { CSSProperties, memo, useState } from "react";
import { PRE_DEFINED_BUILDING_COLORS } from "../../constants";
import { IBuilding } from "../../types";

interface BuildingItemProps {
  data: {
    createBuilding: () => void;
    updateBuilding: (id: string, building: Partial<IBuilding>) => void;
    duplicateBuilding: (id: string) => void;
    deleteBuilding: (id: string) => void;
    buildings: IBuilding[];
  };
  index: number;
  style?: CSSProperties;
}
const BuildingItem = memo(function BuildingItem({
  data,
  index,
  style,
}: BuildingItemProps) {
  const { buildings, deleteBuilding, duplicateBuilding, updateBuilding } = data;
  const buildingData = buildings[index];

  const [floors, setFloors] = useState(buildingData.noOfFloor);

  const [debounceChangeNoOfFloor] = useState(() =>
    debounce(updateBuilding, 500)
  );

  const handleChangeFloor = (value: number) => {
    setFloors(value);
    debounceChangeNoOfFloor(buildingData.id, {
      ...buildingData,
      noOfFloor: value,
    });
  };

  return (
    <div
      data-cy="BuildingItem"
      className="my-2"
      style={style}
      data-id={buildingData.id}
    >
      <div className="flex justify-between align-center">
        <p>{buildingData.name}</p>
        <div className="flex gap-2">
          <Button
            onClick={() => deleteBuilding(buildingData.id)}
            size="sm"
            title={`Delete ${name}`}
            variant="ghost"
          >
            🗑️
          </Button>
          <Button
            onClick={() => duplicateBuilding(buildingData.id)}
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
                max={10}
                inputMode="decimal"
                value={floors}
                className="border w-full rounded-sm px-2"
                onChange={(evt) =>
                  handleChangeFloor(+evt.currentTarget.value || 1)
                }
              />
            </div>
          </div>
          <div>
            <Slider
              defaultValue={[buildingData.noOfFloor]}
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
              onChange={(e) =>
                updateBuilding(buildingData.id, {
                  ...buildingData,
                  color: e.target.value,
                })
              }
              value={buildingData.color}
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
