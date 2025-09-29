"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import AutorForm from "@/app/components/FormAutor";
import { Autor } from "@/app/types/author";
import { fetchAuthor, editAutor } from "@/app/services/authorService";

export default function EditAutorPage() {
  const { id } = useParams();
  const router = useRouter();
  const [autor, setAutor] = useState<Autor | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAutor = async () => {
      try {
        const autores = await fetchAuthor();
        const found = autores.find((a) => a.id.toString() === id);
        setAutor(found || null);
      } catch (err) {
        console.error("Error cargando autor:", err);
      } finally {
        setLoading(false);
      }
    };
    loadAutor();
  }, [id]);

  const handleUpdate = async (data: Autor) => {
    try {
      await editAutor(Number(id), data);
      alert("Autor actualizado con éxito");
      router.push("/authors");
    } catch (err) {
      console.error("Error al actualizar autor:", err);
      alert("Hubo un error al actualizar el autor");
    }
  };

  if (loading) return <p>Cargando autor...</p>;
  if (!autor) return <p>Autor no encontrado</p>;

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Editar Autor</h1>
      <AutorForm valoresAutor={autor} onSubmit={handleUpdate} />
    </div>
  );
}
