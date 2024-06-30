import SideBar from "@/app/_components/organisims/side-bar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <main className="flex h-full w-full bg-background text-light">
      <div className="sidebar flex w-1/4 flex-col">
        <SideBar />
      </div>
      <div className="content m-10 p-10 w-screen">
      {children}
      </div>
    </main>
  );
}