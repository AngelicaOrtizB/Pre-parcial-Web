"use client";
import { useAutoresContext } from "../hooks/AutoresContext";
import Card from "../components/Card";

export default function ListaAutores() {
  const { autores } = useAutoresContext();

  return (
    <div className="py-4">
      <h1 className="text-4xl font-bold text-center mb-8">Lista autores</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {autores.map((autor) => (
          <Card
            key={autor.id}
            id={autor.id}
            name={autor.name}
            birthDate={autor.birthDate}
            description={autor.description}
            image={autor.image}
          />
        ))}
      </div>
    </div>
  );
}
