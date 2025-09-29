"use client";

import { Book } from "../types/book";
import { useRouter } from "next/navigation";

const CardBook = ({ id, name, description, publishingDate, image }: Book) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/books/${id}`);
  };

  return (
    <div
    className="border rounded-lg shadow-lg overflow-hidden max-w-sm cursor-pointer hover:shadow-xl transition flex flex-col"
  >
    <img
      src={image}
      alt={name}
      className="w-full h-[360px] object-cover"
    />
    <div className="p-4 flex flex-col flex-grow justify-between">
      <div>
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-700 mb-1">{description}</p>
        <p className="text-gray-500 text-sm">
          <strong>Fecha de publicación:</strong> {publishingDate}
        </p>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={handleClick}
          className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition"
        >
          Ver más
        </button>
      </div>
    </div>
  </div>

    );
  };

export default CardBook;
