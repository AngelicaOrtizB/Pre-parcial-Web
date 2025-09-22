"use client";

import AutorForm from "@/app/components/FormAutor";
import { Autor } from "@/app/types/author";
import { useAutoresContext } from "@/app/hooks/AutoresContext";
import { useRouter } from "next/navigation";

export default function AutorCreatePage() {
  const { addAutor } = useAutoresContext();

  const handleCreate = (autor: Autor) => {
    addAutor({ ...autor, id: Date.now() });
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Crear Nuevo Autor</h1>
      <AutorForm onSubmit={handleCreate} />
    </div>
  );
}
