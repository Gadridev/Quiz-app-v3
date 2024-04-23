import { useQuery } from "react-query";
import { logout as logoutApi } from "../../../services/apiAuth";

export function useLogout() {
  const {
    isLoading,
    data: Logout,
    error,
  } = useQuery({
    queryKey: ["logout"],
    queryFn:logoutApi,
    retry: false,
  });
  return { isLoading, error, Logout };
}
