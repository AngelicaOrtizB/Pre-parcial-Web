"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Book } from "@/app/types/book";
import { fetchBookById } from "@/app/services/bookService";
import { addReview } from "@/app/services/reviewService";
import CardBook from "@/app/components/CardBook";
import ReviewForm from  "../../components/FormReview";
export default function BookPage() {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null) ;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    fetchBookById(id as string)
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch(() => {
        setError("No se pudo cargar el libro");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-8">Cargando libro...</p>;
  if (error) return <p className="text-center mt-8 text-red-600">{error}</p>;
  if (!book) return null;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="max-w-5xl mx-auto p-6 flex justify-center">
        <CardBook key={book.id} {...book} />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Reseñas</h2>
        {book.reviews.length > 0 ? (
          <div className="space-y-4">
            {book.reviews.map((review) => (
              <div key={review.id} className="border rounded-lg p-4 shadow bg-white">
                <h3 className="font-bold">{review.name || "Anónimo"}</h3>
                <p className="text-gray-500">{review.source}</p>
                <p className="text-black-700">{review.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No hay reseñas.</p>
        )}
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Agregar reseña</h2>
        <ReviewForm onSubmit={async (newReview) => {
          try {
            const review= await addReview(id as string, newReview);
            setBook((prev) => prev ? { ...prev, reviews: [...prev.reviews, review] } : prev);
          } catch (err) {
            alert("Error al agregar reseña");
          }
        }} />
      </div>
    </div>
  );
}
