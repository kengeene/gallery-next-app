"use client";

import UseUserData from "@/app/lib/hooks/UseUserData";
import ImageCard from '@/app/_components/molecules/image-card'

export default function GalleryDisplay() {
  const { userData } = UseUserData();

  return (
    <>
      {userData.map((data, index) => (
        <ImageCard key={index} data={data} />
      ))}
    </>
  );
}
