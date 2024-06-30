'use client'
import { api } from "@/app/utils/api";

const usePosts = () => {
 const { data: posts, isLoading } = api.post.getAll.useQuery();

    return {posts, isLoading};
}


export default usePosts;