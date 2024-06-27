import SideBar from "./_components/organisims/side-bar";
import CustomButton from '@/app/_components/atoms/buttons'
import ImageDisplay from "@/app/_components/organisims/gallery-display";
import Typography from "@/app/_components/atoms/typography";

export default function Home() {
  return (
    <main className="flex bg-background text-light h-full">
      <div className="sidebar flex w-1/4 flex-col">
        <SideBar />
      </div>
      <div className="content w-3/4 p-10">
        <div className="grid grid-flow-row-dense grid-cols-4">
          <div className="col-span-3">
            <Typography type="large">Gallery</Typography>
            <Typography type="secondary">Community Gallery</Typography>
          </div>
          <CustomButton buttonType="secondary"> Add Picture</CustomButton>
        </div>
        <ImageDisplay />
      </div>
    </main>
  );
}