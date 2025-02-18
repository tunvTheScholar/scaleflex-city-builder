"use client";

import { LOCAL_STORAGE_KEYS } from "@/constants/local-storage-keys";
import { useLocalStorage } from "@/hooks/use-local-storage";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList } from "react-window";
import { IBuildingData } from "../types";
import RenderBuilding from "./render-building";

interface RenderBuildingsProps {}
export default function RenderBuildings(props: RenderBuildingsProps) {
  const [buildings] = useLocalStorage<IBuildingData>(
    LOCAL_STORAGE_KEYS.BUILDINGS,
    { buildings: [] }
  );

  return (
    <div data-cy="RenderBuildings" className="w-full h-full p-4">
      <AutoSizer>
        {({ height, width }) => (
          <FixedSizeList
            height={height}
            width={width}
            itemCount={buildings.buildings.length}
            itemSize={120}
            layout="horizontal"
            itemData={buildings.buildings}
          >
            {RenderBuilding}
          </FixedSizeList>
        )}
      </AutoSizer>
    </div>
  );
}
