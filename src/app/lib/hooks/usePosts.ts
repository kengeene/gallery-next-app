'use client'
import { api } from "@/app/utils/api";

const usePosts = () => {
 const { data: posts, isLoading } = api.post.getAll.useQuery();
  const create = api.post.create.useMutation();
  const like = api.post.like.useMutation();
  const unlike = api.post.unlike.useMutation();
    return {posts, isLoading, create, like, unlike };
}


export default usePosts;