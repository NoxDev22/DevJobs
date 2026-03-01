//Fetch de datos
export async function fetchJobs() {
  const response = await fetch("./data/jobs.json");
  if (!response.ok) throw new Error("Error en la obtención de datos");
  const jobs = await response.json();
  return jobs;
}
