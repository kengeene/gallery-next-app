"use client";

import React from "react";
import ImageCard from "@/app/_components/molecules/image-card";
import usePosts from "@/app/lib/hooks/usePosts";
import Loading from "@/app/_components/atoms/loading";
import type { ImageData } from "@/app/constants/types";

export default function GalleryDisplay() {
  const { posts, isLoading } = usePosts();

  return (
    <div
      className={
        isLoading ? "flex flex-row justify-center" : "grid grid-cols-3 gap-3"
      }
    >
      {isLoading ? (
        <Loading variant="secondary" />
      ) : (
        posts?.map((image: ImageData) => (
          <ImageCard key={image.id} image={image} />
        ))
      )}
    </div>
  );
}
