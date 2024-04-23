import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getQuizById } from "../../services/apiQuiz";
export function useQuizId() {
  const { id } = useParams();

  const {
    isLoading,
    data: Quiz,
    error,
  } = useQuery(["OneQuiz", id], () => getQuizById(id), {
    retry: false,
    keepPreviousData:true
  });
  return { isLoading, error, Quiz };
}
