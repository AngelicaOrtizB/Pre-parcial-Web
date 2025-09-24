import { Author } from "next/dist/lib/metadata/types/metadata-types";

export interface Book {
  id: number;
  name: string;
  isbn: string;
  image: string;
  publishingDate: string;
  description: string;
  reviews: string;
  authors: Author;
}