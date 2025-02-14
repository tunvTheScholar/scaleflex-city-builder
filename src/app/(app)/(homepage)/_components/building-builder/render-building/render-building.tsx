"use client";

import { LOCAL_STORAGE_KEYS } from "@/constants/local-storage-keys";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { IBuildingData } from "../types";

interface RenderBuildingProps {}
export default function RenderBuilding(props: RenderBuildingProps) {
  const [buildings] = useLocalStorage<IBuildingData>(
    LOCAL_STORAGE_KEYS.BUILDINGS,
    { buildings: [] }
  );
  console.log("🚀 ~ RenderBuilding ~ buildings:", buildings);
  return (
    <div
      data-cy="RenderBuilding"
      className="w-full h-full relative bg-teal-100"
    >
      RenderBuilding
    </div>
  );
}
