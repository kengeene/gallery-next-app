// import Link from "next/link";

// import { CreatePost } from "@/app/_components/create-post";
// import { getServerAuthSession } from "@/server/auth";
// import { api } from "@/trpc/server";
import ImagePost from "./_components/organisims/image-post";
import NavigationBar from "./_components/organisims/navigation-bar";
import SideBar from "./_components/organisims/side-bar";
import UserProfile from "./_components/organisims/user-profile";


import CustomButton from '@/app/_components/atoms/buttons'

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });
  // const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen bg-background text-light">
      {/* <div classNameName="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <NavigationBar/>
        <UserProfile/>
        <ImagePost/>
      </div> */}
      <div className="sidebar flex w-1/4 flex-col">
        <SideBar/>
      </div>
      <div className="content w-3/4"></div>
    </main>
  );
}

// async function CrudShowcase() {
//   const session = await getServerAuthSession();
//   if (!session?.user) return null;

//   const latestPost = await api.post.getLatest();

//   return (
//     <div classNameName="w-full max-w-xs">
//       {latestPost ? (
//         <p classNameName="truncate">Your most recent post: {latestPost.name}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}

//       <CreatePost />
//     </div>
//   );
// }
