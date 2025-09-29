"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Autor } from "../types/author";
import { createAutoryBook, editAutor } from "../services/authorService";

interface AutorFormProps {
  valoresAutor?: Autor; 
  onSubmit?: (data: Autor) => Promise<void>; 
}

export default function AutorForm({ valoresAutor, onSubmit }: AutorFormProps) {
  const router = useRouter();

  const [autor, setAutor] = useState({
    name: valoresAutor?.name || "",
    birthDate: valoresAutor?.birthDate || "",
    description: valoresAutor?.description || "",
    image: valoresAutor?.image || "",
  });

  const [book, setBook] = useState({
    bookName: "",
    isbn: "",
    bookImage: "",
    publishingDate: "",
    bookDescription: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    if (["name", "birthDate", "description", "image"].includes(name)) {
      setAutor((prev) => ({ ...prev, [name]: value }));
    }

    if (
      ["bookName", "isbn", "bookImage", "publishingDate", "bookDescription"].includes(name)
    ) {
      setBook((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (valoresAutor) {

        if (onSubmit) {
          await onSubmit({ id: valoresAutor.id, ...autor });
        } else {
          await editAutor(valoresAutor.id, { id: valoresAutor.id, ...autor });
          alert("Autor actualizado con éxito");
        }
      } else {

        await createAutoryBook(autor, {
          name: book.bookName,
          isbn: book.isbn,
          image: book.bookImage,
          publishingDate: book.publishingDate,
          description: book.bookDescription,
        });

        alert("Autor y libro creados con éxito");


        setAutor({
          name: "",
          birthDate: "",
          description: "",
          image: "",
        });
        setBook({
          bookName: "",
          isbn: "",
          bookImage: "",
          publishingDate: "",
          bookDescription: "",
        });
      }

      router.push("/authors");
    } catch (err) {
      console.error(err);
      alert("Hubo un error al guardar los datos");
    }
  };



  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-gradient-to-br from-pink-500 to-pink-700 shadow-lg rounded-lg space-y-4"
    >
      <h2 className="text-2xl font-bold text-white">
        {valoresAutor ? "Editar Autor" : "Crear Autor"}
      </h2>

      <div>
        <label className="block mb-1 text-white">Nombre</label>
        <input
          type="text"
          name="name"
          value={autor.name}
          onChange={handleChange}
          required
          className="w-full border border-purple-800 px-3 py-2 rounded bg-white text-gray-900"
        />
      </div>

      <div>
        <label className="block mb-1 text-white">Fecha de nacimiento</label>
        <input
          type="date"
          name="birthDate"
          value={autor.birthDate}
          onChange={handleChange}
          required
          className="w-full border border-purple-800 px-3 py-2 rounded bg-white text-gray-900"
        />
      </div>

      <div>
        <label className="block mb-1 text-white">Descripción</label>
        <input
          name="description"
          value={autor.description}
          onChange={handleChange}
          required
          className="w-full border border-purple-800 px-3 py-2 rounded bg-white text-gray-900"
        />
      </div>

      <div>
        <label className="block mb-1 text-white">URL de la imagen</label>
        <input
          type="url"
          name="image"
          value={autor.image}
          onChange={handleChange}
          required
          className="w-full border border-purple-800 px-3 py-2 rounded bg-white text-gray-900"
        />
      </div>

      {!valoresAutor && (
        <>
          <h3 className="text-xl font-bold text-white mt-4">Añadir Libro</h3>

          <input
            type="text"
            name="bookName"
            placeholder="Título"
            value={book.bookName}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-white text-gray-900"
          />
          <input
            type="text"
            name="isbn"
            placeholder="ISBN"
            value={book.isbn}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-white text-gray-900"
          />
          <input
            type="url"
            name="bookImage"
            placeholder="Imagen del libro"
            value={book.bookImage}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-white text-gray-900"
          />
          <input
            type="date"
            name="publishingDate"
            value={book.publishingDate}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-white text-gray-900"
          />
          <input
            name="bookDescription"
            placeholder="Descripción del libro"
            value={book.bookDescription}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-white text-gray-900"
          />
        </>
      )}
      <button
        type="submit"
        className="bg-pink-900 text-white px-4 py-2 rounded hover:bg-purple-800 transition"
      >
        {valoresAutor ? "Actualizar Autor" : "Crear Autor"}
      </button>
    </form>
  );
}