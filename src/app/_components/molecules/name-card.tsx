'use client'
import type { User } from "@/app/constants/types";
import useUser from "@/app/lib/hooks/useUser";
import {getTimeAgo} from "@/app/utils/time";
import Loading from "@/app/_components/atoms/loading";
import { NameIconLarge } from "@/app/_components/atoms/icons";

export default function NameCard({ user }: { user: User }) {
  const { user: userData, isLoading } =useUser();
  return (
    <div className="mb-4 flex items-center">
      <NameIconLarge name={user.name}/>
      <div className="ml-0.5">
        <p className="text-lg font-semibold leading-5">{user.name}</p>
        {
          isLoading ? <Loading variant="secondary"/> : <p className="font-normal text-base leading-4">Joined {getTimeAgo(userData?.createdAt)} / +{userData?.likes.length} Likes</p>
        }
      </div>
    </div>
  );
}
