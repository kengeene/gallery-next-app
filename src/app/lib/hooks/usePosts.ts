'use client'
import { api } from "@/app/utils/api";

const usePosts = () => {
 const { data: posts, isLoading } = api.post.getAll.useQuery();
  const create = api.post.create.useMutation();

    return {posts, isLoading, create};
}


export default usePosts;