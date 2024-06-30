/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
'use client'
import Image from "next/image";
import Typography from "@/app/_components/atoms/typography";
import type { ImageData } from "@/app/constants/types";
import usePosts from "@/app/lib/hooks/usePosts";
import { useState } from "react";

export default function ImageCard({
  image
}: {image: ImageData, onClick?: () => void}) {
  const {like, unlike}  = usePosts();
  const postId = image.id;

  const [isLiked, setIsLiked] = useState(image.likedByUser);

  function handleClick() {
    if(isLiked){
      setIsLiked(false);
      unlike.mutate({ postId });
    }else{
      setIsLiked(true);
      like.mutate({ postId });
    }
  }

  return (
    <div className="group relative h-64 w-64 overflow-hidden rounded-lg">
      <Image
        src={image.imageUrl}
        alt="GPT bot reading"
        className="h-full w-full rounded-lg"
        height={260}
        width={266}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 flex flex-col justify-between p-4">
          <div className="flex items-center">
            <div className="flex h-8 w-8 mr-1 items-center justify-center rounded-full bg-secondary py-2 text-sm font-bold text-light">
              {image.author.name?.charAt(0)}
            </div>
            <Typography type="helper"> By {image.author.name}</Typography>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between pr-2">
              <Typography type="primary">
                {image.description}
              </Typography>
              <svg
                className={
                  "h-6 w-6 flex-shrink-0 cursor-pointer border-primary hover:cursor-pointer" +
                  (isLiked
                    ? " fill-secondary"
                    : "text-white opacity-50 hover:fill-secondary")
                }
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => handleClick()}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="line-clamp-1">
              <Typography type="secondary">{image.description}</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
