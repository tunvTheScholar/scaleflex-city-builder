import { OPEN_METEO_ENDPOINTS_V1 } from "../endpoints";
import { IGetForecastArgs, IGetForecastResponse } from "./types";

export async function getForecast({
  latitude,
  longitude,
  current = "temperature_2m,weathercode",
  temperature_unit = "celsius",
}: IGetForecastArgs) {
  if (!OPEN_METEO_ENDPOINTS_V1.FORECAST)
    throw new Error("Please specify a valid url");

  try {
    const searchParams = new URLSearchParams({
      longitude: `${longitude}`,
      latitude: `${latitude}`,
      current,
      temperature_unit,
    });

    const res = await fetch(
      `${OPEN_METEO_ENDPOINTS_V1.FORECAST}?${searchParams.toString()}`
    );

    if (!res.ok) throw new Error(`Fail to get forecast`);

    return (await res.json()) as IGetForecastResponse;
  } catch (error) {
    console.log("🚀 ~ error:", error);
    throw error;
  }
}
