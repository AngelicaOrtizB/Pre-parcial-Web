"use client";

import { Autor } from "../types/author";
import { useRouter } from "next/navigation";
import { deleteAutor } from "../services/authorService";

interface CardProps extends Autor {
  onDeleted?: () => void;
}

const Card = ({ id, name, birthDate, description, image, onDeleted }: CardProps) => {
  const router = useRouter();

  const handleEliminate = async () => {
    try {
      await deleteAutor(id);
      alert("Autor eliminado correctamente");
      if (onDeleted) onDeleted();
    } catch (err) {
      console.error("Error eliminando autor:", err);
      alert("No se puede eliminar un autor si tiene libros o premios asociados");
    }
  };

  return (
    <div className="border rounded-lg shadow-lg overflow-hidden w-80 h-[500px] flex flex-col">

      <div className="h-80 w-full overflow-hidden">
        <img
          src={image}
          alt={`Imagen para ${name}`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between p-4">
        <div>
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <p className="text-gray-700 text-sm">{birthDate}</p>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => router.push(`/authors/${id}/editar`)}
            className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Editar
          </button>
          <button
            onClick={handleEliminate}
            className="bg-pink-900 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
