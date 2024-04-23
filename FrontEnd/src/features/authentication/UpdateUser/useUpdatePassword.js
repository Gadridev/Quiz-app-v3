import { useMutation, useQueryClient } from "react-query";
import { UpdatePasswordUser } from "../../../services/apiAuth";
import toast from "react-hot-toast";

function useUpdatePassword() {
  const queryClient = useQueryClient();

  const { mutateAsync: UpdatePassword, isLoading } = useMutation({
    mutationFn: UpdatePasswordUser,
    onSuccess: (data) => {
      // Optionally, you can update the cache with the updated user data
      queryClient.setQueryData(["me"], data.user);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { UpdatePassword, isLoading };
}

export default useUpdatePassword;
