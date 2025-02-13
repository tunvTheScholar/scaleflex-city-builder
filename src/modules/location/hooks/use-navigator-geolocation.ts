import { useLocalStorage } from "@/hooks/use-local-storage";
import { useEffect, useState } from "react";
import { DEFAULT_LOCATION, LOCATION_LOCAL_STORAGE_KEY } from "../constants";
import { ILocation } from "../types";

const REQUEST_TIMEOUT_MS = 10000; // 10s

export const useNavigatorGeolocation = (defaultLocation = DEFAULT_LOCATION) => {
  const [location, setLocation] = useLocalStorage<ILocation>(
    LOCATION_LOCAL_STORAGE_KEY,
    defaultLocation
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!window.navigator) {
      console.error(`[ERROR]: Browser does not support`);
      return;
    }

    window.navigator.geolocation.getCurrentPosition(
      (currentPosition) => {
        setLocation({
          latitude: currentPosition.coords.latitude,
          longitude: currentPosition.coords.longitude,
        });
        setLoading(false);
      },
      ({ code, message }) => {
        console.log(`[ERROR]: ${message} - Code: ${code}`);
        setLoading(false);
      },
      { timeout: REQUEST_TIMEOUT_MS }
    );
  }, [setLocation]);

  return { location, loading };
};
