interface typeDataJob {
  modalidad: string;
  technology: string[];
  nivel: string;
}

export interface typeOfCard {
  titulo: string;
  empresa: string;
  ubicacion: string;
  data: typeDataJob;
  descripcion: string;
}

export interface typeOfJob extends typeOfCard {
  id: string;
  content: {
    about: string;
    description: string;
    requirements: string;
    responsibilities: string;
  };
}

export interface typeOfResult {
  total: number;
  limit: number;
  offset: number;
  results: number;
  data: typeOfJob[];
}

export interface typeFilter {
  experience: string;
  location: string;
  technology: string;
}
