export default function NavigationBar() {
  return (
    <nav className="bg-background p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-lg font-bold text-light">
            P
          </div>
          <p className="ml-3 text-base text-light">Patrick Chameleon</p>
        </div>
        <div className="flex space-x-4">
          <button className="rounded-full bg-secondary px-4 py-2 text-light">
            Community
          </button>
          <button className="rounded-full bg-accent px-4 py-2 text-light">
            My Store
          </button>
        </div>
      </div>
    </nav>
  );
}
