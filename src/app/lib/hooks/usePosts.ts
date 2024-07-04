"use client";
import { api } from "@/app/utils/api";

const usePosts = () => {
  const utils = api.useUtils();

  const { data, isLoading } = api.post.getAll.useQuery(undefined, {
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });
  const { data: myPosts, isLoading: isLoadingMyPosts } = api.post.get.useQuery(
    undefined,
    {
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
    },
  );

  const create = api.post.create.useMutation({
    onSuccess: async() => {
      // Invalidate all queries in the post router
      await utils.post.invalidate();
    },
  });

  const like = api.post.like.useMutation({
    onSuccess: async() => {
      // Invalidate the specific post that was liked
      await utils.post.getAll.invalidate();
      await utils.post.get.invalidate();
      // If you have a getById query, you could invalidate it specifically:
      // utils.post.getById.invalidate({ id: variables.postId });
    },
  });

  const unlike = api.post.unlike.useMutation({
    onSuccess: async() => {
      // Invalidate the specific post that was unliked
      await utils.post.getAll.invalidate();
      await utils.post.get.invalidate();
      // If you have a getById query, you could invalidate it specifically:
      // utils.post.getById.invalidate({ id: variables.postId });
    },
  });

  return {
    posts: data ?? [],
    myPosts: myPosts ?? [],
    isLoading,
    isLoadingMyPosts,
    create,
    like,
    unlike,
  };
};

export default usePosts;
