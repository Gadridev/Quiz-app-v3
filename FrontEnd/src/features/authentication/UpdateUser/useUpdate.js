import { useMutation, useQueryClient } from "react-query";
import { UpdateUserData } from "../../../services/apiAuth";
import toast from "react-hot-toast";

function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutateAsync: UpdateData, isLoading } = useMutation({
    mutationFn: UpdateUserData,
    onSuccess: (data) => {
      toast.success("User account successfully updated");
      // Optionally, you can update the cache with the updated user data
      queryClient.setQueryData(["me"], data.user);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { UpdateData, isLoading };
}

export default useUpdateUser;
