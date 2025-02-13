interface AppLayoutProps {
  children: React.ReactNode;
}
export default async function AppLayout({ children }: AppLayoutProps) {
  return <div data-cy="AppLayout">{children}</div>;
}
