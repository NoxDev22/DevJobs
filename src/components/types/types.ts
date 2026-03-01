export interface cardJobType {
  companyName: string;
  positionName: string;
  contract: string;
  salary: number;
  location: string;
  technologies: string[];
  isRemote: boolean;
  posted: string;
}

export interface typeJob extends cardJobType {
  id: number;
  area: string;
  experienceLevel: string;
  aboutTheRole: string;
  requirements: string[];
  responsibilities: string[];
  aboutTheCompany: string;
}
