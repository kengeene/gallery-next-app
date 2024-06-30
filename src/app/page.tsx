import ImageDisplay from "@/app/_components/organisims/gallery-display";
import AddPicture from "@/app/_components/page/add-picture";
import { ComponentTitle } from "@/app/_components/molecules/component-title";

export default async function Home() {
  return (
      <div>
        <div className="my-4 flex justify-between">
          <ComponentTitle title="Gallery" subTitle="Community Gallery" />
          <div>
            <AddPicture/>
          </div>
        </div>
          <ImageDisplay />
      </div>
  );
}