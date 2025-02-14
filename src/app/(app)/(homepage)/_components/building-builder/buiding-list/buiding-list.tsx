"use client";

import { Button } from "@/components/ui/button";
import { LOCAL_STORAGE_KEYS } from "@/constants/local-storage-keys";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { generateUniqueId } from "@/lib/generate-unique-id";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList } from "react-window";
import { IBuilding, IBuildingData } from "../types";
import BuildingItem from "./building-item";

interface BuildingListProps {}
export default function BuildingList(props: BuildingListProps) {
  const [buildings, setBuildings] = useLocalStorage<IBuildingData>(
    LOCAL_STORAGE_KEYS.BUILDINGS,
    { buildings: [] }
  );

  const handleCreateNewBuilding = () => {
    const noOfBuildings = buildings.buildings.length;
    const name = `House ${noOfBuildings + 1}`;
    const id = generateUniqueId();

    const newHouse: IBuilding = {
      id,
      noOfFloor: 1,
      name,
      color: "lightgray",
    };

    setBuildings({
      buildings: [...buildings.buildings, newHouse],
    });
  };

  const handleDeleteBuilding = (id: string) => {
    setBuildings({
      buildings: buildings.buildings.filter((building) => building.id !== id),
    });
  };

  const handleChangeBuildingColor = (id: string, color: string) => {
    const newBuildings = buildings.buildings.map((b) =>
      b.id === id ? { ...b, color } : b
    );
    setBuildings({ buildings: newBuildings });
  };

  const handleChangeBuildingFloors = (id: string, floors: number) => {
    const newBuildings = buildings.buildings.map((b) =>
      b.id === id ? { ...b, noOfFloor: floors } : b
    );

    setBuildings({ buildings: newBuildings });
  };

  const handleDuplicateBuilding = (id: string) => {
    const building = buildings.buildings.find((b) => b.id === id);
    if (!building) {
      return;
    }
    const uniqueId = generateUniqueId();

    const newBuildings = [
      ...buildings.buildings,
      { ...building, name: `Duplicate ${building.name}`, id: uniqueId },
    ];

    setBuildings({ buildings: newBuildings });
  };

  const hasBuilding = buildings.buildings.length > 0;

  return (
    <div data-cy="BuildingList" className="rounded-sm shadow p-4 flex flex-col">
      <div data-cy="BuildingList-Header" className="border-b pb-4">
        <h2 className="font-semibold">Building List</h2>
      </div>
      <div
        data-cy="BuildingList-Content"
        className="h-[500px] overflow-y-auto py-4"
      >
        {hasBuilding ? (
          <AutoSizer>
            {({ height, width }) => (
              <FixedSizeList
                height={height}
                width={width}
                className="list"
                itemCount={buildings.buildings.length}
                itemSize={120}
                itemData={buildings.buildings}
              >
                {({ index, data, style }) => (
                  <BuildingItem
                    {...data[index]}
                    style={style}
                    onDeleteBuilding={handleDeleteBuilding}
                    onChangeColor={handleChangeBuildingColor}
                    onDuplicateBuilding={handleDuplicateBuilding}
                    onChangeNoOfFloors={handleChangeBuildingFloors}
                  />
                )}
              </FixedSizeList>
            )}
          </AutoSizer>
        ) : (
          <div>
            <p>Try Create new House</p>
          </div>
        )}
      </div>
      <div data-cy="BuildingList-Footer" className="border-t pt-4">
        <Button onClick={handleCreateNewBuilding}>Create new house</Button>
      </div>
    </div>
  );
}
