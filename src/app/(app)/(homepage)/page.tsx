import AppHeader from "@/components/app-header/app-header";
import WeatherWidgetWrapper from "./_components/weather-widget-wrapper";
import BuildingBuilder from "./_components/building-builder";

interface AppHomePageProps {}
export default async function AppHomePage(props: AppHomePageProps) {
  return (
    <main data-cy="HomePage" className="relative flex flex-col w-full h-svh">
      <AppHeader />
      <div data-cy="HomePage-Content" className="relative flex-[1]">
        <WeatherWidgetWrapper />
        <BuildingBuilder />
      </div>
    </main>
  );
}
