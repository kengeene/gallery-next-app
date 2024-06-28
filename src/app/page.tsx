import SideBar from "./_components/organisims/side-bar";
import CustomButton from '@/app/_components/atoms/buttons'
import ImageDisplay from "@/app/_components/organisims/gallery-display";
import Typography from "@/app/_components/atoms/typography";
import type { User } from "@/app/constants/types";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/server/auth";
import AddPicture from "@/app/_components/page/add-picture";
export default async function Home() {
  const session: {
    user: User;
  } | null = await getServerSession(authOptions);
  return (
    <main className="flex h-full bg-background text-light">
      <div className="sidebar flex w-1/4 flex-col">
        <SideBar />
      </div>
      <div className="content m-10 p-10">
        <div className="my-4 flex justify-between">
          {session ? (
            <div>
              <Typography type="large">My Store</Typography>
              <Typography type="secondary">My recent uploads</Typography>
            </div>
          ) : (
            <div>
              <Typography type="large">Gallery</Typography>
              <Typography type="secondary">Community Gallery</Typography>
            </div>
          )}
          <div>
            <AddPicture/>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <ImageDisplay />
        </div>
      </div>
    </main>
  );
}