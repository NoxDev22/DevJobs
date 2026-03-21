//Fetch de datos
export async function useFetchJobs(params: string) {
  const response = await fetch(
    `https://jscamp-api.vercel.app/api/jobs?${params}`,
  );
  if (!response.ok) throw new Error("Error en la obtención de datos");
  const jobs = await response.json();
  return jobs;
}
