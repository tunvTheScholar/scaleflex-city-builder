import { useLocalStorage } from "@/hooks/use-local-storage";
import { useEffect, useState } from "react";

import { LOCAL_STORAGE_KEYS } from "@/constants/local-storage-keys";

export interface ILocation {
  longitude: number;
  latitude: number;
  name?: string;
}

const DEFAULT_LOCATION: ILocation = {
  longitude: 122.4194,
  latitude: 37.7749,
};

const REQUEST_TIMEOUT_MS = 10000; // 10s

export const useNavigatorGeolocation = (defaultLocation = DEFAULT_LOCATION) => {
  const [location, setLocation] = useLocalStorage<ILocation>(
    LOCAL_STORAGE_KEYS.LOCATION,
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
