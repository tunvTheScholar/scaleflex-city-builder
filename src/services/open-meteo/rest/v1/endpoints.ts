const OPEN_METEO_API_URL =
  process.env.NEXT_PUBLIC_OPEN_METEO_API_URL || undefined;

export const OPEN_METEO_ENDPOINTS_V1 = {
  FORECAST: OPEN_METEO_API_URL
    ? `${OPEN_METEO_API_URL}/v1/forecast`
    : undefined,
};
