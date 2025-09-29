"use client";

import AutorForm from "@/app/components/FormAutor";
import { Autor } from "@/app/types/author";
import { useRouter } from "next/navigation";
import { createAutoryBook } from "@/app/services/authorService";

export default function AutorCreatePage() {
  const router = useRouter();
  
  const handleCreate = async (autor: Autor) => {
    try {
      await createAutoryBook(
        {
          name: autor.name,
          birthDate: autor.birthDate,
          description: autor.description,
          image: autor.image,
        },
        { name: "", isbn: "", image: "", publishingDate: "", description: "" }
      );

      alert("Autor creado con éxito");
      router.push("/authors");
    } catch (err) {
      console.error("Error creando autor:", err);
      alert("Hubo un error al crear el autor");
    }
  };
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center"></h1>
      <AutorForm onSubmit={handleCreate} />
    </div>
  );
}
