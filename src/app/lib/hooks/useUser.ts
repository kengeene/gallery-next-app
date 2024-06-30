'use client'
import { api } from "@/app/utils/api";

const useUser = () => {
 const { data: user, isLoading } = api.user.get.useQuery();
 console.log(user);
  const create = api.post.create.useMutation();

    return {user, isLoading, create};
}


export default useUser;