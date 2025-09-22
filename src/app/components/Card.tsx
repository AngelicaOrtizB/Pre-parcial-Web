import Image from "next/image";
import { Autor } from "../types/author";
import { useRouter } from "next/navigation";
import { useAutoresContext } from "../hooks/AutoresContext";

const Card = ({ id, name, birthDate, description, image }: Autor) => {
  const { eliminateAutor } = useAutoresContext();
  const router = useRouter();
  const handleEliminate = () => {
    eliminateAutor(id);
  };
    return (
    <div className="border rounded-lg shadow-lg overflow-hidden max-w-sm">
      {/* 3. We use props to render dynamic content. */}
      <img
        src={image}
        alt={`Imagen para ${name}`}
        width={400}
        height={250}
        className="w-full h-90 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-700">{birthDate}</p>
        <p className="text-gray-700">{description}</p>
        <div className="flex gap-3">
        <button
        onClick={() => router.push(`/authors/${id}/editar`)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
        Editar
        </button>
        <button
        onClick={ handleEliminate}
        className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-700"
        >
        Eliminar
        </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

