import { fetcher } from "./http";
import { Book } from "../types/book";
export const fetchBooks = (): Promise<Book[]> => {
  // We call the GET /services endpoint.
  // The fetcher takes care of the base URL and error handling.
  
  return fetcher<Book[]>("/books");
};
export const createBook = (data: Book): Promise<Book> => {
  return fetcher<Book>("/authors", {
    method: "POST",
    body: JSON.stringify(data), 
  });
};