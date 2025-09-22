"use client";
import { useParams } from "next/navigation";
import { useAutoresContext } from "@/app/hooks/AutoresContext";
import AutorForm from "@/app/components/FormAutor";
import { Autor } from "@/app/types/author";

export default function EditAutorPage() {
  const { id } = useParams();
  const { autores, updateAutor } = useAutoresContext();
  const autor = autores.find((a) => (a.id).toString() === id);
  const handleUpdate = (data: Autor) => {
    updateAutor(Number(id), data);
  };

  return (
    <div>
      <h1>Editar Autor</h1>
      <AutorForm onSubmit={handleUpdate} valoresAutor={autor} />
    </div>
  );
}
