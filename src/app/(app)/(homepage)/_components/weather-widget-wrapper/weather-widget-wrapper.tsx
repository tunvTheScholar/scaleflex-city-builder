"use client";

import WeatherWidget from "@/components/weather-widget";
import { useNavigatorGeolocation } from "@/hooks/use-navigator-geolocation";
import {
  weathercodeToDescriptions,
  weatherCodeToIcon,
} from "@/services/open-meteo/rest/v1/get-forecast/mapping-weathercode";
import { useGetForecast } from "@/services/open-meteo/rest/v1/get-forecast/use-get-forecast";

interface WeatherWidgetWrapperProps {}
export default function WeatherWidgetWrapper(props: WeatherWidgetWrapperProps) {
  const { location, loading } = useNavigatorGeolocation();

  const { data, isPending } = useGetForecast({
    latitude: location.latitude,
    longitude: location.longitude,
  });

  if (loading || isPending) {
    return (
      <div
        data-cy="WeatherWidget-Loading"
        className="h-10 w-20 rounded-sm bg-gray-900 animate-pulse absolute top-4 right-4 z-10"
      ></div>
    );
  }

  return (
    <WeatherWidget
      description={weathercodeToDescriptions(data?.current.weathercode)}
      icon={weatherCodeToIcon(data?.current.weathercode)}
      tempUnit={data?.current_units.temperature_2m}
      temperature={data?.current.temperature_2m}
    />
  );
}
