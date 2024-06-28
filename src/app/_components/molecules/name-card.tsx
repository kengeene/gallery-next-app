import type { User } from "@/app/constants/types";

export default function NameCard({ user }: { user: User }) {
  return (
    <div className="mb-4 flex items-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-lg font-bold text-light">
        {user.name.charAt(0)}
      </div>
      <div className="ml-3">
        <p className="text-base text-light">{user.name}</p>
        <p className="text-sm text-gray-400">Joined for 10h / +100 Likes</p>
      </div>
    </div>
  );
}
