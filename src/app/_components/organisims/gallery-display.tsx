"use client";

import UseUserData from "@/app/lib/hooks/UseUserData";
import ImageCard from '@/app/_components/molecules/image-card'

export default function GalleryDisplay() {
  const { userData } = UseUserData();

  return (
    <div className="m-10 grid grid-cols-3 gap-3">
      {userData.map((data, index) => (
        <ImageCard key={index} data={data} />
      ))}
    </div>
  );
}
