import CustomButton from '@/app/_components/atoms/buttons'
import NameCard from "@/app/_components/molecules/name-card";
import type { User } from '@/app/constants/types';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/server/auth";
import Navigation from '@/app/_components/organisims/navigation';
import Link from 'next/link';

export default async function SideBar(){
  const session: {
    user: User
  } | null = await getServerSession(authOptions);

    return (
      <div className="flex h-full flex-col justify-between rounded-r-lg bg-primary p-4" w-min="297px">
        {/* <!-- Top section with navigation buttons --> */}
       <Navigation session={session}/>

        {/* <!-- Bottom section with Sign In button --> */}
        <div className="my-5 py-5">
          {session ? (
            <NameCard user={session.user} />
          ) : (
            <CustomButton buttonType="accent"><Link href="/auth/signin">Sign In</Link></CustomButton>
          )}
        </div>
      </div>
    );
}