import type { User } from "@/app/constants/types";

export default function NameCard({ user }: { user: User }) {
  return (
    <div className="mb-4 flex items-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-lg font-bold text-light">
        {user.name.charAt(0)}
      </div>
      <div className="ml-0.5">
        <p className="text-lg font-semibold leading-5">{user.name}</p>
        <p className="font-normal text-base leading-4">Joined for 10h / +100 Likes</p>
      </div>
    </div>
  );
}
