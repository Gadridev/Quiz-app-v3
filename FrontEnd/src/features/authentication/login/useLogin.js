import { useMutation, useQueryClient } from 'react-query';
import { login as loginApi } from '../../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export  function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn:(email,password,dispatch)=>loginApi(email,password,dispatch),
    onSuccess: (res) => {
      console.log(res)
      queryClient.setQueryData(['user'], res);
      navigate('/quiz', { replace: true });
    },
  });

  return { login, isLoading };
}
