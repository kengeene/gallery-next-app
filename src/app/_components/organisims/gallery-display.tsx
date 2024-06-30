"use client";
import ImageCard from '@/app/_components/molecules/image-card'
import usePosts from '@/app/lib/hooks/usePosts';

export default function GalleryDisplay() {
   const {posts, isLoading} = usePosts();

  return (
    <>
      {isLoading ? 'Loading...' : (posts && posts.length > 0 ? posts.map((image, index) => (
        <ImageCard key={index} images={image} />
      )) : 'No posts available')}
    </>
  );
}
