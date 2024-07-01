'use client'
import { api } from "@/app/utils/api";

const usePosts = () => {
 const { data, isLoading }= api.post.getAll.useQuery();
 const { data: myPosts, isLoading: isLoadingMyPosts } = api.post.get.useQuery();
  const create = api.post.create.useMutation();
  const like = api.post.like.useMutation();
  const unlike = api.post.unlike.useMutation();

   return {
    posts: data ?? [], // Default to an empty array if posts is undefined
    myPosts: myPosts ?? [], // Default to an empty array if posts is undefined
    isLoading,
    create,
    like,
    unlike
  };
}


export default usePosts;