"use client";

import { Button } from "@/components/ui/button";
import { useBuildings } from "@/hooks/use-building";
import memoize from "memoize-one";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList } from "react-window";
import { IBuilding } from "../types";
import BuildingItem from "./building-item";

const createMemoBuildingsData = memoize(
  (
    buildings: IBuilding[],
    createBuilding: () => void,
    updateBuilding: (id: string, building: Partial<IBuilding>) => void,
    duplicateBuilding: (id: string) => void,
    deleteBuilding: (id: string) => void
  ) => ({
    buildings,
    createBuilding,
    updateBuilding,
    duplicateBuilding,
    deleteBuilding,
  })
);

interface BuildingListProps {}
export default function BuildingList(props: BuildingListProps) {
  const {
    buildings,
    createBuilding,
    deleteBuilding,
    duplicateBuilding,
    updateBuilding,
  } = useBuildings();

  const memoData = createMemoBuildingsData(
    buildings,
    createBuilding,
    updateBuilding,
    duplicateBuilding,
    deleteBuilding
  );

  return (
    <div data-cy="BuildingList" className="rounded-sm shadow p-4 flex flex-col">
      <div data-cy="BuildingList-Header" className="border-b pb-4">
        <h2 className="font-semibold">Building List</h2>
      </div>
      <div
        data-cy="BuildingList-Content"
        className="h-[500px] overflow-y-auto py-4"
      >
        {buildings.length > 0 ? (
          <AutoSizer>
            {({ height, width }) => (
              <FixedSizeList
                height={height}
                width={width}
                className="list"
                itemCount={buildings.length}
                itemSize={120}
                itemData={memoData}
              >
                {BuildingItem}
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
        <Button onClick={createBuilding}>Create new house</Button>
      </div>
    </div>
  );
}
