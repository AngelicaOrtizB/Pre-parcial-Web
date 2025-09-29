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
      onClick={handleClick}
      className="border rounded-lg shadow-lg overflow-hidden max-w-sm cursor-pointer hover:shadow-xl transition"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-90 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-700 mb-1">{description}</p>
        <p className="text-gray-500 text-sm">
          <strong>Fecha de publicación:</strong> {publishingDate}
        </p>
      </div>
    </div>
  );
};

export default CardBook;
