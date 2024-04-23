import { useQuery } from "react-query";
import { GetAllQuiz } from "../../services/apiQuiz";

export function useQuiz() {
  const {
    isLoading,
    data: Quiz,
    error,
  } = useQuery({
    queryKey: ["Quiz"],
    queryFn: () => GetAllQuiz(),
    retry: false,
  });
  return { isLoading, error, Quiz };
}
