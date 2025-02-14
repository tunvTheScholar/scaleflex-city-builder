"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import BuildingList from "./buiding-list";
import RenderBuilding from "./render-building";

interface BuildingBuilderProps {}
export default function BuildingBuilder(props: BuildingBuilderProps) {
  const buildingBuilderRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const currentRef = buildingBuilderRef.current;
    if (!currentRef) return;

    setWidth(currentRef.clientWidth);
    setHeight(currentRef.clientHeight);

    const handleResize = () => {
      setWidth(currentRef.clientWidth);
      setHeight(currentRef.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isValidRenderSize = !!width && !!height;

  return (
    <div
      ref={buildingBuilderRef}
      data-cy="BuildingBuilder"
      className={cn("w-full h-full relative", {})}
    >
      {isValidRenderSize ? (
        <div className="w-full h-full flex">
          <div data-cy="BuildingBuilder-LeftContainer" className="w-1/3 p-4">
            <BuildingList />
          </div>
          <div data-cy="BuildingBuilder-RightContainer" className="w-2/3">
            <RenderBuilding />
          </div>
        </div>
      ) : (
        <div className="w-full h-full bg-gray-200 animate-pulse"></div>
      )}
    </div>
  );
}
