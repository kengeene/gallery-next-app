import ImageDisplay from "@/app/_components/organisims/gallery-display";
import AddPost from "@/app/_components/page/add-post";
import { ComponentTitle } from "@/app/_components/molecules/component-title";

export default async function page() {
  return (
    <div>
      <div className="my-4 flex justify-between">
        <ComponentTitle title="Gallery" subTitle="Community Gallery" />
        <div>
          <AddPost />
        </div>
      </div>
      <ImageDisplay />
    </div>
  );
}