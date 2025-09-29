import { Autor } from "../types/author";
import { fetcher } from "./http"; 

export const fetchAuthor = (): Promise<Autor[]> => {
  return fetcher<Autor[]>("/authors");
};

export const editAutor = (id: number, data: Autor): Promise<Autor> => {
  return fetcher<Autor>(`/authors/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
};

export const deleteAutor = (id: number): Promise<void> => {
  return fetcher(`/authors/${id}`, { method: "DELETE" });
};

const editorial = { id: 1000, name: "BLOOMSBURY" };

export async function createAutoryBook(
  authorData: { name: string; birthDate: string; description: string; image: string },
  bookData: { name: string; isbn: string; image: string; publishingDate: string; description: string }
) {
  console.log("Autor:", authorData);
  console.log("Libro:", bookData);


  const AutorCreado = await fetcher<{ id: number; name: string }>("/authors", {
    method: "POST",
    body: JSON.stringify(authorData),
  });
  console.log("Autor creado:", AutorCreado);

  let BookCreado = null;

  if (bookData.name.trim() !== "") {
    BookCreado = await fetcher<{ id: number }>("/books", {
      method: "POST",
      body: JSON.stringify({ ...bookData, editorial: editorial }),
    });
    console.log("Libro creado:", BookCreado);

    await fetcher(`/authors/${AutorCreado.id}/books/${BookCreado.id}`, { method: "POST" });
    console.log("Libro asociado al autor");
  }

  return { AutorCreado, BookCreado };
}
