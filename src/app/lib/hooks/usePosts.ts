import { api } from "@/app/utils/api";

const usePosts = () => {
  const { data, isLoading, refetch } = api.post.getAll.useQuery(undefined, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
  const { data: myPosts, isLoading: isLoadingMyPosts } = api.post.get.useQuery(
    undefined,
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  );

  const create = api.post.create.useMutation({
    onSettled: async() => {
      // refetch posts after create
      await refetch();
    },
  });

  const like = api.post.like.useMutation({
    onSettled: async() => {
      // refetch posts after like
      await refetch();
    },
  });

  const unlike = api.post.unlike.useMutation({
    onSettled: async () => {
      // refetch posts after unlike
      await refetch();
    },
  });

  return {
    posts: data ?? [],
    myPosts: myPosts ?? [],
    loading: isLoading || isLoadingMyPosts,
    create,
    like,
    unlike,
  };
};

export default usePosts;
