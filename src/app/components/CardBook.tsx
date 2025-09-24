"use client";
import { Book } from "../types/book";

const CardBook = ({ id, name, description, publishingDate, image }: Book) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden max-w-sm">
      <img
        src={image}
        alt={` ${name}`}
        className="w-full h-80 object-cover"
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
