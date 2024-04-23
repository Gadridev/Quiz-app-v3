import { useQueryClient, useQuery } from "react-query";
import { GetCurrentUser } from "../../../services/apiAuth";

function useMe() {
  const queryClient = useQueryClient();

  const { data: GetMe, isLoading } = useQuery({
    queryKey: ["me"],
    queryFn: GetCurrentUser,
    keepPreviousData: true,
    retry: false,
    refetchOnWindowFocus: false,
  });

  // Prefetch the "me" query data
  const prefetchMe = async () => {
    await queryClient.prefetchQuery(["me"], GetCurrentUser);
  };

  return {GetMe, isLoading, prefetchMe };
}

export default useMe;
