import { useMutation, useQueryClient } from 'react-query';
import { register as registerApi } from '../../../services/apiAuth'; // Assuming you have a register function in apiAuth service
import { toast } from 'react-hot-toast';

export function useRegister() {
  const queryClient = useQueryClient();

  const { mutate: register, isLoading } = useMutation(registerApi, {
    onSuccess: (res) => {
      console.log(res);
      queryClient.setQueryData(['user'], res);
    },
    onError: (err) => {
      toast.error(err.response.data.message);
      console.error('ERROR', err);
    },
  });

  return { register, isLoading };
}
