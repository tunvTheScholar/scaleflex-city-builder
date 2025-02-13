import { useQuery } from "@tanstack/react-query";
import { getForecast } from "../services/rest/v1/get-forecast";
import { IGetForecastArgs } from "../services/rest/v1/get-forecast/types";

export const useGetForecast = (args: IGetForecastArgs) =>
  useQuery({
    queryKey: ["getForecast", args],
    queryFn: () => getForecast(args),
  });
