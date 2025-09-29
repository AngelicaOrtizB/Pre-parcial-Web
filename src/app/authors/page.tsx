"use client";

import { useState, useEffect } from "react";
import Card from "../components/Card";
import { Autor } from "../types/author";
import { fetchAuthor } from "../services/authorService";

export default function ListaAutores() {
  const [autores, setAutores] = useState<Autor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAutores = async () => {
      try {
        const data = await fetchAuthor();
        setAutores(data);
      } catch (err) {
        console.error("Error al cargar autores:", err);
      } finally {
        setLoading(false);
      }
    };
    loadAutores();
  }, []);

  if (loading) return <p className="text-center mt-8">Cargando autores...</p>;
  if (autores.length === 0) return <p className="text-center mt-8">No hay autores</p>;

  return (
      <div className="py-8 px-6 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {autores.map((autor) => (
            <Card
              key={autor.id}
              id={autor.id}
              name={autor.name}
              birthDate={autor.birthDate}
              description={autor.description}
              image={autor.image}
              onDeleted={() => setAutores((prev) => prev.filter((a) => a.id !== autor.id))}
            />
          ))}
        </div>
      </div>
    );
  }
