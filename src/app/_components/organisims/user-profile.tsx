export default function UserProfile() {
  return (
    <div className="rounded-lg bg-background p-4">
      <div className="mb-4 flex items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-lg font-bold text-light">
          P
        </div>
        <div className="ml-3">
          <p className="text-base text-light">Patrick Chameleon</p>
          <p className="text-sm text-gray-400">Joined for 10h / +100 Likes</p>
        </div>
      </div>
      <div className="mb-2">
        <button className="mb-2 w-full rounded-full bg-secondary px-4 py-2 text-light">
          Community
        </button>
        <button className="w-full rounded-full bg-accent px-4 py-2 text-light">
          My Store
        </button>
      </div>
      <button className="mt-4 w-full rounded-full bg-accent px-4 py-2 text-light">
        Sign In
      </button>
    </div>
  );
}
