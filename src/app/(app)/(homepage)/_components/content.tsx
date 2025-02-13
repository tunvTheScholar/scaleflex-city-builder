"use client";

import { useGetForecast } from "@/modules/open-meteo/hooks/use-get-forecast";

interface ContentProps {}
export default function Content(props: ContentProps) {
  const { data } = useGetForecast();
  console.log("🚀 ~ Content ~ data:", data);
  return <>Content</>;
}
