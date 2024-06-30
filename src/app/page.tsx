import SideBar from "./_components/organisims/side-bar";
import ImageDisplay from "@/app/_components/organisims/gallery-display";
import type { User } from "@/app/constants/types";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/server/auth";
import AddPicture from "@/app/_components/page/add-picture";
import { ComponentTitle } from "@/app/_components/molecules/component-title";

export default async function Home() {
  const session: {
    user: User;
  } | null = await getServerSession(authOptions);

  return (
    <main className="flex h-full w-full bg-background text-light">
      <div className="sidebar flex w-1/4 flex-col">
        <SideBar />
      </div>
      <div className="content m-10 p-10 w-screen">
        <div className="my-4 flex justify-between">
          {session ? (
              <ComponentTitle title="My Store" subTitle="My recent uploads" />
          ) : (
              <ComponentTitle title="Gallery" subTitle="Community Gallery" />
          )}
          <div>
            <AddPicture/>
          </div>
        </div>
          <ImageDisplay />
      </div>
    </main>
  );
}