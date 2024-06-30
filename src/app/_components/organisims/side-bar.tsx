import CustomButton from '@/app/_components/atoms/buttons'
import NameCard from "@/app/_components/molecules/name-card";
import type { User } from '@/app/constants/types';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/server/auth";

export default async function SideBar(){
  const session: {
    user: User
  } | null = await getServerSession(authOptions);

    return (
      <div className="flex h-full flex-col justify-between rounded-r-lg bg-primary p-4" w-min="297px">
        {/* <!-- Top section with navigation buttons --> */}
        <div className="flex h-1/2 flex-col justify-center">
          <CustomButton buttonType="secondary">Community</CustomButton>
          <CustomButton buttonType="primary">My Store</CustomButton>
        </div>

        {/* <!-- Bottom section with Sign In button --> */}
        <div className="my-5 py-5">
          {session ? (
            <NameCard user={session.user} />
          ) : (
            <CustomButton buttonType="accent">Sign In</CustomButton>
          )}
        </div>
      </div>
    );
}