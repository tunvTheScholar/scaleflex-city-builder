import { useQuery } from "@tanstack/react-query";
import { getForecast } from "./get-forecast";
import { IGetForecastArgs } from "./types";

export const useGetForecast = (args: IGetForecastArgs) =>
  useQuery({
    queryKey: ["getForecast", args],
    queryFn: () => getForecast(args),
  });
