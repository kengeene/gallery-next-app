import SideBar from "./_components/organisims/side-bar";
import CustomButton from '@/app/_components/atoms/buttons'
import ImageDisplay from "@/app/_components/organisims/gallery-display";
import Typography from "@/app/_components/atoms/typography";

export default function Home() {
  return (
    <main className="flex h-full bg-background text-light">
      <div className="sidebar flex w-1/4 flex-col">
        <SideBar />
      </div>
      <div className="content m-10 p-10">
        <div className="flex justify-between my-4">
          <div>
            <Typography type="large">Gallery</Typography>
            <Typography type="secondary">Community Gallery</Typography>
          </div>
          <div>
            <CustomButton buttonType="secondary"> Add Picture</CustomButton>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <ImageDisplay />
        </div>
      </div>
    </main>
  );
}