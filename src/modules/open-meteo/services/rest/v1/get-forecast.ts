export async function getForecast() {
  try {
    const res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=37.7749&longitude=-122.4194&current=temperature_2m,weathercode&temperature_unit=celsius"
    );

    if (!res.ok) throw new Error(`Fail to get forecast`);

    return await res.json();
  } catch (error) {
    throw error;
  }
}
