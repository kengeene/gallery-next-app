"use client";
import ImageCard from '@/app/_components/molecules/image-card'
import usePosts from '@/app/lib/hooks/usePosts';
import Loading from '@/app/_components/atoms/loading';
export default function GalleryDisplay() {
   const {posts, isLoading} = usePosts();

  return (
    <div className={isLoading ? 'flex flex-row justify-center':"grid grid-cols-3 gap-3"}>
      {isLoading ? (
        <Loading variant={'secondary'} />
      ) : (
        posts?.map((image) => (
          <ImageCard key={image.id} images={image} />
        ))
      )}
    </div>
  );
}

