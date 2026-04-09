import { useNavigate } from "react-router";
export function useRouter() {
  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate(path);
  };

  return {
    navigateTo,
  };
}
