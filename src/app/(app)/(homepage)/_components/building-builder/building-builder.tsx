"use client";

import { cn } from "@/lib/utils";
import { useRef } from "react";
import BuildingList from "./buiding-list";
import RenderBuildings from "./render-buildings";

interface BuildingBuilderProps {}
export default function BuildingBuilder(props: BuildingBuilderProps) {
  const buildingBuilderRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={buildingBuilderRef}
      data-cy="BuildingBuilder"
      className={cn("w-full h-full relative", {})}
    >
      <div className="w-full h-full flex">
        <div data-cy="BuildingBuilder-LeftContainer" className="w-1/3 p-4">
          <BuildingList />
        </div>
        <div data-cy="BuildingBuilder-RightContainer" className="w-2/3">
          <RenderBuildings />
        </div>
      </div>
    </div>
  );
}
