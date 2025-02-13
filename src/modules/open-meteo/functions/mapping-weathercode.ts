import { WEATHERCODE_TO_DESCRIPTION, WEATHERCODE_TO_ICON } from "../constants";

/**
 *
 * @param weathercode base on wmo code
 * @see https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTM
 */
export function weatherCodeToIcon(weathercode?: number) {
  if (!weathercode) {
    return "**";
  }
  return WEATHERCODE_TO_ICON[weathercode] || "��"; // default icon: question mark
}

export function weathercodeToDescriptions(weathercode?: number) {
  if (!weathercode) {
    return "**";
  }

  return WEATHERCODE_TO_DESCRIPTION[weathercode] || "*";
}
