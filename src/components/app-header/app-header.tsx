interface AppHeaderProps {}
export default async function AppHeader(props: AppHeaderProps) {
  return (
    <header className="bg-gray-300 py-4">
      <div className="container mx-auto">
        <p className="font-semibold text-lg">City Builder</p>
      </div>
    </header>
  );
}
