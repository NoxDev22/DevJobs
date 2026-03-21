import { useState, useEffect } from "react";

export function useRouter() {
  const [pathName, setPathName] = useState(window.location.pathname);

  useEffect(() => {
    const handlePathName = () => {
      setPathName(window.location.pathname);
    };

    window.addEventListener("popstate", handlePathName);

    return () => {
      window.removeEventListener("popstate", handlePathName);
    };
  }, []);

  return {
    pathName,
  };
}
