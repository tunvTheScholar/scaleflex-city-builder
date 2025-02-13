import { useQuery } from "@tanstack/react-query";
import { getForecast } from "../services/rest/v1/get-forecast";

export const useGetForecast = () =>
  useQuery({
    queryKey: ["getForecast"],
    queryFn: getForecast,
  });
