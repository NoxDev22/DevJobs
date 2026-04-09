import { useEffect } from "react";

export function useDocumentTitle(title: string) {
  useEffect(() => {
    if (title === "/") {
      document.title = "Home - DevJobs";
    } else if (title === "/discover") {
      document.title = "Discover - DevJobs";
    } else {
      document.title = "NotFound";
    }
  }, [title]);
}
