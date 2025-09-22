"use client";

import React, { useState, useEffect } from "react";
import { Autor } from "../types/author";

interface AutorFormProps {
  onSubmit: (autor: Autor) => void;  
  valoresAutor?: Autor;            
}

export default function AutorForm({ onSubmit, valoresAutor }: AutorFormProps) {
  const [form, setForm] = useState<Autor>({
    id: Date.now(),
    name: "",
    birthDate: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    if (valoresAutor) {
      setForm(valoresAutor);
    }
  }, [valoresAutor]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const autor: Autor = { ...form, id: form.id || Date.now() };
    onSubmit(autor);

    if (!valoresAutor) {
      setForm({
        id: Date.now(),
        name: "",
        birthDate: "",
        description: "",
        image: "",
      });
    }
     alert(`Guardando autor: ${form.name},con id: ${form.id} exitosamente`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 bg-white rounded-xl shadow"
    >
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label htmlFor="birthDate">Fecha nacimiento</label>
        <input
          id="birthDate"
          name="birthDate"
          type="date"
          value={form.birthDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label htmlFor="description">Descripción</label>
        <input
          id="description"
          name="description"
          type="text"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label htmlFor="image">Imagen</label>
        <input
          id="image"
          name="image"
          type="text"
          value={form.image}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">
        Guardar
      </button>
    </form>
  );
}
