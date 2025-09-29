import { fetcher } from "./http";
import { Review } from "../types/book";

export const addReview = (
  bookId: number | string,
  review: Omit<Review, "id" | "book">
): Promise<Review> => {
  return fetcher<Review>(`/books/${bookId}/reviews`, {
    method: "POST",
    body: JSON.stringify(review),
  });
};
