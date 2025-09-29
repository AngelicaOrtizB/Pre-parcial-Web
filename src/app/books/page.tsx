"use client";

import React, { useEffect, useState } from "react";
import { fetchBooks } from "../services/bookService";
import { Book } from "../types/book";
import CardBook from "../components/CardBook";

export default function ListaBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBooks()
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error al cargar los libros");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-8">Cargando libros...</p>;
  if (error) return <p className="text-center mt-8 text-red-600">{error}</p>;

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <CardBook key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};
