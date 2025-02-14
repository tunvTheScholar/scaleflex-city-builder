export interface IBuilding {
  id: string;
  noOfFloor: number;
  name?: string;
  color?: string;
}

export interface IBuildingData {
  buildings: IBuilding[];
}
