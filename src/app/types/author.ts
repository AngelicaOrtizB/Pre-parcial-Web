import { Book } from "./book";

export interface Prize {
  id: number;
  premiationDate: string;
  name: string;
  description: string; 
  organization: Organization;

}

export interface Organization{
  id: number;
  name: string;
  tipo: string;
}
export interface Autor {
  id: number;
  name: string;
  birthDate: string;
  description: string;
  image: string;
  books?: Book[];   
  prizes?: Prize[]; 
}
