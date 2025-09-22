import { Autor } from "../types/author";
import { fetcher } from "./http";
export const fetchAuthor=(): Promise<Autor[]> => {
  // We call the GET /services endpoint.
  // The fetcher takes care of the base URL and error handling.
  
  return fetcher<Autor[]>("/authors");
};

export const createAutor = (data: Autor): Promise<Autor> => {
  return fetcher<Autor>("/authors", {
    method: "POST",
    body: JSON.stringify(data), 
  });
};

export const editAutor = (id:number,data: Autor): Promise<Autor> => {
  return fetcher<Autor>(`/authors/${id}`, {
    method: "PUT",
    body: JSON.stringify(data), 
  });
};

