import ImageDisplay from "@/app/_components/organisims/gallery-display";
import AddPost from "@/app/_components/page/add-post";
import { ComponentTitle } from "@/app/_components/molecules/component-title";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/server/auth";
import type { UserSession } from "@/app/constants/types";

export default async function Home() {
  const session: UserSession = await getServerSession(authOptions);
  return (
    <div>
      <div className="my-4 flex justify-between">
        <ComponentTitle title="My Store" subTitle="My recent uploads" />
        <div>
          <AddPost />
        </div>
      </div>
      <ImageDisplay authorId={session?.user.id} />
    </div>
  );
}