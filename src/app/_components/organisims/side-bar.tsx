import CustomButton from '@/app/_components/atoms/buttons'
import NameCard from "@/app/_components/molecules/name-card";
import type { User } from '@/app/constants/types';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/server/auth";
import Navigation from '@/app/_components/organisims/navigation';

export default async function SideBar(){
  const session: {
    user: User
  } | null = await getServerSession(authOptions);

    return (
      <div className="flex h-full flex-col justify-between rounded-r-lg bg-primary p-4" w-min="297px">
        {/* <!-- Top section with navigation buttons --> */}
       <Navigation/>

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