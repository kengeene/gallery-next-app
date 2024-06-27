import ImageCard from "../molecules/image-card";

export default function ImagePost() {
  return (
    <div className="rounded-lg bg-background p-4">
      <div className="mb-4 flex items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-lg font-bold text-light">
          P
        </div>
        <div className="ml-3">
          <p className="text-base text-light">Patrick Chameleon</p>
          <p className="text-sm text-gray-400">Joined for 10h / +100 Likes</p>
        </div>
      </div>
    <ImageCard/>
    </div>
  );
}
