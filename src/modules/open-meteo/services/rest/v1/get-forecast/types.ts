export interface IGetForecastArgs {
  longitude: number;
  latitude: number;
  /**
   * Read more about the params
   * @see https://open-meteo.com/en/docs#current=
   */
  current?: string;
  temperature_unit?: string;
}

export interface IGetForecastResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: ICurrentUnits;
  current: ICurrentWeather;
}

export interface ICurrentUnits {
  time: string; // ISO 8601 format
  interval: string; // Measurement unit for interval (e.g., "seconds")
  temperature_2m: string; // Temperature unit (e.g., "°C" or "°F")
  weathercode: string; // Weather code type (e.g., "wmo code")
}

export interface ICurrentWeather {
  time: string; // ISO 8601 format timestamp
  interval: number; // Time interval in seconds
  temperature_2m: number; // Current temperature
  weathercode: number; // WMO weather code
}
