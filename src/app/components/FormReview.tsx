"use client";

import { useState } from "react";
import { Review } from "@/app/types/book";

interface ReviewFormProps {
  onSubmit: (review: Omit<Review, "id" | "book">) => Promise<void>;
}

export default function ReviewForm({ onSubmit }: ReviewFormProps) {
  const [name, setName] = useState("");
  const [source, setSource] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await onSubmit({
        name,
        source,
        description,
      });
      setName("");
      setSource("");
      setDescription("");
    } catch (err) {
      alert("Error al enviar reseña");
    } finally {
      setSubmitting(false);
      alert("Reseña realizada con éxito");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border rounded p-2"
        required
      />
      <input
        type="text"
        placeholder="Fuente"
        value={source}
        onChange={(e) => setSource(e.target.value)}
        className="w-full border rounded p-2"
      />
      <textarea
        placeholder="Escribe tu reseña"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border rounded p-2"
        required
      />
      <button
        type="submit"
        disabled={submitting}
        className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 disabled:opacity-50"
      >
        {submitting ? "Enviando..." : "Agregar reseña"}
      </button>
    </form>
  );
}
