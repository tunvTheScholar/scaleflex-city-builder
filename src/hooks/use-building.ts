import { useLocalStorage } from "@/hooks/use-local-storage";
import { LOCAL_STORAGE_KEYS } from "@/constants/local-storage-keys";
import { generateUniqueId } from "@/lib/generate-unique-id";
import { useCallback, useMemo } from "react";
import {
  IBuilding,
  IBuildingData,
} from "@/app/(app)/(homepage)/_components/building-builder/types";

export function useBuildings() {
  const [buildings, setBuildings] = useLocalStorage<IBuildingData>(
    LOCAL_STORAGE_KEYS.BUILDINGS,
    { buildings: [] }
  );

  const createBuilding = useCallback(() => {
    const name = `House ${buildings.buildings.length + 1}`;
    const id = generateUniqueId();
    const newBuilding: IBuilding = {
      id,
      noOfFloor: 1,
      name,
      color: "lightgray",
    };

    setBuildings((prev) => ({ buildings: [...prev.buildings, newBuilding] }));
  }, [buildings.buildings, setBuildings]);

  const updateBuilding = useCallback(
    (id: string, updates: Partial<IBuilding>) => {
      setBuildings((prev) => ({
        buildings: prev.buildings.map((b) =>
          b.id === id ? { ...b, ...updates } : b
        ),
      }));
    },
    [setBuildings]
  );

  const deleteBuilding = useCallback(
    (id: string) => {
      setBuildings((prev) => ({
        buildings: prev.buildings.filter((b) => b.id !== id),
      }));
    },
    [setBuildings]
  );

  const duplicateBuilding = useCallback(
    (id: string) => {
      const building = buildings.buildings.find((b) => b.id === id);
      if (!building) return;

      setBuildings((prev) => ({
        buildings: [
          ...prev.buildings,
          {
            ...building,
            id: generateUniqueId(),
            name: `Duplicate ${building.name}`,
          },
        ],
      }));
    },
    [buildings.buildings, setBuildings]
  );

  return {
    buildings: buildings.buildings,
    createBuilding,
    updateBuilding,
    deleteBuilding,
    duplicateBuilding,
  };
}
